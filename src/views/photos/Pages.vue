<template>
  <div class="nav-pages">
    <ul class="flex flex-row">
      <li :class="!page.previous ? 'page disabled' : 'page'">
        <button
          class="page-btn previous"
          value="previous"
          @click="
            () => {
              handleArrows('previous');
              $emit('changePage', page.current);
            }
          "
        >
          &laquo;
        </button>
      </li>
      <li
        v-for="i in num"
        :class="page.current === i ? 'page active' : 'page'"
        :key="i"
      >
        <button
          class="page-btn"
          @click="
            () => {
              handleButton(i);
              $emit('changePage', i);
            }
          "
        >
          {{ i }}
        </button>
      </li>
      <li :class="!page.next || num <= 1 ? 'page disabled' : 'page'">
        <button
          class="page-btn next"
          value="next"
          @click="
            () => {
              handleArrows('next');
              $emit('changePage', page.current);
            }
          "
        >
          &raquo;
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import handlePage from "@/composables/handlePage";
import { onMounted } from "vue";
export default {
  name: "Pages",
  props: {
    num: Number,
  },
  setup(props) {
    const { page, pagination } = handlePage();
    const handleArrows = (val) => {
      if (val === "previous") {
        pagination({ num: props.num, type: "PREVIOUS" });
      }
      if (val === "next") {
        pagination({ num: props.num, type: "NEXT" });
      }
    };
    const handleButton = (i) => {
      page.value.current = i;
      pagination({ num: props.num, type: "CURRENT" });
    };
    onMounted(() => {
      pagination({ num: props.num, type: "DEFAULT" });
    });
    return { page, handleArrows, handleButton };
  },
};
</script>

<style>
.nav-pages {
  width: fit-content;
  margin: 0 auto;
}
.nav-pages .page {
  margin: 0 2px;
}
.nav-pages .page-btn {
  cursor: pointer;
  color: var(--green);
  background: var(--secondary);
}
.nav-pages .page.active .page-btn {
  color: var(--secondary);
  background: var(--green);
}
.nav-pages .page:hover .page-btn {
  color: var(--secondary);
  background: var(--primaryLighter);
}
.nav-pages .page.disabled .page-btn {
  cursor: not-allowed;
  color: var(--secondary);
  background: var(--lessLighter);
}
</style>
