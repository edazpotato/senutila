export default {
	github: "https://github.com/edazpotato/senutila", // GitHub link in the navbar
	docsRepositoryBase:
		"https://github.com/edazpotato/senutila/blob/main/docs/", // base URL for the docs repository
	titleSuffix: " – Senutila",
	nextLinks: true,
	prevLinks: true,
	search: true,
	customSearch: null,
	darkMode: true,
	footer: true,
	footerText: `Copyright Edazpotato ${new Date().getFullYear()}.`,
	footerEditLink: `Edit this page on GitHub`,
	logo: (
		<>
			<h1>Senutila</h1>
		</>
	),
	head: (
		<>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta
				name="description"
				content="Senutila: A Discord bot framework that's better than discord.js."
			/>
			<meta
				name="og:title"
				content="Senutila: A Discord bot framework that's better than discord.js."
			/>
		</>
	),
};
