const Series = {
    template:
        <div>        
            <Header/>
                <p>7x3 grid of series titles sourced from JSON file</p>
            <Footer/>
        </div>,
    data() {
        return {
            "title": "",
            "description": "",
            "programType": "series",
            "images": {
              "Poster Art": {
                "url": "",
                "width": "",
                "height": ""
              }
            },
            "releaseYear": 2010 /*>=2010*/
          };
    },
};