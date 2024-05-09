<script setup>
	const props = defineProps({
		title: String,
		body: String,
	});
</script>

<template>
	<div class="container p-10 mx-auto h-[400px] flex items-center flex-col justify-center bg-slate-50">
		<h1 class="text-3xl font-bold text-center">{{ title }}</h1>
		<p
			class="p-10 leading-relaxed text-center text-balance max-w-7xl"
			v-html="body"></p>
	</div>
</template>
