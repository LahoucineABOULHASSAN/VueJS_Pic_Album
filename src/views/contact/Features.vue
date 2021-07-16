<template>
  <h2>how to find me</h2>
  <div class="features grid grid-4">
    <div>
      <i class="envelope big icon"></i>
      <div class="flex flex-column">
        <p>em.aboulhassan@gmail.com</p>
        <p>ed.aboulhassan@gmail.com</p>
      </div>
    </div>
    <div>
      <i class="chat big icon"></i>
      <div class="flex flex-column">
        <p>
          <a
            href="https://t.me/my_tg_id"
            target="_blank"
            rel="noopener noreferrer"
            >telegram</a
          >
        </p>
        <p>
          <a
            href="https://www.instagram.com/my_in_id/"
            target="_blank"
            rel="noopener noreferrer"
            >instagram</a
          >
        </p>
      </div>
    </div>
    <div>
      <i class="globe big icon"></i>
      <div class="flex flex-column">
        <p>
          <a
            href="https://aboulhassan.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            >portfolio</a
          >
        </p>
        <p>
          <a
            href="https://github.com/LahoucineABOULHASSAN"
            target="_blank"
            rel="noopener noreferrer"
            >github</a
          >
        </p>
      </div>
    </div>
    <div>
      <div class="flex flex-column">
        <i class="phone big icon"></i>
        <p>+212708018736</p>
        <p>+212700191477</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
h2 {
  text-align: center;
  text-transform: capitalize;
}
.features {
  margin: 2rem;
}
.features > div {
  padding: 1rem;
  text-align: center;
  border-radius: 15px;
  background: var(--lessLighter);
}
.features > div:hover {
  box-shadow: 0 5px 10px rgb(0 0 0 / 15%);
}
.features div i.icon {
  margin: 0;
  color: var(--green);
  margin-bottom: 1.5rem;
}
.features div > * {
  margin-bottom: 0.3rem;
}
.features div p,
.features div p a {
  font-size: 0.9rem;
  color: var(--grey);
  text-transform: capitalize;
}
.features div p a:hover {
  color: var(--secondary);
  text-decoration: underline;
}
@media screen and (max-width: 728px) {
  .features {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 520px) {
  .features {
    grid-template-columns: 1fr;
  }
}
</style>
