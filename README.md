# CityQuest 
is a Pokémon GO-inspired web app designed to help you uncover the hidden gems of Antwerp. Instead of chasing creatures, you're chasing culture—earning XP by discovering new and niche locations around the city. The twist? The more underground the spot, the more XP you rack up! Well-known tourist locations give you just a bit, but stumble upon that secret café or forgotten art alley, and you’ll level up fast.

It all starts with a fun, personalized questionnaire to get to know your vibe. Based on your answers, our AI crafts recommendations tailored just for you. Ready for adventure? You can start a quest by submitting a custom prompt for a personalized route—or test your fate in a Tic-Tac-Toe battle against the bot! Win, and you get to pick your path. Lose, and the gods of randomness will choose your SideQuest for the day.

For the bold and the curious, there's also a Leaderboard where you can climb the ranks and prove you're the ultimate explorer of Antwerp’s hidden side. Will you claim the title of Nichest of Them All?


# Why CityQuest? Your Adventure, Their Opportunity.

CityQuest isn’t just a game—it’s a movement. A movement to reclaim local culture, empower small businesses, and make exploration fun again.
## Discover Antwerp Differently

Forget the top-10 lists and overcrowded squares. CityQuest rewards you for finding what others miss—the indie bookstore tucked behind the cathedral, the family-run café with the best baklava in town, the street art no one Instagrams but everyone remembers.
## Empower Local Businesses

Each quest nudges players toward lesser-known spots, boosting foot traffic and putting small entrepreneurs on the map—literally. Local shops can be featured as quest destinations, gaining exposure and new customers organically, without paying for ads.
## A Dream Tool for Tour Guides

Whether you're a local guide or hosting a walking tour, CityQuest becomes your dynamic co-guide. Personalize routes, gamify the tour experience, and let your clients earn XP as they explore. The result? Engaged tourists, memorable visits, and great reviews.
## Built for the Curious

Whether you're a student, a tourist, or a lifelong local—CityQuest transforms the city into an interactive playground where every back alley might hold your next big XP boost.
## Available Scripts

- **`npm start`**  
  Runs the app in development mode with hot reload.

- **`npm test`**  
  Opens the interactive test runner powered by Testing Library and Jest.

- **`npm run build`**  
  Builds the app for production (outputs to `/build`).

- **`npm run eject`**  
  (Advanced) Ejects the configuration for full customization. Not reversible.

---
# Monsterini Backend

A Spring Boot backend application for the Monsterini game, a location-based gamified experience that generates personalized side quests for users based on their preferences and nearby points of interest.

## Features

- **User Management**: Registration, login, and profile management
- **Leaderboard System**: Track user XP and display top performers
- **Location-based Gameplay**: Integration with geographical points of interest
- **AI-Generated Side Quests**: Personalized quests using Google's Gemini AI
- **Questionnaire System**: Collect user preferences to enhance quest generation
- **RESTful API**: Comprehensive API for frontend integration


## Prerequisites
- Java 21 or higher
- Docker and Docker Compose
- Google Gemini API key

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/monsterini-backendini.git
cd monsterini-backendini
```

### 2. Configure environment variables

Create a `.env` file in the project root with the following content:

```
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Start the PostgreSQL database

```bash
docker-compose up -d
```

### 4. Build and run the application

```bash
./gradlew bootRun
```

The application will be available at `http://localhost:8080`

## API Documentation

Once the application is running, you can access the Swagger UI documentation at:

```
http://localhost:8080/swagger-ui.html
```

### Key Endpoints

- **User Management**
  - `POST /api/users/register` - Register a new user
  - `POST /api/users/login` - User login
  - `GET /api/users/{id}` - Get user details
  - `PUT /api/users/{id}` - Update user details

- **Leaderboard**
  - `GET /api/users/leaderboard` - Get top users by XP

- **Geopoints**
  - `GET /api/places/search` - Search for places by tags

- **Side Quests**
  - `GET /api/users/sidequest/{userId}` - Generate a side quest for a user

- **Gemini AI**
  - `GET /api/gemini/test` - Test the Gemini AI integration

## Data Import

The application can import geopoint data from Parquet files. To enable this feature, uncomment the code in `ParquetReaderRunner.java` and ensure the Parquet file is available in the `src/main/resources/data/` directory.

## Development

### Building the project

```bash
./gradlew build
```

### Running tests

```bash
./gradlew test
```
## Technologies Used

- **Java 21**
- **Spring Boot 3.4.5**
- **Spring Data JPA**
- **PostgreSQL**
- **Docker & Docker Compose**
- **Google Gemini AI**
- **Apache Parquet**
- **Swagger/OpenAPI**
## Docker Support

The application includes Docker Compose configuration for the PostgreSQL database. To run the entire application in Docker, you can create a Dockerfile and add it to the compose configuration.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
