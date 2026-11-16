// ==========================================
// EXTRA WOORDEN voor Wie is de Mol?
// Wordt ná het hoofdscript geladen en vult tabooCards en drawCards aan.
// Formaat taboe: "Woord|verboden1|verboden2|verboden3|verboden4"
// Dubbele woorden (hoofdletterongevoelig) worden automatisch weggefilterd.
// ==========================================
(function () {
  'use strict';

  const EXTRA_TABOO = `
// ETEN & DRINKEN
Lasagne|Pasta|Italië|Laagjes|Oven
Pannenkoekenboot|Schip|Water|Eten|Varen
Hagelslag|Brood|Chocolade|Strooien|Boterham
Pindakaas|Brood|Noten|Smeren|Pot
Appelmoes|Fruit|Aardappel|Pot|Zoet
Stamppot|Boerenkool|Aardappel|Worst|Winter
Erwtensoep|Snert|Groen|Worst|Winter
Haring|Vis|Ui|Hollandse nieuwe|Zout
Poffertjes|Pan|Poedersuiker|Kermis|Klein
Oliebol|Oud en nieuw|Frituren|Poedersuiker|Rozijnen
Speculaas|Sinterklaas|Koek|Kruiden|Pepernoot
Pepernoten|Sinterklaas|Koek|Strooien|December
Tompouce|Roze|Koningsdag|Gebak|Room
Bitterbal|Borrel|Mosterd|Frituur|Rond
Boerenkool|Stamppot|Groen|Worst|Winter
Spruitjes|Kerst|Groen|Kool|Klein
Broccoli|Groen|Boompje|Groente|Gezond
Bloemkool|Wit|Groente|Kool|Saus
Aardbei|Rood|Fruit|Zomer|Slagroom
Framboos|Rood|Fruit|Bes|Zoet
Bosbes|Blauw|Fruit|Bes|Muffin
Mango|Tropisch|Geel|Fruit|Steen
Kiwi|Groen|Fruit|Haren|Vogel
Kokosnoot|Palmboom|Tropisch|Bruin|Melk
Avocado|Groen|Guacamole|Pit|Toast
Pistache|Noot|Groen|Ijs|Dop
Walnoot|Noot|Hersenen|Dop|Boom
Amandel|Noot|Marsepein|Dop|Bitter
Honing|Bij|Zoet|Pot|Bijenkorf
Jam|Fruit|Brood|Pot|Smeren
Ontbijtkoek|Plak|Boter|Bruin|Brood
Muesli|Ontbijt|Melk|Haver|Kom
Cornflakes|Ontbijt|Melk|Kom|Mais
Havermout|Pap|Ontbijt|Kom|Warm
Yoghurt|Melk|Zuivel|Bakje|Wit
Boter|Brood|Smeren|Koe|Geel
Ei|Kip|Schaal|Dooier|Ontbijt
Omelet|Ei|Pan|Bakken|Ontbijt
Spiegelei|Ei|Pan|Bakken|Dooier
Gehaktbal|Vlees|Rond|Saus|Jus
Schnitzel|Vlees|Paneermeel|Duitsland|Pan
Spareribs|Varken|Botten|Barbecue|Vlees
Kipsate|Pinda|Saus|Stokje|Kip
Shoarma|Vlees|Draaien|Pita|Knoflooksaus
Kebab|Vlees|Pita|Draaien|Turks
Falafel|Kikkererwt|Frituur|Bal|Pita
Hummus|Kikkererwt|Dip|Pita|Smeer
Nasi|Rijst|Indonesië|Bami|Gebakken
Bami|Noedels|Indonesië|Nasi|Gebakken
Loempia|Frituur|Rol|Chinees|Saus
Wrap|Tortilla|Rol|Vulling|Kip
Burrito|Tortilla|Mexico|Rol|Bonen
Quesadilla|Tortilla|Kaas|Mexico|Dubbel
Guacamole|Avocado|Dip|Mexico|Groen
Salsa|Tomaat|Dip|Pittig|Mexico
Ketchup|Tomaat|Rood|Friet|Fles
Mayonaise|Friet|Wit|Saus|Ei
Mosterd|Geel|Worst|Saus|Pittig
Peper|Pittig|Zout|Molen|Kruiden
Zout|Peper|Keuken|Strooien|Zee
Suiker|Zoet|Wit|Koffie|Klontje
Slagroom|Room|Taart|Wit|Spuitbus
Pudding|Vla|Toetje|Schudden|Zoet
Vla|Toetje|Karnemelk|Pak|Chocolade
Taart|Verjaardag|Slagroom|Bakken|Stuk
Cupcake|Muffin|Glazuur|Klein|Taart
Brownie|Chocolade|Bruin|Taart|Zoet
Macaron|Frankrijk|Koekje|Pastel|Rond
Wafel|Ijzer|Strooien|Poedersuiker|Brussel
Smoothie|Fruit|Blender|Drinken|Gezond
Limonade|Citroen|Zoet|Glas|Zomer
Cola|Prik|Bruin|Fris|Blikje
Chocolademelk|Warm|Cacao|Melk|Winter
IJsthee|Koud|Thee|Citroen|Fles
Bier|Hop|Glas|Schuim|Café
Wijn|Druif|Fles|Rood|Glas
Champagne|Fles|Knallen|Nieuwjaar|Bubbels
Cocktail|Drankje|Bar|Parasol|Rietje
Sinaasappelsap|Fruit|Oranje|Ontbijt|Glas
Melk|Koe|Wit|Drinken|Pak
Water|Nat|Kraan|Drinken|Fles
Ijsblokje|Vriezer|Koud|Water|Drankje
Kauwgom|Kauwen|Plakken|Mint|Bel
Marshmallow|Kampvuur|Zacht|Roze|Spiesje
Zuurtje|Snoep|Zuur|Zuigen|Rol
Pretzel|Duitsland|Knoop|Zout|Brood
Bagel|Gat|Brood|Rond|Zalm
Pita|Brood|Zakje|Griekenland|Gyros
Naan|Brood|India|Oven|Plat
Toast|Brood|Rooster|Ontbijt|Boter
Tosti|Brood|Kaas|Ham|Hapjes
Spaghettisaus|Tomaat|Pasta|Bolognese|Pan
Risotto|Rijst|Italië|Pan|Romig
Paella|Rijst|Spanje|Zeevruchten|Pan
Curry|India|Pittig|Saus|Rijst
Ramen|Noedels|Japan|Soep|Kom
Dumpling|Deeg|Gevuld|Chinees|Stomen

// DIEREN
Giraf|Hals|Lang|Afrika|Vlekken
Olifant|Slurf|Grijs|Groot|Afrika
Neushoorn|Hoorn|Neus|Afrika|Grijs
Nijlpaard|Water|Dik|Afrika|Mond
Zebra|Strepen|Paard|Afrika|Zwart
Leeuw|Koning|Brullen|Manen|Savanne
Tijger|Strepen|Oranje|Katachtige|Jungle
Luipaard|Vlekken|Katachtige|Boom|Snel
Cheetah|Snel|Vlekken|Katachtige|Rennen
Panda|Bamboe|Zwart|Wit|China
IJsbeer|Wit|Noordpool|Beer|Koud
Bruine beer|Bos|Honing|Winterslaap|Groot
Wolf|Huilen|Hond|Roedel|Bos
Vos|Slim|Rood|Staart|Bos
Hert|Gewei|Bos|Bambi|Rendier
Rendier|Kerst|Gewei|Slee|Rudolf
Eland|Gewei|Groot|Noorden|Hert
Kameel|Bult|Woestijn|Dromedaris|Water
Dromedaris|Bult|Woestijn|Kameel|Zand
Lama|Spugen|Wol|Zuid-Amerika|Alpaca
Kangoeroe|Springen|Buidel|Australië|Joey
Koala|Boom|Eucalyptus|Australië|Slapen
Gorilla|Aap|Borst|Jungle|Groot
Chimpansee|Aap|Banaan|Slim|Jungle
Orang-oetan|Aap|Oranje|Borneo|Haar
Lemming|Klein|Knaagdier|Springen|Noorden
Egel|Stekels|Tuin|Winterslaap|Prikken
Eekhoorn|Noot|Boom|Staart|Rood
Hamster|Wiel|Knaagdier|Kooi|Wangen
Cavia|Knaagdier|Huisdier|Kooi|Wortel
Konijn|Oren|Wortel|Hop|Haas
Haas|Oren|Snel|Paas|Hop
Muis|Kaas|Kat|Klein|Piep
Rat|Riool|Staart|Knaagdier|Muis
Vleermuis|Nacht|Grot|Vliegen|Vampier
Uil|Nacht|Hoeoe|Veren|Wijs
Valk|Vogel|Jagen|Snel|Klauw
Adelaar|Vogel|Groot|Wieken|Berg
Pelikaan|Vogel|Snavel|Vis|Zak
Flamingo|Roze|Poot|Vogel|Staan
Papegaai|Praten|Kleurrijk|Vogel|Piraat
Pinguïn|Zuidpool|Ijs|Vogel|Zwart
Struisvogel|Zand|Groot|Vogel|Rennen
Zwaan|Wit|Vogel|Meer|Hals
Eend|Kwak|Vijver|Water|Vogel
Gans|Vogel|Kwaken|Boerderij|Wit
Kip|Ei|Boerderij|Kakelen|Haan
Haan|Kukeleku|Kip|Boerderij|Ochtend
Kalkoen|Kerst|Vogel|Boerderij|Kluiven
Duif|Vogel|Stad|Brood|Vrede
Mus|Vogel|Klein|Tjilpen|Stad
Kikker|Groen|Kwaken|Vijver|Springen
Pad|Kikker|Wrat|Vijver|Groen
Salamander|Hagedis|Vuur|Vijver|Klein
Hagedis|Reptiel|Muur|Staart|Zon
Kameleon|Kleur|Reptiel|Veranderen|Tong
Schildpad|Schild|Traag|Reptiel|Zee
Krokodil|Water|Tanden|Reptiel|Groen
Alligator|Water|Tanden|Reptiel|Amerika
Slang|Gif|Sissen|Reptiel|Kronkelen
Cobra|Slang|Gif|India|Fluit
Haai|Vis|Tanden|Zee|Vin
Dolfijn|Zee|Springen|Zoogdier|Slim
Walvis|Zee|Groot|Zoogdier|Blazen
Orka|Walvis|Zwart|Wit|Zee
Zeehond|Zee|Snor|Ballen|Vis
Octopus|Inktvis|Tentakels|Zee|Acht
Inktvis|Octopus|Inkt|Zee|Tentakels
Kwal|Zee|Steken|Glibberig|Doorzichtig
Zeepaardje|Zee|Klein|Paard|Staart
Zeester|Zee|Vijf|Strand|Arm
Krab|Schaar|Zee|Zijwaarts|Strand
Kreeft|Schaar|Zee|Rood|Dure
Garnaal|Zee|Roze|Klein|Cocktail
Goudvis|Kom|Oranje|Zwemmen|Aquarium
Vlinder|Rups|Vleugels|Kleur|Bloem
Rups|Vlinder|Groen|Kruipen|Blad
Bij|Honing|Steken|Zoemen|Bloem
Wesp|Steken|Geel|Zoemen|Zomer
Mier|Klein|Mierenhoop|Werken|Kolonie
Lieveheersbeestje|Rood|Stippen|Kever|Geluk
Spin|Web|Acht|Poten|Insect
Mug|Steken|Bloed|Zoemen|Zomer
Vlieg|Zoemen|Raam|Plak|Insect
Libelle|Water|Vleugels|Vliegen|Insect
Sprinkhaan|Springen|Groen|Insect|Gras
Slak|Huisje|Traag|Slijm|Tuin
Worm|Aarde|Kronkelen|Regen|Vis
Schaap|Wol|Boerderij|Blaten|Lam
Geit|Boerderij|Horens|Melk|Kaas
Varken|Boerderij|Roze|Knor|Modder
Koe|Melk|Boerderij|Boe|Gras
Paard|Rijden|Hoeven|Zadel|Manen
Pony|Paard|Klein|Rijden|Manege
Ezel|Hi-ha|Paard|Koppig|Oren
Hond|Blaffen|Huisdier|Riem|Wandelen
Kat|Miauw|Huisdier|Muis|Krabpaal
Poes|Kat|Miauw|Huisdier|Spinnen
Papegaaiduiker|Vogel|Kleurrijk|Snavel|IJsland

// VOORWERPEN
Paraplu|Regen|Nat|Opvouwen|Handvat
Zonnebril|Zon|Ogen|Glazen|Strand
Bril|Ogen|Zien|Glazen|Neus
Horloge|Tijd|Pols|Wijzer|Klok
Wekker|Slapen|Alarm|Ochtend|Bel
Klok|Tijd|Wijzers|Muur|Uur
Kompas|Noorden|Richting|Naald|Wandelen
Verrekijker|Kijken|Ver|Vogels|Lenzen
Telescoop|Sterren|Kijken|Ruimte|Lens
Microscoop|Klein|Lens|Laboratorium|Kijken
Loep|Vergroten|Kijken|Detective|Glas
Kaars|Vlam|Was|Aansteken|Licht
Lantaarn|Licht|Kaars|Nacht|Handvat
Zaklamp|Licht|Batterij|Donker|Knop
Gloeilamp|Licht|Idee|Stopcontact|Draad
Stekker|Stroom|Stopcontact|Draad|Pennen
Batterij|Stroom|Leeg|Afstandsbediening|Plus
Afstandsbediening|Televisie|Knoppen|Batterij|Zapper
Televisie|Scherm|Kijken|Zender|Kanaal
Radio|Muziek|Luisteren|Zender|Antenne
Koptelefoon|Muziek|Oren|Luisteren|Draad
Microfoon|Zingen|Geluid|Praten|Podium
Camera|Foto|Lens|Flits|Plaatje
Fotolijst|Foto|Muur|Glas|Hout
Schilderij|Muur|Verf|Kunst|Penseel
Penseel|Verf|Schilder|Kwast|Kunst
Schaar|Knippen|Papier|Haar|Mes
Plakband|Plakken|Rol|Tape|Papier
Nietmachine|Papier|Nietjes|Kantoor|Vastzetten
Paperclip|Papier|Metaal|Bij elkaar|Kantoor
Liniaal|Meten|Lijn|School|Centimeter
Gum|Potlood|Wissen|Fout|Rubber
Pen|Schrijven|Inkt|Papier|Balpen
Potlood|Schrijven|Puntenslijper|Grafiet|Tekenen
Puntenslijper|Potlood|Scherp|Draaien|School
Schrift|School|Schrijven|Pagina|Les
Boek|Lezen|Bladzijde|Bibliotheek|Verhaal
Tijdschrift|Lezen|Artikel|Glossy|Kiosk
Krant|Nieuws|Lezen|Papier|Dagblad
Brief|Postzegel|Envelop|Schrijven|Brievenbus
Postzegel|Brief|Plakken|Envelop|Post
Envelop|Brief|Plakken|Post|Papier
Rugzak|Tas|Schouders|School|Wandelen
Koffer|Vakantie|Reizen|Inpakken|Wieltjes
Portemonnee|Geld|Pinpas|Zak|Betalen
Sleutel|Slot|Deur|Open|Bos
Slot|Sleutel|Deur|Dicht|Hangslot
Hangslot|Sleutel|Fiets|Dicht|Code
Spiegel|Reflectie|Kijken|Muur|Glas
Kam|Haar|Kammen|Tanden|Borstel
Haarborstel|Haar|Kammen|Borstelen|Kapper
Tandenborstel|Tanden|Poetsen|Tandpasta|Mond
Tandpasta|Tanden|Poetsen|Tube|Mint
Zeep|Wassen|Handen|Schuim|Bad
Shampoo|Haar|Wassen|Fles|Schuim
Handdoek|Droog|Douche|Nat|Badkamer
Badkuip|Water|Baden|Badkamer|Schuim
Douche|Water|Wassen|Badkamer|Kop
Toilet|Plassen|Wc|Bril|Doortrekken
Wasmachine|Kleding|Wassen|Trommel|Zeep
Droger|Kleding|Droog|Trommel|Warm
Strijkijzer|Kleding|Plat|Kreuk|Stoom
Stofzuiger|Stof|Zuigen|Vloer|Slang
Bezem|Vegen|Heks|Steel|Stof
Emmer|Water|Dweil|Handvat|Schoonmaken
Dweil|Vloer|Emmer|Nat|Schoonmaken
Vuilnisbak|Afval|Prullenbak|Deksel|Weggooien
Kapstok|Jas|Ophangen|Haken|Gang
Hangmat|Slapen|Touw|Boom|Schommelen
Matras|Bed|Slapen|Zacht|Veren
Kussen|Hoofd|Bed|Zacht|Slapen
Dekbed|Bed|Warm|Slapen|Hoes
Pyjama|Slapen|Nacht|Bed|Kleding
Slaapzak|Kamperen|Slapen|Tent|Rits
Tent|Kamperen|Haringen|Doek|Slapen
Barbecue|Vlees|Kolen|Buiten|Grillen
Parasol|Zon|Schaduw|Terras|Strand
Gieter|Planten|Water|Tuin|Sproeien
Schep|Zand|Graven|Tuin|Steel
Hark|Tuin|Bladeren|Tanden|Vegen
Kruiwagen|Wiel|Tuin|Duwen|Zand
Hamer|Spijker|Timmeren|Gereedschap|Slaan
Spijker|Hamer|Hout|Metaal|Timmeren
Schroevendraaier|Schroef|Draaien|Gereedschap|Plat
Tang|Gereedschap|Draad|Knijpen|Metaal
Zaag|Hout|Tanden|Gereedschap|Zagen
Boor|Gat|Gereedschap|Muur|Draaien
Ladder|Klimmen|Sporten|Hoog|Brandweer
Touw|Knoop|Koord|Klimmen|Trekken
Ketting|Hals|Sieraad|Schakels|Goud
Ring|Vinger|Sieraad|Trouwen|Goud
Kroon|Koning|Hoofd|Goud|Prinses
Zwaard|Ridder|Mes|Zwaaien|Strijd
Schild|Ridder|Verdedigen|Beschermen|Strijd
Kasteel|Ridder|Koning|Toren|Slotgracht
Schatkist|Piraat|Goud|Kist|Munten
Kaart|Spel|Schatten|Wegwijzer|Land

// BEROEPEN
Brandweerman|Vuur|Blussen|Slang|Helm
Politieagent|Boef|Uniform|Boete|Surveilleren
Dokter|Ziek|Ziekenhuis|Wit|Medicijn
Tandarts|Tanden|Boor|Mond|Gaatje
Kapper|Haar|Knippen|Schaar|Stoel
Bakker|Brood|Oven|Meel|Winkel
Slager|Vlees|Mes|Worst|Winkel
Visser|Vis|Net|Boot|Zee
Boer|Koeien|Land|Tractor|Boerderij
Timmerman|Hout|Hamer|Zaag|Bouwen
Loodgieter|Kraan|Lek|Water|Buis
Elektricien|Stroom|Draad|Licht|Stopcontact
Schilder|Verf|Muur|Kwast|Huis
Postbode|Post|Brief|Fiets|Bezorgen
Piloot|Vliegtuig|Vliegen|Cockpit|Luchthaven
Kapitein|Schip|Stuur|Zee|Varen
Astronaut|Ruimte|Maan|Raket|Helm
Rechter|Rechtbank|Hamer|Vonnis|Wet
Advocaat|Rechtbank|Wet|Verdediging|Pak
Leraar|School|Les|Klas|Bord
Juf|School|Les|Klas|Kinderen
Bibliothecaris|Boeken|Bibliotheek|Stil|Lenen
Kok|Eten|Keuken|Koken|Restaurant
Ober|Restaurant|Bord|Bestellen|Eten
Barman|Drankje|Bar|Café|Cocktail
Taxichauffeur|Auto|Rijden|Taxi|Passagier
Buschauffeur|Bus|Rijden|Halte|Stuur
Machinist|Trein|Rails|Spoor|Rijden
Vuilnisman|Afval|Ophalen|Wagen|Container
Schoonmaker|Dweil|Poetsen|Schoon|Emmer
Tuinman|Planten|Gras|Maaien|Tuin
Mijnwerker|Grot|Kolen|Helm|Ondergronds
Soldaat|Leger|Geweer|Uniform|Oorlog
Detective|Zoeken|Misdaad|Loep|Zaak
Spion|Geheim|Agent|Bond|Verkleden
Toneelspeler|Podium|Rol|Theater|Acteren
Acteur|Film|Rol|Toneel|Spelen
Zanger|Zingen|Microfoon|Lied|Podium
Dirigent|Orkest|Stokje|Muziek|Zwaaien
Clown|Circus|Neus|Rood|Grappig
Goochelaar|Truc|Hoed|Konijn|Magie
Acrobaat|Circus|Touw|Salto|Balanceren
Fotograaf|Camera|Foto|Flits|Plaatjes
Journalist|Nieuws|Krant|Interview|Artikel
Bouwvakker|Helm|Huis|Bouwen|Steiger
Schaatser|Ijs|Schaatsen|Bokaal|Winter
Dierenarts|Dieren|Ziek|Spuit|Huisdier
Verpleger|Ziekenhuis|Zorg|Patiënt|Bed
Ambulancebroeder|Ziekenhuis|Sirene|Ongeluk|Brancard
Apotheker|Medicijn|Pillen|Recept|Winkel
Student|School|Universiteit|Leren|Studeren
Professor|Universiteit|Les|Wetenschap|Hoogleraar
Uitvinder|Idee|Machine|Maken|Bedenken
Burgemeester|Gemeente|Stad|Ketting|Bestuur

// PLAATSEN & GEBOUWEN
Ziekenhuis|Dokter|Bed|Ziek|Ambulance
Supermarkt|Boodschappen|Kar|Kassa|Winkel
Bioscoop|Film|Popcorn|Zaal|Doek
Theater|Podium|Toneel|Voorstelling|Gordijn
Museum|Kunst|Oud|Kijken|Tentoonstelling
Dierentuin|Dieren|Kooi|Kaartje|Apen
Pretpark|Attractie|Achtbaan|Kaartje|Plezier
Kermis|Draaimolen|Suikerspin|Oliebollen|Attractie
Zwembad|Water|Zwemmen|Duiken|Badpak
Sporthal|Sport|Gym|Basketbal|Hal
Station|Trein|Perron|Spoor|Kaartje
Luchthaven|Vliegtuig|Koffer|Paspoort|Vertrek
Haven|Schip|Boot|Kade|Water
Brug|Rivier|Oversteken|Water|Auto
Tunnel|Donker|Berg|Auto|Onder
Toren|Hoog|Kasteel|Trap|Uitzicht
Vuurtoren|Zee|Licht|Kust|Schip
Molen|Wind|Wieken|Nederland|Graan
Windmolen|Wind|Wieken|Energie|Stroom
Boerderij|Koeien|Boer|Stal|Dieren
Kerk|Toren|Bidden|Klokken|Dienst
Moskee|Bidden|Toren|Moslim|Gebouw
Paleis|Koning|Groot|Koningin|Kroon
Gevangenis|Cel|Tralies|Boef|Straf
Politiebureau|Agent|Boef|Aangifte|Cel
Brandweerkazerne|Brandweer|Auto|Vuur|Slang
School|Leraar|Klas|Les|Kinderen
Universiteit|Studeren|Student|Professor|Les
Bibliotheek|Boeken|Lenen|Stil|Lezen
Restaurant|Eten|Menu|Ober|Tafel
Café|Drankje|Bier|Terras|Kroeg
Bakkerij|Brood|Bakker|Oven|Winkel
Kapsalon|Kapper|Haar|Knippen|Stoel
Camping|Tent|Kamperen|Caravan|Natuur
Strand|Zand|Zee|Zon|Golven
Woestijn|Zand|Heet|Droog|Kameel
Jungle|Bomen|Dieren|Tropisch|Apen
Eiland|Water|Zee|Palmboom|Omringd
Grot|Donker|Berg|Vleermuis|Stalactiet
Vulkaan|Lava|Uitbarsten|Berg|Rook
Waterval|Water|Vallen|Berg|Rivier
Gletsjer|Ijs|Berg|Sneeuw|Smelten
Canyon|Kloof|Rots|Amerika|Diep
Dam|Water|Beton|Rivier|Dijk
Dijk|Water|Zee|Nederland|Zand
Polder|Nederland|Water|Land|Droog
Tulpenveld|Bloemen|Nederland|Kleur|Bollen
Amsterdam|Hoofdstad|Grachten|Stad|Nederland
Rotterdam|Haven|Stad|Maas|Nederland
Eiffeltoren|Parijs|Frankrijk|Toren|IJzer
Piramide|Egypte|Farao|Woestijn|Driehoek
Chinese Muur|China|Lang|Muur|Toerist
Scheve Toren van Pisa|Italië|Scheef|Toren|Pisa
Vrijheidsbeeld|New York|Amerika|Fakkel|Standbeeld
Big Ben|Londen|Klok|Engeland|Toren
Colosseum|Rome|Italië|Gladiator|Oud
Noordpool|Koud|IJsbeer|Noorden|Ijs
Zuidpool|Koud|Pinguïn|Zuiden|Ijs

// SPORT & SPEL
Voetbal|Doelpunt|Bal|Scheidsrechter|Veld
Basketbal|Bal|Mand|Dribbelen|Dunken
Tennis|Racket|Bal|Net|Wimbledon
Hockey|Stick|Bal|Veld|Doelpunt
Volleybal|Net|Bal|Smash|Strand
Handbal|Bal|Doel|Werpen|Hal
Rugby|Bal|Eivormig|Scrum|Ruw
Honkbal|Knuppel|Bal|Amerika|Pitcher
Cricket|Knuppel|Bal|Engeland|Wicket
Golf|Gat|Bal|Club|Gras
Badminton|Shuttle|Racket|Net|Veer
Tafeltennis|Pingpong|Tafel|Batje|Net
Zwemmen|Water|Bad|Slag|Baantjes
Schaatsen|Ijs|Schaats|Winter|Elfstedentocht
Skiën|Sneeuw|Berg|Piste|Winter
Snowboarden|Sneeuw|Berg|Plank|Winter
Surfen|Golven|Plank|Zee|Strand
Duiken|Onderwater|Zee|Zuurstof|Bril
Roeien|Boot|Water|Peddel|Riem
Zeilen|Boot|Wind|Zeil|Water
Fietsen|Trappen|Wiel|Tour|Stuur
Hardlopen|Rennen|Marathon|Schoenen|Snel
Marathon|Rennen|Lang|Kilometers|Hardlopen
Horden|Springen|Rennen|Atletiek|Obstakel
Hoogspringen|Lat|Springen|Atletiek|Mat
Kogelstoten|Kogel|Gooien|Zwaar|Atletiek
Speerwerpen|Speer|Gooien|Atletiek|Ver
Turnen|Ringen|Brug|Salto|Gymnastiek
Judo|Gevecht|Mat|Band|Japan
Boksen|Handschoenen|Ring|Slaan|Gevecht
Schermen|Zwaard|Masker|Steken|Duel
Boogschieten|Pijl|Boog|Schieten|Doel
Darts|Pijl|Bord|Gooien|Score
Biljart|Keu|Bal|Tafel|Pot
Schaken|Bord|Koning|Zet|Paard
Dammen|Bord|Schijf|Zet|Spel
Monopoly|Bord|Geld|Straat|Hotel
Kaartspel|Kaarten|Schudden|Spelen|Troef
Pokeren|Kaarten|Inzet|Chips|Casino
Domino|Steentjes|Stippen|Rij|Spel
Puzzel|Stukjes|Legpuzzel|Doos|Leggen
Dobbelsteen|Gooien|Stippen|Spel|Zes
Verstoppertje|Zoeken|Spel|Tellen|Kinderen
Tikkertje|Rennen|Tikken|Spel|Kinderen
Touwtjespringen|Touw|Springen|Spel|Schoolplein
Hinkelen|Springen|Voet|Spel|Stoep
Knikkeren|Knikker|Spel|Rollen|Kinderen

// ENTERTAINMENT & FEEST
Verjaardag|Taart|Kaarsjes|Cadeau|Feest
Kerstboom|Kerst|Versiering|Dennenboom|Lampjes
Sinterklaas|Schoen|Pakjes|Zwarte Piet|Cadeau
Paasei|Pasen|Chocolade|Zoeken|Haas
Halloween|Pompoen|Griezelig|Kostuum|Snoep
Carnaval|Verkleden|Feest|Optocht|Zuiden
Koningsdag|Oranje|Vrijmarkt|Koning|April
Oud en nieuw|Vuurwerk|Oliebollen|Middernacht|Feest
Vuurwerk|Knallen|Nieuwjaar|Lucht|Raket
Confetti|Feest|Papier|Gooien|Kleurrijk
Ballon|Lucht|Knappen|Feest|Opblazen
Cadeau|Papier|Verjaardag|Strik|Inpakken
Disco|Dansen|Muziek|Licht|Bal
Karaoke|Zingen|Microfoon|Tekst|Scherm
Concert|Muziek|Band|Podium|Publiek
Festival|Muziek|Tent|Camping|Podium
Gitaar|Snaren|Muziek|Spelen|Rock
Piano|Toetsen|Muziek|Spelen|Zwart-wit
Viool|Strijkstok|Snaren|Muziek|Orkest
Trompet|Blazen|Muziek|Koper|Toeter
Trommel|Slaan|Muziek|Stokjes|Ritme
Fluit|Blazen|Muziek|Gaatjes|Toon
Accordeon|Muziek|Harmonica|Trekken|Knoppen
Orgel|Kerk|Muziek|Pijpen|Toetsen
Harp|Snaren|Muziek|Engel|Plukken
Cartoon|Tekenfilm|Tekening|Kind|Televisie
Superheld|Cape|Kracht|Film|Redden
Draak|Vuur|Sprookje|Vleugels|Ridder
Sprookje|Verhaal|Prinses|Heks|Eens
Prinses|Kroon|Kasteel|Sprookje|Prins
Heks|Bezem|Toverdrank|Hoed|Halloween
Toverstaf|Magie|Spreuk|Harry Potter|Zwaaien
Vampier|Bloed|Tanden|Nacht|Dracula
Spook|Griezelig|Wit|Nacht|Kasteel
Zombie|Dood|Hersenen|Griezelig|Lopen
Monster|Griezelig|Eng|Kast|Bed
Robot|Metaal|Machine|Techniek|Bliep
Buitenaards wezen|Ruimte|Ufo|Groen|Planeet
Ufo|Ruimte|Schotel|Buitenaards|Vliegen
Piraat|Schip|Schat|Zee|Papegaai
Ridder|Paard|Zwaard|Kasteel|Harnas
Cowboy|Paard|Hoed|Amerika|Western
Indiaan|Veren|Amerika|Tipi|Pijl
Ninja|Japan|Zwart|Vechten|Sterren
Gladiator|Rome|Arena|Zwaard|Vechten
Eenhoorn|Hoorn|Paard|Regenboog|Sprookje
Zeemeermin|Staart|Zee|Sprookje|Vis
Kabouter|Muts|Tuin|Klein|Baard
Reus|Groot|Sprookje|Lang|Boom
Elf|Sprookje|Oren|Bos|Magie

// TECHNIEK & MODERN
Computer|Scherm|Toetsenbord|Muis|Internet
Laptop|Computer|Scherm|Draagbaar|Toetsenbord
Toetsenbord|Toetsen|Letters|Computer|Typen
Muis|Klikken|Computer|Pijltje|Scherm
Printer|Papier|Inkt|Afdrukken|Kantoor
Telefoon|Bellen|Scherm|Nummer|Mobiel
Smartphone|Bellen|Scherm|Appjes|Mobiel
Tablet|Scherm|Aanraken|Groot|Telefoon
Oplader|Batterij|Stekker|Telefoon|Stroom
Wifi|Internet|Draadloos|Netwerk|Wachtwoord
Internet|Online|Website|Netwerk|Zoeken
Videogame|Spelen|Console|Controller|Scherm
Controller|Spelen|Knoppen|Console|Gamen
Drone|Vliegen|Camera|Afstandsbediening|Propeller
Satelliet|Ruimte|Baan|Signaal|Aarde
Raket|Ruimte|Lanceren|Vuur|Maan
Ruimtestation|Ruimte|Astronaut|Baan|Zweven
Zonnepaneel|Zon|Stroom|Dak|Energie
Elektrische auto|Stroom|Laden|Auto|Stekker
Robotstofzuiger|Schoonmaken|Rond|Stof|Automatisch
Magnetron|Warm|Keuken|Opwarmen|Bliep
Koelkast|Koud|Eten|Keuken|Deur
Vriezer|Koud|Ijs|Invriezen|Keuken
Broodrooster|Brood|Warm|Ontbijt|Knop
Waterkoker|Water|Koken|Thee|Snoer
Föhn|Haar|Droog|Warm|Wind
Elektrische tandenborstel|Tanden|Poetsen|Trillen|Batterij
Lift|Verdieping|Knop|Omhoog|Gebouw
Roltrap|Verdieping|Trap|Rollen|Winkel
Pinautomaat|Geld|Pas|Pincode|Bank
Parkeermeter|Auto|Betalen|Straat|Munten
Verkeerslicht|Rood|Groen|Straat|Wachten
Zebrapad|Oversteken|Wit|Straat|Strepen

// VERVOER
Fiets|Wiel|Trappen|Stuur|Fietspad
Step|Wiel|Stuur|Kind|Duwen
Skateboard|Wielen|Plank|Skaten|Trucs
Bus|Halte|Chauffeur|Openbaar|Reizen
Tram|Rails|Stad|Halte|Rijden
Metro|Ondergronds|Stad|Station|Rails
Trein|Rails|Station|Perron|Spoor
Vliegtuig|Vliegen|Piloot|Luchthaven|Vleugels
Helikopter|Wieken|Vliegen|Landen|Piloot
Luchtballon|Vliegen|Mand|Lucht|Warm
Zeppelin|Vliegen|Ballon|Lucht|Gas
Boot|Water|Varen|Roeien|Zeil
Kano|Water|Peddel|Roeien|Smal
Jacht|Boot|Rijk|Zee|Zeil
Veerboot|Water|Oversteken|Auto|Varen
Duikboot|Onderwater|Zee|Schip|Periscoop
Vrachtwagen|Lading|Rijden|Chauffeur|Weg
Tractor|Boer|Land|Groot|Wiel
Graafmachine|Zand|Graven|Bouwplaats|Schep
Bulldozer|Zand|Duwen|Bouwplaats|Groot
Brandweerwagen|Vuur|Blussen|Sirene|Rood
Ambulance|Ziekenhuis|Sirene|Ziek|Ongeluk
Politieauto|Agent|Sirene|Boef|Blauw
Scooter|Brommer|Motor|Rijden|Helm
Motor|Helm|Rijden|Wielen|Snel
Caravan|Kamperen|Vakantie|Trekken|Auto
Slee|Sneeuw|Sinterklaas|Rendier|Trekken
Paardenkoets|Paard|Koning|Wielen|Rijden
Rolschaatsen|Wielen|Schoenen|Rollen|Skaten
Auto|Rijden|Wielen|Stuur|Weg

// NATUUR & WEER
Regenboog|Kleuren|Regen|Zon|Boog
Onweer|Bliksem|Donder|Regen|Storm
Bliksem|Onweer|Flits|Donder|Storm
Sneeuwpop|Sneeuw|Wortel|Winter|Bal
Sneeuwbal|Sneeuw|Gooien|Winter|Koud
Ijsbaan|Schaatsen|Winter|Ijs|Glad
Storm|Wind|Waaien|Regen|Zwaar
Mist|Zicht|Wit|Grijs|Weinig
Hagel|Ijs|Regen|Buien|Korrels
Dauw|Gras|Ochtend|Nat|Druppel
Windhoos|Wind|Draaien|Storm|Amerika
Aardbeving|Trillen|Grond|Schudden|Ramp
Zonsondergang|Zon|Avond|Rood|Horizon
Zonsopgang|Zon|Ochtend|Horizon|Licht
Maan|Nacht|Ruimte|Aarde|Hemel
Ster|Nacht|Hemel|Schitteren|Ruimte
Komeet|Ruimte|Staart|Ster|Hemel
Melkweg|Sterren|Ruimte|Stelsel|Heelal
Zwarte gat|Ruimte|Zuigen|Zwaartekracht|Heelal
Zonnebloem|Geel|Bloem|Zaadjes|Zon
Roos|Bloem|Doornen|Rood|Liefde
Tulp|Bloem|Nederland|Bol|Kleur
Madeliefje|Bloem|Wit|Gras|Weide
Paardenbloem|Geel|Pluisje|Onkruid|Blazen
Cactus|Stekels|Woestijn|Plant|Prikken
Palmboom|Strand|Tropisch|Kokosnoot|Boom
Eikel|Eik|Boom|Eekhoorn|Herfst
Dennenappel|Boom|Dennen|Herfst|Bos
Paddenstoel|Bos|Herfst|Rood|Stippen
Bos|Bomen|Wandelen|Dieren|Hout
Berg|Hoog|Klimmen|Top|Sneeuw
Rivier|Water|Stromen|Brug|Zee
Meer|Water|Zwemmen|Oever|Boot
Oceaan|Zee|Groot|Water|Diep
Koraalrif|Zee|Vissen|Kleur|Duiken
Zandkasteel|Strand|Zand|Emmer|Bouwen
Schelp|Strand|Zee|Hoorn|Zand
`;

  const EXTRA_DRAW = `
// ETEN & DRINKEN
Gehaktbal, Kipnuggets, Spiesje, Schnitzel, Worst, Ham, Spek, Salami, Biefstuk, Kippenpoot,
Visstick, Zalm, Tonijn, Garnalen, Mosselen, Oester, Haring, Kabeljauw, Ei, Omelet,
Spiegelei, Roerei, Pannenkoekentoren, Stroopkruik, Kaasplank, Kaasschaaf, Brie, Gouda, Edammer, Camembert,
Pindakaas, Hagelslag, Jam, Honing, Nutella, Boter, Margarine, Yoghurt, Kwark, Vla,
Pudding, Ijsco, Schepijs, Softijs, Raket-ijsje, Ijstaart, Ijsbeker, Milkshake, Smoothie, Cappuccino,
Espresso, Cola, Fanta, Limonade, Sap, Bier, Wijnglas, Champagnefles, Cocktail, Theepot,
Theezakje, Koffiekopje, Koffiezetapparaat, Chocolademelk, Melkpak, Waterfles, Rietje, Bidon, Blikje, Fles,
Mandarijn, Grapefruit, Limoen, Nectarine, Abrikoos, Pruim, Framboos, Cranberry, Aalbes, Kruisbes,
Radijs, Selderij, Spinazie, Sla, IJsbergsla, Rucola, Boerenkool, Rode kool, Witte kool, Venkel,
Asperge, Champignon, Aubergine, Zoete aardappel, Pastinaak, Biet, Maïskolf, Erwten, Bonen, Linzen,
Chips, Pinda's, Noten, Rozijnen, Pistache, Amandel, Cashew, Walnoot, Hazelnoot, Kastanje,
Sambal, Ketchup, Mayonaise, Mosterd, Peper, Zout, Kruiden, Basilicum, Peterselie, Munt,
Gebak, Tompouce, Eclair, Soesje, Appelbol, Slagroomtaart, Vlaai, Cake, Pannenkoekenmix, Beschuit,

// DIEREN
Giraffe, Zebra, Neushoorn, Nijlpaard, Luipaard, Cheetah, Hyena, Gnoe, Antilope, Gazelle,
Kameel, Dromedaris, Lama, Alpaca, Kangoeroe, Koala, Wombat, Emoe, Wallaby, Tasmaanse duivel,
Gorilla, Chimpansee, Orang-oetan, Baviaan, Maki, Luiaard, Miereneter, Gordeldier, Stinkdier, Wasbeer,
Das, Otter, Bever, Marter, Wezel, Egel, Mol, Eekhoorn, Hamster, Cavia,
Ferret, Fret, Chinchilla, Rat, Muis, Woelrat, Lemming, Stekelvarken, Bever, Muskusrat,
Eland, Rendier, Hert, Ree, Damhert, Wild zwijn, Bizon, Buffel, Yak, Stier,
Flamingo, Pelikaan, Ooievaar, Reiger, Kraanvogel, Zwaan, Gans, Eend, Meerkoet, Kievit,
Specht, Spreeuw, Merel, Roodborstje, Koolmees, Mus, Kauw, Kraai, Raaf, Ekster,
Valk, Havik, Buizerd, Arend, Gier, Condor, Uil, Kerkuil, Papegaai, Parkiet,
Kanarie, Toekan, Kolibrie, Pauw, Fazant, Kwartel, Kalkoen, Struisvogel, Pinguïn, Albatros,
Krokodil, Alligator, Leguaan, Gekko, Kameleon, Schildpad, Slang, Python, Cobra, Hagedis,
Salamander, Axolotl, Pad, Kikkervisje, Dikkopje, Boomkikker, Pijlgifkikker, Rups, Pop, Vlinder,
Libelle, Bij, Hommel, Wesp, Hoornaar, Mier, Termiet, Kever, Lieveheersbeestje, Hert-kever,
Sprinkhaan, Krekel, Bidsprinkhaan, Schorpioen, Duizendpoot, Spin, Tarantula, Zwarte weduwe, Teek, Vlo,
Haai, Hamerhaai, Rog, Dolfijn, Bruinvis, Walvis, Orka, Zeehond, Zeeleeuw, Walrus,
Octopus, Inktvis, Kwal, Zeepaardje, Zeester, Zee-egel, Krab, Kreeft, Garnaal, Zeeschildpad,
Goudvis, Piranha, Zwaardvis, Clownvis, Paling, Snoek, Baars, Karper, Forel, Zalm,
Boerderij, Hanenkam, Kippenhok, Konijnenhok, Hondenhok, Kattenmand, Vogelkooi, Aquarium, Terrarium, Hondenriem,

// HUIS & KLEDING
Voordeur, Brievenbus, Deurbel, Deurmat, Trap, Zolder, Kelder, Schuur, Garage, Balkon,
Terras, Dakraam, Schoorsteen, Dakpan, Goot, Regenpijp, Hek, Poort, Tuinhuisje, Zwembadje,
Bank, Fauteuil, Salontafel, Boekenkast, Eettafel, Stoel, Kruk, Bureau, Bureaustoel, Lamp,
Bedlampje, Nachtkastje, Kledingkast, Spiegelkast, Wastafel, Bidet, Rolgordijn, Gordijn, Kussen, Plaid,
Tapijt, Kleed, Vloerkleed, Behang, Lijst, Klok, Wekker, Kalender, Plant, Vaas,
Pan, Koekenpan, Wok, Ovenschaal, Bakblik, Deegroller, Garde, Garde, Spatel, Pollepel,
Vergiet, Rasp, Dopopener, Kurkentrekker, Blikopener, Notenkraker, Citruspers, Mixer, Blender, Broodmes,
Bord, Kom, Beker, Mok, Glas, Vork, Mes, Lepel, Eetstokjes, Placemat,
Muts, Pet, Hoed, Helm, Sjaal, Handschoenen, Wanten, Jas, Regenjas, Trui,
Vest, Overhemd, Blouse, T-shirt, Rok, Jurk, Broek, Korte broek, Spijkerbroek, Pyjama,
Sokken, Panty, Schoenen, Laarzen, Sandalen, Pantoffels, Gympen, Hakken, Klompen, Veter,
Riem, Bretels, Das, Strikje, Knoop, Rits, Zak, Kraag, Mouw, Kapmantel,
Bril, Zonnebril, Oorbel, Armband, Ketting, Horloge, Ring, Broche, Haarspeld, Haarband,
Rugzak, Schooltas, Handtas, Koffer, Boodschappentas, Portemonnee, Sleutelhanger, Paraplu, Parasol, Wandelstok,

// SCHOOL & WERK
Klaslokaal, Schoolbord, Krijtje, Wisser, Schrift, Agenda, Rekenmachine, Liniaal, Geodriehoek, Passer,
Potlood, Pen, Stift, Markeerstift, Gum, Puntenslijper, Schaar, Lijm, Plakband, Nietmachine,
Map, Ordner, Perforator, Paperclip, Prikbord, Bureaulamp, Computer, Toetsenbord, Muis, Printer,
Schoolplein, Pauze, Rapport, Diploma, Tentamen, Huiswerk, Schoolreisje, Gymles, Tekenles, Muziekles,
Kantoor, Vergadering, Presentatie, Handtekening, Stempel, Visitekaartje, Koffieautomaat, Werkplek, Pauzeren, Contract,

// BEROEPEN
Dokter, Tandarts, Verpleegster, Chirurg, Apotheker, Dierenarts, Fysiotherapeut, Kapper, Schoonheidsspecialist, Visagist,
Bakker, Slager, Visboer, Groenteboer, Kok, Ober, Barista, Barman, Pizzabakker, Banketbakker,
Timmerman, Metselaar, Dakdekker, Loodgieter, Elektricien, Schilder, Stratenmaker, Hovenier, Boer, Imker,
Piloot, Stewardess, Kapitein, Matroos, Machinist, Buschauffeur, Taxichauffeur, Vrachtwagenchauffeur, Treinconducteur, Verkeersregelaar,
Brandweerman, Politieagent, Soldaat, Marinier, Bewaker, Douanier, Rechter, Advocaat, Burgemeester, Koning,
Leraar, Professor, Wetenschapper, Astronaut, Archeoloog, Detective, Spion, Uitvinder, Ontdekkingsreiziger, Bioloog,
Acteur, Zanger, Danser, Dirigent, Schilder, Beeldhouwer, Fotograaf, Regisseur, Presentator, Nieuwslezer,
Clown, Goochelaar, Acrobaat, Temmer, Circusdirecteur, Kunstenaar, Muzikant, Straatmuzikant, Poppenspeler, Mime,
Postbode, Vuilnisman, Schoonmaker, Bode, Conciërge, Winkelier, Kassière, Magazijnmedewerker, Bouwvakker, Kraanmachinist,

// SPORT & SPEL
Voetbal, Basketbal, Tennis, Hockey, Volleybal, Handbal, Honkbal, Rugby, Cricket, Golf,
Badminton, Tafeltennis, Squash, Zwemmen, Schaatsen, Skiën, Snowboarden, Surfen, Duiken, Roeien,
Zeilen, Fietsen, Hardlopen, Wandelen, Klimmen, Boulderen, Turnen, Judo, Karate, Boksen,
Schermen, Boogschieten, Darts, Biljart, Bowlen, Schaken, Dammen, Monopoly, Kaarten, Pokeren,
Domino, Puzzel, Dobbelsteen, Verstoppertje, Tikkertje, Touwtjespringen, Hinkelen, Knikkeren, Hoepelen, Trampolinespringen,
Doelpaal, Scheidsrechter, Fluitje, Trofee, Medaille, Podium, Finishlijn, Startblok, Stopwatch, Sportschoenen,
Racket, Knuppel, Stick, Net, Bal, Shuttle, Pijl en boog, Dartbord, Keu, Zwemvest,

// MUZIEK & KUNST
Gitaar, Piano, Viool, Cello, Trompet, Trombone, Saxofoon, Fluit, Klarinet, Trommel,
Drumstel, Xylofoon, Tamboerijn, Harp, Accordeon, Mondharmonica, Orgel, Ukelele, Dwarsfluit, Blokfluit,
Microfoon, Versterker, Luidspreker, Koptelefoon, Platenspeler, Cd, Radio, Podium, Dirigeerstok, Bladmuziek,
Verf, Penseel, Palet, Ezel, Schilderij, Potlood, Kleurpotlood, Stift, Klei, Beeldhouwwerk,
Foto, Camera, Statief, Filmrol, Klapbord, Popcorn, Bioscoopkaartje, Filmdoek, Toneel, Gordijn,

// VERVOER
Fiets, Step, Skateboard, Rolschaatsen, Brommer, Scooter, Motor, Auto, Bus, Tram,
Metro, Trein, Vliegtuig, Helikopter, Luchtballon, Zeppelin, Raket, Ruimteveer, Boot, Kano,
Zeilboot, Roeiboot, Speedboot, Veerboot, Cruiseschip, Duikboot, Vrachtwagen, Tractor, Graafmachine, Bulldozer,
Brandweerwagen, Ambulance, Politieauto, Taxi, Ijscokar, Caravan, Camper, Slee, Koets, Rolstoel,
Verkeerslicht, Zebrapad, Wegwijzer, Rotonde, Snelweg, Brug, Tunnel, Perron, Spoorwegovergang, Haltebord,
Benzinepomp, Autowasstraat, Parkeergarage, Parkeermeter, Bushalte, Treinstation, Luchthaven, Haven, Kade, Fietspad,

// NATUUR & WEER
Zon, Maan, Ster, Komeet, Planeet, Melkweg, Wolk, Regen, Sneeuw, Hagel,
Onweer, Bliksem, Regenboog, Mist, Storm, Windhoos, Overstroming, Aardbeving, Vulkaan, Lava,
Berg, Heuvel, Dal, Rivier, Beek, Meer, Plas, Zee, Oceaan, Eiland,
Strand, Duin, Woestijn, Oase, Jungle, Bos, Weide, Akker, Rotsen, Grot,
Waterval, Gletsjer, Ijsberg, Canyon, Klif, Kust, Vuurtoren, Dijk, Polder, Sloot,
Boom, Eik, Den, Palm, Struik, Gras, Mos, Varen, Klimop, Riet,
Roos, Tulp, Zonnebloem, Madeliefje, Paardenbloem, Orchidee, Lelie, Klaproos, Narcis, Hyacint,
Cactus, Aloë, Bamboe, Bonsai, Bladeren, Tak, Stam, Wortel, Zaadje, Dennenappel,
Eikel, Kastanje, Paddenstoel, Bes, Knop, Bloesem, Herfstblad, Sneeuwvlok, Ijskristal, Druppel,

// FANTASIE & FEEST
Draak, Eenhoorn, Zeemeermin, Kabouter, Elf, Reus, Trol, Heks, Tovenaar, Toverstaf,
Spook, Vampier, Weerwolf, Zombie, Mummie, Skelet, Monster, Robot, Alien, Ufo,
Piraat, Ridder, Prinses, Prins, Koning, Koningin, Kasteel, Zwaard, Schild, Kroon,
Schatkist, Schatkaart, Papegaai, Zeil, Anker, Kompas, Verrekijker, Eiland, Vlag, Kanon,
Verjaardagstaart, Kaarsje, Ballon, Slinger, Confetti, Cadeau, Strik, Feesthoed, Toeter, Vuurwerk,
Kerstboom, Kerstster, Kerstbal, Sneeuwpop, Rendier, Kerstman, Sinterklaas, Zwarte Piet, Pepernoot, Paaseitje,
Pompoen, Heksenhoed, Spinnenweb, Grafsteen, Kostuum, Masker, Carnavalsmuts, Oranje, Vlag, Lampion,

// TECHNIEK
Telefoon, Smartphone, Tablet, Laptop, Computer, Scherm, Toetsenbord, Muis, Printer, Scanner,
Router, Wifi, Oplader, Stekker, Kabel, Batterij, Powerbank, Usb-stick, Harde schijf, Server,
Drone, Robot, Satelliet, Telescoop, Microscoop, Radar, Zonnepaneel, Windmolen, Dynamo, Generator,
Magnetron, Koelkast, Vriezer, Oven, Fornuis, Afzuigkap, Vaatwasser, Wasmachine, Droger, Stofzuiger,
Föhn, Krultang, Scheerapparaat, Tandenborstel, Weegschaal, Thermometer, Rookmelder, Thermostaat, Lichtschakelaar, Dimmer,
Lift, Roltrap, Pinautomaat, Ticketautomaat, Slagboom, Camera, Alarm, Sirene, Zaklamp, Walkietalkie,

// ACTIES (uitbeelden)
Rennen, Springen, Klimmen, Kruipen, Zwemmen, Duiken, Vliegen, Dansen, Zingen, Fluiten,
Lachen, Huilen, Gapen, Niezen, Hoesten, Snurken, Slapen, Dromen, Eten, Drinken,
Koken, Bakken, Roeren, Snijden, Schillen, Afwassen, Poetsen, Stofzuigen, Strijken, Opruimen,
Schrijven, Tekenen, Schilderen, Lezen, Rekenen, Typen, Bellen, Appen, Fotograferen, Filmen,
Fietsen, Rijden, Parkeren, Tanken, Remmen, Toeteren, Sturen, Wegrijden, Oversteken, Liften,
Tuinieren, Maaien, Harken, Planten, Gieteren, Graven, Timmeren, Zagen, Boren, Hameren,
Knippen, Plakken, Vouwen, Knutselen, Breien, Naaien, Haken, Weven, Inpakken, Uitpakken,
Verven, Behangen, Betegelen, Sjouwen, Duwen, Trekken, Tillen, Gooien, Vangen, Schoppen,
Bukken, Hurken, Buigen, Strekken, Draaien, Zwaaien, Wuiven, Knikken, Schudden, Applaudisseren,
Fluisteren, Schreeuwen, Mopperen, Kletsen, Roddelen, Ruzie maken, Omhelzen, Kussen, Kietelen, Knuffelen,

// GRAPPIGE SITUATIES
Een ijsje laten vallen, Een spin in bad vinden, Niet kunnen slapen, Te laat op school komen, Je sleutels kwijt zijn,
Op een bananenschil uitglijden, In de regen zonder paraplu, Een kat uit een boom redden, Een bal in de tuin van de buren schieten,
Een tent opzetten in de storm, Een pizza bezorgen, Een verjaardagstaart aansteken, Een vriend verrassen, Een surprise party organiseren,
Een voetbal vastlopen in een boom, Een kind op de schouders dragen, Een kleine hond uitlaten, Een grote hond uitlaten,
Een koffer die niet dicht wil, Een lift die vastzit, Een trein net missen, Een vlucht missen, Een lekke band plakken,
Een kapotte paraplu, Een heel kleine auto, Een heel groot ijsje, Een verdwaalde toerist, Een zwemmer met een haaienvin,
Een pinguïn die glijdt, Een kat die in een doos springt, Een hond die zijn staart achterna rent, Een papegaai die scheldt,
Een koe op de weg, Een schaap in de trein, Een kip die oversteekt, Een olifant in een kleine kamer, Een giraf in een lift,
Een tovenaar die zijn staf kwijt is, Een draak die niesde, Een heks op een scooter, Een spook dat bang is, Een vampier bij de tandarts,
Een robot die verliefd wordt, Een alien in de supermarkt, Een astronaut zonder helm, Een ridder in een auto, Een prinses in een pretpark,
Een piraat op een fiets, Een cowboy in Amsterdam, Een clown op school, Een kok die alles laat vallen, Een kapper met een scheve schaar
`;

  // ---- Parsers -------------------------------------------------------
  function parseTaboo(block) {
    const cards = [];
    block.split('\n').forEach(raw => {
      const line = raw.trim();
      if (!line || line.startsWith('//')) return;
      const parts = line.split('|').map(p => p.trim()).filter(Boolean);
      if (parts.length < 3) return;
      const word = parts[0];
      const forbidden = parts.slice(1, 5);
      if (forbidden.some(f => f.toLowerCase() === word.toLowerCase())) return;
      cards.push({ word, forbidden });
    });
    return cards;
  }

  function parseDraw(block) {
    const words = [];
    block.split('\n').forEach(raw => {
      const line = raw.trim();
      if (!line || line.startsWith('//')) return;
      line.split(',').forEach(w => {
        const word = w.trim();
        if (word) words.push(word);
      });
    });
    return words;
  }

  const key = s => String(s).trim().toLocaleLowerCase('nl-NL');

  // ---- Samenvoegen zonder dubbelen ----------------------------------
  function mergeTaboo(target, extra) {
    const seen = new Set();
    const merged = [];
    target.concat(extra).forEach(card => {
      if (!card || !card.word || !Array.isArray(card.forbidden)) return;
      const k = key(card.word);
      if (seen.has(k)) return;
      seen.add(k);
      merged.push(card);
    });
    return merged;
  }

  function mergeDraw(target, extra, tabooWords) {
    const seen = new Set();
    const merged = [];
    target.concat(extra, tabooWords).forEach(word => {
      if (typeof word !== 'string') return;
      const k = key(word);
      if (!k || seen.has(k)) return;
      seen.add(k);
      merged.push(word.trim());
    });
    return merged;
  }

  try {
    const baseTaboo = typeof tabooCards !== 'undefined' ? tabooCards : [];
    const baseDraw = typeof drawCards !== 'undefined' ? drawCards : [];

    const allTaboo = mergeTaboo(baseTaboo, parseTaboo(EXTRA_TABOO));
    // Uitbeelden gebruikt álle woorden: eigen lijst + extra + alle taboe-woorden.
    const allDraw = mergeDraw(baseDraw, parseDraw(EXTRA_DRAW), allTaboo.map(c => c.word));

    // Zelfde array-objecten bijwerken, zodat bestaande verwijzingen blijven werken.
    baseTaboo.length = 0;
    allTaboo.forEach(c => baseTaboo.push(c));
    baseDraw.length = 0;
    allDraw.forEach(w => baseDraw.push(w));

    window.WORD_STATS = Object.freeze({ taboo: baseTaboo.length, draw: baseDraw.length });
  } catch (err) {
    // Als iets misgaat blijft het spel gewoon werken met de standaardlijsten.
    console.warn('Extra woorden niet geladen:', err);
  }
})();
