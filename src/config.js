module.exports = {
	database: {
		getConnectionString: function(env) {
			switch (env) {
				case "dev":
					return this.dev.host + this.dev.name;
				case "production":
					return this.production.host + this.production.name;
			}
		},
		dev: {
			host: "mongodb://localhost/",
			name: "roomsquickly"
		},
		production: {
			host: "",
			name: ""
		}
	},
	secret:"thisissecretkeyandilovenook"
}