// Importieren der Express.js-Bibliothek
import express from "express"

// Importieren der CORS-Bibliothek (Cross-Origin Resource Sharing)
import cors from "cors"

// Importieren der Routen-Logik aus der Datei "reviews.route.js"
import reviews from "./api/reviews.route.js"

// Erstellen einer Express-App-Instanz
const app = express()

// Middleware: CORS aktivieren, um Cross-Origin-Anfragen zu ermöglichen -> Kommunikation zu verschienden Domains
app.use(cors())

// Middleware: JSON-Anfragen verarbeiten, um JSON-Daten zu parsen (also i JSON-Daten im Request-Objekt verwenden)
app.use(express.json())

// Definieren von Routen für den Pfad "/api/v1/reviews" 
//und Verwendung der importierten Routen-Logik ->Die importierten Routen aus "reviews.route.js" werden unter dem Pfad "/api/v1/reviews" registriert.
app.use("/api/v1/reviews", reviews)

// Fallback-Handler: Wenn keine passende Route gefunden wird, sende einen 404-Fehler mit einer Fehlermeldung als JSON-Antwort
app.use("*",(req,res)=>res.status(404).json({error:"not found"}))

// Exportiere die Express-App als Standardexport, um sie in anderen Teilen der Anwendung zu verwenden
export default app
