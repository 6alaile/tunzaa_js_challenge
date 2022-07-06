const Movies = {
    template: `
        <div>
            <Header/>
                <p>7x3 grid of movie titles sourced from JSON file</p>
            <Footer/>
        </div>`,
    data() {
        return {
            "title": "",
            "description": "",
            "programType": "movie",
            "images": {
              "Poster Art": {
                "url": "",
                "width": "",
                "height": ""
              }
            },
            "releaseYear": 2010 /*>=2010*/
        };
    }
    mounted() {
        this.fetchMovies();
    },
    methods: {
        async fetchMovies() {
            console.log("Fetching movies..");
            // keywords passed as query - as-is.
            // verify whether server requires any specific format
            const res = await axios.get(
              `${this.urls.postget}?query=${this.keywords}&page=${
                this.currentPage + 1
              }`,
              {
                crossdomain: true,
              }
            );
    
            const postData = res.data;
            console.log(`GET movies done!`, postData);
    
            this.posts = postData["posts"] ? postData["posts"] : [];
            this.currentPage = postData["currentpage"]
              ? postData["currentpage"]
              : 0;
            this.totalPages = postData["totalpages"] ? postData["totalpages"] : 0;
    
            // pagination logic yet to be implemented to navigate to subsequent pages
            console.log(".. movies fetched!");
          }
        },
      },
    
      validateAndSubmit() {
        //  there are no validations at this time.
    
        this.validationErrors = [];
    
        this.fetchPosts();
      },
    };  
        }
    }
};