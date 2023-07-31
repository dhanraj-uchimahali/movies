# Movies API

This is a RESTful API for movies, built using Node.js, Express, and MongoDB. The API allows users to create, read, update, and delete movies.

## Installation

1. Clone the repository:

   HTTPS:
   git clone https://github.com/Aizonati/movies.git
   
   SSH:  
   git clone git@github.com:Aizonati/movies.git

2. Install dependencies: 
   
   npm install


3. Create a `.env` file in the root directory with the following variables and add your own mongodb url:

   MONGO_URL = your mongodb url
   
4. Start the server:

   npm start

## Usage

The API has the following endpoints:

### GET /v1/movies

Returns a list of all movies.
*Example response:*


HTTP/1.1 200 OK

Content-Type: application/json

```
{
    "success": true,
    "message": "movies fetched successfully",
    "result": [
        {
            "_id": "64c76c0054c89dc5900b5a7f",
            "movie_id": 1,
            "tmdb_id": 17139,
            "imdb_id": "tt0119448",
            "title": "Character",
            "adult": false,
            "genres": [
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 10769,
                    "name": "Foreign"
                },
                {
                    "id": 36,
                    "name": "History"
                }
            ],
            "production_companies": [
                {
                    "name": "First Floor Features",
                    "id": 938
                },
                {
                    "name": "Almerica Films",
                    "id": 3259
                }
            ],
            "production_countries": [
                {
                    "iso_3166_1": "NL",
                    "name": "Netherlands"
                },
                {
                    "iso_3166_1": "BE",
                    "name": "Belgium"
                }
            ],
            "release_date": "1997-04-17",
            "rating": 7.7,
            "is_active": true,
            "is_deleted": false
        },
```
### POST /v1/movies

Creates a new movie.

*Example request:*

HTTP/1.1

Content-Type: application/json

```
 {
            "movie_id": 1,
            "tmdb_id": 17139,
            "imdb_id": "tt0119448",
            "title": "Character",
            "adult": false,
            "genres": [
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 10769,
                    "name": "Foreign"
                },
                {
                    "id": 36,
                    "name": "History"
                }
            ],
            "production_companies": [
                {
                    "name": "First Floor Features",
                    "id": 938
                },
                {
                    "name": "Almerica Films",
                    "id": 3259
                }
            ],
            "production_countries": [
                {
                    "iso_3166_1": "NL",
                    "name": "Netherlands"
                },
                {
                    "iso_3166_1": "BE",
                    "name": "Belgium"
                }
            ],
            "release_date": "1997-04-17",
            "rating": 7.7,
            "is_active": true,
            "is_deleted": false
        }
```
*Example response:*


HTTP/1.1 200 Created

Content-Type: application/json

```
 {
            "_id": "64c76c0054c89dc5900b5a7f",
            "movie_id": 1,
            "tmdb_id": 17139,
            "imdb_id": "tt0119448",
            "title": "Character",
            "adult": false,
            "genres": [
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 10769,
                    "name": "Foreign"
                },
                {
                    "id": 36,
                    "name": "History"
                }
            ],
            "production_companies": [
                {
                    "name": "First Floor Features",
                    "id": 938
                },
                {
                    "name": "Almerica Films",
                    "id": 3259
                }
            ],
            "production_countries": [
                {
                    "iso_3166_1": "NL",
                    "name": "Netherlands"
                },
                {
                    "iso_3166_1": "BE",
                    "name": "Belgium"
                }
            ],
            "release_date": "1997-04-17",
            "rating": 7.7,
            "is_active": true,
            "is_deleted": false
        }
```


### GET /v1/movies/:movieId

Returns a specific movie by ID.

*Example response:*


HTTP/1.1 200 OK

Content-Type: application/json
```
{
    "success": true,
    "message": "movies fetched successfully",
    "result": [
        {
            "_id": "64c76c0054c89dc5900b5a7f",
            "movie_id": 1,
            "tmdb_id": 17139,
            "imdb_id": "tt0119448",
            "title": "Character",
            "adult": false,
            "genres": [
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 10769,
                    "name": "Foreign"
                },
                {
                    "id": 36,
                    "name": "History"
                }
            ],
            "production_companies": [
                {
                    "name": "First Floor Features",
                    "id": 938
                },
                {
                    "name": "Almerica Films",
                    "id": 3259
                }
            ],
            "production_countries": [
                {
                    "iso_3166_1": "NL",
                    "name": "Netherlands"
                },
                {
                    "iso_3166_1": "BE",
                    "name": "Belgium"
                }
            ],
            "release_date": "1997-04-17",
            "rating": 7.7,
            "is_active": true,
            "is_deleted": false
        },
```
