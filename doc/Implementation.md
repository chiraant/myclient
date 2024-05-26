# Klassendiagramm

![Class diagram](figures/MyClientClassDiagramm.drawio.svg)

# Klassendiagramm Erläuterung

## AssetController
- **Verwendungszweck**: Diese Klasse ist ein REST-Controller, der CRUD-Operationen und Statusänderungen für Assets verwaltet. Sie enthält Endpunkte zum Erstellen, Abrufen, Zuweisen, Reparieren und Entsorgen von Assets.

## DocController
- **Verwendungszweck**: Diese Klasse ist ein REST-Controller, der CRUD-Operationen und Typänderungen für Dokumente verwaltet. Sie enthält Endpunkte zum Erstellen und Abrufen von Dokumenten sowie zum Ändern des Dokumenttyps.

## MailController
- **Verwendungszweck**: Diese Klasse ist ein REST-Controller, der das Versenden von E-Mails verwaltet. Sie enthält Endpunkte zum Versenden von E-Mails an Benutzer.

## PersonController
- **Verwendungszweck**: Diese Klasse ist ein REST-Controller, der CRUD-Operationen für Personen verwaltet. Sie enthält Endpunkte zum Erstellen und Abrufen von Personendaten.

## ServiceController
- **Verwendungszweck**: Diese Klasse ist ein REST-Controller, der spezielle Service-Operationen für Assets verwaltet. Sie enthält Endpunkte zum Zuweisen und Ändern des Zustands von Assets.

## Asset
- **Verwendungszweck**: Diese Klasse repräsentiert das Modell eines Assets. Sie enthält Attribute wie `id`, `assetName`, `purchaseDate`, `guaranteeEnd`, `assetState`, `personId` und `personEmail`. Sie wird verwendet, um die Eigenschaften und Zustände eines Assets zu verwalten.

## Doc
- **Verwendungszweck**: Diese Klasse repräsentiert das Modell eines Dokuments. Sie enthält Attribute wie `id`, `docTitle`, `uploadDate`, `docType` und `userEmail`. Sie wird verwendet, um die Eigenschaften und Metadaten eines Dokuments zu verwalten.

## Mail
- **Verwendungszweck**: Diese Klasse repräsentiert das Modell einer E-Mail. Sie enthält Attribute wie `to`, `subject` und `message`. Sie wird verwendet, um die Details einer E-Mail-Nachricht zu verwalten.

## Person
- **Verwendungszweck**: Diese Klasse repräsentiert das Modell einer Person. Sie enthält Attribute wie `id`, `firstName`, `lastName` und `email`. Sie wird verwendet, um die persönlichen Informationen eines Benutzers zu verwalten.

## AssetCreateDTO
- **Verwendungszweck**: Diese Data Transfer Object (DTO)-Klasse wird verwendet, um Daten beim Erstellen eines neuen Assets zu übertragen. Sie enthält Attribute wie `assetName`, `purchaseDate`, `guaranteeEnd` und `assetState`.

## DocCreateDTO
- **Verwendungszweck**: Diese Data Transfer Object (DTO)-Klasse wird verwendet, um Daten beim Erstellen eines neuen Dokuments zu übertragen. Sie enthält Attribute wie `docTitle`, `uploadDate`, `docType` und `userEmail`.

## AssetStateChangeDTO
- **Verwendungszweck**: Diese Data Transfer Object (DTO)-Klasse wird verwendet, um Daten beim Ändern des Zustands eines Assets zu übertragen. Sie enthält Attribute wie `personEmail` und `assetId`.

## DocTypeChangeDTO
- **Verwendungszweck**: Diese Data Transfer Object (DTO)-Klasse wird verwendet, um Daten beim Ändern des Typs eines Dokuments zu übertragen. Sie enthält Attribute wie `newType`.

## MailInformation
- **Verwendungszweck**: Diese Klasse enthält zusätzliche Informationen, die beim Versenden von E-Mails verwendet werden. Sie ergänzt das `Mail`-Modell mit weiteren Details.

## AssetRepository
- **Verwendungszweck**: Diese Schnittstelle erweitert `JpaRepository` und bietet CRUD-Operationen für das `Asset`-Modell. Sie wird verwendet, um Assets in der Datenbank zu verwalten.

## DocRepository
- **Verwendungszweck**: Diese Schnittstelle erweitert `JpaRepository` und bietet CRUD-Operationen für das `Doc`-Modell. Sie wird verwendet, um Dokumente in der Datenbank zu verwalten.

## PersonRepository
- **Verwendungszweck**: Diese Schnittstelle erweitert `JpaRepository` und bietet CRUD-Operationen für das `Person`-Modell. Sie wird verwendet, um Personen in der Datenbank zu verwalten.

## SecurityConfig
- **Verwendungszweck**: Diese Klasse konfiguriert die Sicherheitseinstellungen der Anwendung. Sie definiert Sicherheitsregeln und Authentifizierungsmechanismen.

## MailService
- **Verwendungszweck**: Diese Klasse bietet Methoden zum Versenden von E-Mails. Sie verwendet `JavaMailSender`, um E-Mails basierend auf den angegebenen Details zu senden.

## DocService
- **Verwendungszweck**: Diese Klasse bietet Methoden zur Verwaltung von Dokumenten. Sie enthält Logik zum Aktualisieren des Dokumenttyps und zur Interaktion mit dem `DocRepository`.

## AssetService
- **Verwendungszweck**: Diese Klasse bietet Methoden zur Verwaltung von Assets. Sie enthält Logik zum Erstellen, Aktualisieren und Löschen von Assets sowie zur Interaktion mit dem `AssetRepository`.

## ServiceUtils
- **Verwendungszweck**: Diese Klasse bietet Hilfsfunktionen, die von verschiedenen Services verwendet werden. Sie enthält allgemeine Methoden, die in der gesamten Anwendung nützlich sind.

## MailValidatorService
- **Verwendungszweck**: Diese Klasse bietet Validierungslogik für E-Mails. Sie stellt sicher, dass die E-Mail-Daten korrekt sind, bevor sie gesendet werden.
