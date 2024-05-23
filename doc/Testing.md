# AssetControllerTest

Die `AssetControllerTest`-Klasse verwendet Spring's `MockMvc` zur Durchführung von Integrationstests auf der `AssetController`-API. Die Tests überprüfen die Sicherheitskonfigurationen, das korrekte Verhalten der Endpunkte sowie die Fehlerbehandlung des Controllers.

## Testmethoden

### `testCreateAsset`
- **Rolle**: Admin
- **Beschreibung**: Testet das erfolgreiche Erstellen eines Assets durch einen autorisierten Benutzer. Es wird überprüft, ob der Status `201 Created` zurückgegeben wird, was auf eine erfolgreiche Erstellung hinweist.

### `testCreateAssetWithoutAuthorization`
- **Beschreibung**: Testet den Versuch, ein Asset ohne Autorisierung zu erstellen. Der Test erwartet, dass der Server mit dem Status `403 Forbidden` antwortet, um den unautorisierten Zugriff zu signalisieren.

### `testCreateAssetWithMissingFields`
- **Rolle**: Admin
- **Beschreibung**: Überprüft, ob das Erstellen eines Assets mit fehlenden Pflichtfeldern einen `400 Bad Request` Statuscode zurückgibt, was auf eine fehlerhafte Anfrage hinweist.

### `testAssignAsset` und weitere ähnliche Methoden (`testUnassignAsset`, `testRepairAsset`, `testRepairedAsset`, `testDisposeAsset`)
- **Rolle**: Admin
- **Beschreibung**: Diese Tests überprüfen die verschiedenen Zustandsänderungen eines Assets durch einen autorisierten Admin. Es wird erwartet, dass der Status `200 OK` zurückgegeben wird, wenn die Operation erfolgreich ist.

### Varianten ohne Autorisierung für Zustandsänderungen
- **Beschreibung**: Für jeden Zustandsänderungsendpunkt wird überprüft, ob unautorisierte Anfragen mit `403 Forbidden` abgelehnt werden.

### `testGetAllAsset`
- **Rolle**: Standardbenutzer
- **Beschreibung**: Testet das Abrufen aller Assets durch einen autorisierten Benutzer. Erwartet wird eine erfolgreiche Antwort mit Status `200 OK`.

### `testGetAssetById`
- **Rolle**: Standardbenutzer
- **Beschreibung**: Überprüft das Abrufen eines spezifischen Assets durch seine ID. Erwartet wird eine Antwort mit Status `200 OK`.

### `testGetAssetByIdWithoutAuthorization`
- **Beschreibung**: Testet den Zugriffsversuch auf ein spezifisches Asset ohne Autorisierung. Es wird ein Status `401 Unauthorized` erwartet.

### `testGetAssetByIdNotFound`
- **Rolle**: Standardbenutzer
- **Beschreibung**: Testet den Fall, wenn die angeforderte Asset-ID nicht existiert. Der erwartete Statuscode ist `404 Not Found`, was anzeigt, dass das Asset nicht gefunden wurde.

## Zusammenfassung

Die `AssetControllerTest`-Klasse stellt sicher, dass die Asset-Management-API wie erwartet funktioniert, sowohl unter normalen Bedingungen als auch bei Fehlerfällen, und dass die Sicherheitskonfigurationen korrekt durchgesetzt werden. Die Verwendung von `@WithMockUser` ermöglicht es, die Tests unter verschiedenen Benutzerrollen zu simulieren, um die Zugriffskontrolle zu überprüfen.


# DocControllerTests

Die `DocControllerTests`-Klasse verwendet Spring's `MockMvc` zur Durchführung von Integrationstests auf der `DocController`-API. Die Tests konzentrieren sich auf das Erstellen, Aktualisieren und Abrufen von Dokumenten sowie die Sicherheitskonfigurationen.

## Testmethoden

### `testCreateDoc`
- **Rolle**: Admin
- **Beschreibung**: Testet das erfolgreiche Erstellen eines Dokuments durch einen autorisierten Benutzer. Es wird überprüft, ob der Status `201 Created` zurückgegeben wird, was auf eine erfolgreiche Erstellung hinweist.

### `testCreateDocWithoutAuthorization`
- **Beschreibung**: Testet den Versuch, ein Dokument ohne Autorisierung zu erstellen. Der Test erwartet, dass der Server mit dem Status `403 Forbidden` antwortet, um den unautorisierten Zugriff zu signalisieren.

### `testCreateDocWithMissingFields`
- **Rolle**: Admin
- **Beschreibung**: Überprüft, ob das Erstellen eines Dokuments mit fehlenden Pflichtfeldern einen `400 Bad Request` Statuscode zurückgibt, was auf eine fehlerhafte Anfrage hinweist.

### PUT-Anfragen für verschiedene Dokumenttypen (Guarantee, Offer, Invoice, Order, Other)
- **Rolle**: Admin
- **Beschreibung**: Diese Tests überprüfen das Aktualisieren der Dokumenttypen durch autorisierte Admins. Es wird erwartet, dass der Status `200 OK` zurückgegeben wird, wenn die Operation erfolgreich ist.

### Varianten ohne Autorisierung für PUT-Anfragen
- **Beschreibung**: Für jeden Dokumenttyp wird überprüft, ob unautorisierte Anfragen mit `403 Forbidden` abgelehnt werden.

### GET-Anfragen zum Abrufen von Dokumenten
- **Rolle**: Standardbenutzer
- **Beschreibung**: Diese Tests überprüfen das Abrufen aller Dokumente sowie spezifischer Dokumente durch ihre ID. Erwartet wird eine erfolgreiche Antwort mit Status `200 OK`.

### `testGetDocByIdWithoutAuthorization`
- **Beschreibung**: Testet den Zugriffsversuch auf ein spezifisches Dokument ohne Autorisierung. Es wird ein Status `401 Unauthorized` erwartet.

### `testGetDocByIdNotFound`
- **Rolle**: Standardbenutzer
- **Beschreibung**: Testet den Fall, wenn die angeforderte Dokument-ID nicht existiert. Der erwartete Statuscode ist `404 Not Found`, was anzeigt, dass das Dokument nicht gefunden wurde.

## Zusammenfassung

Die `DocControllerTests`-Klasse stellt sicher, dass die Dokument-Management-API wie erwartet funktioniert, sowohl unter normalen Bedingungen als auch bei Fehlerfällen, und dass die Sicherheitskonfigurationen korrekt durchgesetzt werden. Die Verwendung von `@WithMockUser` ermöglicht es, die Tests unter verschiedenen Benutzerrollen zu simulieren, um die Zugriffskontrolle zu überprüfen.

# MailControllerTest

Die `MailControllerTest`-Klasse verwendet Spring's `MockMvc` zur Durchführung von Integrationstests auf der `MailController`-API. Die Tests konzentrieren sich auf das Senden von E-Mails und die Sicherheitskonfigurationen.

## Testmethoden

### `testSendEmailSuccess`
- **Rolle**: Admin
- **Beschreibung**: Testet das erfolgreiche Senden einer E-Mail durch einen autorisierten Benutzer. Es wird überprüft, ob der Status `200 OK` zurückgegeben wird und die Antwort den Text "Email sent successfully" enthält.

### `testSendEmailWithoutAuthorization`
- **Beschreibung**: Testet den Versuch, eine E-Mail ohne Autorisierung zu senden. Der Test erwartet, dass der Server mit dem Status `403 Forbidden` antwortet, um den unautorisierten Zugriff zu signalisieren.

## Zusammenfassung

Die `MailControllerTest`-Klasse stellt sicher, dass die E-Mail-Sende-API wie erwartet funktioniert und dass die Sicherheitskonfigurationen korrekt durchgesetzt werden. Die Verwendung von `@WithMockUser` ermöglicht es, die Tests unter verschiedenen Benutzerrollen zu simulieren, um die Zugriffskontrolle zu überprüfen. Der `MockBean` für `MailService` stellt sicher, dass der E-Mail-Versandprozess in den Tests simuliert wird, ohne tatsächliche E-Mails zu senden.

# PersonControllerTest

Die `PersonControllerTest`-Klasse verwendet Spring's `MockMvc` zur Durchführung von Integrationstests auf der `PersonController`-API. Die Tests konzentrieren sich auf das Erstellen und Abrufen von Personen sowie die Sicherheitskonfigurationen.

## Testmethoden

### `testCreatePerson`
- **Rolle**: Authentifizierter Benutzer
- **Beschreibung**: Testet das erfolgreiche Erstellen einer Person durch einen autorisierten Benutzer. Es wird überprüft, ob der Status `201 Created` zurückgegeben wird, was auf eine erfolgreiche Erstellung hinweist.

### `testCreatePersonWithMissingFields`
- **Rolle**: Authentifizierter Benutzer
- **Beschreibung**: Überprüft, ob das Erstellen einer Person mit fehlenden Pflichtfeldern einen `400 Bad Request` Statuscode zurückgibt, was auf eine fehlerhafte Anfrage hinweist.

### `testCreatePersonWithoutAuthorization`
- **Beschreibung**: Testet den Versuch, eine Person ohne Autorisierung zu erstellen. Der Test erwartet, dass der Server mit dem Status `403 Forbidden` antwortet, um den unautorisierten Zugriff zu signalisieren.

### `testGetAllPerson`
- **Rolle**: Admin
- **Beschreibung**: Testet das Abrufen aller Personen durch einen autorisierten Admin. Erwartet wird eine erfolgreiche Antwort mit Status `200 OK`.

### `testGetPersonById`
- **Rolle**: Admin
- **Beschreibung**: Überprüft das Abrufen einer spezifischen Person durch ihre ID. Erwartet wird eine Antwort mit Status `200 OK`.

### `testGetPersonByIdWithoutAuthorization`
- **Beschreibung**: Testet den Zugriffsversuch auf eine spezifische Person ohne Autorisierung. Es wird ein Status `401 Unauthorized` erwartet.

### `testGetPersonByIdNotFound`
- **Rolle**: Admin
- **Beschreibung**: Testet den Fall, wenn die angeforderte Personen-ID nicht existiert. Der erwartete Statuscode ist `404 Not Found`, was anzeigt, dass die Person nicht gefunden wurde.

## Zusammenfassung

Die `PersonControllerTest`-Klasse stellt sicher, dass die Personen-Management-API wie erwartet funktioniert, sowohl unter normalen Bedingungen als auch bei Fehlerfällen, und dass die Sicherheitskonfigurationen korrekt durchgesetzt werden. Die Verwendung von `@WithMockUser` ermöglicht es, die Tests unter verschiedenen Benutzerrollen zu simulieren, um die Zugriffskontrolle zu überprüfen.


# ServiceControllerTest

Die `ServiceControllerTest`-Klasse verwendet Spring's `MockMvc` zur Durchführung von Integrationstests auf der `ServiceController`-API. Die Tests konzentrieren sich auf das Zuweisen von Assets und die Sicherheitskonfigurationen.

## Testmethoden

### `testCreateService`
- **Rolle**: Authentifizierter Benutzer
- **Beschreibung**: Testet das erfolgreiche Zuweisen eines Assets an eine Person durch einen autorisierten Benutzer. Es wird überprüft, ob der Status `200 OK` zurückgegeben wird, was auf eine erfolgreiche Zuweisung hinweist.

### `testAssignAssetWithoutAuthorization`
- **Beschreibung**: Testet den Versuch, ein Asset ohne Autorisierung zuzuweisen. Der Test erwartet, dass der Server mit dem Status `403 Forbidden` antwortet, um den unautorisierten Zugriff zu signalisieren.

### `testAssignAssetWithMissingFields`
- **Rolle**: Authentifizierter Benutzer
- **Beschreibung**: Überprüft, ob das Zuweisen eines Assets mit fehlenden Pflichtfeldern einen `400 Bad Request` Statuscode zurückgibt, was auf eine fehlerhafte Anfrage hinweist.

### `testAssignAssetWithEmptyFields`
- **Rolle**: Authentifizierter Benutzer
- **Beschreibung**: Überprüft, ob das Zuweisen eines Assets mit leeren Pflichtfeldern einen `400 Bad Request` Statuscode zurückgibt, was auf eine fehlerhafte Anfrage hinweist.

## Zusammenfassung

Die `ServiceControllerTest`-Klasse stellt sicher, dass die Asset-Zuweisungs-API wie erwartet funktioniert, sowohl unter normalen Bedingungen als auch bei Fehlerfällen, und dass die Sicherheitskonfigurationen korrekt durchgesetzt werden. Die Verwendung von `@WithMockUser` ermöglicht es, die Tests unter verschiedenen Benutzerrollen zu simulieren, um die Zugriffskontrolle zu überprüfen.

# AssetTest

Die `AssetTest`-Klasse enthält Unit-Tests für das `Asset`-Modell. Die Tests konzentrieren sich auf die Konstruktoren, Setter und Validierungen der Nicht-Null-Felder.

## Testmethoden

### `testNoArgsConstructor`
- **Beschreibung**: Testet den Standardkonstruktor (`no-args constructor`) der `Asset`-Klasse. Es wird überprüft, dass alle Felder auf ihre Standardwerte gesetzt werden:
  - `id`, `assetName`, `purchaseDate`, `guaranteeEnd`, `personId` und `personEmail` sollten `null` sein.
  - `assetState` sollte auf `AssetState.Unassigned` gesetzt sein.

### `testRequiredArgsConstructor`
- **Beschreibung**: Testet den Konstruktor mit erforderlichen Argumenten (`required args constructor`) der `Asset`-Klasse. Es wird überprüft, dass die Felder korrekt initialisiert werden:
  - `assetName`, `purchaseDate` und `guaranteeEnd` sollten nicht `null` sein und ihre zugewiesenen Werte haben.
  - `assetState` sollte auf `AssetState.Unassigned` gesetzt sein.

### `testSetters`
- **Beschreibung**: Testet die Setter-Methoden der `Asset`-Klasse. Es wird überprüft, dass die Felder korrekt gesetzt werden:
  - `id`, `assetName`, `purchaseDate`, `guaranteeEnd`, `assetState`, `personId` und `personEmail` sollten die zugewiesenen Werte haben.

### `testNonNullFields_RequiredArgsConstructor`
- **Beschreibung**: Testet die Nicht-Null-Validierung der erforderlichen Felder im Konstruktor mit erforderlichen Argumenten. Es wird überprüft, dass eine `NullPointerException` ausgelöst wird, wenn eines der erforderlichen Felder `null` ist:
  - Der Test stellt sicher, dass `assetName`, `purchaseDate` und `guaranteeEnd` nicht `null` sein dürfen.

## Zusammenfassung

Die `AssetTest`-Klasse stellt sicher, dass das `Asset`-Modell wie erwartet funktioniert, einschließlich der korrekten Initialisierung durch die Konstruktoren, der richtigen Funktionsweise der Setter und der Validierung der Nicht-Null-Felder. Diese Tests gewährleisten, dass das Modell robust und fehlerfrei ist.

# TestSecurityConfig

Die `TestSecurityConfig`-Klasse stellt eine Testkonfiguration bereit, um JWT-Authentifizierung in Integrationstests zu simulieren. Diese Konfiguration wird verwendet, um sicherzustellen, dass die Sicherheitsaspekte der Anwendung korrekt getestet werden können.

## Methoden

### `jwtDecoder`
- **Beschreibung**: Stellt einen `JwtDecoder`-Bean bereit, der verwendet wird, um JWT-Tokens in den Tests zu decodieren. Anstelle einer echten Decodierung gibt dieser Decoder ein statisches `Jwt`-Objekt zurück, das von der Methode `jwt` erstellt wird.

### `jwt`
- **Beschreibung**: Erstellt ein statisches `Jwt`-Objekt mit vordefinierten Claims, das in den Tests verwendet wird. Das Token enthält folgende Claims:
  - `sub`: "test"
  - `user_roles`: ["admin"]
  - `email`: "achiramal@test.ch"

  Das Token hat eine Gültigkeitsdauer von 30 Sekunden ab dem Zeitpunkt der Erstellung.

## Zusammenfassung

Die `TestSecurityConfig`-Klasse wird verwendet, um die JWT-Authentifizierung in Integrationstests zu simulieren. Durch das Bereitstellen eines vordefinierten `Jwt`-Objekts ermöglicht diese Konfiguration das Testen von Endpunkten, die Authentifizierung und Autorisierung erfordern, ohne sich auf einen echten Authentifizierungsserver zu verlassen. Diese Konfiguration stellt sicher, dass Sicherheitsaspekte der Anwendung während der Tests korrekt berücksichtigt werden.


# DocServiceTest

Die `DocServiceTest`-Klasse enthält Unit-Tests für den `DocService`. Die Tests konzentrieren sich auf die `updateDocType`-Methode, die den Dokumenttyp eines bestehenden Dokuments aktualisiert.

## Testmethoden

### `testUpdateDocTypeSuccess`
- **Beschreibung**: Testet das erfolgreiche Aktualisieren des Dokumenttyps. Es wird überprüft, dass die Methode `updateDocType`:
  - Das bestehende Dokument korrekt lädt (`findById`).
  - Den Dokumenttyp ändert und das geänderte Dokument speichert (`save`).
  - Den neuen Dokumenttyp korrekt zurückgibt.
- **Verifikationen**: 
  - `findById` wird aufgerufen, um das bestehende Dokument zu laden.
  - `save` wird aufgerufen, um das aktualisierte Dokument zu speichern.
- **Erwartetes Ergebnis**: Der Dokumenttyp wird erfolgreich auf `DocType.Invoice` geändert.

### `testUpdateDocTypeNotFound`
- **Beschreibung**: Testet das Verhalten der Methode `updateDocType`, wenn das Dokument nicht gefunden wird. Es wird überprüft, dass eine `RuntimeException` ausgelöst wird, wenn das Dokument mit der angegebenen ID nicht existiert.
- **Verifikationen**:
  - `findById` wird aufgerufen, gibt jedoch ein leeres `Optional` zurück.
  - Eine `RuntimeException` mit der Nachricht "Doc not found with id {docId}" wird geworfen.
- **Erwartetes Ergebnis**: Eine `RuntimeException` wird geworfen, wenn das Dokument nicht gefunden wird.

## Zusammenfassung

Die `DocServiceTest`-Klasse stellt sicher, dass die `updateDocType`-Methode im `DocService` wie erwartet funktioniert. Die Tests decken sowohl den erfolgreichen Ablauf als auch Fehlerfälle ab, in denen das Dokument nicht gefunden wird. Durch das Mocken des `DocRepository` können diese Szenarien isoliert und getestet werden, um die korrekte Implementierung der Methode sicherzustellen.
