# Shopping Item API

Tento repozitář obsahuje jednoduchou RESTful API pro správu nákupních položek. API je navrženo pro použití v rámci školního projektu a poskytuje základní funkcionality pro přidávání, získávání, aktualizaci a odstraňování nákupních položek.

## Funkce

- Přidání nové nákupní položky.
- Získání seznamu všech nákupních položek.
- Získání detailů konkrétní nákupní položky.
- Aktualizace informací o nákupní položce.
- Odstranění nákupní položky ze seznamu.

## Použité technologie

- **Node.js:** Jazyk pro serverovou stranu.
- **Express:** Rychlý a minimalistický framework pro Node.js.
- **MongoDB:** NoSQL databáze pro ukládání dat o nákupních položkách.

## Instalace a spuštění

1. **Nainstalujte závislosti:**
   ```bash
   npm install
2. **Spuštění serveru:**
   ```bash
   npm start

## Cesty API

### `GET /shoppingItem/list`

Získá seznam všech nákupních položek.

### `GET /shoppingItem/get?id=:id`

Získá detaily konkrétní nákupní položky podle ID.

### `POST /shoppingItem/create`

Přidá novou nákupní položku.

#### Parametry:

- `content`: Obsah nákupní položky (řetězec).
- `count`: Počet položek k zakoupení (číslo).
- `state`: Stav položky (řetězec). (Např. CHECKED nebo UNCHECKED)

### `PUT /shoppingItem/update`

Aktualizuje informace o nákupní položce.

#### Parametry:

- `id`: ID nákupní položky k aktualizaci (řetězec).
- `content`: Nový obsah nákupní položky (řetězec).
- `count`: Nový počet položek k zakoupení (číslo).
- `state`: Nový stav položky (řetězec). (Např. CHECKED nebo UNCHECKED)

### `DELETE /api/delete?id=:id`

Odstraní nákupní položku ze seznamu.

