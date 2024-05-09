<script setup>
const links = [
  { id: 1, html: "home", href: "#" },
  { id: 2, html: "about", href: "#" },
  { id: 3, html: "services", href: "#" },
  { id: 4, html: "blog", href: "#" },
  { id: 5, html: "contact", href: "#" },
];
</script>

<template>
  <ul class="flex flex-row gap-6">
    <li v-for="link in links" :key="link.id">
      <a :href="link.html" class="uppercase hover:underline">{{ link.html }}</a>
    </li>
  </ul>
</template>
