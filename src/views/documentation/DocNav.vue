<template>
  <ul class="flex flex-row doc-nav">
    <li><i class="map signs icon"></i>Get Started</li>
    <li><i class="cloud download down icon"></i>Installation</li>
    <li><i class="box icon"></i>API</li>
    <li><i class="archive icon"></i>Resource</li>
  </ul>
</template>
<style>
.doc-nav {
  width: 80%;
  margin: 2rem auto;
  justify-content: center;
}
.doc-nav li {
  padding: 1rem;
  margin: 0 1rem;
  border-radius: 3px;
  border-top: 2px solid;
}
.doc-nav li:hover {
  cursor: pointer;
  background: var(--primaryLighter);
}
.doc-nav li i.icon {
  margin-right: 1rem;
}
.doc-nav li:nth-of-type(2n + 1) {
  border-color: var(--red);
}
.doc-nav li:nth-of-type(2n + 2) {
  border-color: var(--green);
}
.doc-nav li:nth-of-type(2n + 3) {
  border-color: var(--yellow);
}
.doc-nav li:nth-of-type(2n + 4) {
  border-color: var(--primaryLight);
}
.doc-nav li:nth-of-type(2n + 1):hover {
  background: #f740682c;
}
.doc-nav li:nth-of-type(2n + 2):hover {
  background: #06bb572c;
}
.doc-nav li:nth-of-type(2n + 3):hover {
  background: #ffca1b2c;
}
.doc-nav li:nth-of-type(2n + 4):hover {
  background: #1ae5ec2c;
}
.doc-nav li:nth-of-type(2n + 1) i.icon {
  color: var(--red);
}
.doc-nav li:nth-of-type(2n + 2) i.icon {
  color: var(--green);
}
.doc-nav li:nth-of-type(2n + 3) i.icon {
  color: var(--yellow);
}

.doc-nav li:nth-of-type(2n + 4) i.icon {
  color: var(--primaryLight);
}
</style>
