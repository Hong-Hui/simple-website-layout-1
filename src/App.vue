<script setup>
	import NavigationLinks from './components/NavigationLinks.vue';
	import DescriptionCard from './components/DescriptionCard.vue';

	const descriptions = [
		{
			id: 1,
			title: 'House 1',
			body: 'A bright modern architect-designed <b>stone house</b> with a swimming pool, wood plus stone, metal, white wood trim, a Scandinavian garden, and contemporary and sleek, clean lines, the house is an architectural masterpiece, captured during a sunny day, 150-megapixel photo, taken with a 24-70mm lens on a full-frame camera, with a shallow depth of field.',
		},
		{
			id: 2,
			title: 'House 2',
			body: 'A bright modern architect-designed <b>stone house</b> with a swimming pool, wood plus stone, metal, white wood trim, a Scandinavian garden, and contemporary and sleek, clean lines, the house is an architectural masterpiece, captured during a sunny day, 150-megapixel photo, taken with a 24-70mm lens on a full-frame camera, with a shallow depth of field.',
		},
		{
			id: 3,
			title: 'House 3',
			body: 'A bright modern architect-designed <b>stone house</b> with a swimming pool, wood plus stone, metal, white wood trim, a Scandinavian garden, and contemporary and sleek, clean lines, the house is an architectural masterpiece, captured during a sunny day, 150-megapixel photo, taken with a 24-70mm lens on a full-frame camera, with a shallow depth of field.',
		},
	];
</script>

<template>
	<div class="font-display text-slate-900">
		<!-- /* ------------------------------- Navigation ------------------------------- */ -->

		<nav>
			<div class="container flex flex-row justify-between px-12 py-6 mx-auto">
				<div class="text-xl font-extrabold">Logo</div>
				<NavigationLinks />
			</div>
		</nav>

		<!-- /* ------------------------------- Hero ------------------------------ */ -->

		<div class="h-[700px]">
			<div class="container flex items-end mx-auto size-full bg-slate-100">
				<div class="flex w-full py-10 h-fit">
					<button class="px-10 py-4 mx-auto text-xl tracking-wider uppercase bg-gray-800 h-fit w-fit text-gray-50">click here!</button>
				</div>
			</div>
		</div>

		<!-- /* ----------------------------- Headline ---------------------------- */ -->

		<div class="container mx-auto flex flex-col items-center h-[500px] justify-center">
			<h2 class="text-4xl font-bold tracking-wide">Discover Your Perfect Home</h2>
			<h3 class="mt-8 text-xl italic">Explore a curated selection of properties tailored to your lifestyle and preferences.</h3>
			<p class="mt-16 leading-relaxed text-center max-w-7xl text-balance">
				"Whether you're buying your first home or looking for a luxurious retreat, our extensive database of properties ensures you find exactly what
				you need. With detailed descriptions, high-resolution photos, and virtual tours, your next home is just a click away. Benefit from our expert
				advice, competitive market prices, and exclusive deals tailored just for you. Start your journey to a dream home with us today!"
			</p>
		</div>

		<!-- /* ----------------------------- Parallax ---------------------------- */ -->

		<div>
			<div class="mx-auto container h-[700px] flex bg-house-1 bg-fixed bg-no-repeat bg-cover bg-center p-10">
				<h1 class="p-10 text-3xl font-bold text-center bg-white/30 backdrop-blur-sm size-fit">House 1</h1>
			</div>

			<DescriptionCard
				:title="descriptions[0].title"
				:body="descriptions[0].body" />

			<div class="mx-auto container h-[700px] flex bg-house-2 bg-fixed bg-no-repeat bg-cover bg-center p-10">
				<h1 class="p-10 text-3xl font-bold text-center bg-white/30 backdrop-blur-sm size-fit">House 2</h1>
			</div>

			<DescriptionCard
				:title="descriptions[1].title"
				:body="descriptions[1].body" />

			<div class="mx-auto container h-[700px] flex bg-house-3 bg-fixed bg-no-repeat bg-cover bg-center p-10">
				<h1 class="p-10 text-3xl font-bold text-center bg-white/30 backdrop-blur-sm size-fit">House 3</h1>
			</div>

			<DescriptionCard
				:title="descriptions[2].title"
				:body="descriptions[2].body" />
		</div>

		<!-- /* -------------------------------- Thumbnail ------------------------------- */ -->

		<div class="container mx-auto h-[400px] w-full flex">
			<ul class="grid w-full grid-cols-3 place-items-center">
				<li>
					<div class="bg-center bg-no-repeat bg-cover bg-house-1 size-64"></div>
				</li>
				<li>
					<div class="bg-center bg-no-repeat bg-cover bg-house-2 size-64"></div>
				</li>
				<li>
					<div class="bg-center bg-no-repeat bg-cover bg-house-3 size-64"></div>
				</li>
			</ul>
		</div>

		<!-- /* -------------------------------- Carousel -------------------------------- */ -->

		<div class="h-[500px] p-10 bg-slate-50">
			<div class="container mx-auto"></div>
		</div>

		<!-- /* ------------------------------ Footer ----------------------------- */ -->

		<div class="p-10 bg-slate-50">
			<div class="container flex flex-col items-center max-w-3xl mx-auto">
				<NavigationLinks />
				<p class="mt-10 text-center">copyright</p>
			</div>
		</div>
	</div>
</template>
