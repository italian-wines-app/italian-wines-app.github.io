const wineData = {
    "piedmont": {
        name: "Piedmont",
        wines: [
            {
                name: "Barolo",
                grape: "Nebbiolo",
                tastingNotes: ["Full-bodied", "Tar & roses", "Truffle", "Age-worthy"],
                color: "red",
                fact: "Known as the 'King of Wines', Barolo requires at least 38 months of aging. The 11 communes each offer distinct terroir expressions."
            },
            {
                name: "Barbaresco",
                grape: "Nebbiolo",
                tastingNotes: ["Elegant", "Red fruits", "Violets", "Silky tannins"],
                color: "red",
                fact: "Often called the 'Queen of Wines', Barbaresco is typically more approachable earlier than Barolo due to its marlier soils."
            },
            {
                name: "Gattinara",
                grape: "Nebbiolo (Spanna)",
                tastingNotes: ["Austere", "Mineral", "Dried herbs", "Firm structure"],
                color: "red",
                fact: "From northern Piedmont's volcanic soils, Gattinara was DOCG before Barolo. It's often blended with up to 10% Bonarda."
            },
            {
                name: "Ghemme",
                grape: "Nebbiolo (Spanna)",
                tastingNotes: ["Earthy", "Violet", "Black cherry", "Elegant tannins"],
                color: "red",
                fact: "Ghemme's glacial moraine soils produce a more approachable northern Nebbiolo than neighboring Gattinara."
            },
            {
                name: "Roero",
                grape: "Nebbiolo",
                tastingNotes: ["Perfumed", "Red fruit", "Floral", "Fresh acidity"],
                color: "red",
                fact: "From sandy soils on the left bank of the Tanaro, Roero Nebbiolo is lighter and earlier-drinking than Barolo."
            },
            {
                name: "Barbera d'Asti",
                grape: "Barbera",
                tastingNotes: ["High acidity", "Dark cherry", "Low tannin", "Plum"],
                color: "red",
                fact: "Barbera is Piedmont's most planted grape. The best examples from Asti can rival Barolo in complexity."
            },
            {
                name: "Barbera d'Alba",
                grape: "Barbera",
                tastingNotes: ["Rich", "Oak-influenced", "Blackberry", "Spice"],
                color: "red",
                fact: "Alba's Barbera often sees more oak aging than Asti's, creating a richer, more structured style."
            },
            {
                name: "Dolcetto d'Alba",
                grape: "Dolcetto",
                tastingNotes: ["Soft", "Almond", "Black fruit", "Bitter finish"],
                color: "red",
                fact: "Despite meaning 'little sweet one', Dolcetto is fully dry. It's traditionally the everyday wine of Barolo producers."
            },
            {
                name: "Dolcetto di Dogliani",
                grape: "Dolcetto",
                tastingNotes: ["Concentrated", "Licorice", "Plum", "Earthy"],
                color: "red",
                fact: "Dogliani is considered the finest zone for Dolcetto, producing wines of unusual depth and aging potential."
            },
            {
                name: "Ruché di Castagnole Monferrato",
                grape: "Ruché",
                tastingNotes: ["Aromatic", "Rose petals", "Red berries", "Spicy"],
                color: "red",
                fact: "An almost-extinct variety saved in the 1960s. Ruché is intensely aromatic, sometimes compared to Gewürztraminer."
            },
            {
                name: "Grignolino d'Asti",
                grape: "Grignolino",
                tastingNotes: ["Pale", "High tannin", "Bitter almond", "Herbal"],
                color: "red",
                fact: "A challenging grape producing pale wines with surprisingly aggressive tannins. An acquired taste beloved by locals."
            },
            {
                name: "Gavi",
                grape: "Cortese",
                tastingNotes: ["Crisp", "Citrus", "Mineral", "Almond"],
                color: "white",
                fact: "Gavi di Gavi (from the commune itself) is considered the finest expression of this Ligurian-border white."
            },
            {
                name: "Roero Arneis",
                grape: "Arneis",
                tastingNotes: ["Floral", "Pear", "Almond", "Delicate"],
                color: "white",
                fact: "Nearly extinct by the 1970s, Arneis was revived by Bruno Giacosa. The name means 'little rascal' in dialect."
            },
            {
                name: "Erbaluce di Caluso",
                grape: "Erbaluce",
                tastingNotes: ["High acid", "Green apple", "Mineral", "Citrus"],
                color: "white",
                fact: "Erbaluce makes still, sparkling, and passito wines. The passito version can age for decades."
            },
            {
                name: "Moscato d'Asti",
                grape: "Moscato Bianco",
                tastingNotes: ["Sweet", "Peach", "Orange blossom", "Lightly fizzy"],
                color: "sparkling",
                fact: "At only 5-5.5% alcohol, Moscato d'Asti is fermented once in pressurized tanks to retain natural sweetness."
            },
            {
                name: "Asti Spumante",
                grape: "Moscato Bianco",
                tastingNotes: ["Sweet", "Floral", "Grape", "Fully sparkling"],
                color: "sparkling",
                fact: "Fully sparkling unlike Moscato d'Asti, made using the Charmat method to preserve Moscato's delicate aromatics."
            },
            {
                name: "Alta Langa",
                grape: "Pinot Noir, Chardonnay",
                tastingNotes: ["Fine bubbles", "Brioche", "Apple", "Mineral"],
                color: "sparkling",
                fact: "Piedmont's traditional method sparkling wine, from high-altitude vineyards. A serious alternative to Franciacorta."
            },
            {
                name: "Brachetto d'Acqui",
                grape: "Brachetto",
                tastingNotes: ["Sweet", "Strawberry", "Rose", "Light fizz"],
                color: "sparkling",
                fact: "A sweet, aromatic red sparkling wine perfect with chocolate. Only about 100 hectares remain planted."
            }
        ]
    },
    "valle-d-aosta": {
        name: "Valle d'Aosta",
        wines: [
            {
                name: "Petite Arvine",
                grape: "Petite Arvine",
                tastingNotes: ["Crisp", "Grapefruit", "Saline", "Alpine herbs"],
                color: "white",
                fact: "Originally from Switzerland's Valais, Petite Arvine thrives at extreme altitudes near Mont Blanc."
            },
            {
                name: "Blanc de Morgex et de La Salle",
                grape: "Prié Blanc",
                tastingNotes: ["Bracing acidity", "Green apple", "Mineral", "Mountain air"],
                color: "white",
                fact: "Europe's highest vineyards at 1,200 meters. The pre-phylloxera vines grow ungrafted in sandy glacial soils."
            },
            {
                name: "Chambave Muscat",
                grape: "Moscato di Chambave",
                tastingNotes: ["Aromatic", "Apricot", "Sage", "Honeyed"],
                color: "white",
                fact: "A local Muscat variety producing both dry and passito wines in the Chambave microclimate."
            },
            {
                name: "Fumin",
                grape: "Fumin",
                tastingNotes: ["Deep color", "Wild berries", "Smoke", "Rustic"],
                color: "red",
                fact: "An indigenous grape nearly extinct until the 1990s revival. The name likely refers to its smoky character."
            },
            {
                name: "Torrette",
                grape: "Petit Rouge",
                tastingNotes: ["Medium body", "Almond", "Red berries", "Earthy"],
                color: "red",
                fact: "The most planted red variety in Valle d'Aosta, Petit Rouge makes approachable, aromatic wines."
            },
            {
                name: "Enfer d'Arvier",
                grape: "Petit Rouge",
                tastingNotes: ["Concentrated", "Dark fruit", "Herbs", "Mineral"],
                color: "red",
                fact: "The 'Hell of Arvier' refers to the intensely hot, sun-baked slopes where these vines grow."
            },
            {
                name: "Nus Malvoisie",
                grape: "Pinot Grigio",
                tastingNotes: ["Rich", "Honey", "Dried apricot", "Spice"],
                color: "white",
                fact: "Pinot Grigio here is called Malvoisie and produces a distinctive passito-style wine."
            },
            {
                name: "Cornalin",
                grape: "Cornalin",
                tastingNotes: ["Intense", "Black cherry", "Violet", "Firm tannins"],
                color: "red",
                fact: "Not the same as Swiss Cornalin. This indigenous variety produces the region's most age-worthy reds."
            }
        ]
    },
    "liguria": {
        name: "Liguria",
        wines: [
            {
                name: "Cinque Terre",
                grape: "Bosco, Albarola, Vermentino",
                tastingNotes: ["Saline", "Citrus", "Herbal", "Mineral"],
                color: "white",
                fact: "Produced from UNESCO-protected terraced vineyards so steep that harvesting is done by monorail."
            },
            {
                name: "Sciacchetrà",
                grape: "Bosco, Albarola, Vermentino",
                tastingNotes: ["Sweet", "Apricot", "Honey", "Dried herbs"],
                color: "white",
                fact: "A rare passito from Cinque Terre, requiring 3kg of grapes to make one bottle. Extremely limited production."
            },
            {
                name: "Colli di Luni Vermentino",
                grape: "Vermentino",
                tastingNotes: ["Fresh", "White peach", "Almond", "Mediterranean herbs"],
                color: "white",
                fact: "This zone straddling Liguria and Tuscany produces some of Italy's finest Vermentino."
            },
            {
                name: "Pigato",
                grape: "Pigato",
                tastingNotes: ["Aromatic", "Sage", "Peach", "Saline finish"],
                color: "white",
                fact: "Genetically identical to Vermentino but produces distinctly different, more herbal wines in Liguria."
            },
            {
                name: "Rossese di Dolceacqua",
                grape: "Rossese",
                tastingNotes: ["Light-bodied", "Rose petals", "Red berries", "Delicate"],
                color: "red",
                fact: "Napoleon reportedly loved this wine from the Italian Riviera. Best drunk slightly chilled."
            },
            {
                name: "Ormeasco di Pornassio",
                grape: "Dolcetto",
                tastingNotes: ["Fresh", "Violet", "Cherry", "Almond"],
                color: "red",
                fact: "Liguria's version of Dolcetto, brought over the mountains from Piedmont centuries ago."
            },
            {
                name: "Riviera Ligure di Ponente Granaccia",
                grape: "Grenache",
                tastingNotes: ["Spicy", "Red fruit", "Garrigue", "Warm"],
                color: "red",
                fact: "Grenache grown along the French border, showing the grape's Mediterranean character."
            },
            {
                name: "Colline di Levanto",
                grape: "Vermentino, Albarola",
                tastingNotes: ["Crisp", "Lemon", "Sea breeze", "Light"],
                color: "white",
                fact: "A lesser-known coastal white from east of Cinque Terre, perfect with the local seafood."
            }
        ]
    },
    "lombardy": {
        name: "Lombardy",
        wines: [
            {
                name: "Franciacorta Brut",
                grape: "Chardonnay, Pinot Noir, Pinot Bianco",
                tastingNotes: ["Fine mousse", "Brioche", "Citrus", "Toasty"],
                color: "sparkling",
                fact: "Italy's answer to Champagne, using identical methods. Must age at least 18 months on lees."
            },
            {
                name: "Franciacorta Satèn",
                grape: "Chardonnay",
                tastingNotes: ["Creamy", "White flowers", "Soft bubbles", "Elegant"],
                color: "sparkling",
                fact: "A blanc de blancs with lower pressure (4.5 vs 6 atmospheres), creating a silkier, more delicate sparkle."
            },
            {
                name: "Franciacorta Rosé",
                grape: "Pinot Noir, Chardonnay",
                tastingNotes: ["Strawberry", "Bread crust", "Mineral", "Refined"],
                color: "sparkling",
                fact: "Must contain at least 25% Pinot Noir. The rosé style has become increasingly prestigious."
            },
            {
                name: "Valtellina Superiore",
                grape: "Nebbiolo (Chiavennasca)",
                tastingNotes: ["Alpine", "Dried cherry", "Herbs", "Elegant tannins"],
                color: "red",
                fact: "Grown on terraces up to 800 meters, these north-facing slopes paradoxically get more sun due to reflection."
            },
            {
                name: "Sforzato di Valtellina",
                grape: "Nebbiolo (Chiavennasca)",
                tastingNotes: ["Rich", "Dried fruit", "Tobacco", "Powerful"],
                color: "red",
                fact: "Lombardy's answer to Amarone, using air-dried Nebbiolo grapes. DOCG requires 14% minimum alcohol."
            },
            {
                name: "Valtellina Superiore Sassella",
                grape: "Nebbiolo (Chiavennasca)",
                tastingNotes: ["Firm", "Mineral", "Red fruit", "Long-lived"],
                color: "red",
                fact: "Sassella is considered the finest of Valtellina's five subzones, producing the most structured wines."
            },
            {
                name: "Valtellina Superiore Grumello",
                grape: "Nebbiolo (Chiavennasca)",
                tastingNotes: ["Floral", "Cherry", "Spice", "Medium body"],
                color: "red",
                fact: "The warmest subzone of Valtellina, producing more approachable, fruit-forward Nebbiolo."
            },
            {
                name: "Lugana",
                grape: "Turbiana (Trebbiano di Lugana)",
                tastingNotes: ["Almond", "White flowers", "Mineral", "Creamy"],
                color: "white",
                fact: "From clay soils on Lake Garda's southern shore, Lugana can age surprisingly well for 5-10 years."
            },
            {
                name: "Lugana Superiore",
                grape: "Turbiana",
                tastingNotes: ["Complex", "Hazelnut", "Honey", "Structured"],
                color: "white",
                fact: "Aged at least one year, Superiore Lugana shows the variety's unexpected depth and complexity."
            },
            {
                name: "Oltrepò Pavese Metodo Classico",
                grape: "Pinot Noir",
                tastingNotes: ["Fine bubbles", "Red fruit", "Yeasty", "Fresh"],
                color: "sparkling",
                fact: "Italy's largest Pinot Noir region, historically supplying base wines for Champagne houses."
            },
            {
                name: "Oltrepò Pavese Pinot Nero",
                grape: "Pinot Noir",
                tastingNotes: ["Light", "Cherry", "Earthy", "Delicate"],
                color: "red",
                fact: "Still red Pinot Noir from Oltrepò is gaining recognition, especially from higher altitude sites."
            },
            {
                name: "Bonarda dell'Oltrepò Pavese",
                grape: "Croatina",
                tastingNotes: ["Fizzy", "Plum", "Violet", "Fresh"],
                color: "red",
                fact: "Despite the name, this is made from Croatina, not Bonarda. Often lightly sparkling (frizzante)."
            },
            {
                name: "Moscato di Scanzo",
                grape: "Moscato di Scanzo",
                tastingNotes: ["Sweet", "Rose", "Red berries", "Intense"],
                color: "red",
                fact: "Italy's rarest DOCG, from only 30 hectares. A sweet red passito made from an ancient Muscat variety."
            },
            {
                name: "San Colombano al Lambro",
                grape: "Croatina, Barbera, Uva Rara",
                tastingNotes: ["Fresh", "Red fruit", "Light tannins", "Easy"],
                color: "red",
                fact: "Milan's only local wine, from a tiny DOC completely surrounded by the city's urban sprawl."
            }
        ]
    },
    "trentino-alto-adige": {
        name: "Trentino-Alto Adige",
        wines: [
            {
                name: "Teroldego Rotaliano",
                grape: "Teroldego",
                tastingNotes: ["Inky", "Blackberry", "Almond", "Fresh acidity"],
                color: "red",
                fact: "DNA testing revealed Teroldego is a parent of Lagrein and grandparent of Syrah. Grows only in Rotaliano."
            },
            {
                name: "Alto Adige Gewürztraminer",
                grape: "Gewürztraminer",
                tastingNotes: ["Lychee", "Rose petals", "Ginger", "Rich"],
                color: "white",
                fact: "The village of Tramin (Termeno) is this grape's ancestral home. Alto Adige versions are world-class."
            },
            {
                name: "Alto Adige Pinot Bianco",
                grape: "Pinot Bianco",
                tastingNotes: ["Elegant", "Apple", "Hazelnut", "Mineral"],
                color: "white",
                fact: "The cool Alpine climate produces some of Italy's finest Pinot Bianco, with remarkable freshness."
            },
            {
                name: "Alto Adige Pinot Grigio",
                grape: "Pinot Grigio",
                tastingNotes: ["Crisp", "Pear", "Citrus", "Clean"],
                color: "white",
                fact: "Forget cheap Pinot Grigio—Alto Adige's mountain versions show what this grape can really achieve."
            },
            {
                name: "Alto Adige Sauvignon",
                grape: "Sauvignon Blanc",
                tastingNotes: ["Intense", "Elderflower", "Tomato leaf", "Mineral"],
                color: "white",
                fact: "Alto Adige Sauvignon rivals Loire and Marlborough, with an Alpine minerality all its own."
            },
            {
                name: "Alto Adige Sylvaner",
                grape: "Sylvaner",
                tastingNotes: ["Delicate", "Floral", "Hay", "Refreshing"],
                color: "white",
                fact: "Rare in Italy, Sylvaner thrives in the Valle Isarco, producing ethereal, aromatic whites."
            },
            {
                name: "Alto Adige Kerner",
                grape: "Kerner",
                tastingNotes: ["Aromatic", "Citrus", "Nutmeg", "Lively"],
                color: "white",
                fact: "A German crossing of Schiava and Riesling that has found a perfect home in Alto Adige's high vineyards."
            },
            {
                name: "Alto Adige Müller-Thurgau",
                grape: "Müller-Thurgau",
                tastingNotes: ["Fresh", "Muscat", "Apple", "Light"],
                color: "white",
                fact: "Often dismissed elsewhere, Müller-Thurgau reaches real distinction in the Valle Isarco's high altitudes."
            },
            {
                name: "Alto Adige Lagrein",
                grape: "Lagrein",
                tastingNotes: ["Deep purple", "Chocolate", "Blackberry", "Velvety"],
                color: "red",
                fact: "An ancient indigenous variety rediscovered in the 1990s. The rosé version is called Lagrein Kretzer."
            },
            {
                name: "Alto Adige Schiava",
                grape: "Schiava (Vernatsch)",
                tastingNotes: ["Light", "Almond", "Strawberry", "Cotton candy"],
                color: "red",
                fact: "The traditional everyday red of South Tyrol, served chilled with speck. Light but utterly charming."
            },
            {
                name: "Alto Adige Pinot Nero",
                grape: "Pinot Noir",
                tastingNotes: ["Elegant", "Cherry", "Forest floor", "Silky"],
                color: "red",
                fact: "Some of Italy's best Pinot Noir comes from Mazzon and other high-altitude Alto Adige sites."
            },
            {
                name: "Trento DOC",
                grape: "Chardonnay, Pinot Noir",
                tastingNotes: ["Fine perlage", "Apple", "Bread crust", "Fresh"],
                color: "sparkling",
                fact: "Traditional method sparkling from mountain vineyards, with exceptional acidity from the cool climate."
            },
            {
                name: "Trentino Marzemino",
                grape: "Marzemino",
                tastingNotes: ["Violet", "Sour cherry", "Almond", "Soft"],
                color: "red",
                fact: "Mozart's favorite wine—Don Giovanni sings its praises. Best from the Isera zone near Lake Garda."
            },
            {
                name: "Trentino Nosiola",
                grape: "Nosiola",
                tastingNotes: ["Hazelnut", "Fresh", "Floral", "Light"],
                color: "white",
                fact: "The name means 'little hazelnut'. Also makes Vino Santo Trentino, dried on racks for months."
            },
            {
                name: "Vino Santo Trentino",
                grape: "Nosiola",
                tastingNotes: ["Intense", "Dried apricot", "Honey", "Walnut"],
                color: "white",
                fact: "Grapes dry until Holy Week before pressing, then age 4+ years. One of Italy's great dessert wines."
            }
        ]
    },
    "veneto": {
        name: "Veneto",
        wines: [
            {
                name: "Amarone della Valpolicella",
                grape: "Corvina, Rondinella, Corvinone",
                tastingNotes: ["Powerful", "Raisin", "Chocolate", "Dried cherry"],
                color: "red",
                fact: "Grapes dry for 3-4 months losing 30-40% weight. A 'failed' Recioto that fermented dry became Amarone."
            },
            {
                name: "Recioto della Valpolicella",
                grape: "Corvina, Rondinella, Corvinone",
                tastingNotes: ["Sweet", "Cherry jam", "Chocolate", "Velvet"],
                color: "red",
                fact: "The original Valpolicella style—sweet, made from dried grapes. Amarone is its dry offspring."
            },
            {
                name: "Valpolicella Ripasso",
                grape: "Corvina, Rondinella, Corvinone",
                tastingNotes: ["Rich", "Cherry", "Spice", "Smooth"],
                color: "red",
                fact: "Regular Valpolicella re-fermented on Amarone lees, adding richness without full appassimento."
            },
            {
                name: "Valpolicella Classico Superiore",
                grape: "Corvina, Rondinella, Molinara",
                tastingNotes: ["Fresh", "Sour cherry", "Almond", "Light"],
                color: "red",
                fact: "From the original hillside zone, this fresh style is perfect slightly chilled with light dishes."
            },
            {
                name: "Soave Classico",
                grape: "Garganega",
                tastingNotes: ["Almond", "Chamomile", "Mineral", "Crisp"],
                color: "white",
                fact: "From volcanic soils east of Verona, true Soave Classico is nothing like bland supermarket versions."
            },
            {
                name: "Soave Superiore",
                grape: "Garganega",
                tastingNotes: ["Complex", "Honey", "Herbs", "Structured"],
                color: "white",
                fact: "DOCG since 2001, Soave Superiore must be aged and shows Garganega's true potential."
            },
            {
                name: "Recioto di Soave",
                grape: "Garganega",
                tastingNotes: ["Sweet", "Apricot", "Almond paste", "Golden"],
                color: "white",
                fact: "A luscious dessert wine from dried Garganega grapes, often compared to Sauternes."
            },
            {
                name: "Prosecco Superiore di Valdobbiadene",
                grape: "Glera",
                tastingNotes: ["Apple", "Pear", "Floral", "Fresh"],
                color: "sparkling",
                fact: "DOCG Prosecco from steep hills produces wines far superior to generic DOC versions."
            },
            {
                name: "Prosecco Superiore di Conegliano",
                grape: "Glera",
                tastingNotes: ["Citrus", "White flowers", "Mineral", "Delicate"],
                color: "sparkling",
                fact: "The eastern DOCG zone, often considered more mineral and structured than Valdobbiadene."
            },
            {
                name: "Cartizze",
                grape: "Glera",
                tastingNotes: ["Intense", "Ripe apple", "Honey", "Elegant"],
                color: "sparkling",
                fact: "The 107-hectare Grand Cru of Prosecco—among Italy's most expensive vineyard land per hectare."
            },
            {
                name: "Col Fondo Prosecco",
                grape: "Glera",
                tastingNotes: ["Cloudy", "Yeasty", "Apple cider", "Rustic"],
                color: "sparkling",
                fact: "Traditional 'with sediment' style, unfiltered and refermented in bottle. The original Prosecco."
            },
            {
                name: "Bardolino",
                grape: "Corvina, Rondinella, Molinara",
                tastingNotes: ["Light", "Cherry", "Almond", "Refreshing"],
                color: "red",
                fact: "Lake Garda's answer to Beaujolais—serve chilled in summer. Chiaretto is the rosé version."
            },
            {
                name: "Bardolino Chiaretto",
                grape: "Corvina, Rondinella, Molinara",
                tastingNotes: ["Pale pink", "Strawberry", "Fresh", "Dry"],
                color: "red",
                fact: "One of Italy's finest rosés, benefiting from Lake Garda's moderating influence."
            },
            {
                name: "Custoza",
                grape: "Garganega, Trebbianello, Bianca Fernanda",
                tastingNotes: ["Fresh", "Floral", "Pear", "Almonds"],
                color: "white",
                fact: "A blend of up to 10 varieties from the hills south of Lake Garda. Great value alternative to Soave."
            },
            {
                name: "Durello Metodo Classico",
                grape: "Durella",
                tastingNotes: ["High acid", "Green apple", "Yeast", "Mineral"],
                color: "sparkling",
                fact: "Volcanic-soil sparkler from Lessini hills. Durella's extreme acidity makes exceptional fizz."
            },
            {
                name: "Breganze Torcolato",
                grape: "Vespaiola",
                tastingNotes: ["Sweet", "Apricot", "Honey", "Almond"],
                color: "white",
                fact: "A rare passito from Vespaiola grapes, named for the twisted ropes used to hang-dry them."
            }
        ]
    },
    "friuli-venezia-giulia": {
        name: "Friuli-Venezia Giulia",
        wines: [
            {
                name: "Friulano",
                grape: "Friulano (Sauvignonasse)",
                tastingNotes: ["Almond", "White flowers", "Citrus", "Herbaceous"],
                color: "white",
                fact: "Formerly called Tocai Friulano until Hungary complained. The signature white of Friuli."
            },
            {
                name: "Ribolla Gialla",
                grape: "Ribolla Gialla",
                tastingNotes: ["High acid", "Citrus", "Green apple", "Mineral"],
                color: "white",
                fact: "An ancient variety dating to 1299. Now famous for extended-maceration 'orange wine' versions."
            },
            {
                name: "Collio Bianco",
                grape: "Friulano, Malvasia, Ribolla",
                tastingNotes: ["Complex", "Stone fruit", "Honey", "Structured"],
                color: "white",
                fact: "Traditional Collio blend, often oak-aged, showing the hills' distinctive ponca (marl) soils."
            },
            {
                name: "Pinot Grigio Collio",
                grape: "Pinot Grigio",
                tastingNotes: ["Rich", "Pear", "Spice", "Copper tint"],
                color: "white",
                fact: "The copper-hued Pinot Grigio ramato style originated here. Nothing like commercial versions."
            },
            {
                name: "Verduzzo Friulano",
                grape: "Verduzzo Friulano",
                tastingNotes: ["Golden", "Apricot", "Honey", "Bitter almond"],
                color: "white",
                fact: "Makes both dry and passito wines. Ramandolo DOCG is the sweet version from specific hillsides."
            },
            {
                name: "Ramandolo",
                grape: "Verduzzo Friulano",
                tastingNotes: ["Sweet", "Dried fig", "Honey", "Spice"],
                color: "white",
                fact: "Italy's smallest DOCG—sweet wine from a single hillside with perfect botrytis conditions."
            },
            {
                name: "Picolit",
                grape: "Picolit",
                tastingNotes: ["Delicate", "Acacia honey", "Apricot", "Rose"],
                color: "white",
                fact: "A naturally low-yielding grape producing one of Italy's rarest sweet wines. Called 'the wine of Popes.'"
            },
            {
                name: "Sauvignon Collio",
                grape: "Sauvignon Blanc",
                tastingNotes: ["Intense", "Elderflower", "Tomato leaf", "Mineral"],
                color: "white",
                fact: "Collio's Sauvignon Blanc rivals the world's best, with distinctive smoky, mineral character."
            },
            {
                name: "Vitovska",
                grape: "Vitovska",
                tastingNotes: ["Saline", "Stone fruit", "Herbal", "Mineral"],
                color: "white",
                fact: "Indigenous to the Karst plateau's limestone, producing wines with remarkable salinity."
            },
            {
                name: "Malvasia Istriana",
                grape: "Malvasia Istriana",
                tastingNotes: ["Aromatic", "Apricot", "Almond", "Sea breeze"],
                color: "white",
                fact: "From the Karst and Istrian coast, this Malvasia variety makes distinctive aromatic whites."
            },
            {
                name: "Refosco dal Peduncolo Rosso",
                grape: "Refosco",
                tastingNotes: ["Deep color", "Plum", "Herbs", "Firm tannins"],
                color: "red",
                fact: "The 'red stalk' distinguishes this from other Refoscos. Makes structured, age-worthy reds."
            },
            {
                name: "Schioppettino",
                grape: "Schioppettino (Ribolla Nera)",
                tastingNotes: ["Peppery", "Violet", "Wild berries", "Spicy"],
                color: "red",
                fact: "Nearly extinct, saved by a handful of producers in the 1970s. Known for its distinctive pepper notes."
            },
            {
                name: "Pignolo",
                grape: "Pignolo",
                tastingNotes: ["Tannic", "Dark fruit", "Leather", "Age-worthy"],
                color: "red",
                fact: "A rare, difficult indigenous grape producing wines compared to Barolo. Nearly extinct until recently."
            },
            {
                name: "Tazzelenghe",
                grape: "Tazzelenghe",
                tastingNotes: ["Tannic", "Sour cherry", "Herbal", "Rustic"],
                color: "red",
                fact: "The name means 'tongue cutter' in Friulian dialect, referring to its aggressive tannins."
            },
            {
                name: "Terrano",
                grape: "Terrano (Refošk)",
                tastingNotes: ["High acid", "Sour cherry", "Iron", "Mineral"],
                color: "red",
                fact: "From the Karst's red iron-rich soils. Extremely high acidity makes it distinctive and food-friendly."
            }
        ]
    },
    "emilia-romagna": {
        name: "Emilia-Romagna",
        wines: [
            {
                name: "Lambrusco di Sorbara",
                grape: "Lambrusco di Sorbara",
                tastingNotes: ["Pale ruby", "Violet", "Strawberry", "Bone dry"],
                color: "sparkling",
                fact: "The finest, most delicate Lambrusco variety. Naturally pale due to poor pigment retention."
            },
            {
                name: "Lambrusco Grasparossa di Castelvetro",
                grape: "Lambrusco Grasparossa",
                tastingNotes: ["Deep purple", "Blackberry", "Earthy", "Tannic"],
                color: "sparkling",
                fact: "The most powerful Lambrusco, named for its red-stemmed ('red branch') vines."
            },
            {
                name: "Lambrusco Salamino di Santa Croce",
                grape: "Lambrusco Salamino",
                tastingNotes: ["Medium body", "Cherry", "Floral", "Fresh"],
                color: "sparkling",
                fact: "Named for its salami-shaped grape clusters. The most widely planted Lambrusco variety."
            },
            {
                name: "Lambrusco di Modena",
                grape: "Lambrusco blend",
                tastingNotes: ["Fruity", "Red berries", "Light fizz", "Dry to sweet"],
                color: "sparkling",
                fact: "DOC covering all Modenese Lambrusco. Quality ranges from mass-produced to artisanal gems."
            },
            {
                name: "Lambrusco Reggiano",
                grape: "Lambrusco Marani, Salamino",
                tastingNotes: ["Light", "Floral", "Fresh", "Easy-drinking"],
                color: "sparkling",
                fact: "From Reggio Emilia, the birthplace of Parmigiano-Reggiano. Perfect with the local cuisine."
            },
            {
                name: "Colli Bolognesi Pignoletto",
                grape: "Pignoletto (Grechetto Gentile)",
                tastingNotes: ["Crisp", "Citrus", "Almond", "Delicate fizz"],
                color: "white",
                fact: "Bologna's signature white, now DOCG. Available still, frizzante, and spumante."
            },
            {
                name: "Sangiovese di Romagna",
                grape: "Sangiovese",
                tastingNotes: ["Cherry", "Violet", "Fresh acid", "Medium body"],
                color: "red",
                fact: "Romagna's Sangiovese predates Tuscany's. Different clones produce a distinctly brighter style."
            },
            {
                name: "Romagna Sangiovese Superiore",
                grape: "Sangiovese",
                tastingNotes: ["Concentrated", "Dark cherry", "Spice", "Structured"],
                color: "red",
                fact: "Superiore wines come from hillside vineyards with lower yields, showing real depth."
            },
            {
                name: "Romagna Sangiovese Riserva",
                grape: "Sangiovese",
                tastingNotes: ["Complex", "Dried cherry", "Leather", "Age-worthy"],
                color: "red",
                fact: "Minimum 2 years aging required. The best Romagnan producers rival Tuscan quality."
            },
            {
                name: "Albana di Romagna",
                grape: "Albana",
                tastingNotes: ["Full-bodied", "Apricot", "Almond", "Slightly bitter"],
                color: "white",
                fact: "Italy's first white wine DOCG (1987). Available dry, semi-sweet, and passito styles."
            },
            {
                name: "Albana di Romagna Passito",
                grape: "Albana",
                tastingNotes: ["Sweet", "Dried apricot", "Honey", "Orange peel"],
                color: "white",
                fact: "A luscious dessert wine from dried Albana grapes, with remarkable complexity."
            },
            {
                name: "Colli di Parma Malvasia",
                grape: "Malvasia di Candia",
                tastingNotes: ["Aromatic", "Peach", "Floral", "Light fizz"],
                color: "white",
                fact: "Often frizzante, this aromatic white is the traditional pairing for Parma ham."
            },
            {
                name: "Gutturnio",
                grape: "Barbera, Croatina",
                tastingNotes: ["Fresh", "Red fruit", "Light fizz", "Easy"],
                color: "red",
                fact: "Named after a Roman drinking vessel. Piacenza's signature red, often lightly sparkling."
            },
            {
                name: "Ortrugo",
                grape: "Ortrugo",
                tastingNotes: ["Crisp", "Green apple", "Mineral", "Light"],
                color: "white",
                fact: "A local Piacenza white grape producing fresh, easy-drinking wines, often frizzante."
            },
            {
                name: "Bosco Eliceo Fortana",
                grape: "Fortana",
                tastingNotes: ["Deep red", "Forest fruits", "Slight fizz", "Rustic"],
                color: "red",
                fact: "From sandy coastal vineyards near Ferrara. Pre-phylloxera vines still grow ungrafted here."
            }
        ]
    },
    "tuscany": {
        name: "Tuscany",
        wines: [
            {
                name: "Brunello di Montalcino",
                grape: "Sangiovese Grosso",
                tastingNotes: ["Powerful", "Dried cherry", "Tobacco", "Earthy"],
                color: "red",
                fact: "Requires 5 years aging (6 for Riserva). Only 100% Sangiovese since the 1970s reforms."
            },
            {
                name: "Rosso di Montalcino",
                grape: "Sangiovese Grosso",
                tastingNotes: ["Fresh", "Cherry", "Floral", "Approachable"],
                color: "red",
                fact: "The 'baby Brunello'—same grapes, less aging. Great value introduction to Montalcino."
            },
            {
                name: "Chianti Classico",
                grape: "Sangiovese (80-100%)",
                tastingNotes: ["Cherry", "Violet", "Herbs", "Firm tannins"],
                color: "red",
                fact: "The Gallo Nero (Black Rooster) marks authentic Classico zone wines. Now 100% Sangiovese allowed."
            },
            {
                name: "Chianti Classico Riserva",
                grape: "Sangiovese",
                tastingNotes: ["Structured", "Dried cherry", "Leather", "Spice"],
                color: "red",
                fact: "Minimum 24 months aging required, producing more complex, age-worthy wines."
            },
            {
                name: "Chianti Classico Gran Selezione",
                grape: "Sangiovese",
                tastingNotes: ["Concentrated", "Complex", "Long finish", "Elegant"],
                color: "red",
                fact: "The top tier since 2014—estate grown, 30 months aging. Single vineyard wines."
            },
            {
                name: "Chianti Rufina",
                grape: "Sangiovese",
                tastingNotes: ["Fresh", "Bright fruit", "Mineral", "Age-worthy"],
                color: "red",
                fact: "The highest-altitude Chianti subzone, producing some of the longest-lived wines."
            },
            {
                name: "Vino Nobile di Montepulciano",
                grape: "Sangiovese (Prugnolo Gentile)",
                tastingNotes: ["Elegant", "Plum", "Violet", "Refined tannins"],
                color: "red",
                fact: "The 'Noble Wine' was Italy's first DOCG (1980). Made from Sangiovese clone Prugnolo Gentile."
            },
            {
                name: "Rosso di Montepulciano",
                grape: "Sangiovese (Prugnolo Gentile)",
                tastingNotes: ["Fresh", "Cherry", "Herbs", "Easy-drinking"],
                color: "red",
                fact: "Earlier-drinking version of Vino Nobile, great value from prestigious vineyards."
            },
            {
                name: "Carmignano",
                grape: "Sangiovese, Cabernet",
                tastingNotes: ["Complex", "Black cherry", "Cedar", "Structured"],
                color: "red",
                fact: "Cabernet was mandated here since 1716—predating Bordeaux practices. A historic anomaly."
            },
            {
                name: "Bolgheri Sassicaia",
                grape: "Cabernet Sauvignon, Cabernet Franc",
                tastingNotes: ["Cassis", "Cedar", "Mineral", "Refined"],
                color: "red",
                fact: "Italy's most famous 'Super Tuscan', given its own single-estate DOC status."
            },
            {
                name: "Bolgheri Superiore",
                grape: "Cabernet Sauvignon, Merlot, Cabernet Franc",
                tastingNotes: ["Powerful", "Dark fruit", "Chocolate", "Velvet"],
                color: "red",
                fact: "The premium Bolgheri tier, including iconic wines like Ornellaia and Masseto."
            },
            {
                name: "Morellino di Scansano",
                grape: "Sangiovese (Morellino)",
                tastingNotes: ["Wild cherry", "Mediterranean herbs", "Spicy", "Soft"],
                color: "red",
                fact: "From coastal Maremma, 'Morellino' refers to the local cherry-dark Sangiovese clone."
            },
            {
                name: "Vernaccia di San Gimignano",
                grape: "Vernaccia",
                tastingNotes: ["Crisp", "Almond", "Citrus", "Mineral"],
                color: "white",
                fact: "Italy's first DOC white (1966). Medieval towers of San Gimignano guard the vineyards."
            },
            {
                name: "Vin Santo del Chianti Classico",
                grape: "Trebbiano, Malvasia",
                tastingNotes: ["Amber", "Caramel", "Dried fig", "Hazelnut"],
                color: "white",
                fact: "Grapes dry until December, then age 3+ years in small barrels. Traditionally served with cantuccini."
            },
            {
                name: "Vin Santo Occhio di Pernice",
                grape: "Sangiovese",
                tastingNotes: ["Pink-amber", "Strawberry", "Honey", "Complex"],
                color: "red",
                fact: "Rare pink Vin Santo from Sangiovese. 'Partridge eye' describes its distinctive color."
            },
            {
                name: "Montecucco Sangiovese",
                grape: "Sangiovese",
                tastingNotes: ["Fresh", "Cherry", "Herbs", "Balanced"],
                color: "red",
                fact: "Between Montalcino and Scansano, this DOCG offers Brunello-adjacent quality at lower prices."
            },
            {
                name: "Pomino",
                grape: "Chardonnay, Pinot Bianco",
                tastingNotes: ["Elegant", "Apple", "Hazelnut", "Fresh"],
                color: "white",
                fact: "A cool-climate Tuscan anomaly where French varieties have been grown since the 1800s."
            },
            {
                name: "Ansonica Costa dell'Argentario",
                grape: "Ansonica (Inzolia)",
                tastingNotes: ["Saline", "Citrus", "Mediterranean herbs", "Fresh"],
                color: "white",
                fact: "From the coastal Argentario peninsula, showing sea-influenced character."
            }
        ]
    },
    "umbria": {
        name: "Umbria",
        wines: [
            {
                name: "Sagrantino di Montefalco",
                grape: "Sagrantino",
                tastingNotes: ["Massive tannins", "Blackberry", "Leather", "Chocolate"],
                color: "red",
                fact: "The world's most tannic wine. Originally made sweet (passito); dry style dates only to 1979."
            },
            {
                name: "Sagrantino di Montefalco Passito",
                grape: "Sagrantino",
                tastingNotes: ["Sweet", "Dried black fruit", "Spice", "Dense"],
                color: "red",
                fact: "The traditional sweet style, still produced alongside dry. Pairs with chocolate and blue cheese."
            },
            {
                name: "Montefalco Rosso",
                grape: "Sangiovese, Sagrantino",
                tastingNotes: ["Medium body", "Cherry", "Spice", "Approachable"],
                color: "red",
                fact: "Sagrantino blended with Sangiovese creates a more accessible wine than pure Sagrantino."
            },
            {
                name: "Orvieto Classico",
                grape: "Grechetto, Trebbiano",
                tastingNotes: ["Fresh", "White flowers", "Almond", "Citrus"],
                color: "white",
                fact: "The historic wine of Papal Rome, made in caves beneath Orvieto for centuries."
            },
            {
                name: "Orvieto Classico Superiore",
                grape: "Grechetto, Trebbiano",
                tastingNotes: ["Complex", "Honey", "Mineral", "Structured"],
                color: "white",
                fact: "From select vineyard sites with lower yields, showing unexpected depth."
            },
            {
                name: "Orvieto Muffa Nobile",
                grape: "Grechetto, Trebbiano",
                tastingNotes: ["Sweet", "Botrytis", "Apricot", "Honey"],
                color: "white",
                fact: "Umbria's rare botrytis wine, made when morning fog conditions allow noble rot."
            },
            {
                name: "Grechetto di Todi",
                grape: "Grechetto",
                tastingNotes: ["Full-bodied", "Stone fruit", "Nuts", "Rich"],
                color: "white",
                fact: "Pure Grechetto from Todi's hills, showing the variety's potential for complexity."
            },
            {
                name: "Torgiano Rosso Riserva",
                grape: "Sangiovese",
                tastingNotes: ["Elegant", "Cherry", "Tobacco", "Spice"],
                color: "red",
                fact: "DOCG thanks largely to one producer (Lungarotti). Among Italy's finest Sangiovese outside Tuscany."
            },
            {
                name: "Colli Martani Sangiovese",
                grape: "Sangiovese",
                tastingNotes: ["Fresh", "Bright fruit", "Herbs", "Light tannins"],
                color: "red",
                fact: "From the Martani hills, a softer, more accessible style of Sangiovese."
            },
            {
                name: "Lago di Corbara",
                grape: "Various (Cabernet, Merlot, Sangiovese)",
                tastingNotes: ["Varies", "Lake influence", "Fresh", "Balanced"],
                color: "red",
                fact: "A newer DOC near a man-made lake, experimenting with various international varieties."
            }
        ]
    },
    "marche": {
        name: "Marche",
        wines: [
            {
                name: "Verdicchio dei Castelli di Jesi Classico",
                grape: "Verdicchio",
                tastingNotes: ["Crisp", "Lemon", "Almond", "Saline"],
                color: "white",
                fact: "The Castelli di Jesi zone produces Italy's most age-worthy white wines. Some cellar 20+ years."
            },
            {
                name: "Verdicchio dei Castelli di Jesi Riserva",
                grape: "Verdicchio",
                tastingNotes: ["Complex", "Honey", "Herbs", "Mineral depth"],
                color: "white",
                fact: "DOCG since 2010, Riserva wines age minimum 18 months, revealing remarkable complexity."
            },
            {
                name: "Verdicchio di Matelica",
                grape: "Verdicchio",
                tastingNotes: ["High acid", "Green apple", "Floral", "Leaner"],
                color: "white",
                fact: "From an inland valley, Matelica Verdicchio is more austere than coastal Jesi versions."
            },
            {
                name: "Verdicchio di Matelica Riserva",
                grape: "Verdicchio",
                tastingNotes: ["Intense", "Mineral", "Citrus", "Structured"],
                color: "white",
                fact: "DOCG requiring 18 months aging, showing Matelica's distinct terroir character."
            },
            {
                name: "Conero Rosso",
                grape: "Montepulciano",
                tastingNotes: ["Full-bodied", "Dark cherry", "Mediterranean herbs", "Velvet"],
                color: "red",
                fact: "DOCG from Monte Conero's seaside slopes, producing the region's most serious reds."
            },
            {
                name: "Rosso Piceno",
                grape: "Montepulciano, Sangiovese",
                tastingNotes: ["Medium body", "Cherry", "Fresh", "Easy-drinking"],
                color: "red",
                fact: "Marche's most widely produced red, blending local Montepulciano with Sangiovese."
            },
            {
                name: "Rosso Piceno Superiore",
                grape: "Montepulciano, Sangiovese",
                tastingNotes: ["Structured", "Dark fruit", "Spice", "Age-worthy"],
                color: "red",
                fact: "From specific hillside vineyards near Ascoli, with stricter production rules."
            },
            {
                name: "Offida Pecorino",
                grape: "Pecorino",
                tastingNotes: ["Fresh", "Herbal", "Citrus", "Mineral"],
                color: "white",
                fact: "An ancient grape rediscovered in the 1980s. Nothing to do with the cheese—named for sheep-grazing land."
            },
            {
                name: "Offida Passerina",
                grape: "Passerina",
                tastingNotes: ["Light", "Floral", "Green apple", "Refreshing"],
                color: "white",
                fact: "A native grape making fresh wines, named for the sparrows that love the sweet grapes."
            },
            {
                name: "Lacrima di Morro d'Alba",
                grape: "Lacrima",
                tastingNotes: ["Intensely aromatic", "Rose", "Strawberry", "Soft"],
                color: "red",
                fact: "Named for 'tears' of juice that weep from ripe grapes. Extremely aromatic and distinctive."
            },
            {
                name: "Bianchello del Metauro",
                grape: "Bianchello (Biancame)",
                tastingNotes: ["Light", "Fresh", "Citrus", "Delicate"],
                color: "white",
                fact: "From the Metauro valley near Urbino, a crisp everyday white perfect with seafood."
            },
            {
                name: "Vernaccia di Serrapetrona",
                grape: "Vernaccia Nera",
                tastingNotes: ["Sweet sparkling", "Wild berries", "Rose", "Fresh"],
                color: "sparkling",
                fact: "Italy's only red sparkling DOCG, made semi-sweet from dried Vernaccia Nera grapes."
            }
        ]
    },
    "lazio": {
        name: "Lazio",
        wines: [
            {
                name: "Frascati Superiore",
                grape: "Malvasia, Trebbiano, Bombino",
                tastingNotes: ["Fresh", "White flowers", "Almond", "Light"],
                color: "white",
                fact: "The white wine of Rome since ancient times. DOCG Superiore has stricter quality standards."
            },
            {
                name: "Frascati Cannellino",
                grape: "Malvasia, Trebbiano",
                tastingNotes: ["Off-dry", "Honey", "Apricot", "Delicate"],
                color: "white",
                fact: "A semi-sweet style, traditionally from late-harvest grapes. 'Little cannolo' describes its gentle sweetness."
            },
            {
                name: "Cesanese del Piglio",
                grape: "Cesanese",
                tastingNotes: ["Cherry", "Violet", "Spice", "Medium tannins"],
                color: "red",
                fact: "Lazio's only red DOCG, from an indigenous grape grown since Roman times."
            },
            {
                name: "Cesanese di Olevano Romano",
                grape: "Cesanese",
                tastingNotes: ["Lighter", "Red berries", "Herbal", "Fresh"],
                color: "red",
                fact: "A different expression of Cesanese from the volcanic hills east of Rome."
            },
            {
                name: "Cesanese di Affile",
                grape: "Cesanese d'Affile",
                tastingNotes: ["Elegant", "Wild cherry", "Floral", "Soft"],
                color: "red",
                fact: "The finest Cesanese clone, from the small town of Affile in the Aniene valley."
            },
            {
                name: "Castelli Romani",
                grape: "Malvasia, Trebbiano",
                tastingNotes: ["Simple", "Fresh", "Fruity", "Easy"],
                color: "white",
                fact: "The everyday white of the Roman hills, covering a broad area south of the city."
            },
            {
                name: "Est! Est!! Est!!! di Montefiascone",
                grape: "Trebbiano, Malvasia",
                tastingNotes: ["Light", "Fresh", "Citrus", "Simple"],
                color: "white",
                fact: "Legend says a bishop's scout marked good wine with 'Est'. Here he wrote it three times."
            },
            {
                name: "Orvieto (Lazio portion)",
                grape: "Grechetto, Trebbiano",
                tastingNotes: ["Crisp", "Almond", "Fresh", "Clean"],
                color: "white",
                fact: "Part of Orvieto DOC extends into Lazio, near the Umbrian border."
            },
            {
                name: "Aleatico di Gradoli",
                grape: "Aleatico",
                tastingNotes: ["Sweet", "Rose petals", "Dried cherry", "Muscat-like"],
                color: "red",
                fact: "A rare sweet red from the volcanic Lake Bolsena shores. Intensely aromatic."
            },
            {
                name: "Cori",
                grape: "Malvasia, Bellone, Trebbiano",
                tastingNotes: ["Fresh", "Floral", "Light", "Mineral"],
                color: "white",
                fact: "From ancient vineyards near the Temple of Hercules at Cori, south of Rome."
            },
            {
                name: "Velletri",
                grape: "Malvasia, Trebbiano",
                tastingNotes: ["Soft", "Fruity", "Easy", "Fresh"],
                color: "white",
                fact: "One of the larger Castelli Romani denominations, both white and red versions."
            }
        ]
    },
    "abruzzo": {
        name: "Abruzzo",
        wines: [
            {
                name: "Montepulciano d'Abruzzo",
                grape: "Montepulciano",
                tastingNotes: ["Dark cherry", "Plum", "Soft tannins", "Earthy"],
                color: "red",
                fact: "Italy's best-value red wine. At its best from hillside sites, it can rival fine Sangiovese."
            },
            {
                name: "Montepulciano d'Abruzzo Colline Teramane",
                grape: "Montepulciano",
                tastingNotes: ["Concentrated", "Black fruit", "Licorice", "Complex"],
                color: "red",
                fact: "DOCG from the Teramo hills—the prestigious heart of Montepulciano d'Abruzzo."
            },
            {
                name: "Montepulciano d'Abruzzo Riserva",
                grape: "Montepulciano",
                tastingNotes: ["Structured", "Dried fruit", "Tobacco", "Long finish"],
                color: "red",
                fact: "Minimum 2 years aging produces serious, age-worthy wines from this humble grape."
            },
            {
                name: "Cerasuolo d'Abruzzo",
                grape: "Montepulciano",
                tastingNotes: ["Cherry pink", "Strawberry", "Fresh", "Substantial"],
                color: "red",
                fact: "DOC since 2010 for this traditional rosé. Fuller-bodied than most pink wines."
            },
            {
                name: "Trebbiano d'Abruzzo",
                grape: "Trebbiano Abruzzese",
                tastingNotes: ["Crisp", "Lemon", "Almond", "Mineral"],
                color: "white",
                fact: "The indigenous Trebbiano Abruzzese is unrelated to Tuscan Trebbiano—and far superior."
            },
            {
                name: "Trebbiano d'Abruzzo Superiore",
                grape: "Trebbiano Abruzzese",
                tastingNotes: ["Complex", "Honey", "Nuts", "Structured"],
                color: "white",
                fact: "Low-yield, oak-aged versions show this grape can produce remarkable complexity."
            },
            {
                name: "Pecorino d'Abruzzo",
                grape: "Pecorino",
                tastingNotes: ["Fresh", "Herbal", "Citrus", "Mineral"],
                color: "white",
                fact: "Rediscovered in the 1990s, now one of Italy's trendiest indigenous white varieties."
            },
            {
                name: "Passerina d'Abruzzo",
                grape: "Passerina",
                tastingNotes: ["Light", "Floral", "Apple", "Easy-drinking"],
                color: "white",
                fact: "A fresh, everyday white now gaining recognition as a quality grape."
            },
            {
                name: "Cococciola",
                grape: "Cococciola",
                tastingNotes: ["Aromatic", "Citrus", "Tropical hints", "Fresh"],
                color: "white",
                fact: "A nearly forgotten local variety being revived by innovative producers."
            },
            {
                name: "Montonico",
                grape: "Montonico",
                tastingNotes: ["Full-bodied", "Stone fruit", "Honey", "Rich"],
                color: "white",
                fact: "An ancient Greek variety making a comeback in both dry and passito styles."
            },
            {
                name: "Controguerra",
                grape: "Various",
                tastingNotes: ["Varies", "Quality-focused", "Structured", "Complex"],
                color: "red",
                fact: "A small DOC allowing international varieties alongside indigenous grapes."
            }
        ]
    },
    "molise": {
        name: "Molise",
        wines: [
            {
                name: "Tintilia del Molise",
                grape: "Tintilia",
                tastingNotes: ["Deep color", "Wild berries", "Leather", "Spice"],
                color: "red",
                fact: "Molise's indigenous variety, nearly extinct until recent revival efforts. DNA-unique to this region."
            },
            {
                name: "Biferno Rosso",
                grape: "Montepulciano, Aglianico",
                tastingNotes: ["Medium body", "Red fruit", "Herbs", "Fresh acidity"],
                color: "red",
                fact: "Molise's flagship DOC, a blend showing both Abruzzo and southern influences."
            },
            {
                name: "Biferno Rosso Riserva",
                grape: "Montepulciano, Aglianico",
                tastingNotes: ["Structured", "Dark fruit", "Tobacco", "Complex"],
                color: "red",
                fact: "Longer aging produces more serious wines from this small-production DOC."
            },
            {
                name: "Biferno Bianco",
                grape: "Trebbiano, Bombino Bianco",
                tastingNotes: ["Fresh", "Light", "Citrus", "Easy"],
                color: "white",
                fact: "Simple white wine from Italy's second-smallest region."
            },
            {
                name: "Molise Falanghina",
                grape: "Falanghina",
                tastingNotes: ["Aromatic", "Peach", "Floral", "Fresh"],
                color: "white",
                fact: "The Campanian variety thrives in Molise's similar terroir."
            },
            {
                name: "Molise Greco",
                grape: "Greco",
                tastingNotes: ["Structured", "Citrus", "Mineral", "Herbal"],
                color: "white",
                fact: "Another southern variety finding expression in Molise's hills."
            },
            {
                name: "Molise Aglianico",
                grape: "Aglianico",
                tastingNotes: ["Powerful", "Black fruit", "Tar", "Firm tannins"],
                color: "red",
                fact: "Small production of this noble southern variety shows Molise's potential."
            },
            {
                name: "Pentro d'Isernia",
                grape: "Montepulciano, Sangiovese",
                tastingNotes: ["Light", "Fresh", "Red fruit", "Simple"],
                color: "red",
                fact: "A minor DOC from the mountainous interior, rarely seen outside Molise."
            }
        ]
    },
    "campania": {
        name: "Campania",
        wines: [
            {
                name: "Taurasi",
                grape: "Aglianico",
                tastingNotes: ["Powerful", "Black cherry", "Tar", "Volcanic mineral"],
                color: "red",
                fact: "The 'Barolo of the South'—DOCG requiring 3 years aging. Can cellar for decades."
            },
            {
                name: "Taurasi Riserva",
                grape: "Aglianico",
                tastingNotes: ["Intense", "Leather", "Dried fruit", "Epic structure"],
                color: "red",
                fact: "Minimum 4 years aging produces monumental wines rivaling Italy's finest."
            },
            {
                name: "Aglianico del Taburno",
                grape: "Aglianico",
                tastingNotes: ["Earthy", "Black fruit", "Smoke", "Firm"],
                color: "red",
                fact: "DOCG from the Taburno massif, producing a slightly softer style than Taurasi."
            },
            {
                name: "Irpinia Aglianico",
                grape: "Aglianico",
                tastingNotes: ["Medium body", "Cherry", "Herbal", "Approachable"],
                color: "red",
                fact: "DOC Aglianico from the broader Irpinia area, often more accessible than DOCG versions."
            },
            {
                name: "Fiano di Avellino",
                grape: "Fiano",
                tastingNotes: ["Complex", "Hazelnut", "Pear", "Mineral"],
                color: "white",
                fact: "DOCG since 2003. Ancient Romans called it 'Apianum' because bees loved the ripe grapes."
            },
            {
                name: "Fiano di Avellino Riserva",
                grape: "Fiano",
                tastingNotes: ["Rich", "Honey", "Spice", "Age-worthy"],
                color: "white",
                fact: "Extended aging reveals Fiano's remarkable capacity for complexity and longevity."
            },
            {
                name: "Greco di Tufo",
                grape: "Greco",
                tastingNotes: ["Crisp", "Peach", "Almond", "Smoky mineral"],
                color: "white",
                fact: "DOCG grown on volcanic tufa rock. The ancient Greeks brought this variety to Italy."
            },
            {
                name: "Greco di Tufo Spumante",
                grape: "Greco",
                tastingNotes: ["Fresh", "Citrus", "Yeasty", "Fine bubbles"],
                color: "sparkling",
                fact: "Traditional method sparkling Greco, showing the variety's excellent natural acidity."
            },
            {
                name: "Falanghina dei Campi Flegrei",
                grape: "Falanghina Flegrea",
                tastingNotes: ["Smoky", "Citrus", "Mineral", "Volcanic"],
                color: "white",
                fact: "From active volcanic fields near Naples, with a distinctly smoky, sulfurous character."
            },
            {
                name: "Falanghina del Sannio",
                grape: "Falanghina",
                tastingNotes: ["Fresh", "Floral", "Peach", "Clean"],
                color: "white",
                fact: "The inland version of Falanghina, fresher and less volcanic than coastal styles."
            },
            {
                name: "Lacryma Christi del Vesuvio Rosso",
                grape: "Piedirosso, Aglianico",
                tastingNotes: ["Light", "Red cherry", "Smoky", "Fresh"],
                color: "red",
                fact: "'Tears of Christ'—legend says Christ wept over Lucifer's fall, and vines grew from his tears."
            },
            {
                name: "Lacryma Christi del Vesuvio Bianco",
                grape: "Coda di Volpe, Falanghina",
                tastingNotes: ["Mineral", "Citrus", "Volcanic", "Crisp"],
                color: "white",
                fact: "White wine from Vesuvius slopes, showing intense volcanic mineral character."
            },
            {
                name: "Costa d'Amalfi",
                grape: "Various local varieties",
                tastingNotes: ["Sea breeze", "Citrus", "Fresh", "Mineral"],
                color: "white",
                fact: "From impossibly steep terraces along the Amalfi Coast. Mostly white wines."
            },
            {
                name: "Ischia",
                grape: "Biancolella, Forastera",
                tastingNotes: ["Saline", "Fresh", "Mineral", "Light"],
                color: "white",
                fact: "Island wines from ancient volcanic terraces, with distinctive maritime character."
            },
            {
                name: "Per' e Palummo (Piedirosso)",
                grape: "Piedirosso",
                tastingNotes: ["Light red", "Pomegranate", "Herbal", "Fresh"],
                color: "red",
                fact: "'Dove's foot' describes the grape stems. An ancient variety making light, aromatic reds."
            },
            {
                name: "Coda di Volpe",
                grape: "Coda di Volpe",
                tastingNotes: ["Full-bodied", "Pear", "Mineral", "Rich"],
                color: "white",
                fact: "'Fox tail' describes the grape cluster shape. An ancient Campanian variety."
            }
        ]
    },
    "basilicata": {
        name: "Basilicata",
        wines: [
            {
                name: "Aglianico del Vulture",
                grape: "Aglianico",
                tastingNotes: ["Powerful", "Black fruit", "Tar", "Volcanic mineral"],
                color: "red",
                fact: "From Mount Vulture, an extinct volcano. Some consider this Italy's finest Aglianico expression."
            },
            {
                name: "Aglianico del Vulture Superiore",
                grape: "Aglianico",
                tastingNotes: ["Concentrated", "Leather", "Dried fruit", "Complex"],
                color: "red",
                fact: "DOCG since 2010, requiring minimum 3 years aging including 1 year in wood."
            },
            {
                name: "Aglianico del Vulture Superiore Riserva",
                grape: "Aglianico",
                tastingNotes: ["Massive", "Tobacco", "Earth", "Endless finish"],
                color: "red",
                fact: "DOCG Riserva requires 5 years aging, producing wines that can cellar for decades."
            },
            {
                name: "Matera Primitivo",
                grape: "Primitivo",
                tastingNotes: ["Rich", "Jammy", "Spice", "Warm"],
                color: "red",
                fact: "DOC covering Matera's famous cave-dwelling region, using the Puglian grape."
            },
            {
                name: "Matera Moro",
                grape: "Various",
                tastingNotes: ["Dark", "Full", "Earthy", "Rustic"],
                color: "red",
                fact: "A blend from the Matera DOC, showcasing the region's diverse red varieties."
            },
            {
                name: "Grottino di Roccanova",
                grape: "Sangiovese, Cabernet, Malvasia Nera",
                tastingNotes: ["Light", "Fresh", "Red berries", "Easy"],
                color: "red",
                fact: "A local curiosity from southern Basilicata, rarely seen outside the region."
            },
            {
                name: "Terre dell'Alta Val d'Agri",
                grape: "Merlot, Cabernet Sauvignon",
                tastingNotes: ["Bordeaux-style", "Cassis", "Herbs", "Structured"],
                color: "red",
                fact: "High-altitude DOC experimenting with French varieties in Basilicata's mountains."
            },
            {
                name: "Moscato di Vulture",
                grape: "Moscato Bianco",
                tastingNotes: ["Sweet", "Floral", "Apricot", "Fresh"],
                color: "white",
                fact: "Still or sparkling sweet Moscato from the Vulture volcanic slopes."
            }
        ]
    },
    "puglia": {
        name: "Puglia",
        wines: [
            {
                name: "Primitivo di Manduria",
                grape: "Primitivo",
                tastingNotes: ["Full-bodied", "Jammy", "Plum", "Spice"],
                color: "red",
                fact: "Genetically identical to Zinfandel. The hot climate produces rich, high-alcohol wines."
            },
            {
                name: "Primitivo di Manduria Dolce Naturale",
                grape: "Primitivo",
                tastingNotes: ["Sweet", "Dried fig", "Chocolate", "Dense"],
                color: "red",
                fact: "DOCG sweet wine from late-harvest or dried grapes, remarkably concentrated."
            },
            {
                name: "Primitivo di Gioia del Colle",
                grape: "Primitivo",
                tastingNotes: ["Fresher", "Red fruit", "Balanced", "Less alcohol"],
                color: "red",
                fact: "Higher altitude Primitivo with more freshness than the coastal Manduria style."
            },
            {
                name: "Salice Salentino",
                grape: "Negroamaro",
                tastingNotes: ["Rich", "Plum", "Tobacco", "Earthy"],
                color: "red",
                fact: "Negroamaro means 'black bitter'—though the wines are more savory than bitter."
            },
            {
                name: "Salice Salentino Riserva",
                grape: "Negroamaro",
                tastingNotes: ["Complex", "Dried fruit", "Leather", "Long finish"],
                color: "red",
                fact: "Two years aging produces serious wines from this often-overlooked variety."
            },
            {
                name: "Negroamaro del Salento",
                grape: "Negroamaro",
                tastingNotes: ["Dark", "Savory", "Mediterranean herbs", "Warm"],
                color: "red",
                fact: "IGT allows more flexibility than DOC, often producing excellent value wines."
            },
            {
                name: "Copertino",
                grape: "Negroamaro",
                tastingNotes: ["Full", "Black cherry", "Spice", "Rustic"],
                color: "red",
                fact: "Baroque architecture and ancient Negroamaro vineyards define this Salento DOC."
            },
            {
                name: "Brindisi Rosso",
                grape: "Negroamaro, Montepulciano",
                tastingNotes: ["Medium body", "Cherry", "Herbs", "Fresh"],
                color: "red",
                fact: "Port city DOC producing approachable reds, often with some Montepulciano."
            },
            {
                name: "Castel del Monte Rosso",
                grape: "Uva di Troia, Aglianico, Montepulciano",
                tastingNotes: ["Elegant", "Red fruit", "Floral", "Balanced"],
                color: "red",
                fact: "Named after Frederick II's octagonal castle, a UNESCO World Heritage site."
            },
            {
                name: "Castel del Monte Nero di Troia Riserva",
                grape: "Uva di Troia",
                tastingNotes: ["Structured", "Black cherry", "Licorice", "Age-worthy"],
                color: "red",
                fact: "DOCG for this indigenous variety, also known as Nero di Troia or Sumarello."
            },
            {
                name: "Castel del Monte Bombino Nero",
                grape: "Bombino Nero",
                tastingNotes: ["Light", "Strawberry", "Fresh", "Easy"],
                color: "red",
                fact: "Pale red or rosato from this local variety, perfect for Puglia's hot summers."
            },
            {
                name: "Locorotondo",
                grape: "Verdeca, Bianco d'Alessano",
                tastingNotes: ["Fresh", "Citrus", "Almond", "Light"],
                color: "white",
                fact: "White wine from the trulli region, using indigenous Verdeca grape."
            },
            {
                name: "Martina Franca",
                grape: "Verdeca, Bianco d'Alessano",
                tastingNotes: ["Crisp", "Floral", "Mineral", "Refreshing"],
                color: "white",
                fact: "Similar to Locorotondo, from the whitewashed hill town of Martina Franca."
            },
            {
                name: "Gravina",
                grape: "Greco, Malvasia",
                tastingNotes: ["Aromatic", "Stone fruit", "Fresh", "Clean"],
                color: "white",
                fact: "From the ravine-carved landscape of Gravina in Puglia's interior."
            },
            {
                name: "Moscato di Trani",
                grape: "Moscato Reale",
                tastingNotes: ["Sweet", "Orange blossom", "Apricot", "Rich"],
                color: "white",
                fact: "Golden dessert wine from a local Moscato variant, from the coastal city of Trani."
            },
            {
                name: "Susumaniello",
                grape: "Susumaniello",
                tastingNotes: ["Deep color", "Black fruit", "Spice", "Tannic"],
                color: "red",
                fact: "Nearly extinct variety revived recently, producing powerfully colored wines."
            }
        ]
    },
    "calabria": {
        name: "Calabria",
        wines: [
            {
                name: "Cirò Rosso",
                grape: "Gaglioppo",
                tastingNotes: ["Medium body", "Sour cherry", "Herbs", "Saline"],
                color: "red",
                fact: "Said to be Krimisa, the wine given to ancient Olympic athletes. One of Italy's oldest wines."
            },
            {
                name: "Cirò Rosso Classico Superiore",
                grape: "Gaglioppo",
                tastingNotes: ["Structured", "Dried cherry", "Leather", "Complex"],
                color: "red",
                fact: "From the original heartland of Cirò, with stricter production requirements."
            },
            {
                name: "Cirò Rosso Riserva",
                grape: "Gaglioppo",
                tastingNotes: ["Concentrated", "Earth", "Tobacco", "Long finish"],
                color: "red",
                fact: "Extended aging shows Gaglioppo's surprising ability to develop complexity."
            },
            {
                name: "Cirò Bianco",
                grape: "Greco Bianco",
                tastingNotes: ["Fresh", "Citrus", "Almond", "Mediterranean herbs"],
                color: "white",
                fact: "White wine from the same ancient Cirò zone, using local Greco Bianco."
            },
            {
                name: "Cirò Rosato",
                grape: "Gaglioppo",
                tastingNotes: ["Pale copper", "Strawberry", "Fresh", "Dry"],
                color: "red",
                fact: "Traditional rosato from Gaglioppo, with a distinctive copper-orange hue."
            },
            {
                name: "Greco di Bianco",
                grape: "Greco di Bianco",
                tastingNotes: ["Sweet", "Apricot", "Orange peel", "Honeyed"],
                color: "white",
                fact: "Rare passito from Italy's toe, from grapes dried on mats in the sun."
            },
            {
                name: "Bivongi",
                grape: "Gaglioppo, Greco Nero",
                tastingNotes: ["Fruity", "Light", "Fresh", "Easy"],
                color: "red",
                fact: "DOC from eastern Calabria producing approachable everyday wines."
            },
            {
                name: "Melissa",
                grape: "Gaglioppo, Greco Nero",
                tastingNotes: ["Medium body", "Red fruit", "Herbs", "Rustic"],
                color: "red",
                fact: "Named after an ancient Greek settlement on the Ionian coast."
            },
            {
                name: "Savuto",
                grape: "Gaglioppo, various",
                tastingNotes: ["Light", "Cherry", "Mountain herbs", "Fresh"],
                color: "red",
                fact: "Mountain wines from the Savuto valley in central Calabria."
            },
            {
                name: "Terre di Cosenza",
                grape: "Magliocco, Greco Nero",
                tastingNotes: ["Varies", "Local character", "Fresh", "Light"],
                color: "red",
                fact: "DOC covering the Cosenza province, with various subzones."
            },
            {
                name: "Scavigna",
                grape: "Gaglioppo, Nerello",
                tastingNotes: ["Light", "Red berries", "Simple", "Fresh"],
                color: "red",
                fact: "A minor DOC producing simple wines for local consumption."
            },
            {
                name: "Lamezia",
                grape: "Nerello, Gaglioppo",
                tastingNotes: ["Medium", "Fruity", "Soft", "Easy-drinking"],
                color: "red",
                fact: "From the plain near Lamezia Terme, producing accessible wines."
            }
        ]
    },
    "sicily": {
        name: "Sicily",
        wines: [
            {
                name: "Etna Rosso",
                grape: "Nerello Mascalese, Nerello Cappuccio",
                tastingNotes: ["Elegant", "Red cherry", "Volcanic mineral", "Silky"],
                color: "red",
                fact: "From Europe's tallest active volcano. Often compared to Burgundy for its elegance."
            },
            {
                name: "Etna Rosso Riserva",
                grape: "Nerello Mascalese",
                tastingNotes: ["Complex", "Dried herbs", "Tar", "Long finish"],
                color: "red",
                fact: "Extended aging reveals remarkable complexity from these high-altitude vineyards."
            },
            {
                name: "Etna Bianco",
                grape: "Carricante",
                tastingNotes: ["Crisp", "Citrus", "Mineral", "Fresh acidity"],
                color: "white",
                fact: "Carricante from volcanic soils produces some of Italy's most distinctive whites."
            },
            {
                name: "Etna Bianco Superiore",
                grape: "Carricante",
                tastingNotes: ["Concentrated", "Smoky", "Honey", "Age-worthy"],
                color: "white",
                fact: "From the Milo contrada, considered the finest zone for Carricante."
            },
            {
                name: "Nero d'Avola",
                grape: "Nero d'Avola",
                tastingNotes: ["Full-bodied", "Black cherry", "Chocolate", "Plum"],
                color: "red",
                fact: "Sicily's most planted red grape, producing wines from simple to age-worthy."
            },
            {
                name: "Cerasuolo di Vittoria",
                grape: "Nero d'Avola, Frappato",
                tastingNotes: ["Fresh", "Cherry", "Floral", "Balanced"],
                color: "red",
                fact: "Sicily's only DOCG—a unique blend of powerful Nero d'Avola and delicate Frappato."
            },
            {
                name: "Frappato",
                grape: "Frappato",
                tastingNotes: ["Light", "Strawberry", "Floral", "Delicate"],
                color: "red",
                fact: "The Beaujolais of Sicily—light, aromatic, best served slightly chilled."
            },
            {
                name: "Nerello Mascalese",
                grape: "Nerello Mascalese",
                tastingNotes: ["Pale ruby", "Rose petals", "Red berries", "Elegant"],
                color: "red",
                fact: "Etna's signature grape, producing Pinot Noir-like wines from volcanic soils."
            },
            {
                name: "Marsala Superiore",
                grape: "Grillo, Catarratto, Inzolia",
                tastingNotes: ["Nutty", "Caramel", "Dried fruit", "Complex"],
                color: "white",
                fact: "Sicily's famous fortified wine, ranging from dry (Secco) to sweet (Dolce)."
            },
            {
                name: "Marsala Vergine",
                grape: "Grillo",
                tastingNotes: ["Dry", "Almonds", "Salt", "Oxidative"],
                color: "white",
                fact: "Unfortified dry Marsala, aged oxidatively like Sherry. The most sophisticated style."
            },
            {
                name: "Marsala Soleras",
                grape: "Grillo, Catarratto",
                tastingNotes: ["Complex", "Toffee", "Figs", "Endless"],
                color: "white",
                fact: "Aged using the solera system, with wines sometimes over 100 years old."
            },
            {
                name: "Grillo",
                grape: "Grillo",
                tastingNotes: ["Fresh", "Citrus", "Jasmine", "Saline"],
                color: "white",
                fact: "Originally for Marsala, now making excellent dry table wines showing sea influence."
            },
            {
                name: "Catarratto",
                grape: "Catarratto",
                tastingNotes: ["Fresh", "Lemon", "Almond", "Clean"],
                color: "white",
                fact: "Sicily's most planted variety. Quality-focused producers make distinctive wines."
            },
            {
                name: "Zibibbo (Moscato di Pantelleria)",
                grape: "Zibibbo (Muscat of Alexandria)",
                tastingNotes: ["Aromatic", "Orange blossom", "Apricot", "Sea salt"],
                color: "white",
                fact: "From volcanic Pantelleria island—dry versions are increasingly popular."
            },
            {
                name: "Passito di Pantelleria",
                grape: "Zibibbo",
                tastingNotes: ["Sweet", "Dried apricot", "Fig", "Intense"],
                color: "white",
                fact: "Sun-dried Zibibbo grapes create one of Italy's most distinctive dessert wines."
            },
            {
                name: "Malvasia delle Lipari",
                grape: "Malvasia di Lipari",
                tastingNotes: ["Sweet", "Honey", "Dried herbs", "Volcanic"],
                color: "white",
                fact: "From the Aeolian Islands, this rare sweet wine has ancient Greek origins."
            },
            {
                name: "Faro",
                grape: "Nerello Mascalese, Nerello Cappuccio, Nocera",
                tastingNotes: ["Elegant", "Delicate", "Floral", "Maritime"],
                color: "red",
                fact: "From the Strait of Messina, Sicily's most elegant mainland red wine."
            },
            {
                name: "Mamertino",
                grape: "Nero d'Avola, Nocera",
                tastingNotes: ["Structured", "Dark fruit", "Spice", "Complex"],
                color: "red",
                fact: "Julius Caesar served this wine at his triumph. Recently revived DOC."
            },
            {
                name: "Perricone",
                grape: "Perricone (Pignatello)",
                tastingNotes: ["Bold", "Dark berries", "Earthy", "Tannic"],
                color: "red",
                fact: "An indigenous variety being rediscovered, producing powerful, rustic reds."
            }
        ]
    },
    "sardinia": {
        name: "Sardinia",
        wines: [
            {
                name: "Cannonau di Sardegna",
                grape: "Cannonau (Grenache)",
                tastingNotes: ["Full-bodied", "Red fruit", "Herbs", "Warm"],
                color: "red",
                fact: "Sardinians claim Cannonau is indigenous (not French Grenache). The island has the world's highest concentration of centenarians who drink it daily."
            },
            {
                name: "Cannonau di Sardegna Riserva",
                grape: "Cannonau",
                tastingNotes: ["Complex", "Dried fruit", "Leather", "Structured"],
                color: "red",
                fact: "Longer aging produces serious wines showing the grape's Mediterranean character."
            },
            {
                name: "Nepente di Oliena",
                grape: "Cannonau",
                tastingNotes: ["Rich", "Wild herbs", "Cherry", "Powerful"],
                color: "red",
                fact: "A subzone producing particularly concentrated Cannonau from the Barbagia region."
            },
            {
                name: "Vermentino di Gallura",
                grape: "Vermentino",
                tastingNotes: ["Aromatic", "Citrus", "Herbs", "Granite mineral"],
                color: "white",
                fact: "Sardinia's only DOCG, from granite soils in the northeast. Among Italy's finest Vermentino."
            },
            {
                name: "Vermentino di Gallura Superiore",
                grape: "Vermentino",
                tastingNotes: ["Concentrated", "Complex", "Saline", "Age-worthy"],
                color: "white",
                fact: "DOCG Superiore requires lower yields, producing wines of remarkable intensity."
            },
            {
                name: "Vermentino di Sardegna",
                grape: "Vermentino",
                tastingNotes: ["Fresh", "Lemon", "Mediterranean herbs", "Clean"],
                color: "white",
                fact: "Island-wide DOC producing fresh everyday Vermentino at excellent value."
            },
            {
                name: "Carignano del Sulcis",
                grape: "Carignano (Carignan)",
                tastingNotes: ["Dense", "Dark fruit", "Wild herbs", "Tannic"],
                color: "red",
                fact: "Pre-phylloxera bush vines in sandy soils produce powerfully concentrated wines."
            },
            {
                name: "Carignano del Sulcis Riserva",
                grape: "Carignano",
                tastingNotes: ["Massive", "Black fruit", "Garrigue", "Long finish"],
                color: "red",
                fact: "Extended aging tames the tannins of this powerhouse southwestern Sardinian wine."
            },
            {
                name: "Nuragus di Cagliari",
                grape: "Nuragus",
                tastingNotes: ["Light", "Fresh", "Citrus", "Simple"],
                color: "white",
                fact: "Named after Sardinia's ancient Nuragic civilization. A simple everyday white."
            },
            {
                name: "Vernaccia di Oristano",
                grape: "Vernaccia di Oristano",
                tastingNotes: ["Oxidative", "Almond", "Salt", "Sherry-like"],
                color: "white",
                fact: "Made using flor yeast like Sherry, producing unique oxidative wines. Nothing like other Vernaccias."
            },
            {
                name: "Vernaccia di Oristano Riserva",
                grape: "Vernaccia di Oristano",
                tastingNotes: ["Intense", "Dried fruit", "Nuts", "Endless"],
                color: "white",
                fact: "Aged for years under flor, these wines can reach extraordinary complexity."
            },
            {
                name: "Malvasia di Bosa",
                grape: "Malvasia di Sardegna",
                tastingNotes: ["Oxidative", "Apricot", "Almond", "Complex"],
                color: "white",
                fact: "Another flor-aged wine, from the western coast. Dry and sweet versions."
            },
            {
                name: "Monica di Sardegna",
                grape: "Monica",
                tastingNotes: ["Light", "Red berries", "Soft", "Easy-drinking"],
                color: "red",
                fact: "A Spanish-origin variety producing light, approachable everyday reds."
            },
            {
                name: "Moscato di Sardegna",
                grape: "Moscato Bianco",
                tastingNotes: ["Sweet", "Floral", "Peach", "Fresh"],
                color: "white",
                fact: "Still or sparkling sweet Moscato, similar to Piedmont but with Sardinian character."
            },
            {
                name: "Moscato di Sorso-Sennori",
                grape: "Moscato Bianco",
                tastingNotes: ["Sweet", "Intense", "Orange blossom", "Rich"],
                color: "white",
                fact: "A tiny DOC producing particularly concentrated sweet Moscato from the north."
            },
            {
                name: "Girò di Cagliari",
                grape: "Girò",
                tastingNotes: ["Sweet", "Cherry", "Spice", "Port-like"],
                color: "red",
                fact: "A rare sweet red from an obscure Spanish variety, traditionally fortified."
            },
            {
                name: "Nasco di Cagliari",
                grape: "Nasco",
                tastingNotes: ["Aromatic", "Bitter almond", "Honey", "Unique"],
                color: "white",
                fact: "An ancient indigenous variety making both dry and sweet wines with distinctive bitterness."
            },
            {
                name: "Mandrolisai",
                grape: "Bovale, Cannonau, Monica",
                tastingNotes: ["Balanced", "Red fruit", "Herbal", "Fresh"],
                color: "red",
                fact: "A central Sardinian DOC producing balanced blends from indigenous varieties."
            },
            {
                name: "Bovale Sardo",
                grape: "Bovale Sardo",
                tastingNotes: ["Deep color", "Dark fruit", "Rustic", "Tannic"],
                color: "red",
                fact: "An indigenous variety of Spanish origin, producing deeply colored wines."
            }
        ]
    }
};
