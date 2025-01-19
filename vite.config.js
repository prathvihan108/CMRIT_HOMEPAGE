// vite.config.js
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default {
	server: {
		host: true, // Allows access via your local IP address
		port: 3000, // Default port (change if needed)
		hmr: true,
	},
	plugins: [
		handlebars({
			partialDirectory: resolve(__dirname, "src/partials"),
			// templateFileExtension: "html",
		}),
	],
};
