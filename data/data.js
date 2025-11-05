const cities = {
  "Goa": {
    places: [
      // 🏖️ Beaches
      {
        name: "Baga Beach",
        description: "Baga Beach is a popular beach in North Goa, known for its lively atmosphere, water sports, and nightlife, but its history is also shaped by its Portuguese past and its transformation from a peaceful fishing village. Historically, it was part of the Portuguese colonial period, leaving behind some architectural influences. It gained popularity during the hippy era, evolving from a quiet spot into a major tourist resort. Today, it's characterized by water sports like parasailing and jet skiing, vibrant nightlife including clubs and bars on Tito's Lane, and markets.",
        image: "images/bagabeach.jpg",
        timing: "Open 24 Hours",
        bestTime: "November to February",
        map: "https://www.google.com/maps/embed?...",
        category: "Beach"
      },
      {
        name: "Calangute Beach",
        description: "Calangute Beach is a busy and popular beach in Goa, nicknamed the 'Queen of Beaches,' that was originally a fishing village and became a popular destination for 1960s hippies. Historically, local fishing villages were the first to live around the area before the Portuguese occupied Goa in the 16th century, an event that marked the beginning of outside influence and the region becoming a major trade hub. Today, the beach is known for its commercial activities, water sports, shacks, and is a popular destination for visitors.",
        image: "images/calangute.jpeg",
        timing: "Open 24 Hours",
        bestTime: "October to March",
        map: "https://www.google.com/maps/embed?...",
        category: "Beach"
      },
      {
        name: "Anjuna Beach",
        description: "Anjuna Beach is a famous beach in North Goa, known for its hippie history, vibrant nightlife, and trance music scene. Originally part of the 'hippie trail' in the 1960s, it's now a popular destination for tourists seeking parties, music festivals, yoga, and water sports like parasailing. Historically, Anjuna was influenced by Portuguese colonial rule, which is still visible in the local Catholic presence and architecture.",
        image: "images/anjuna.webp",
        timing: "Open 24 Hours",
        bestTime: "November to February",
        map: "https://www.google.com/maps/embed?...",
        category: "Beach"
      },
      {
        name: "Vagator Beach",
        description: "Vagator is a crescent-shaped beach in Goa known for its scenic beauty, including red cliffs and golden sand, and its proximity to the historic Chapora Fort. Historically, the name may come from a combination of 'vaga' (tiger) and 'tir' (shore), suggesting it was once a place where tigers came from the hills. Today, it is a popular destination for tourists, especially for its vibrant nightlife and parties, but it also offers a more serene experience compared to other crowded North Goa beaches.",
        image: "images/vagator.jpeg",
        timing: "Open 24 Hours",
        bestTime: "October to February",
        map: "https://www.google.com/maps/embed?...",
        category: "Beach"
      },
      {
        name: "Candolim Beach",
        description: "Candolim Beach is a popular and long stretch of white sand in North Goa, known for being more peaceful than its neighbors, with a mix of relaxation and water sports. Historically, it is built on Portuguese era influence, with its name possibly derived from the old village name 'Candole'. Today, it is a bustling tourist area offering seafood, beach shacks, nightlife, and shopping.",
        image: "images/candolim.jpeg",
        timing: "Open 24 Hours",
        bestTime: "October to February",
        map: "https://www.google.com/maps/embed?...",
        category: "Beach"
      },
      {
        name: "Colva Beach",
        description: "Colva Beach, located in Salcete, South Goa, is a popular, 2.4 km long beach known for its white sand and palm trees. Historically, it was a simple fishing village that came under Portuguese administration in 1510 and became a popular tourist spot due to its Indo-Portuguese architecture and a significant landmark, the Our Lady of Mercy Church. Today, it offers a blend of relaxation with water sports, a bustling market, and a lively nightlife scene",
        image: "images/colva.webp",
        timing: "Open 24 Hours",
        bestTime: "October to March",
        map: "https://www.google.com/maps/embed?...",
        category: "Beach"
      },
      {
        name: "Palolem Beach",
        description: "Palolem Beach is a crescent-shaped, white-sand beach in South Goa known for its calm, clear waters and natural beauty. It is surrounded by a palm grove and headlands, creating a scenic and relaxed environment that attracts international tourists, especially from November to March. Historically, it has been an idyllic escape, and today it is known for its 'silent noise' headphone parties and is a popular spot for activities like dolphin spotting, kayaking, and relaxing in its many beach shacks",
        image: "images/palolem.jpg",
        timing: "Open 24 Hours",
        bestTime: "November to March",
        map: "https://www.google.com/maps/embed?...",
        category: "Beach"
      },
      {
        name: "Agonda Beach",
        description: "Agonda Beach is a long, tranquil, and secluded 3 km public beach in South Goa, known for its natural beauty and peaceful atmosphere, fringed by palms and casuarinas, and dominated by a hill to the south. While historically a quiet fishing village, it has become a popular destination for those seeking a peaceful retreat, offering activities like dolphin trips and nearby visits during high season, though it is generally less crowded than other Goa beaches. It is not considered safe for swimming out too far, and fewer facilities are available compared to more developed beaches.",
        image: "images/agonda.jpg",
        timing: "Open 24 Hours",
        bestTime: "November to March",
        map: "https://www.google.com/maps/embed?...",
        category: "Beach"
      },
      {
        name: "Miramar Beach",
        description: "Miramar Beach is an urban beach in Goa, originally called Gasper Dias Beach after a Portuguese landlord, where a fort once stood. The name 'Miramar' comes from the Portuguese 'miragem de mar' (mirage of the sea), derived from an old hotel there, and means 'viewing the sea'. Today, it is a popular spot where the Mandovi River meets the Arabian Sea, known for its golden sand, sunset views, and as a hub for locals and tourists.",
        image: "images/miramar.webp",
        timing: "Open 24 Hours",
        bestTime: "October to February",
        map: "https://www.google.com/maps/embed?...",
        category: "Beach"
      },
      {
        name: "Morjim Beach",
        description: "Morjim Beach is a picturesque, white sand beach in North Goa known for its tranquility and natural beauty, situated on the northern bank of the Chapora River. Historically, the area is associated with the goddess Morzai, from whom the name is believed to be derived. Today, the beach is famous as a nesting site for Olive Ridley sea turtles and is a popular spot for kite-surfing due to strong winds.",
        image: "images/morjim.jpg",
        timing: "Open 24 Hours",
        bestTime: "November to February",
        map: "https://www.google.com/maps/embed?...",
        category: "Beach"
      },
      {
        name: "Ashwem Beach",
        description: "Ashwem Beach is a serene and relatively secluded beach in North Goa, known for its natural beauty, fine sand, and calm atmosphere, making it ideal for a peaceful vacation. While it doesn't have a specific historical event attached, its current popularity stems from its tranquil environment, contrasted with more crowded neighboring beaches like Baga and Calangute. The beach is a good destination for relaxation, swimming, and enjoying sunsets, with amenities like restaurants and resorts available, though it is less known for active nightlife.",
        image: "images/ashwem.webp",
        timing: "Open 24 Hours",
        bestTime: "November to March",
        map: "https://www.google.com/maps/embed?...",
        category: "Beach"
      },

      // 🕍 Churches & Temples
      {
        name: "Basilica of Bom Jesus",
        description: "The Basilica of Bom Jesus is a 16th-century church in Old Goa, a UNESCO World Heritage Site, famous for housing the remains of St. Francis Xavier. Built between 1595 and 1605 by the Jesuits, the basilica is a prime example of Baroque architecture, featuring a granite façade with five classical styles and an interior with gilded altars and detailed carvings. It remains a significant pilgrimage site, with the saint's body on public display every ten years.",
        image: "images/bomjesus.webp",
        timing: "9 AM – 6:30 PM",
        bestTime: "November to February",
        map: "https://www.google.com/maps/embed?...",
        category: "Temple"
      },
      {
        name: "Se Cathedral",
        description: "The Se Cathedral, also known as St. Catherine's Cathedral, is a magnificent 16th-century monument in Old Goa, built to commemorate the Portuguese victory over the Muslim army on the feast day of St. Catherine of Alexandria. It is a significant example of Portuguese-Gothic architecture, known as one of the largest churches in Asia, and was declared a UNESCO World Heritage Site in 1986. Notable features include its large scale, simple but sophisticated interior, and the famous 'Golden Bell'.",
        image: "images/secathedral.jpg",
        timing: "7 AM – 6:30 PM",
        bestTime: "November to February",
        map: "https://www.google.com/maps/embed?...",
        category: "Temple"
      },
      {
        name: "Church of Our Lady of Immaculate Conception",
        description: "There are many churches named 'Church of Our Lady of Immaculate Conception,'' but the most famous is likely the one in Panaji, Goa, known for its classic white Baroque architecture, a zigzag staircase, and a history dating back to 1541 when it served as a chapel for Portuguese sailors. Another significant church of this name is the oldest Catholic church in Pune, established in 1792 with land donated by the Peshwa, which was rebuilt with British support in the 1840s.",
        image: "images/immaculate.jpg",
        timing: "9 AM – 6:30 PM",
        bestTime: "November to February",
        map: "https://www.google.com/maps/embed?...",
        category: "Temple"
      },
      {
        name: "Church of St. Francis of Assisi",
        description: "The 'Church of St. Francis of Assisi' can refer to several churches, the most prominent being the one in Goa, India, a part of the UNESCO World Heritage Site, which was established by Portuguese Franciscan friars in 1517. Another well-known church with the same name is in Kochi, India, founded by Portuguese Franciscans in 1503 and considered one of the oldest European-built churches in India. A third is the work of architect Oscar Niemeyer in Brazil, notable for its modernist design.",
        image: "images/stfrancis.jpg",
        timing: "9 AM – 5:30 PM",
        bestTime: "October to March",
        map: "https://www.google.com/maps/embed?...",
        category: "Temple"
      },
      {
        name: "Church of St. Cajetan",
        description: "The Church of St. Cajetan in Old Goa, built by Italian Theatine monks between 1655 and 1661, is architecturally similar to St. Peter's Basilica in Rome. It is one of Goa's most magnificent and the only surviving domed structure, known for its Corinthian facade and ornate interior influenced by Baroque and Rococo styles. The church is dedicated to Our Lady of Divine Providence and is named after St. Cajetan, the founder of the Theatine order. ",
        image: "images/stcajetan.webp",
        timing: "9 AM – 6 PM",
        bestTime: "November to February",
        map: "https://www.google.com/maps/embed?...",
        category: "Temple"
      },
      {
        name: "Mangueshi Temple",
        description: "The Mangueshi Temple in Priol, Goa, dedicated to Lord Shiva, has a history of over 450 years, originally located in Kushasthali before being moved in 1560 to its current site after the Portuguese destroyed the original temple. The temple has undergone several renovations since the 18th century, including being updated in 1890 and in 1973, when a golden kalash (holy vessel) was added to the dome. Today, it is a significant site for festivals like Maha Shivaratri.",
        image: "images/mangeshi.jpeg",
        timing: "6 AM – 10 PM",
        bestTime: "All Year",
        map: "https://www.google.com/maps/embed?...",
        category: "Temple"
      },
      {
        name: "Shanta Durga Temple",
        description: "The Shanta Durga Temple in Goa is dedicated to a form of the goddess Durga who mediates between Shiva and Vishnu. The original temple was moved from Keloshi to Kavlem during the Portuguese rule, and the current structure was built between 1713 and 1738 during the reign of Maratha ruler Chattrapati Shahu. The temple is known for its unique Indo-Portuguese architecture and peaceful atmosphere",
        image: "images/shantadurga.jpg",
        timing: "5 AM – 10 PM",
        bestTime: "All Year",
        map: "https://www.google.com/maps/embed?...",
        category: "Temple"
      },

      // 🏰 Forts & Heritage Sites
      {
        name: "Aguada Fort",
        description: "Fort Aguada is a 17th-century Portuguese fort in Goa built for defense and as a freshwater supply point for ships, which gave it its name from the Portuguese word for water. Constructed between 1609 and 1612, it is one of the best-preserved Portuguese forts in India and features a lighthouse (the oldest in Asia) and a jail, which is now part of a museum showcasing the Goa liberation struggle. The fort's architecture is typical of Portuguese military design, using durable laterite stone with massive, thick walls, and it was strategically built at the mouth of the Mandovi River to guard against potential invasions.",
        image: "images/aguada.jpg",
        timing: "9:30 AM – 6 PM",
        bestTime: "November to February",
        map: "https://www.google.com/maps/embed?...",
        category: "Fort"
      },
      {
        name: "Chapora Fort",
        description: "Chapora Fort is a historic ruin in North Goa, known for its panoramic views and its role in a Bollywood movie. Originally built by the Sultanate of Bijapur, it was rebuilt by the Portuguese in 1617 and has been held by various rulers, including the Marathas. Today, it's a popular tourist spot with laterite walls, old barracks, and secret tunnels, and offers spectacular views, especially at sunset. ",
        image: "images/chapora.jpg",
        timing: "9 AM – 5:30 PM",
        bestTime: "October to March",
        map: "https://www.google.com/maps/embed?...",
        category: "Fort"
      },
      {
        name: "Reis Magos Fort",
        description: "Reis Magos Fort is a 16th-century Portuguese fort built in Goa to guard the mouth of the Mandovi River. Constructed in 1551, the laterite stronghold was fortified and enlarged over time and later served as a prison before being renovated in the 2010s. Its architecture features high, laterite walls, cylindrical turrets, underground passages, and an arsenal of 33 cannons. ",
        image: "images/reismagos.jpg",
        timing: "9:30 AM – 5 PM",
        bestTime: "November to February",
        map: "https://www.google.com/maps/embed?...",
        category: "Fort"
      },
      {
        name: "Cabo de Rama Fort",
        description: "Cabo de Rama Fort is a historic fort in South Goa, believed to have been named after the epic hero Lord Rama and his wife Sita, who are said to have sheltered there during their exile. Originally built by local Soonda rulers, it was later captured and fortified by the Portuguese in 1763 to serve as a strategic military outpost and prison",
        image: "images/caboderama.jpg",
        timing: "9 AM – 5:30 PM",
        bestTime: "October to March",
        map: "https://www.google.com/maps/embed?...",
        category: "Fort"
      },
      {
        name: "Tiracol Fort",
        description: "Tiracol Fort, also known as Terekhol Fort, is a 17th-century fort on a cliff in northern Goa, built by the Raja of Sawantwadi and later captured by the Portuguese. It has a history of battles, including its role as a rebel stronghold in 1825 and as a symbolic location for Goan freedom fighters who occupied it in 1954.",
        image: "images/tiracol.jpg",
        timing: "9 AM – 6 PM",
        bestTime: "November to February",
        map: "https://www.google.com/maps/embed?...",
        category: "Fort"
      },

      // 🌳 Nature & Wildlife
      {
        name: "Dudhsagar Waterfalls",
        description: "Dudhsagar Falls is a four-tiered waterfall in the Western Ghats, located on the Goa-Karnataka border inside the Bhagwan Mahavir Wildlife Sanctuary. Known as the Sea of Milk its name comes from the legend of a princess who poured a jug of milk to create a curtain of water to protect her modesty, a story that continues to inspire local lore. The falls are fed by the Mandovi River and are particularly spectacular during the monsoon season, from October to March. ",
        image: "images/dudhsagar.jpg",
        timing: "9 AM – 5 PM",
        bestTime: "June to September",
        map: "https://www.google.com/maps/embed?...",
        category: "Wildlife"
      },
      {
        name: "Bhagwan Mahavir Wildlife Sanctuary",
        description: "Bhagwan Mahavir Wildlife Sanctuary was established in 1969 as the Mollem Game Sanctuary to protect the Western Ghats' biodiversity. In 1978, its core area was declared Mollem National Park. The sanctuary is a 240 sq. km protected area known for its dense forests, diverse flora and fauna including tigers and leopards, and historical sites like the Tambdi Surla Temple.",
        image: "images/mahavir.jpg",
        timing: "8 AM – 5 PM",
        bestTime: "November to March",
        map: "https://www.google.com/maps/embed?...",
        category: "Wildlife"
      },
      {
        name: "Mollem National Park",
        description: "Mollem National Park was originally established as the Mollem Game Sanctuary in 1969, later renamed Bhagwan Mahaveer Sanctuary, and finally had its core area designated as Mollem National Park in 1978. Located in Goa's Western Ghats, it is a protected area known for its diverse vegetation and rich wildlife, including various deer, cats, and birds, and features landmarks like the Dudhsagar Falls and the Tambdi Surla temple.",
        image: "images/mollem.jpeg",
        timing: "8 AM – 5 PM",
        bestTime: "October to March",
        map: "https://www.google.com/maps/embed?...",
        category: "Wildlife"
      },
      {
        name: "Dr. Salim Ali Bird Sanctuary",
        description: "The Dr. Salim Ali Bird Sanctuary is an estuarine mangrove habitat on Chorao Island in Goa's Mandovi River, named after the famous Indian ornithologist Dr. Salim Ali. Established as a protected area, it serves as a crucial habitat for over 400 avian species, both local and migratory, along with other wildlife like crabs, crocodiles, and flying foxes.",
        image: "images/salimali.jpg",
        timing: "6 AM – 6 PM",
        bestTime: "October to February",
        map: "https://www.google.com/maps/embed?...",
        category: "Wildlife"
      },
      {
        name: "Bondla Wildlife Sanctuary",
        description: "Compact wildlife park with zoo, deer park, and botanical garden.",
        image: "images/bondla.jpeg",
        timing: "9 AM – 5 PM",
        bestTime: "November to March",
        map: "https://www.google.com/maps/embed?...",
        category: "Wildlife"
      },

      // 🖼️ Museums & Cultural Spots
      {
        name: "Goa State Museum",
        description: "The Goa State Museum was established in 1973 as the Archaeology Museum unit of the Department of Archives in Goa, opening its doors in 1977 and moving to its current, formally inaugurated, museum complex in 1996. Located in Panaji, the museum features over 8,000 artifacts showcasing the history, culture, and art of Goa, with a strong emphasis on the region's Portuguese colonial past, Hindu traditions, and ancient sculptures.",
        image: "images/statemuseum.jpeg",
        timing: "10 AM – 6 PM",
        bestTime: "All Year",
        map: "https://www.google.com/maps/embed?...",
        category: "Museum"
      },
      {
        name: "Naval Aviation Museum",
        description: "The Naval Aviation Museum in Goa, India, is a military museum inaugurated in 1998 that showcases the history of Indian naval aviation. It is the only naval aviation museum in Asia and features both an outdoor exhibit of vintage aircraft and an indoor gallery with models, exhibits, and a tribute to naval personnel. The museum also has specialized rooms like a Sonobouy Room and a Virtual Reality Corner.",
        image: "images/navalmuseum.jpg",
        timing: "10 AM – 5 PM",
        bestTime: "October to March",
        map: "https://www.google.com/maps/embed?...",
        category: "Museum"
      },
      {
        name: "Big Foot Museum (Loutolim)",
        description: "The Big Foot Museum, also known as Ancestral Goa, is an open-air museum in Loutolim, South Goa, created by artist Maendra Jocelino Araujo Alvares to preserve Goan culture and traditions. The museum recreates Goan rural life from a century ago through a series of exhibits, a restaurant, a handicraft center, and an art gallery. Key attractions include the Sant Mirabai sculpture, a 46-foot tall laterite sculpture, and the large, foot-shaped dance floor.",
        image: "images/bigfoot.webp",
        timing: "9 AM – 6 PM",
        bestTime: "November to March",
        map: "https://www.google.com/maps/embed?...",
        category: "Museum"
      },
      {
        name: "Houses of Goa Museum (Porvorim)",
        description: "The Houses of Goa Museum in Porvorim is a three-story, ship-shaped building designed by architect Gerard de Cunha in 1997, dedicated to the history of Goan architecture and the blending of Portuguese and Konkani styles. It was built to showcase Goan identity through its architecture and exhibits a variety of artifacts, from vintage furniture and doorways to works by artist Mario Miranda.",
        image: "images/housesofgoa.jpg",
        timing: "10 AM – 7:30 PM",
        bestTime: "All Year",
        map: "https://www.google.com/maps/embed?...",
        category: "Museum"
      },

      // 🌅 Viewpoints & Activities
      {
        name: "Dona Paula Viewpoint",
        description: "Dona Paula Viewpoint is a picturesque location in Goa named after Dona Paula de Menezes, a Portuguese noblewoman. A popular legend states she fell in love with a local fisherman but, due to her father's disapproval, she jumped to her death from a cliff at this spot, making it a symbol of tragic love.",
        image: "images/donapaula.jpeg",
        timing: "Open 24 Hours",
        bestTime: "November to February",
        map: "https://www.google.com/maps/embed?...",
        category: "Activity"
      },
      {
        name: "Grand Island",
        description: "Grand Island refers to at least two different locations, one is a city in Nebraska and the other is an island in New York. Grand Island, Nebraska, began as a large island in the Platte River that was a stop on the Oregon Trail and grew into a railroad and agricultural hub. Grand Island, New York, was historically controlled by the Iroquois, named La Grande Isle by early explorers, and eventually became an agricultural and resort community with bridges connecting it to the mainland.",
        image: "images/grandisland.jpg",
        timing: "7 AM – 5 PM",
        bestTime: "October to April",
        map: "https://www.google.com/maps/embed?...",
        category: "Activity"
      },
      {
        name: "Mandovi River Cruise",
        description: "the Mandovi River is more than just a waterway it s the lifeline of this vibrant state. Originating in the Jamboti Ghats of Karnataka, this 62-kilometer-long river meanders through Goa, painting a serene landscape with its gentle flow. As it winds its way to the Arabian Sea, the Mandovi River passes through the bustling city of Panjim, where its banks transform into a vibrant promenade. Here, you can soak in the panoramic views of offshore casinos, the historic Reis Magos Fort, and the dazzling Atal Setu Bridge, whose multicolored lights dance across the sky at dusk. The river's shores are dotted with charming cafes, restaurants, and cultural landmarks, making it a hub of leisure, entertainment, and rich cultural heritage. Whether youre here for a relaxing boat ride, a thrilling water sport, or to immerse yourself in Goas history and culture, the Mandovi River offers an unforgettable experience.",
        image: "images/mandovi.jpeg",
        timing: "6 PM – 9 PM",
        bestTime: "October to April",
        map: "https://www.google.com/maps/embed?...",
        category: "Activity"
      },
      {
        name: "Water Sports at Baga & Calangute",
        description: "Baga and Calangute beaches in Goa are major hubs for a variety of water sports, which became popular with the rise of tourism in the area. While historical records don't specify a particular origin for the water sports at these beaches, their development is linked to Goa's tourism boom. Visitors can enjoy activities like parasailing, speedboat rides, jet skiing, bumper boat rides, and flyboarding, among others, suitable for both beginners and experienced adventurers.",
        image: "images/watersports.webp",
        timing: "9 AM – 5 PM",
        bestTime: "October to April",
        map: "https://www.google.com/maps/embed?...",
        category: "Activity"
      },
      {
        name: "Spice Plantation Tours (Ponda)",
        description: "Spice plantation tours in Ponda, Goa, are a popular tourist activity that offers an immersive experience into the cultivation of aromatic spices and tropical fruits. Visitors are guided through lush plantations like the Tropical Spice Plantation and Sahakari Spice Farm, learning about the medicinal properties of plants such as black pepper, cardamom, and vanilla, while also enjoying traditional Goan cuisine and entertainment. While the specific history of individual farms varies, their growth is linked to Goa's long-standing tradition of spice production, with some farms, like Savoi, having operated for centuries.",
        image: "images/spiceplantation.jpg",
        timing: "9 AM – 5 PM",
        bestTime: "November to March",
        map: "https://www.google.com/maps/embed?...",
        category: "Activity"
      }
    ]
  },
"Delhi": {
  places: [
    // 🏛️ Historical Monuments
    {
      name: "Red Fort (Lal Qila)",
      description: "The Red Fort (Lal Qila) is a historic fort in Old Delhi built by Mughal Emperor Shah Jahan between 1638 and 1648. Originally named Qila-i-Mubarak (Blessed Fort), it served as the main residence of the Mughal emperors for nearly two centuries and is a masterpiece of Mughal architecture. The fort is known for its red sandstone walls and houses several significant structures, including the Diwan-i-Aam and Diwan-i-Khas. Since India's independence in 1947, it has become a powerful national symbol, with the Prime Minister of India hoisting the flag there every Independence Day.",
      timing: "9:30 AM – 4:30 PM (Closed on Mondays)",
      bestTime: "October to March",
      category: "Historical",
      category:"Fort",
      image: "images/lalqila.jpg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Red+Fort+Delhi"
    },
    {
      name: "Qutub Minar",
      description: "The Qutub Minar is a 73-meter-tall, five-story minaret in Delhi, India, built by Qutub-ud-din Aibak starting in 1193 to celebrate the victory of Muslim rule in the region. Its construction spanned several rulers, with its base and first story finished by Aibak, three more stories added by Iltutmish, and the top story replaced by Firoz Shah Tughlaq after it was damaged by lightning. The tower is a UNESCO World Heritage Site, known for its intricate carvings and for representing a blend of Indo-Islamic and Persian architectural styles.",
      timing: "7 AM – 5 PM",
      bestTime: "November to February",
      category: "Historical",
      image: "images/minar.jpeg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Qutub+Minar+Delhi"
    },
    {
      name: "Humayun’s Tomb",
      description: "Humayun's Tomb, located in Delhi, is a 16th-century garden-tomb commissioned by the widow of Mughal Emperor Humayun, Bega Begum, in 1569. Considered the first garden-tomb on the Indian subcontinent, it was designed by Persian architects and marked the beginning of Mughal architecture, serving as a precursor to the Taj Mahal. The tomb is a UNESCO World Heritage Site and is known for its red sandstone structure, symmetrical gardens (chaharbagh), and being a dormitory of the Mughals for containing the graves of Humayun and many other Mughal figures.",
      timing: "6 AM – 6 PM",
      bestTime: "October to March",
      category: "Historical",
      image: "images/tomb.jpeg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Humayun's+Tomb+Delhi"
    },
    {
      name: "India Gate",
      description: "India Gate is a 42-meter-high war memorial in New Delhi, designed by Sir Edwin Lutyens, that commemorates the 70,000 Indian soldiers who died in World War I. The foundation stone was laid in 1921 and the memorial was inaugurated in 1931. Originally called the All India War Memorial, it was dedicated to the nation and includes the names of over 13,000 soldiers inscribed on its walls. After India's independence, the Amar Jawan Jyoti, or Flame of the Immortal Soldier, was added to honor martyrs from the 1971 Indo-Pakistan War.",
      timing: "Open 24 hours",
      bestTime: "Evenings during October–March",
      category: "Historical",
      image: "images/gate.jpeg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=India+Gate+Delhi"
    },
    {
      name: "Purana Qila (Old Fort)",
      description: "Purana Qila, or Old Fort, is a historic fort in Delhi with foundations dating to the 3rd century BC, though its present structures were built in the 16th century by Mughal emperor Humayun and the Afghan ruler Sher Shah Suri. It is believed to be the site of the legendary city of Indraprastha from the Mahabharata. The fort is an architectural mix of both rulers, with Humayun starting the city of Din Panah and Sher Shah Suri adding his own buildings after taking the throne.",
      timing: "7 AM – 5 PM",
      bestTime: "November to February",
      category: "Historical",
      category:"Fort",
      image: "images/purana.jpeg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Purana+Qila+Delhi"
    },
    {
  name: "Tughlaqabad Fort",
  description: "Tughlaqabad Fort, built by Ghiyasuddin Tughlaq in 1321, is one of Delhi’s most impressive ruined fortresses. Enclosed by massive stone walls and bastions, the fort was designed for defense and strength. Although much of it lies in ruins today, the site still exudes a powerful sense of history, offering panoramic views of the city and a glimpse into Delhi’s medieval architecture. Nearby lies the tomb of Ghiyasuddin Tughlaq, an architectural gem in itself.",
  timing: "7 AM – 5 PM",
  bestTime: "November to February",
  category: "Historical",
  category: "Fort",
  image: "images/tughlaqabad.jpeg",
  map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Tughlaqabad+Fort+Delhi"
},
    {
      name: "Jama Masjid",
      description: "The Jama Masjid, located in Old Delhi, is the largest mosque in India and was commissioned by Mughal Emperor Shah Jahan. Construction began in 1644 and was completed in 1656, featuring a large courtyard, towering minarets, and an intricate design of red sandstone and white marble.",
      timing: "7 AM – 6:30 PM",
      bestTime: "October to March",
      category: "Historical",
      image: "images/masjid.jpg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Jama+Masjid+Delhi"
    },
    {
      name: "Safdarjung Tomb",
      description: "Safdarjung Tomb is a late Mughal-era mausoleum built in 1754 in New Delhi for Mirza Muqim Abul Mansur Khan, known as Safdarjung. It is the last enclosed garden tomb built in the Mughal tradition and is a blend of Persian, Indian, and Islamic architectural styles, constructed with sandstone and marble. The tomb was commissioned by Safdarjung's son, Nawab Shuja-ud-Daula.",
      timing: "7 AM – 6 PM",
      bestTime: "October to March",
      category: "Historical",
      image: "images/safdarjung.jpg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Safdarjung+Tomb+Delhi"
    },
    {
      name: "Agrasen ki Baoli",
      description: "Agrasen ki Baoli is a historical stepwell in Delhi, believed to have been built during the Mahabharata era and later rebuilt in the 14th century, likely during the Tughlaq or Lodi period. It is a protected monument under the Archaeological Survey of India and was originally designed as a water conservation structure. The stepwell is known for its unique architecture, which includes three levels of descending steps, arched niches for resting, and a well at the northern end.",
      timing: "9 AM – 5:30 PM",
      bestTime: "October to March",
      category: "Historical",
      image: "images/agrasen.webp",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Agrasen+ki+Baoli+Delhi"
    },

    // 🕉️ Temples & Religious Sites
    {
      name: "Akshardham Temple",
      description: "The Akshardham Temple in Delhi is a modern Hindu complex dedicated to Lord Swaminarayan, inaugurated in 2005. Built by the BAPS Swaminarayan Sanstha, it is known for its intricate architecture, which uses traditional materials like pink sandstone and Italian marble, and is inspired by ancient Vastu Shastra and Pancharatra Shastra principles. The complex includes exhibitions, a water show, and a large central mandir, all intended to convey spiritual messages about peace, compassion, and Hinduism's ancient principles.",
      timing: "9:30 AM – 6:30 PM (Closed on Mondays)",
      bestTime: "October to February",
      category: "Temple",
      image: "images/akshardham.jpg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Akshardham+Temple+Delhi"
    },
    {
      name: "Lotus Temple",
      description: "The Lotus Temple, a Baháʼí House of Worship in Delhi, India, is known for its flower-like design and was dedicated in December 1986. Architect Fariborz Sahba designed the structure, which is made of 27 free-standing marble 'petals' arranged in groups of three to form nine sides. It is a symbol of peace and unity, open to all people regardless of their religion, and serves as a place for prayer and meditation.",
      timing: "9 AM – 5:30 PM (Closed on Mondays)",
      bestTime: "October to March",
      category: "Temple",
      image: "images/lotus.jpg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Lotus+Temple+Delhi"
    },
    {
      name: "ISKCON Temple",
      description: "ISKCON temples, part of the International Society for Krishna Consciousness, are centers for the Hare Krishna movement founded in New York City in 1966 by A.C. Bhaktivedanta Swami Prabhupada. The organization promotes the practice of Bhakti Yoga, or devotion to Lord Krishna, and has hundreds of temples, centers, and communities worldwide. Architecturally, ISKCON temples blend Neo-Vedic and classical Indian styles with modern elements.",
      timing: "4:30 AM – 9 PM",
      bestTime: "All year",
      category: "Temple",
      image: "images/iskon.webp",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=ISKCON+Temple+Delhi"
    },
    {
      name: "Gurudwara Bangla Sahib",
      description: "Gurudwara Bangla Sahib is a prominent Sikh house of worship in New Delhi, originally built in the 17th century as a bungalow for Raja Jai Singh. It became a holy site after the eighth Sikh Guru, Guru Har Krishan, stayed there and helped cure a smallpox epidemic by using the water from the well. The site was transformed into a Gurudwara to honor the Guru, and it now features a golden dome, a sacred pool, and a free community kitchen (langar) that serves thousands of people daily.",
      timing: "Open 24 hours",
      bestTime: "All year",
      category: "Religious",
      image: "images/gurudwara.jpeg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Gurudwara+Bangla+Sahib+Delhi"
    },
    {
      name: "Birla Mandir (Laxminarayan Temple)",
      description: "The Birla Mandir, or Laxminarayan Temple, is a Hindu temple located in New Delhi, built by industrialist Baldeo Das Birla and his son Jugal Kishore Birla between 1933 and 1939. It was inaugurated by Mahatma Gandhi and is dedicated to Lord Vishnu and his consort Lakshmi. The temple, constructed in the northern Hindu style, features shrines to other deities and has become a significant landmark symbolizing national unity and religious harmony.",
      timing: "4:30 AM – 1:30 PM, 2:30 PM – 9 PM",
      bestTime: "All year",
      category: "Temple",
      image: "images/birla.jpg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Birla+Mandir+Delhi"
    },

    // 🌳 Parks & Gardens
    {
      name: "Lodhi Gardens",
      description: "Lodhi Garden in New Delhi is a public park spread across 90 acres, featuring tombs from the Sayyid and Lodi dynasties that ruled from the 15th century. Originally named Lady Willingdon Park in 1936, it was renamed in 1968 after India's independence to honor the Lodi dynasty. Key monuments within the garden include the tombs of Muhammad Shah Sayyid and Sikandar Lodi, along with the Bara Gumbad and Sheesh Gumbad.",
      timing: "6 AM – 7:30 PM",
      bestTime: "October to March",
      category: "Park",
      image: "images/lodhi.jpg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Lodhi+Gardens+Delhi"
    },
    {
      name: "Garden of Five Senses",
      description: "The Garden of Five Senses in New Delhi is a 20-acre public park designed by Pradeep Sachdeva to stimulate all five senses, opening in 2003 near the Mehrauli heritage area. It features various themed areas, including a solar energy park, a 'Khaas Bagh' modeled after Mughal gardens, a water lily pond ('Neel Baagh'), and a 'tactile area' with rocks and plants to engage visitors through sight, sound, smell, touch, and taste. The design respects the surrounding historical sites like Qutub Minar and aims to be a soothing escape from the city's hustle and bustle.",
      timing: "9 AM – 6 PM",
      bestTime: "Winter and Spring",
      category: "Park",
      image: "images/senses.jpg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Garden+of+Five+Senses+Delhi"
    },
    {
      name: "Deer Park",
      description: "'Deer Park' can refer to a public park in New Delhi, India, which was once part of a historical hunting ground established by Alauddin Khilji, or an institute for classical Indian wisdom traditions in Sarnath, named after the historical location of Buddha's first sermon. A 'deer park' is also an enclosed area historically used in England, Wales, and Ireland to keep deer, and can refer to various other locations worldwide, such as the Deer Park Winery and Auto Museum in California or a suburb in Victoria, Australia.",
      timing: "5 AM – 8 PM",
      bestTime: "All year",
      category: "Park",
      image: "images/deer.avif",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Deer+Park+Delhi"
    },
    {
      name: "Nehru Park",
      description: "Nehru Park is an 80-acre public park in New Delhi's Chanakyapuri diplomatic enclave, established in 1969 and named after India's first Prime Minister, Jawaharlal Nehru. It is a significant green space with lawns, pathways, and jogging tracks, and it frequently hosts cultural events like morning Raga concerts and other performances, making it a popular spot for both recreation and arts. The park is also known as Buddha Jayanti Park.",
      timing: "5 AM – 9 PM",
      bestTime: "October to March",
      category: "Park",
      image: "images/nehru.jpeg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Nehru+Park+Delhi"
    },

    // 🖼️ Museums
    {
      name: "National Museum",
      description: "The National Museum in New Delhi is a premier Indian museum with over 200,000 artifacts spanning 5,000 years of cultural heritage, officially established in 1949. Its history began with a 1947-48 exhibition of Indian art in London, which led to a temporary display at the Rashtrapati Bhawan in 1949 before the foundation for the current building was laid in 1955. The museum was formally opened to the public in 1960, and its extensive collection includes items related to archaeology, art, and decorative arts, as noted by Britannica and this YouTube video.",
      timing: "10 AM – 6 PM (Closed on Mondays)",
      bestTime: "All year",
      category: "Museum",
      image: "images/national.avif",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=National+Museum+Delhi"
    },
    {
      name: "National Rail Museum",
      description: "The National Rail Museum in New Delhi is India's first transport museum, inaugurated on February 1, 1977, and renamed in 1995. It preserves India's railway heritage with a collection of indoor and outdoor exhibits, including antique locomotives like the 'Fairy Queen,' royal saloon carriages, and historical artifacts. The museum also features interactive displays, a miniature model, and a toy train ride.",
      timing: "10 AM – 5 PM (Closed on Mondays)",
      bestTime: "October to March",
      category: "Museum",
      image: "images/rail.jpg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=National+Rail+Museum+Delhi"
    },
    {
      name: "Gandhi Smriti",
      description: "Gandhi Smriti is a memorial in New Delhi that marks the last 144 days and assassination site of Mahatma Gandhi. Originally Birla House, the 1928 residence of industrialist Ghanshyamdas Birla was sold to the government and opened as a museum in 1973. It preserves the last days of his life and now serves as a museum with exhibits on his life and philosophy.",
      timing: "10 AM – 5:30 PM (Closed on Mondays)",
      bestTime: "All year",
      category: "Museum",
      image: "images/gandhi.jpg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Gandhi+Smriti+Delhi"
    },
    {
      name: "National Gallery of Modern Art",
      description: "The National Gallery of Modern Art (NGMA) in New Delhi was inaugurated in 1954 to promote and preserve modern Indian art. It is housed in the historic Jaipur House, the former residence of the Maharaja of Jaipur, and its collection includes over 17,000 artworks from the mid-18th century to the present, covering Indian miniatures, colonial artists, the Bengal School, and contemporary art. The gallery, which is the premier art institution under India's Ministry of Culture, has expanded over the years with additional branches in Mumbai and Bangalore and hosts educational programs and temporary exhibitions in addition to its permanent collection. ",
      timing: "11 AM – 6:30 PM (Closed on Mondays)",
      bestTime: "All year",
      category: "Museum",
      image: "images/gallery.jpeg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=National+Gallery+of+Modern+Art+Delhi"
    },

    // 🎡 Modern Attractions
    {
      name: "Connaught Place (CP)",
      description: "Connaught Place (CP) in Delhi was built by the British between 1929 and 1933, named after Prince Arthur, Duke of Connaught, and designed by Robert Tor Russell with inspiration from Bath, England's Royal Crescent. It is a major commercial and financial center with a unique circular design, divided into an Inner Circle and an Outer Circle, and features iconic Georgian-style buildings that house a variety of shops, restaurants, and pubs.",
      timing: "10 AM – 9 PM",
      bestTime: "Evenings",
      category: "Activity",
      image: "images/connaught.jpg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Connaught+Place+Delhi"
    },
    {
      name: "Hauz Khas Village",
      description: "Hauz Khas Village is a historic neighborhood in New Delhi that blends medieval ruins with a modern, trendy atmosphere. Originally built around a large reservoir by Alauddin Khilji in the 13th century, it later became home to an Islamic seminary and tomb under Firoz Shah Tughlaq. Today, the area is known for its chic boutiques, art galleries, cafes, and a vibrant nightlife that coexist with the ancient architecture.",
      timing: "10 AM – 11 PM",
      bestTime: "Evening hours",
      category: "Activity",
      image: "images/khas.jpg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Hauz+Khas+Village+Delhi"
    },
    {
      name: "Dilli Haat",
      description: "An open-air bazaar offering crafts, textiles, and cuisines from across India.",
      timing: "10:30 AM – 10 PM",
      bestTime: "All year",
      category: "Activity",
      image: "images/dilli.jpeg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Dilli+Haat+Delhi"
    },
    {
      name: "Kingdom of Dreams (Gurugram)",
      description: "Kingdom of Dreams is a large entertainment complex in Gurugram, India, which opened in 2010 and closed in 2021, that blended live entertainment, theatre, and culture. It featured multiple venues, including the Nautanki Mahal for large productions, the Showshaa Theatre for smaller shows, and Culture Gully, an indoor boulevard showcasing India's diverse arts, crafts, and cuisine.",
      timing: "12:30 PM – 12 AM (Closed on Mondays)",
      bestTime: "All year",
      category: "Activity",
      image: "images/kingdom.jpg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Kingdom+of+Dreams+Gurgaon"
    },
    {
      name: "Waste to Wonder Park",
      description: "The Waste to Wonder Park in Delhi is a theme park that features replicas of the Seven Wonders of the World, all constructed from over 150 tonnes of industrial and domestic waste, such as scrap metal and discarded automobile parts. Inaugurated in 2019, it was created by the South Delhi Municipal Corporation (SDMC) to promote waste management and the Swachh Bharat Abhiyan (Clean India Mission). The park also operates on renewable energy, has landscaped gardens, and includes attractions like a dinosaur park and a toy train.",
      timing: "11 AM – 11 PM (Closed on Mondays)",
      bestTime: "Evening hours",
      category: "Park",
      image: "images/wonder.jpg",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Waste+to+Wonder+Park+Delhi"
    }
  ]
},
"Mumbai": {
  places: [
    // 🏛 Historical & Iconic Landmarks
    {
      name: "Gateway of India",
      description: "The Gateway of India is an iconic arch monument in Mumbai built to commemorate the landing of King George V and Queen Mary in 1911. Designed by George Wittet in the Indo-Saracenic style, its construction began in 1913 and was completed in 1924. The 26-meter high structure is made of basalt and features a blend of Indian, Islamic, and Gothic architectural styles, with intricate latticework, a central dome, and four turrets.",
      timing: "Open 24 hours",
      bestTime: "October to March, especially evenings",
      category: "Historical Landmark",
      image: "images/gateway.jpg",
      map: "https://www.google.com/maps/dir/?api=1&destination=Gateway+of+India+Mumbai"
    },
    {
      name: "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
      description: "Chhatrapati Shivaji Maharaj Terminus (CSMT) is a historic railway station and UNESCO World Heritage Site in Mumbai, designed by British architect Frederick William Stevens. Previously known as Victoria Terminus, it was built between 1878 and 1887 in the High Victorian Gothic style, blending it with Indian architectural traditions. Today, it serves as the headquarters for the Central Railways and is one of India's busiest stations, handling millions of commuters daily.",
      timing: "5 AM – 12 AM",
      bestTime: "All year",
      category: "Historical Landmark",
      image: "images/shivaji.jpeg",
      map: "https://www.google.com/maps/dir/?api=1&destination=Chhatrapati+Shivaji+Maharaj+Terminus+Mumbai"
    },
    {
      name: "Rajabai Clock Tower",
      description: "The Rajabai Clock Tower in Mumbai, built in 1878, is an iconic Victorian-Gothic building on the University of Mumbai campus, notable for its design resembling London's Big Ben. Donated by stockbroker Premchand Roychand, it was named after his mother, Rajabai, and features intricate carvings, including 24 statues representing Indian life. The tower stands 85 meters tall and is a designated UNESCO World Heritage Site.",
      timing: "9 AM – 5 PM",
      bestTime: "November to February",
      category: "Historical Landmark",
      image: "images/clock.jpg",
      map: "https://www.google.com/maps/dir/?api=1&destination=Rajabai+Clock+Tower+Mumbai"
    },
    {
      name: "Flora Fountain",
      description: "Flora Fountain, originally named the Frere Fountain, is an iconic heritage monument in Mumbai built in 1864 to honor Sir Bartle Frere. It is a fusion of architecture and sculpture, featuring a statue of the Roman goddess Flora at the top and four allegorical figures representing the four seasons. Located in the Hutatma Chowk (Martyr's Square), the fountain is a popular landmark that has undergone restoration efforts to preserve its intricate details.",
      timing: "Open 24 hours",
      bestTime: "Evening hours",
      category: "Historical Landmark",
      image: "images/flora.jpg",
      map: "https://www.google.com/maps/dir/?api=1&destination=Flora+Fountain+Mumbai"
    },

    // 🌊 Beaches
    {
      name: "Juhu Beach",
      description: "Juhu Beach is a popular and iconic beach in Mumbai known for its golden sands, lively atmosphere, and street food. Historically, the area was a separate island in the 19th century, later connected to the mainland by sandbars and land reclamation projects, and was referred to as 'Juvem' by the Portuguese. Today, it stretches about 6 kilometers along the Arabian Sea and is located in an upscale neighborhood with many luxury hotels and residences.",
      timing: "Open 24 hours",
      bestTime: "Sunset, October to March",
      category: "Beach",
      image: "images/juhu.jpeg",
      map: "https://www.google.com/maps/dir/?api=1&destination=Juhu+Beach+Mumbai"
    },
    {
      name: "Chowpatty Beach",
      description: "Chowpatty Beach, also known as Girgaon Chowpatty, is a popular public beach in Mumbai known for its vibrant atmosphere, sunset views, street food, and cultural significance. Historically, its name comes from the Marathi 'chau-pati,' meaning 'four channels,' referencing tidal inlets that once separated the coastline before land reclamation. The beach has been a site of major historical events, including Mahatma Gandhi launching the Anti-Rowlatt Satyagraha in 1919.",
      timing: "Open 24 hours",
      bestTime: "Evening, during festivals",
      category: "Beach",
      image: "images/chowpatty.jpg",
      map: "https://www.google.com/maps/dir/?api=1&destination=Chowpatty+Beach+Mumbai"
    },
    {
      name: "Versova Beach",
      description: "Versova Beach is a historic beach in Mumbai, historically home to a traditional Koli fishing community. It is now well-known for being the site of the world's largest beach cleanup, initiated by Afroz Shah, which transformed it into one of Mumbai's cleaner beaches. The beach offers a blend of its fishing village heritage and modern activities like sunsets, walks, and water sports.",
      timing: "Open 24 hours",
      bestTime: "Evening hours",
      category: "Beach",
      image: "images/varsova.jpg",
      map: "https://www.google.com/maps/dir/?api=1&destination=Versova+Beach+Mumbai"
    },
    {
      name: "Aksa Beach",
      description: "Aksa Beach in Malad, Mumbai, is a relatively clean and tranquil escape known for its natural, untouched charm, a peaceful atmosphere, and a picturesque coastline. While it doesn't have a prominent historical landmark, its initial fame was boosted by a Bollywood song, and it is a popular destination for those seeking a quieter alternative to other busy Mumbai beaches like Juhu. The beach is best visited for walks and sunset views between September and March, avoiding the monsoon season due to strong tides.",
      timing: "6 AM – 7 PM",
      bestTime: "November to February",
      category: "Beach",
      image: "images/aksa.jpeg",
      map: "https://www.google.com/maps/dir/?api=1&destination=Aksa+Beach+Mumbai"
    },

    // 🕉️ Temples & Religious Places
    {
      name: "Siddhivinayak Temple (Prabhadevi)",
      description: "The Siddhivinayak Temple in Prabhadevi, Mumbai, is a historic and popular Hindu shrine dedicated to Lord Ganesha, built in 1801 by Laxman Vithu Patil and Deubai Patil. It is famously known as 'Navasacha Ganapati' (the Ganesha who grants wishes) and features a unique black stone idol with the trunk tilted to the right. The temple has a multi-storied structure with a central gold-plated dome and other golden crowns, along with wooden doors carved with the Ashtavinayak images",
      timing: "5:30 AM – 10 PM",
      bestTime: "All year",
      category: "Temple",
      image: "images/siddivinayak.jpeg",
      map: "https://www.google.com/maps/dir/?api=1&destination=Siddhivinayak+Temple+Mumbai"
    },
    {
      name: "Haji Ali Dargah",
      description: "Haji Ali Dargah is a mosque and tomb complex built in 1431, located on a small islet off the coast of Worli, Mumbai. It houses the tomb of the Sufi saint Pir Haji Ali Shah Bukhari and is known for its Indo-Islamic architecture. Legend states that Haji Ali, a wealthy merchant who renounced his worldly possessions, died on a pilgrimage to Mecca, and his coffin miraculously floated back to this spot. ",
      timing: "5:30 AM – 10 PM",
      bestTime: "Low tide hours, October to March",
      category: "Temple",
      image: "images/haji.jpg",
      map: "https://www.google.com/maps/dir/?api=1&destination=Haji+Ali+Dargah+Mumbai"
    },
    {
      name: "Mount Mary Church (Bandra)",
      description: "Mount Mary Church (Basilica of Our Lady of the Mount) in Bandra, Mumbai, was established on a hill in the late 16th century, evolving from a simple mud oratory into the current church completed in 1902. It is a Roman Catholic church known for its 16th-century statue of the Virgin Mary, its architecture, and its scenic location overlooking the Arabian Sea. The church is also a central point for the annual Bandra Fair",
      timing: "6 AM – 8 PM",
      bestTime: "September during Mount Mary Fair",
      category: "Temple",
      image: "images/bandra.jpg",
      map: "https://www.google.com/maps/dir/?api=1&destination=Mount+Mary+Church+Bandra+Mumbai"
    },

    // 🖼️ Museums & Galleries
    {
      name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (Prince of Wales Museum)",
      description: "The museum building was completed in 1915, but was used as a Children's Welfare Centre and a Military Hospital during the First World War, before being handed over to the committee in 1920. The Prince of Wales Museum was inaugurated on 10 January 1922, by Lady Lloyd, the wife of George Lloyd, Governor of Bombay.",
      timing: "10:15 AM – 6 PM",
      bestTime: "All year",
      category: "Museum",
      image: "images/princewales.jpeg",
      map: "https://www.google.com/maps/dir/?api=1&destination=Prince+of+Wales+Museum+Mumbai"
    },
    {
      name: "National Gallery of Modern Art (NGMA)",
      description: "The National Gallery of Modern Art (NGMA) is India's premier institution for modern and contemporary Indian art, established on March 29, 1954, with its main branch in New Delhi's Jaipur House. Its vast collection showcases the history of art in India from the mid-18th century to the present day, featuring works by artists like Raja Ravi Varma and Amrita Shergill. The NGMA also has branches in Mumbai and Bengaluru, with the latter being housed in the historic Manikyavelu Mansion.",
      timing: "11 AM – 6 PM (Closed on Mondays)",
      bestTime: "All year",
      category: "Museum",
      image: "images/gallery.jpg",
      map: "https://www.google.com/maps/dir/?api=1&destination=National+Gallery+of+Modern+Art+Mumbai"
    },
    {
      name: "Mani Bhavan",
      description: "Mani Bhavan is a two-story building in Mumbai that served as Mahatma Gandhi's headquarters in the city from 1917 to 1934. It belonged to his friend Revashankar Jagjeevan Jhaveri, and it was from this location that Gandhi initiated major campaigns like the Non-Cooperation and Satyagraha movements. Today, the building is a memorial and museum, featuring Gandhi's living room, a photo gallery, a library, and a staircase with pictures of his life.",
      timing: "9:30 AM – 6 PM",
      bestTime: "All year",
      category: "Museum",
      image: "images/mani.jpg",
      map: "https://www.google.com/maps/dir/?api=1&destination=Mani+Bhavan+Mumbai"
    },

    // 🌳 Parks & Nature
    {
      name: "Sanjay Gandhi National Park",
      description: "Sanjay Gandhi National Park (SGNP) is a large urban national park in Mumbai, formerly known as Borivali National Park, with a history dating back to the 4th century BC. Originally named Krishnagiri National Park, it was renamed Borivali National Park in 1974 before being re-dedicated to Sanjay Gandhi in 1981. The park is known for its biodiversity, ancient Kanheri caves, and recreational activities.",
      timing: "7:30 AM – 5:30 PM (Closed on Mondays)",
      bestTime: "November to February",
      category: "Wildlife",
      image: "images/sanjay.jpeg",
      map: "https://www.google.com/maps/dir/?api=1&destination=Sanjay+Gandhi+National+Park+Mumbai"
    },
    {
      name: "Hanging Gardens (Malabar Hill)",
      description: "The Hanging Gardens of Mumbai, also known as Ferozeshah Mehta Gardens, are terraced gardens built on Malabar Hill in 1880 atop a water reservoir. They were named for their elevated, 'hanging' position overlooking the city and the Arabian Sea, and are known for their animal-shaped hedges, flower clock, and panoramic views. The gardens are a popular recreational spot and a heritage site in Mumbai.",
      timing: "5 AM – 9 PM",
      bestTime: "Evening hours",
      category: "Park",
      image: "images/hanging.jpg",
      map: "https://www.google.com/maps/dir/?api=1&destination=Hanging+Gardens+Mumbai"
    },

    // 🎡 Modern Attractions
    {
      name: "Film City (Goregaon)",
      description: "Film City in Goregaon, Mumbai, officially known as Dadasaheb Phalke Chitranagari, is a sprawling integrated film studio complex established by the Maharashtra government in 1977 to support the film industry. It provides extensive facilities for film production, including indoor studios, outdoor sets, gardens, theaters, and recording rooms. Initially conceived under the guidance of filmmaker V. Shantaram, it was renamed in 2001 to honor Dadasaheb Phalke, the father of Indian cinema.",
      timing: "10 AM – 5 PM",
      bestTime: "All year",
      category: "Activity",
      image: "images/filmcity.avif",
      map: "https://www.google.com/maps/dir/?api=1&destination=Film+City+Goregaon+Mumbai"
    },
    {
      name: "EsselWorld & Water Kingdom",
      description: "EsselWorld was a pioneer amusement park in India, opened in 1989, while its adjoining themed water park, Water Kingdom, opened in 1998 and is one of Asia's largest. Both attractions, located in Mumbai, were owned by the Essel Group and featured a variety of rides and attractions before EsselWorld permanently closed in April 2023",
      timing: "10 AM – 7 PM",
      bestTime: "October to March",
      category: "Activity",
      image: "images/esselworld.avif",
      map: "https://www.google.com/maps/dir/?api=1&destination=EsselWorld+Mumbai"
    },
    {
      name: "Carter Road Promenade",
      description: "Carter Road Promenade is a 1.25 km walkway along Mumbai's Arabian Sea, popular for recreation, food, and cultural events. Originally just a road, the promenade was developed with community involvement and features include a jogging track, benches, a dog park, and an amphitheater. In 2009, it was officially renamed Sangeet Samrat Naushad Ali Marg but remains widely known by its original name.",
      timing: "Open 24 hours",
      bestTime: "Evening or sunset",
      category: "Activity",
      image: "images/road.jpeg",
      map: "https://www.google.com/maps/dir/?api=1&destination=Carter+Road+Mumbai"
    }
  ]
},
"Odisha": {
  places: [
    // 🛕 Temples & Pilgrimage Sites
    {
      name: "Jagannath Temple (Puri)",
      description: "One of the Char Dham pilgrimage sites, dedicated to Lord Jagannath, famous for the annual Rath Yatra festival.The Jagannath Temple in Puri, an ancient Hindu temple, was built in the 10th century by King Anantavarman Chodaganga of the Eastern Ganga dynasty. It is dedicated to Lord Jagannath, a form of Krishna, and is one of the four most sacred pilgrimage sites in Hinduism. The temple is famous for its distinctive architecture, including curvilinear towers and intricate carvings, and its main deities are made of neem wood and are periodically renewed.",
      image: "images/jagannath.jpg",
      timing: "5:00 AM – 11:00 PM",
      bestTime: "October to February",
      category: "Temple",
      category: "Historical Landmark",
      map: "https://www.google.com/maps/dir/?api=1&destination=Jagannath+Temple,+Puri"
    },
    {
      name: "Lingaraj Temple (Bhubaneswar)",
      description: "A magnificent temple dedicated to Lord Shiva, showcasing classic Kalinga architecture.The Lingaraj Temple in Bhubaneswar is an 11th-century Hindu temple dedicated to Lord Shiva and is built in the Kalinga architectural style. It was constructed by King Jajati Keshari of the Somavamsi dynasty and later expanded by the Ganga rulers. The temple is known for its towering spire and is a major pilgrimage site, with its presiding deity worshipped as Hari-Hara, a combined form of Shiva and Vishnu.",
      image: "images/lingaraj.jpg",
      timing: "5:00 AM – 9:00 PM",
      bestTime: "October to March",
      category: "Temple",
      category: "Historical Landmark",
      map: "https://www.google.com/maps/dir/?api=1&destination=Lingaraj+Temple,+Bhubaneswar"
    },
    {
      name: "Sun Temple (Konark)",
      description: "A UNESCO World Heritage Site, designed as a colossal chariot of the Sun God with intricate carvings.The Sun Temple at Konark is a 13th-century monument in Odisha, India, designed as a giant chariot for the sun god Surya, pulled by seven horses with 24 wheels. Built by King Narasimhadeva I, it is a masterpiece of Orissan architecture, renowned for its intricate stone carvings that depict the sun god's journey across the heavens, along with scenes of contemporary life and Brahmanical and tantric beliefs. It has been a UNESCO World Heritage Site since 1984 and was known to European sailors as the 'Black Pagoda'. ",
      image: "images/konarch.jpeg",
      timing: "6:00 AM – 8:00 PM",
      bestTime: "October to February",
      category: "Temple",
      map: "https://www.google.com/maps/dir/?api=1&destination=Sun+Temple,+Konark"
    },
    {
      name: "Mukteshwar Temple (Bhubaneswar)",
      description: "Known as the 'Gem of Odisha architecture', famous for its intricate arch and carvings.The 10th-century Mukteshwar Temple in Bhubaneswar is a masterpiece of the Kalinga architectural style, dedicated to Lord Shiva and known as the 'Gem of Odish' for its exquisite carvings. Built around 950-975 CE during the Somavamshi dynasty, it is renowned for its detailed sandstone sculptures, including a prominent arched gateway (torana) with intricate pillars and motifs from Hindu mythology, ascetics, and the Panchatantra tales. The temple is significant for its beautiful and compact design, featuring an eight-petal lotus on the porch ceiling, and is considered a key monument in the evolution of temple architecture in the region.",
      image: "images/mukteswar.jpg",
      timing: "6:00 AM – 7:00 PM",
      bestTime: "October to March",
      category: "Temple",
      map: "https://www.google.com/maps/dir/?api=1&destination=Mukteshwar+Temple,+Bhubaneswar"
    },
    {
      name: "Rajarani Temple (Bhubaneswar)",
      description: "A unique temple made of red and gold sandstone, dedicated to Lord Shiva.The Rajarani Temple in Bhubaneswar is an 11th-century Hindu temple famous for its exquisite carvings and unique architecture, built with yellow and red sandstone, which gives it its name. It lacks a central deity, setting it apart from other temples, and is considered by some scholars to have been built by the Somavamshi dynasty. The temple complex consists of a main shrine (the vimana) and a viewing hall (jagamohana), and its design influenced other temples in central India. ",
      image: "images/rajarani.jpg",
      timing: "6:00 AM – 8:00 PM",
      bestTime: "October to February",
      category: "Temple",
      map: "https://www.google.com/maps/dir/?api=1&destination=Rajarani+Temple,+Bhubaneswar"
    },

    // 🏰 Historical & Heritage Sites
    {
      name: "Dhauli Shanti Stupa",
      description: "A peace pagoda marking Emperor Ashoka’s transformation after the Kalinga War.The Dhauli Shanti Stupa, or Peace Pagoda, is a modern Buddhist monument built in 1972 on Dhauligiri near Bhubaneswar, Odisha. It was constructed to commemorate the end of the Kalinga War and Emperor Ashoka's subsequent conversion to Buddhism, marking his transformation from a warrior to a proponent of peace. The white, dome-shaped structure symbolizes peace and non-violence and sits on a hill that was the site of the historical Kalinga War.",
      image: "images/dhauli.jpg",
      timing: "6:00 AM – 7:00 PM",
      bestTime: "November to February",
      category: "Historical Landmark",
      map: "https://www.google.com/maps/dir/?api=1&destination=Dhauli+Shanti+Stupa,+Bhubaneswar"
    },
    {
      name: "Khandagiri & Udayagiri Caves",
      description: "Ancient rock-cut caves showcasing Jain heritage and inscriptions.The Udayagiri and Khandagiri Caves are a group of 33 rock-cut caves in Bhubaneswar, Odisha, carved in the 2nd century BCE during the reign of King Kharavela of the Kalinga dynasty. Originally called the Kattaka Caves, they served as residential blocks for Jain monks, with Udayagiri containing 18 caves and Khandagiri containing 15. The caves are known for their intricate carvings, particularly in caves like the double-storied Rani Gumpha and the Hathigumpha, which features an inscription by King Kharavela.",
      image: "images/khandagiri.jpg",
      timing: "8:00 AM – 5:00 PM",
      bestTime: "October to March",
      category: "Historical Landmark",
      map: "https://www.google.com/maps/dir/?api=1&destination=Khandagiri+and+Udayagiri+Caves,+Bhubaneswar"
    },
    {
      name: "Barabati Fort (Cuttack)",
      description: "Ruins of a medieval fort built by the Ganga dynasty with a moat and ramparts.Barabati Fort in Cuttack was built by the Eastern Ganga dynasty in the 13th century and served as the capital of the kingdom. The ruins include an arched gateway, a moat, and a central earthen mound where a nine-storied palace once stood. The fort has been rebuilt and occupied by subsequent dynasties including the Chalukyas, Mughals, and Marathas, with its stone and laterite walls showcasing a long and rich history. Today, the Archaeological Survey of India protects the site, which also includes the ruins of a temple and offers views of modern Cuttack. ",
      image: "images/barabati.jpg",
      timing: "6:00 AM – 6:00 PM",
      bestTime: "October to February",
      category: "Historical",
      map: "https://www.google.com/maps/dir/?api=1&destination=Barabati+Fort,+Cuttack"
    },

    // 🌊 Beaches
    {
      name: "Puri Beach",
      description: "A popular beach near the Jagannath Temple, known for golden sands and seaside festivals.Puri Beach is a popular tourist and pilgrimage destination in Odisha, India, known for its 'Golden Beach' which has shimmering golden sand. It is located on the shore of the Bay of Bengal and is also considered a sacred site due to its proximity to the Jagannath Temple, one of the four most holy sites in Hinduism. The beach is famous for activities like water sports, and the presence of local sand artists who create intricate sand sculptures. ",
      image: "images/puri.jpg",
      timing: "Open 24 Hours",
      bestTime: "November to February",
      category: "Beach",
      map: "https://www.google.com/maps/dir/?api=1&destination=Puri+Beach,+Puri"
    },
    {
      name: "Chandrabhaga Beach",
      description: "Close to Konark Temple, known for its sunrise views and cleanliness.Chandrabhaga Beach is a pristine and culturally rich shoreline near the Konark Sun Temple in Odisha, known for its golden sands, tranquil waters, and spiritual significance. It has mythical ties to the Sun God and is believed to hold spiritual importance, especially during the annual Magha Saptami festival when pilgrims perform ritual baths at sunrise. The beach also holds the distinction of being one of India's few Blue Flag certified beaches, signifying its high environmental and safety standards.",
      image: "images/chandrabhaga.jpeg",
      timing: "Open 24 Hours",
      bestTime: "October to February",
      category: "Beach",
      map: "https://www.google.com/maps/dir/?api=1&destination=Chandrabhaga+Beach,+Konark"
    },
    {
      name: "Gopalpur Beach",
      description: "A serene coastal retreat perfect for relaxation and water sports.Gopalpur Beach in Odisha is a historic former trading and military port that is now a popular beach resort. Historically, it was an important port for ancient Kalinga seafarers and later became a military port during World War I. After a period of decline, it has re-emerged as a resort destination known for its serene environment, and it's also one of the few places where Olive Ridley turtles nest. ",
      image: "images/gopalpur.jpg",
      timing: "Open 24 Hours",
      bestTime: "November to March",
      category: "Beach",
      map: "https://www.google.com/maps/dir/?api=1&destination=Gopalpur+Beach,+Ganjam"
    },

    // 🌳 Nature & Wildlife
    {
      name: "Chilika Lake",
      description: "Asia’s largest brackish water lagoon, famous for migratory birds and Irrawaddy dolphins.Chilika Lake is the largest brackish water lagoon in India, located on the eastern coast of Odisha. It is a biodiversity hotspot and a crucial wintering ground for migratory birds, with a history that includes both geological formation and ancient legends. Geologically, it was once a bay of the ocean that became a lagoon due to siltation, while a local legend attributes its formation to a pirate king and his army. The lake was designated as India's first Ramsar site for its international importance as a wetland in 1981.",
      image: "images/chilaka.jpg",
      timing: "6:00 AM – 6:00 PM",
      bestTime: "November to February",
      category: "Nature",
      map: "https://www.google.com/maps/dir/?api=1&destination=Chilika+Lake,+Odisha"
    },
    {
      name: "Simlipal National Park",
      description: "A tiger reserve and biodiversity hotspot with stunning waterfalls and forests.Simlipal National Park in Odisha, India, has a rich history as a former royal hunting ground that was officially declared a national park in 2025. It is a highly diverse ecosystem known for its extensive forests, rivers, and waterfalls, and is the world's only home to wild melanistic tigers. The park is a crucial area for conservation, holding many of India's species of flowering plants, orchids, birds, and mammals. ",
      image: "images/simlipal.jpg",
      timing: "7:00 AM – 5:00 PM",
      bestTime: "November to March",
      category: "Park",
      map: "https://www.google.com/maps/dir/?api=1&destination=Simlipal+National+Park,+Odisha"
    },
    {
      name: "Bhitarkanika National Park",
      description: "Known for saltwater crocodiles and mangrove forests.Bhitarkanika National Park in Odisha, India, is a protected area with a history as a royal hunting ground that was established as a wildlife sanctuary in 1975 and declared a national park in 1998. It is described as India's second-largest mangrove ecosystem, located in the estuarine region of the Brahmani-Baitarani rivers. The park is known for its rich biodiversity, particularly its population of saltwater crocodiles, as well as Olive Ridley sea turtles and a large variety of bird species. ",
      image: "images/bhitarkanika.jpg",
      timing: "7:00 AM – 5:00 PM",
      bestTime: "October to February",
      category: "Park",
      map: "https://www.google.com/maps/dir/?api=1&destination=Bhitarkanika+National+Park,+Odisha"
    },
    {
      name: "Nandankanan Zoological Park",
      description: "Nandankanan Zoological Park is located in Bhubaneswar, Odisha, and was inaugurated in 1960, opening to the public in 1979. It is known for its conservation efforts, being the first zoo in India to breed white tigers and the only one to be an institutional member of the World Association of Zoos and Aquariums (WAZA). The park is a sprawling biological park set in a natural forest, featuring a botanical garden and various safaris.Popular zoo and botanical garden housing white tigers and a safari park.",
      image: "images/nandankanan.jpg",
      timing: "8:00 AM – 5:00 PM (Closed on Monday)",
      bestTime: "October to February",
      category: "Wildlife",
      map: "https://www.google.com/maps/dir/?api=1&destination=Nandankanan+Zoological+Park,+Bhubaneswar"
    },

    // 🖼️ Museums & Cultural Attractions
    {
      name: "Odisha State Museum (Bhubaneswar)",
      description: "The Odisha State Museum in Bhubaneswar was established in 1932 and is the state's premier museum, offering a glimpse into Odisha's history and culture across various eras. Originally founded on the premises of Ravenshaw College in Cuttack, it has since relocated to its current location and contains a wide range of artifacts, including those related to archaeology, numismatics, and the state's rich tribal heritage.Showcases artifacts, sculptures, and manuscripts reflecting Odisha’s heritage.",
      image: "images/state.jpg",
      timing: "10:00 AM – 5:00 PM (Closed on Monday)",
      bestTime: "October to March",
      category: "Museum",
      map: "https://www.google.com/maps/dir/?api=1&destination=Odisha+State+Museum,+Bhubaneswar"
    },
    {
      name: "Tribal Museum (Bhubaneswar)",
      description: "The Odisha State Tribal Museum, also known as the Tribal Museum in Bhubaneswar, was established in 1953 to celebrate and preserve the cultures of Odisha's 62 tribal communities. It is considered one of the best tribal museums in India and features a 'Tribal Habitat Gallery' with replicas of tribal huts, along with artifacts like traditional costumes, jewelry, and ceremonial objects. The museum is also a center for research and educational activities that promote tribal culture.Dedicated to the tribal culture and lifestyle of Odisha.",
      image: "images/tribal.jpg",
      timing: "10:00 AM – 5:00 PM (Closed on Monday)",
      bestTime: "October to February",
      category: "Museum",
      map: "https://www.google.com/maps/dir/?api=1&destination=Tribal+Museum,+Bhubaneswar"
    },
    {
      name: "Raghurajpur Heritage Craft Village",
      description: "A village known for traditional Pattachitra paintings and handicrafts.",
      image: "images/raghapur.jpeg",
      timing: "9:00 AM – 6:00 PM",
      bestTime: "October to February",
      category: "Museum",
      map: "https://www.google.com/maps/dir/?api=1&destination=Raghurajpur+Heritage+Village,+Puri"
    },

    // 🚤 Scenic & Adventure Spots
    {
      name: "Hirakud Dam",
      description: "The Hirakud Dam is a multipurpose project on the Mahanadi River in Odisha, India, built for flood control, irrigation, and hydropower generation. Inaugurated on January 13, 1957, by Prime Minister Jawaharlal Nehru, it is a composite structure of earth, concrete, and masonry that stretches 25.8 km, making it one of the world's longest dams. It created Asia's largest artificial lake and has become a major engineering marvel and a vital part of Odisha's development.One of the world’s longest earthen dams, offering panoramic views and boating.",
      image: "images/hirakud.jpeg",
      timing: "9:00 AM – 5:00 PM",
      bestTime: "October to February",
      category: "Activity",
      map: "https://www.google.com/maps/dir/?api=1&destination=Hirakud+Dam,+Sambalpur"
    },
    {
      name: "Daringbadi",
      description: "Daringbadi is a hill station in the Kandhamal district of Odisha, known as the 'Kashmir of Odisha' for its scenic beauty and cold climate, which includes snowfall in winter. The name comes from a British officer named Daring, with 'badi' meaning 'village' in the local language. The area is a popular tourist destination featuring pine forests, coffee and black pepper gardens, and a rich tribal heritage.Known as the 'Kashmir of Odisha', a scenic hill station with coffee and pine forests.",
      image: "images/daringbadi.jpg",
      timing: "Open 24 Hours",
      bestTime: "October to February",
      category: "Activity",
      map: "https://www.google.com/maps/dir/?api=1&destination=Daringbadi,+Odisha"
    },
    {
      name: "Chandipur Beach",
      description: "Chandipur Beach is a unique beach in the Balasore district of Odisha, India, famous for its 'vanishing' and 'reappearing' sea, a natural phenomenon that occurs twice a day. During low tide, the sea recedes up to 5 kilometers, exposing a seabed where visitors can walk, and it returns during high tide. This unique tidal pattern creates a temporary haven for marine life like red and horseshoe crabs, making it a popular tourist destination known for its biodiversity. Unique beach where the sea recedes up to 5 km during low tide.",
      image: "images/chandipur.jpg",
      timing: "Open 24 Hours",
      bestTime: "October to February",
      category: "Activity",
      category:"Beach",
      map: "https://www.google.com/maps/dir/?api=1&destination=Chandipur+Beach,+Balasore"
    }
  ]
},
  "Andhra Pradesh": {
    places: [
      // 🕉️ Temples & Pilgrimage Sites
      {
      name: "Amaravati Stupa",
      description: "The Amaravati Stupa, dating back to the 2nd century BCE, is one of the largest Buddhist stupas in India. Built during the Satavahana period, it was a major center of Buddhist learning and art. The site showcases intricate limestone carvings depicting the life of Buddha and important Jataka tales. A nearby museum houses many of the excavated sculptures and relics.",
      timing: "9 AM – 6 PM",
      bestTime: "November to February",
      category: "Historical",
      image: "images/amaravati.webp",
      map: "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Amaravati+Stupa+Andhra+Pradesh"
    },
      {
        name: "Tirumala Venkateswara Temple",
        description:
          "The Tirumala Venkateswara Temple is a Hindu temple dedicated to Lord Venkateswara, an incarnation of Vishnu, situated on Tirumala Hill in Tirupati, Andhra Pradesh. Its history spans centuries, with origins possibly dating to the Pallava dynasty, and later expansions by the Cholas and Vijayanagara rulers. It is known for its prominent Dravidian architecture, its status as one of the world's wealthiest temples based on donations, and its rich spiritual and legendary history, including its connection to the mythical cosmic loan from Kubera for the Lord's wedding. One of the most visited religious shrines in the world, dedicated to Lord Venkateswara in Tirupati.",
        image: "images/tirumala.jpg",
        timing: "3:00 AM - 1:30 AM (Next Day)",
        bestTime: "September to February",
        category: "Temple",
        map: "https://www.google.com/maps/dir/?api=1&destination=Tirumala+Venkateswara+Temple,+Tirupati"
      },
      {
        name: "Kanaka Durga Temple",
        description:
          "The Kanaka Durga Temple in Vijayawada, Andhra Pradesh, is a sacred shrine dedicated to the goddess Durga, located on Indrakeeladri Hill by the Krishna River. It is one of the 18 Shakti Peethas and a significant pilgrimage site, with mythological roots tracing back to the Mahabharata era, when Arjuna performed penance there. The temple is known for its Dravidian architecture, intricate carvings, and the goddess being depicted as a powerful protector who defeated the demon Mahishasura. Perched atop Indrakeeladri Hill in Vijayawada, this temple is dedicated to Goddess Durga.",
        image: "images/kanakadurga.jpg",
        timing: "4:00 AM - 10:00 PM",
        bestTime: "October to February",
        category: "Temple",
        map: "https://www.google.com/maps/dir/?api=1&destination=Kanaka+Durga+Temple,+Vijayawada"
      },
      {
        name: "Simhachalam Temple",
        description:
          "The Simhachalam Temple is a historic Hindu temple near Visakhapatnam, Andhra Pradesh, dedicated to Lord Narasimha Swamy, the fierce incarnation of Vishnu. Its history is rooted in the legend of Prahlada and Hiranyakashipu, and it was built and renovated over centuries by various dynasties, including the Eastern Ganga and Vijayanagara empires. A unique aspect is the idol of the main deity, which is perpetually covered in sandalwood paste and appears like a linga, with its true form revealed only once a year on the day of Akshaya Tritiya. A revered temple dedicated to Lord Narasimha, known for its exquisite carvings and hilltop view.",
        image: "images/simhachalam.jpg",
        timing: "4:00 AM - 9:00 PM",
        bestTime: "November to February",
        category: "Temple",
        map: "https://www.google.com/maps/dir/?api=1&destination=Simhachalam+Temple,+Visakhapatnam"
      },
      {
        name: "Srikalahasti Temple",
        description:
          "The Srikalahasti Temple, located in Andhra Pradesh, is a significant Hindu temple dedicated to Lord Shiva, famous for being one of the five Pancha Bhoota Sthalams, representing the element of air. Its history spans several dynasties, including construction by the Pallavas in the 5th century and later renovations and expansions by the Chola kings and the Vijayanagara Empire. The temple is renowned for its unique architecture, the flickering oil lamp in the garbhagriha (sanctum), and its connection to the legend of a spider (Sri), a snake (Kala), and an elephant (Hasti), who all worshipped Shiva there, giving the temple its name.An ancient temple dedicated to Lord Shiva, famous for Rahu-Ketu Pooja near Tirupati.",
        image: "images/srikalahasti.jpg",
        timing: "5:00 AM - 9:00 PM",
        bestTime: "October to March",
        category: "Temple",
        map: "https://www.google.com/maps/dir/?api=1&destination=Srikalahasti+Temple"
      },
      {
        name: "Mangalagiri Panakala Narasimha Swamy Temple",
        description:
          "The Panakala Narasimha Swamy Temple in Mangalagiri is an ancient Vaishnavite temple on an 'auspicious hill' (Mangalagiri) dedicated to Lord Vishnu in his Narasimha avatar. A key feature is the self-manifested idol, covered by a metal face, which is offered panakam (a jaggery-based sweet water), with only half being consumed by the idol, and the rest given to devotees. The temple's history involves multiple deities and legends, including one where Lord Rama visited and the Pandavas installed the original deity. A unique temple where the deity is offered jaggery water instead of traditional offerings.",
        image: "images/mangalagiri.jpg",
        timing: "5:30 AM - 7:30 PM",
        bestTime: "November to February",
        category: "Temple",
        map: "https://www.google.com/maps/dir/?api=1&destination=Panakala+Narasimha+Swamy+Temple,+Mangalagiri"
      },
      {
        name: "Annavaram Satyanarayana Swamy Temple",
        description:
          "The Annavaram Satyanarayana Swamy Temple is a significant Hindu pilgrimage site dedicated to Lord Satyanarayana, an incarnation of Lord Vishnu, located atop Ratnagiri Hill in Annavaram, Andhra Pradesh. The temple was originally constructed in 1891 by Raja Ramanarayana, the zamindar of the Gorsa and Kirlampudi estates, after the deity supposedly appeared to him in a dream and instructed him to build it. The temple has been renovated multiple times since its initial construction, most notably between 1933–34. A sacred temple on Ratnagiri Hill dedicated to Lord Satyanarayana Swamy near Kakinada.",
        image: "images/annavarm.jpg",
        timing: "6:00 AM - 9:00 PM",
        bestTime: "October to March",
        category: "Temple",
        map: "https://www.google.com/maps/dir/?api=1&destination=Annavaram+Satyanarayana+Swamy+Temple"
      },
      {
        name: "Dwaraka Tirumala Temple",
        description:
          "The Dwaraka Tirumala Temple in Andhra Pradesh is dedicated to Lord Venkateswara and is also called 'Chinna Tirupati' (Little Tirupati). Its history is linked to the sage Dwaraka,' who is said to have discovered the self-manifested idol of the Lord after performing severe penance and located it inside an anthill. The temple is a major pilgrimage site, attracting a large number of devotees annually. Known as Chinna Tirupati, this temple is dedicated to Lord Venkateswara in West Godavari.",
        image: "images/dwaraka.jpg",
        timing: "6:00 AM - 8:00 PM",
        bestTime: "October to February",
        category: "Temple",
        map: "https://www.google.com/maps/dir/?api=1&destination=Dwaraka+Tirumala+Temple"
      },

      // 🏰 Forts & Historical Sites
      {
        name: "Gooty Fort",
        description:
          "Gooty Fort is an ancient hill fort in Andhra Pradesh, originally known as Gowthampuri. Built of granite, it has a shell-like shape and is composed of 15 smaller forts connected by gateways. The fort features historical inscriptions dating back to the 7th century, with earliest fortifications attributed to the Western Chalukyas and later control by the Vijayanagara Empire.An ancient hill fort with stunning panoramic views, built during the Vijayanagara Empire.",
        image: "images/gooty.jpeg",
        timing: "9:00 AM - 6:00 PM",
        bestTime: "October to March",
        category: "Historical",
        category: "Fort",
        map: "https://www.google.com/maps/dir/?api=1&destination=Gooty+Fort"
      },
      {
        name: "Kondapalli Fort",
        description:
          "Kondapalli Fort is a 14th-century fort in Andhra Pradesh, built by the Reddy rulers, possibly by Anna Vema Reddy. It has been home to many dynasties, including the Gajapatis, Nizam Nawabs, and the British East India Company. The fort features include a three-story rock tower, three levels of entrances, and significant structures like the Golconda Darwaza and the Tanisha Mahal.A 14th-century fort near Vijayawada famous for wooden Kondapalli toys and scenic hilltop location.",
        image: "images/kondapalli.jpeg",
        timing: "10:00 AM - 6:00 PM",
        bestTime: "November to February",
        category: "Historical",
        category: "Fort",
        map: "https://www.google.com/maps/dir/?api=1&destination=Kondapalli+Fort"
      },
      {
        name: "Gandikota Fort",
        description:
          "Gandikota Fort is a historic fort in Andhra Pradesh's Kadapa district, built in 1123 by Kapa Raja, which served as the seat of power for various dynasties, including the Kakatiyas, Vijayanagara, and Pemmasani Nayakas. Known for its dramatic Grand Canyon of India gorge carved by the Pennar River, the fort features impressive architecture like a massive entrance gate, numerous bastions, and ancient temples and mosques.Known as the Grand Canyon of India, Gandikota features breathtaking gorge views and ancient fort ruins.",
        image: "images/gandikota.jpg",
        timing: "Open 24 Hours",
        bestTime: "October to March",
        category: "Historical",
        category: "Fort",
        map: "https://www.google.com/maps/dir/?api=1&destination=Gandikota,+Kadapa"
      },
      {
        name: "Chandragiri Fort",
        description:
          "Chandragiri Fort has two major locations: one in Andhra Pradesh and another in Kerala, so the specific history and description depend on which fort is being referenced. The Chandragiri Fort in Andhra Pradesh was built in the 11th century and served as the last capital of the Vijayanagara kings. The Chandragiri Fort in Kerala was constructed in the 17th century by Shivappa Nayaka and is situated on the banks of the Chandragiri river. Built by the Yadava rulers, this fort near Tirupati offers historical museums and royal architecture.",
        image: "images/chandragiri.jpeg",
        timing: "10:00 AM - 8:30 PM",
        bestTime: "November to February",
        category: "Historical",
        category: "Fort",
        map: "https://www.google.com/maps/dir/?api=1&destination=Chandragiri+Fort"
      },
      {
        name: "Bobilli Fort",
        description:
          "It appears there might be a slight misspelling, and you are likely referring to the Bobbili Fort in Andhra Pradesh, as information on a fort named 'Obili Fort' is not widely available in historical records, while Bobbili is a nearby place with a significant fort.The history of Bobbili Fort is primarily associated with the Bobbili Zamindari and the famous Battle of Bobbili that occurred in 1757.  A 17th-century fort symbolizing the bravery of the Bobilli Kingdom, featuring impressive stone carvings.",
        image: "images/bobillii.jpg",
        timing: "9:00 AM - 6:00 PM",
        bestTime: "October to March",
        category: "Historical",
        category: "Fort",
        map: "https://www.google.com/maps/dir/?api=1&destination=Bobilli+Fort"
      },
      {
        name: "Ahobilam",
        description:
          "Ahobilam is a sacred Hindu pilgrimage site in Andhra Pradesh, known for being the location where Vishnu's Narasimha avatar defeated the demon king Hiranyakashipu to protect his devotee Prahlada. It is uniquely home to temples dedicated to all nine forms of Narasimha, known as the Nava Narasimhas, with some temples located in the lower town and others requiring a challenging trek into the surrounding Nalamala Hills. The name 'Ahobilam' comes from the heavens exclaiming 'Ahobalam' (meaning 'what strength!') upon the god's powerful emergence from a pillar.A sacred temple town in Nandyal district with nine Narasimha temples in the Nallamala Hills.",
        image: "images/ahobilam.jpg",
        timing: "6:00 AM - 8:00 PM",
        bestTime: "November to March",
        category: "Temple",
        map: "https://www.google.com/maps/dir/?api=1&destination=Ahobilam,+Nandyal"
      },

      // ⛰️ Hill Stations
      {
        name: "Araku Valley",
        description:
          "Araku Valley is a hill station in the Eastern Ghats of Andhra Pradesh, known for its stunning natural beauty, tribal culture, and coffee plantations, and is often called the 'Ooty of Andhra Pradesh'. Historically, it has been inhabited by various tribes and is now recognized for its biodiversity, significant bauxite deposits, and organic, fair-trade coffee, notes Wikipedia, Araku Coffee India, and Testbook.A lush green valley famous for coffee plantations, waterfalls, and tribal culture.",
        image: "images/araku.jpg",
        timing: "Open 24 Hours",
        bestTime: "October to March",
        category: "Hill Station",
        map: "https://www.google.com/maps/dir/?api=1&destination=Araku+Valley"
      },
      {
        name: "Lambasingi",
        description:
          "Lambasingi is a hill station in Andhra Pradesh, known as the 'Kashmir of Andhra Pradesh,' famous for its sub-zero temperatures and occasional snowfall in the winter. It is surrounded by mist-covered valleys and is home to lush coffee plantations, apple farms, and strawberry farms, where tourists can pick their own. The village offers scenic beauty and activities like trekking, camping, and visiting attractions such as Thajangi Reservoir and Kothapalli Waterfalls.Known as the 'Kashmir of Andhra Pradesh', Lambasingi experiences winter frost and coffee estates.",
        image: "images/lambasingi.jpg",
        timing: "Open 24 Hours",
        bestTime: "November to February",
        category: "Hill Station",
        map: "https://www.google.com/maps/dir/?api=1&destination=Lambasingi"
      },
      {
        name: "Horsley Hills",
        description:
          "Horsley Hills is a hill station in Andhra Pradesh, named after W.D. Horsley, a British collector who built a bungalow there in the 1870s to escape the hot climate. The area was originally known as Yenugulla Mallamma Konda, after a saintly woman named Mallamma who lived there and was fed by elephants. Today, it is a popular tourist destination known for its scenic beauty, cooler climate, and unique flora, and it is often called the 'Ooty of Andhra Pradesh'A serene hill station offering cool climate, dense forests, and viewpoints in Chittoor district.",
        image: "images/horsley.webp",
        timing: "Open 24 Hours",
        bestTime: "November to February",
        category: "Hill Station",
        map: "https://www.google.com/maps/dir/?api=1&destination=Horsley+Hills"
      },
      {
        name: "Nagalapuram Hills",
        description:
          "Nagalapuram Hills are part of a region historically significant due to its founding by Vijayanagara emperor Krishnadevaraya in memory of his mother, Nagamamba Devi. The town was previously known as Harigandapuram. Today, the area is popular for trekking and its multi-level waterfalls, often called the 'Queen of Waterfalls'. Known for scenic trekking routes and waterfalls near Tirupati.",
        image: "images/nagalapuram.webp",
        timing: "6:00 AM - 6:00 PM",
        bestTime: "November to February",
        category: "Hill Station",
        map: "https://www.google.com/maps/dir/?api=1&destination=Nagalapuram+Hills"
      },

      // 🌊 Beaches
      {
        name: "Rama Krishna Beach",
        description:
          "Ramakrishna Beach, or RK Beach, is a popular and commercialized beach in Visakhapatnam, named after the nearby Ramakrishna Mission ashram. It is a prime spot for recreation, featuring a park, street food, and attractions like a submarine museum and aquarium. The beach is ideal for strolling and enjoying views, though its rough, rocky waters are not safe for swimming. Popular beach in Visakhapatnam known for clean sands and nearby submarine museum.",
        image: "images/rk.jpg",
        timing: "Open 24 Hours",
        bestTime: "October to March",
        category: "Beach",
        map: "https://www.google.com/maps/dir/?api=1&destination=RK+Beach,+Visakhapatnam"
      },
      {
        name: "Rishikonda Beach",
        description:
          "Rishikonda Beach is a picturesque and popular destination near Visakhapatnam, known for its golden sands, calm waters, and surrounding green hills. It is famous for water sports like jet skiing, kayaking, and windsurfing, and has a peaceful atmosphere with the historic Sapta Rusheswara Temple nearby. The beach offers both relaxing views and adventure activities, with facilities like restrooms, changing rooms, and eateries available.Golden sandy beach perfect for swimming and water sports near Vizag.",
        image: "images/rishikonda.jpg",
        timing: "Open 24 Hours",
        bestTime: "November to February",
        category: "Beach",
        map: "https://www.google.com/maps/dir/?api=1&destination=Rishikonda+Beach"
      },
      {
        name: "Suryalanka Beach",
        description:
          "Suryalanka Beach, also known as Bapatla Beach, is a popular destination in Andhra Pradesh, India, known for its pristine sands and clear waters, especially its captivating sunrises. While it has become a tourist spot with activities like water sports and beachside restaurants, its history is linked to its name and a mythological connection to the Sun God, with ongoing plans for further development, including resorts and a sailing club.A pristine beach near Bapatla, ideal for weekend picnics and relaxation.",
        image: "images/suryalanka.webp",
        timing: "Open 24 Hours",
        bestTime: "October to February",
        category: "Beach",
        map: "https://www.google.com/maps/dir/?api=1&destination=Suryalanka+Beach,+Bapatla"
      },
      {
        name: "Yarada Beach",
        description:
          "Yarada Beach is a serene and picturesque beach in Visakhapatnam, Andhra Pradesh, known for its clean sands and scenic backdrop of hills on three sides and the Bay of Bengal on the other. It is considered one of the most beautiful beaches in the area, but it is less commercialized and has fewer visitors than other beaches. While there isn't a deep history recorded for the beach itself, it is a popular spot for its natural beauty and is located near other notable landmarks like the Dolphin's Nose and Gangavaram Port.Secluded beach surrounded by lush hills, known for its tranquility near Visakhapatnam.",
        image: "images/yarada.jpg",
        timing: "Open 24 Hours",
        bestTime: "October to March",
        category: "Beach",
        map: "https://www.google.com/maps/dir/?api=1&destination=Yarada+Beach,+Visakhapatnam"
      },

      // 💦 Waterfalls
      {
        name: "Talakona Waterfalls",
        description:
          "Tallest waterfall in Andhra Pradesh, located in Sri Venkateswara National Park.",
        image: "images/talakona.jpg",
        timing: "7:00 AM - 6:00 PM",
        bestTime: "September to January",
        category: "Activity",
        map: "https://www.google.com/maps/dir/?api=1&destination=Talakona+Waterfalls"
      },
      {
        name: "Katiki Waterfalls",
        description:
          "A scenic waterfall located near Araku Valley surrounded by dense forests.",
        image: "images/katiki.jpg",
        timing: "8:00 AM - 5:00 PM",
        bestTime: "October to February",
        category: "Activity",
        map: "https://www.google.com/maps/dir/?api=1&destination=Katiki+Waterfalls"
      },
      {
        name: "Ethipothala Waterfall",
        description:
          "Ethipothala Falls is a 70-foot high waterfall in the Palnadu district of Andhra Pradesh, formed by the confluence of three streams on the Chandravanka river, a tributary of the Krishna River. Historically, the name 'Ethipothala' is thought to be a combination of the Telugu words 'eththi' (to lift) and 'potha' (bullock), referring to the falls' force. The area has spiritual significance, with a temple to Lord Dattatreya, and a crocodile breeding center has been established in the pond at the base of the falls.Beautiful cascade formed by the Chandravanka River near Nagarjuna Sagar.",
        image: "images/ethipothala.jpg",
        timing: "9:00 AM - 5:00 PM",
        bestTime: "September to February",
        category: "Activity",
        map: "https://www.google.com/maps/dir/?api=1&destination=Ethipothala+Waterfalls"
      },

      // 🌳 Wildlife & Nature
      {
        name: "Papikonda National Park",
        description:
          "Papikonda National Park is a 1,012.86 sq. km protected area in the East and West Godavari districts of Andhra Pradesh, India, established in 2008. Situated in the Eastern Ghats along the Godavari River, it is characterized by its lush, tropical forests and diverse wildlife, including the Bengal tiger, leopard, and sloth bear. The park was originally a reserved forest in 1882 and was declared a wildlife sanctuary in 1978 before becoming a national park.Picturesque tiger reserve along the Godavari River with boat safaris and forest treks.",
        image: "images/papikonda.jpg",
        timing: "6:00 AM - 6:00 PM",
        bestTime: "October to February",
        category: "Park",
        map: "https://www.google.com/maps/dir/?api=1&destination=Papikonda+National+Park"
      },
      {
        name: "Kambalakonda Wildlife Sanctuary",
        description:
          "Kambalakonda Wildlife Sanctuary, near Visakhapatnam, is a dry evergreen forest reserve named after a local hillock, established on March 10, 1970, under the control of the Andhra Pradesh Forest Department. Historically, it was a game area for the Maharajah of Vizianagaram and is crucial for the region's ecological balance, acting as a rain catchment area for reservoirs like Gambirum Dabana Lake. The sanctuary is home to diverse flora and fauna, including Indian leopards, and offers eco-tourism activities such as trekking and boating.A forest area near Visakhapatnam ideal for trekking and spotting deer, peacocks, and wild boars.",
        image: "images/kambalakonda.jpg",
        timing: "8:00 AM - 5:30 PM",
        bestTime: "November to March",
        category: "Wildlife",
        map: "https://www.google.com/maps/dir/?api=1&destination=Kambalakonda+Wildlife+Sanctuary"
      },
      {
        name: "Kolleru Lake Bird Sanctuary",
        description:
          "Kolleru Lake is India's largest freshwater lake, located between the Krishna and Godavari deltas in Andhra Pradesh, and was designated as a wildlife sanctuary in November 1999 and a Ramsar Wetland in 2002. It is a crucial habitat for migratory birds like Siberian cranes and painted storks, and its ecosystem supports the livelihoods of local communities through fishing and agriculture. The lake is fed by numerous streams and drains, but has faced challenges from pollution and the conversion of its wetlands to aquaculture ponds.A vast freshwater lake and major bird habitat for pelicans and painted storks.",
        image: "images/kolleru.jpg",
        timing: "Open 24 Hours",
        bestTime: "November to February",
        category: "Park",
        map: "https://www.google.com/maps/dir/?api=1&destination=Kolleru+Lake"
      },
      {
        name: "Coringa Wildlife Sanctuary",
        description:
          "Coringa Wildlife Sanctuary is a 235.7 sq km mangrove forest in Andhra Pradesh's East Godavari district, located at the Godavari estuary near Kakinada. Historically, it grew from the ruins of the 19th-century port town of Coringa, which was devastated by a massive cyclone in 1839, leading to the area being abandoned and reclaimed by nature. Today, it is the third-largest mangrove forest in India, home to diverse flora and fauna, including various bird species, mammals like the fishing cat and smooth-coated otter, and nesting olive ridley turtles. A mangrove forest near Kakinada, home to rare species and serene boating trails.",
        image: "images/coringa.jpeg",
        timing: "8:00 AM - 5:00 PM",
        bestTime: "October to March",
        category: "Wildlife",
        map: "https://www.google.com/maps/dir/?api=1&destination=Coringa+Wildlife+Sanctuary"
      },

      // 🖼️ Museums & Cultural Attractions
      {
        name: "Visakha Museum",
        description:
          "The Visakha Museum, also known as the Visakhapatnam Municipal Corporation Museum, is a heritage museum located on Beach Road in Visakhapatnam, which opened in 1991. Housed in a 150-year-old Dutch bungalow, it was established to preserve the cultural and social heritage of the region and its collection includes a diverse range of items like historical paintings, military artifacts, musical instruments, and objects related to the history of the Indian Navy and Visakhapatnam port. Notable exhibits include the shell of an unexploded World War II bomb, the desk used by Mahatma Gandhi, and a model of the first Indian-built steamer, the Jala Usha. Museum in Vizag displaying artifacts, models, and maritime history of Andhra Pradesh.",
        image: "images/visakha.jpg",
        timing: "11:00 AM - 7:00 PM",
        bestTime: "Year-round",
        category: "Museum",
        map: "https://www.google.com/maps/dir/?api=1&destination=Visakha+Museum"
      },
      {
        name: "Araku Tribal Museum",
        description:
          "The Araku Tribal Museum was established in 1996 by the Andhra Pradesh Tourism Development Corporation to conserve and display the culture of the indigenous tribes of Araku Valley. It features life-sized statues, dioramas, and artifacts like jewelry, hunting tools, and kitchen utensils to depict tribal life and traditions. The museum, constructed with mud and metal, also includes live cultural performances, a Tribal Art and Crafts Centre, and souvenir shops. Depicts tribal life, handicrafts, and traditions of the Eastern Ghats tribes.",
        image: "images/arakutribal.jpg",
        timing: "10:00 AM - 6:00 PM",
        bestTime: "October to February",
        category: "Museum",
        map: "https://www.google.com/maps/dir/?api=1&destination=Araku+Tribal+Museum"
      },
      {
        name: "Kondapalli Toy Museum",
        description:
          "The Kondapalli Toy Museum isn't a specific building but a representation of the traditional Kondapalli toys made in a village near Vijayawada, Andhra Pradesh, which is often called 'Toy Town' or 'Bommalakoluvu'. This ancient craft, which dates back around 400 years, involves using lightweight tella poniki wood from the nearby hills to create vibrant, handcrafted figures of mythological scenes, rural life, and animals. The art form is protected by a Geographical Indication (GI) tag and is passed down through generations of artisans from a community known as Aryakhastriyas. Dedicated to the traditional Kondapalli wooden toy craft near Vijayawada.",
        image: "images/kondapalli.avif",
        timing: "10:00 AM - 6:00 PM",
        bestTime: "Year-round",
        category: "Museum",
        map: "https://www.google.com/maps/dir/?api=1&destination=Kondapalli+Toy+Museum"
      }
    ]
  },

  "Telangana": {
  places: [
    // 🌊 Beach-like Lakes
    {
      name: "Hussain Sagar Lake",
      description: "Hussain Sagar Lake is an artificial, heart-shaped lake in Hyderabad, built in 1562 by Hazrat Hussain Shah Wali, during the rule of Ibrahim Quli Qutb Shah. Originally constructed to meet the city's water needs, it is now a popular recreational spot featuring a large monolithic Buddha statue in its center and is a major landmark connecting Hyderabad and Secunderabad.",
      image: "images/hussian.jpg",
      timing: "8 AM – 10 PM",
      bestTime: "October to February",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Hussain+Sagar+Lake,+Hyderabad,+Telangana",
      category: "Beach"
    },
    {
      name: "Laknavaram Lake",
      description: "Laknavaram Lake is a scenic reservoir in the Mulugu district of Telangana, built in 1213 A.D. by the Kakatiya dynasty. Surrounded by lush green forests and connected by a 160-meter-long hanging bridge, the lake offers boating and stunning sunrise and sunset views.",
      image: "images/laknavaram.jpg",
      timing: "9 AM – 5 PM",
      bestTime: "October to March",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Laknavaram+Lake,+Telangana",
      category: "Beach"
    },
    {
      name: "Durgam Cheruvu Lake",
      description: "Also known as the Secret Lake, Durgam Cheruvu is located near Hitech City in Hyderabad. It is surrounded by granite rocks dating back to over 2500 million years. Today, it is developed as a leisure spot with boating, kayaking, and a lakeside park.",
      image: "images/durgamcheruvu.webp",
      timing: "9 AM – 8 PM",
      bestTime: "November to February",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Durgam+Cheruvu+Lake,+Hyderabad,+Telangana",
      category: "Beach",
      category:"Activity"
    },
    {
      name: "Osman Sagar Lake (Gandipet)",
      description: "Osman Sagar, commonly known as Gandipet Lake, was created by damming the Musi River during the reign of the last Nizam, Osman Ali Khan. The lake serves as a source of drinking water and a popular weekend getaway with scenic gardens and resorts nearby.",
      image: "images/osman.jpg",
      timing: "8 AM – 6 PM",
      bestTime: "October to February",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Osman+Sagar+Lake,+Hyderabad,+Telangana",
      category: "Beach"
    },

    // 🏰 Forts
    {
      name: "Golconda Fort",
      description: "Golconda Fort, built in the 11th century by the Kakatiya dynasty and expanded by the Qutb Shahis, is famous for its unique acoustic system, royal apartments, and stunning views of Hyderabad. The evening light and sound show attracts tourists year-round.",
      image: "images/golconda.jpg",
      timing: "9 AM – 5:30 PM",
      bestTime: "November to February",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Golconda+Fort,+Hyderabad,+Telangana",
      category: "Fort"
    },
    {
      name: "Bhongir Fort",
      description: "Bhongir Fort, located atop a monolithic rock in Yadadri Bhuvanagiri district, was built in the 10th century by the Western Chalukya ruler Tribhuvanamalla Vikramaditya VI. The fort offers panoramic views and is popular for trekking and adventure.",
      image: "images/bhongiri.jpg",
      timing: "9 AM – 5 PM",
      bestTime: "October to February",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Bhongir+Fort,+Telangana",
      category: "Fort"
    },
    {
      name: "Khammam Fort",
      description: "Khammam Fort, built in 950 AD by the Kakatiya rulers, stands majestically atop a hill in the heart of Khammam town. It showcases a blend of Hindu and Muslim architectural styles and offers breathtaking views of the city below.",
      image: "images/khammam.jpg",
      timing: "9 AM – 6 PM",
      bestTime: "October to February",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Khammam+Fort,+Telangana",
      category: "Fort"
    },
    {
      name: "Elgandal Fort",
      description: "Elgandal Fort, located near Karimnagar, dates back to the 14th century and was once ruled by the Qutb Shahi and Mughal empires. The fort is known for its watchtowers, mosques, temples, and intricate Persian-style gateways.",
      image: "images/elgandal.jpg",
      timing: "9 AM – 5:30 PM",
      bestTime: "October to March",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Elgandal+Fort,+Telangana",
      category: "Fort"
    },

    // 🕍 Temples
    {
      name: "Yadadri Temple",
      description: "Yadadri Temple, dedicated to Lord Narasimha, is built atop a hill in Yadadri Bhuvanagiri district. Recently reconstructed using black granite, it features grand Dravidian architecture and attracts millions of devotees each year.",
      image: "images/yadadri.jpeg",
      timing: "4 AM – 9:30 PM",
      bestTime: "October to March",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Yadadri+Temple,+Telangana",
      category: "Temple"
    },
    {
      name: "Bhadrachalam Temple",
      description: "The Sri Sita Ramachandra Swamy Temple in Bhadrachalam, located on the banks of the Godavari River, is dedicated to Lord Rama. It was constructed in the 17th century by Bhakta Ramadasu and is an important pilgrimage center for devotees of Lord Rama.",
      image: "images/badrachalam.webp",
      timing: "4:30 AM – 9 PM",
      bestTime: "October to February",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Bhadrachalam+Temple,+Telangana",
      category: "Temple"
    },
    {
      name: "Birla Mandir Hyderabad",
      description: "Built entirely from white marble, Birla Mandir in Hyderabad is dedicated to Lord Venkateswara. Perched atop Naubat Pahad hill, it offers panoramic views of the city and Hussain Sagar Lake, blending North and South Indian temple architecture.",
      image: "images/birlahyd.jpeg",
      timing: "7 AM – 12 PM, 3 PM – 9 PM",
      bestTime: "October to March",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Birla+Mandir,+Hyderabad,+Telangana",
      category: "Temple"
    },
    {
      name: "Ramappa Temple",
      description: "Ramappa Temple, located in Palampet near Warangal, is a UNESCO World Heritage Site built during the Kakatiya dynasty in the 13th century. Dedicated to Lord Shiva, it is renowned for its floating bricks and intricate carvings that have stood the test of time.",
      image: "images/ramappa.avif",
      timing: "6 AM – 6 PM",
      bestTime: "October to February",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Ramappa+Temple,+Telangana",
      category: "Temple"
    },

    // 🏞️ Hill Stations
    {
      name: "Ananthagiri Hills",
      description: "Ananthagiri Hills, located in Vikarabad district, is famous for its dense forests, trekking trails, and the Anantha Padmanabha Swamy Temple. It is one of the cleanest and greenest weekend getaways from Hyderabad.",
      image: "images/ananthagiri.webp",
      timing: "Open 24 Hours",
      bestTime: "October to February",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Ananthagiri+Hills,+Vikarabad,+Telangana",
      category: "Hill Station"
    },
    {
      name: "Nagarjuna Sagar",
      description: "Located on the border of Telangana and Andhra Pradesh, Nagarjuna Sagar is home to one of the tallest masonry dams in the world. Surrounded by lush hills and an artificial lake, it offers breathtaking views and boat rides to Nagarjunakonda island.",
      image: "images/nagarjuna.jpeg",
      timing: "9 AM – 6 PM",
      bestTime: "October to March",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Nagarjuna+Sagar,+Telangana",
      category: "Hill Station"
    },
    {
      name: "Bogatha Waterfalls",
      description: "Nicknamed the 'Niagara of Telangana', Bogatha Waterfalls is located near Eturnagaram in Mulugu district. Surrounded by forested hills, it’s an ideal spot for nature lovers and trekkers, especially during the monsoon.",
      image: "images/bogata.jpg",
      timing: "9 AM – 5 PM",
      bestTime: "June to December",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Bogatha+Waterfalls,+Telangana",
      category: "Hill Station"
    },
    {
      name: "Pocharam Wildlife Sanctuary & Lake",
      description: "Located near Medak, Pocharam Wildlife Sanctuary and Lake offer a peaceful blend of nature, trekking, and birdwatching. The nearby Medak Fort and Church make it a popular eco-tourism destination.",
      image: "images/pocharam.jpeg",
      timing: "8 AM – 5 PM",
      bestTime: "November to February",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Pocharam+Lake,+Medak,+Telangana",
      category: "Hill Station"
    },

    // 🖼️ Museums
    {
      name: "Salar Jung Museum",
      description: "The Salar Jung Museum in Hyderabad is one of India's largest museums, showcasing art, sculptures, manuscripts, and artifacts from around the world. Its highlights include the Veiled Rebecca and a massive clock that draws crowds every hour.",
      image: "images/salarjung.jpg",
      timing: "10 AM – 5 PM (Closed Fridays)",
      bestTime: "All Year",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Salar+Jung+Museum,+Hyderabad,+Telangana",
      category: "Museum"
    },
    {
      name: "Telangana State Archaeology Museum",
      description: "Also known as the Hyderabad Museum, this museum houses artifacts from the Nizam era, ancient coins, Buddhist sculptures, and the Egyptian mummy of Princess Naishu. It’s one of the oldest museums in India.",
      image: "images/state.jpg",
      timing: "10:30 AM – 5 PM (Closed Fridays)",
      bestTime: "All Year",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Telangana+State+Archaeology+Museum,+Hyderabad",
      category: "Museum"
    },
    {
      name: "Warangal Fort Museum",
      description: "This museum near the historic Warangal Fort showcases sculptures, inscriptions, and relics from the Kakatiya dynasty. It provides insight into the architectural brilliance of medieval Telangana.",
      image: "images/warangal.jpg",
      timing: "10 AM – 5 PM",
      bestTime: "October to March",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Warangal+Fort+Museum,+Telangana",
      category: "Fort"
    },
    {
      name: "Sudha Car Museum",
      description: "Sudha Car Museum is a unique automobile museum in Hyderabad showcasing handmade, quirky, and creative car models designed by K. Sudhakar. The vehicles include cars shaped like shoes, cameras, and even burgers!",
      image: "images/car.jpg",
      timing: "9:30 AM – 6 PM",
      bestTime: "All Year",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Sudha+Car+Museum,+Hyderabad,+Telangana",
      category: "Museum"
    }
  ]
},

  "Kerala": {
  places: [
    // 🏝️ Beaches
    {
      name: "Kovalam Beach",
      description: "Kovalam Beach is a world-renowned destination in Kerala, known for its three crescent-shaped beaches and calm waters ideal for swimming. Its history as a tourist spot began when the British promoted it in the 1930s, and it gained further popularity with the hippies in the 1970s. Today, it offers a mix of cultural experiences, watersports, shopping, and wellness activities like Ayurvedic massages.Famous crescent-shaped beach with a lighthouse and water sports in Thiruvananthapuram.",
      image: "images/kovalam.jpeg",
      timing: "Open 24 Hours",
      bestTime: "November to February",
      category: "Beach",
      map: "https://www.google.com/maps/dir/?api=1&destination=Kovalam+Beach,+Thiruvananthapuram"
    },
    {
      name: "Varkala Beach",
      description: "Varkala Beach, also known as Papanasam Beach, is a popular destination in Kerala, India, famous for its unique red laterite cliffs, golden sands, and the Arabian Sea. It is a site of both spiritual and geological significance, featuring the historic 2,000-year-old Janardana Swami Temple and a section of cliffs designated as a National Geological Monument. Historically, it was an ancient port town, and legends attribute its name to the falling valkalam (tree bark garment) of Sage Narada.Known for its dramatic cliffs, yoga retreats, and mesmerizing sunsets.",
      image: "images/varkala.jpg",
      timing: "Open 24 Hours",
      bestTime: "November to February",
      category: "Beach",
      map: "https://www.google.com/maps/dir/?api=1&destination=Varkala+Beach"
    },
    {
      name: "Cherai Beach",
      description: "Cherai Beach is a popular beach in Kerala, India, known for its golden sands, clean shallow waters, and scenic blend of backwaters and sea. It is also famous for its dolphins, Chinese fishing nets, and surrounding coconut groves. The area has a history tied to the Vypeen Island, where it is located, with notable events including the arrival of the Dutch and the emergence of social reformers and political figures from the region.Calm beach ideal for swimming and dolphin spotting near Kochi.",
      image: "images/cherai.webp",
      timing: "Open 24 Hours",
      bestTime: "October to March",
      category: "Beach",
      map: "https://www.google.com/maps/dir/?api=1&destination=Cherai+Beach,+Kochi"
    },
    {
      name: "Marari Beach",
      description: "Marari Beach is a tranquil, secluded destination in the fishing village of Mararikulam, Kerala, known for its pristine sandy shores and serene atmosphere. It offers a peaceful escape from commercialization, with its name derived from the village itself. The beach is ideal for relaxation and witnessing traditional fishing life, with nearby attractions including the backwaters, a historic temple, and opportunities for Ayurvedic treatments. Serene and less crowded beach surrounded by coconut trees in Alappuzha.",
      image: "images/marari.jpg",
      timing: "Open 24 Hours",
      bestTime: "September to March",
      category: "Beach",
      map: "https://www.google.com/maps/dir/?api=1&destination=Marari+Beach,+Alappuzha"
    },
    {
      name: "Bekal Beach & Fort",
      description: "Bekal Beach is a scenic, golden-sand beach adjacent to the large, historic Bekal Fort in Kerala, India. The fort is a 17th-century coastal fortification built by Shivappa Nayaka of the Keladi dynasty, known for its distinctive keyhole shape, massive laterite walls, and strategic location on the Arabian Sea. It has been occupied by various powers, including the Chirakkal Rajas, Haider Ali, and Tipu Sultan, before being taken over by the British East India Company.Scenic beach near the historic Bekal Fort, offering beautiful sunset views.",
      image: "images/bekal.jpg",
      timing: "8 AM – 6 PM",
      bestTime: "November to February",
      category: "Beach",
      map: "https://www.google.com/maps/dir/?api=1&destination=Bekal+Beach,+Kasargod"
    },
    {
      name: "Alappuzha Beach",
      description: "Alappuzha Beach is a popular picnic spot in Kerala, known for its golden sands, palm trees, and iconic, over 150-year-old pier built by Captain Crawford. Historically, the pier was a vital hub for maritime trade, connecting Alappuzha to global routes, and today, the beach is famous for its lighthouse, the historic Kadal Palam (sea bridge), and various recreational activities like backwater cruises, boating, and water sports. Known for houseboat cruises and annual boat races in Alleppey.",
      image: "images/alappuzha.jpg",
      timing: "Open 24 Hours",
      bestTime: "August to March",
      category: "Beach",
      map: "https://www.google.com/maps/dir/?api=1&destination=Alappuzha+Beach"
    },
    {
      name: "Napier Museum & Zoo Gardens",
      description: "The Napier Museum complex in Thiruvananthapuram includes beautifully maintained botanical gardens and one of India’s oldest zoos. The lush green surroundings, centuries-old trees, and rare plant species make it a must-visit spot for nature enthusiasts and families.",
      image: "images/napier.jpg",
      timing: "10 AM – 5 PM (Closed Mondays)",
      bestTime: "October to March",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Napier+Museum,+Thiruvananthapuram,+Kerala",
      category: "Park"
    },
    {
      name: "Malampuzha Garden (Palakkad)",
      description: "Malampuzha Garden, also known as the 'Vrindavan of Kerala', is a beautifully landscaped garden located at the foot of the Western Ghats. It features fountains, a ropeway, a rock garden by artist Nek Chand, and a massive Yakshi statue.",
      image: "images/malampuzha.webp",
      timing: "9 AM – 8 PM",
      bestTime: "October to February",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Malampuzha+Garden,+Palakkad,+Kerala",
      category: "Park"
    },
    {
      name: "Eravikulam National Park (Munnar)",
      description: "Eravikulam National Park in Munnar is not just a wildlife reserve but also one of the most beautiful garden-like landscapes in Kerala. Rolling green hills covered with Neelakurinji flowers (which bloom once every 12 years) and views of the Anamudi peak make it spectacular.",
      image: "images/eravikulam.jpeg",
      timing: "7 AM – 4 PM",
      bestTime: "September to February",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Eravikulam+National+Park,+Munnar,+Kerala",
      category: "Wildlife"
    },
    {
      name: "Brindavan Gardens (near Kasaragod – Bekal)",
      description: "The Bekal region hosts several manicured gardens around the famous Bekal Fort area, often called the ‘Brindavan of Kerala’. These gardens feature water fountains, pathways, and sunset viewpoints overlooking the Arabian Sea, ideal for family outings and photography.",
      image: "images/brindavan.jpeg",
      timing: "8 AM – 7 PM",
      bestTime: "November to February",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Bekal+Fort,+Kasaragod,+Kerala",
      category: "Park"
    },
    {
      name: "Hill View Park (Idukki)",
      description: "Hill View Park in Idukki is a serene natural garden located just above the Idukki Dam. It offers well-laid pathways, viewing spots, and boating facilities. The park provides stunning aerial views of both Idukki and Cheruthoni dams, surrounded by misty hills.",
      image: "images/hill.jpeg",
      timing: "9 AM – 6 PM",
      bestTime: "October to March",
      map: "https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=current+location&destination=Hill+View+Park,+Idukki,+Kerala",
      category: "Activity"
    },

    // ⛰️ Hill Stations
    {
      name: "Munnar",
      description: "Munnar is a hill station in the Idukki district of Kerala, India, known for its lush tea plantations and cool climate. The name 'Munnar' means 'three rivers' referring to its location at the confluence of the Mudhirapuzha, Nallathanni, and Kundali rivers. Its history is closely linked to the British colonial era, when the British developed the area for tea and other plantations, and it later became a summer resort.Hill station with tea gardens, rolling hills, and Eravikulam National Park.",
      image: "images/munnar.jpg",
      timing: "Open 24 Hours",
      bestTime: "October to May",
      category: "Hill Station",
      map: "https://www.google.com/maps/dir/?api=1&destination=Munnar"
    },
    {
      name: "Wayanad",
      description: "Wayanad is a scenic hill district in Kerala, India, known for its lush forests and scenic beauty, with its name derived from 'Vayal Nadu', meaning'land of paddy fields'. Historically, the region was ruled by various dynasties including the Veda tribe and the Pazhassi Rajas before being invaded by Hyder Ali and Tipu Sultan, eventually coming under British rule. In 1980, Wayanad was formed as the 12th district of Kerala, consisting of Mananthavady, Sulthanbathery, and Vythiri taluks.Lush forests, waterfalls, caves, and wildlife sanctuaries.",
      image: "images/wayanad.jpg",
      timing: "Open 24 Hours",
      bestTime: "October to May",
      category: "Hill Station",
      map: "https://www.google.com/maps/dir/?api=1&destination=Wayanad"
    },
    {
      name: "Thekkady",
      description: "Thekkady is a town in the Idukki district of Kerala, India, known for the Periyar Tiger Reserve and its lush forests, mountains, and plantations. Historically, the region was under the rule of the Pandya and Travancore kings, who used the forests as hunting grounds. The 19th-century construction of the Mullaperiyar Dam was a pivotal event that created the artificial Periyar Lake and shaped the local ecology.Home to Periyar Tiger Reserve and spice plantations.",
      image: "images/thekkady.jpg",
      timing: "6 AM – 6 PM",
      bestTime: "September to March",
      category: "Hill Station",
      map: "https://www.google.com/maps/dir/?api=1&destination=Thekkady"
    },
    {
      name: "Vagamon",
      description: "Vagamon is a hill station in Kerala, India, known for its picturesque landscapes of rolling green hills, tea plantations, pine forests, and waterfalls. Its relatively recent history began in 1926 when the British established tea plantations, with further development in the 1930s and the establishment of the Kurisumala Ashram in the 1950s, which marked a key turning point for the area.Quiet hill station with pine forests and meadows.",
      image: "images/vagamon.webp",
      timing: "Open 24 Hours",
      bestTime: "March to May",
      category: "Hill Station",
      map: "https://www.google.com/maps/dir/?api=1&destination=Vagamon"
    },
    {
      name: "Ponmudi",
      description: "Ponmudi is a scenic hill station in Kerala, known for its lush green hills, cool climate, and tea gardens. Historically, it was an important trade route between Travancore and Tamil Nadu, and the British developed it with tea plantations. Mythologically, it is linked to sage Agastya and believed to be blessed by Lord Shiva and Goddess Parvati.Scenic hill station with winding roads and tea estates.",
      image: "imagesponmudi.jpg",
      timing: "7 AM – 6 PM",
      bestTime: "November to March",
      category: "Hill Station",
      map: "https://www.google.com/maps/dir/?api=1&destination=Ponmudi,+Thiruvananthapuram"
    },
    {
      name: "Ranipuram",
      description: "Ranipuram is a hill station in the Kasaragod district of Kerala, formerly known as Madathumala, and is famous for its lush greenery, trekking trails, and scenic views, earning it the nickname “Ooty of Kerala”. Its name translates to 'Queen's Place,' possibly due to local traditions, royal heritage, or its majestic surroundings. The area features grasslands, shola forests, and a variety of wildlife, making it popular for nature lovers and adventure seekers.Peaceful, lesser-known hill retreat in Kasargod.",
      image: "images/ranipuram.jpg",
      timing: "6 AM – 6 PM",
      bestTime: "October to March",
      category: "Hill Station",
      map: "https://www.google.com/maps/dir/?api=1&destination=Ranipuram,+Kasargod"
    },

    // 🌊 Backwaters & Lakes
    {
      name: "Alleppey Backwaters",
      description: "The Alleppey Backwaters are a vast network of interlinking canals, rivers, and lakes in Kerala, India, known for their picturesque natural beauty of coconut groves, rice paddies, and palm-fringed waterways. Historically, this intricate system was crucial for trade, agriculture, fishing, and transportation, moving goods like spices and coir to markets. Today, it is a major tourist destination, famous for its houseboat cruises, unique local culture, and activities like boat races and water sports.Houseboat cruises through tranquil canals and lagoons.",
      image: "images/alleppey.png",
      timing: "8 AM – 6 PM",
      bestTime: "November to February",
      category: "Activity",
      map: "https://www.google.com/maps/dir/?api=1&destination=Alleppey+Backwaters"
    },
    {
      name: "Kumarakom Backwaters",
      description: "Kumarakom Backwaters are a picturesque network of waterways on the banks of Vembanad Lake in Kerala, characterized by mangrove forests, paddy fields, and coconut groves. Historically, these backwaters were vital trade routes, and the Kumarakom area was later developed by Alfred George Baker, a British missionary who reclaimed land for agriculture. Today, the area is a major tourist destination, known for birdlife, marine life, and leisure activities like houseboat cruises.Bird sanctuary and luxury houseboats in Kottayam.",
      image: "images/kumarakom.jpeg",
      timing: "6 AM – 6 PM",
      bestTime: "October to March",
      category: "Activity",
      map: "https://www.google.com/maps/dir/?api=1&destination=Kumarakom+Backwaters,+Kottayam"
    },
    {
      name: "Ashtamudi Lake",
      description: "Ashtamudi Lake is a large, palm-shaped backwater in Kerala's Kollam district, named for its eight-armed shape, which is indicative of its multiple branches. Historically, the area around the lake was an important port for the ancient city of Quilon. Today, it is a significant wetland, recognized as a Ramsar Wetland of International Importance, and is a popular destination for backwater tourism with houseboat cruises and resorts.Second-largest lake in Kerala; gateway to backwaters.",
      image: "images/ashtamudi.webp",
      timing: "6 AM – 6 PM",
      bestTime: "October to March",
      category: "Activity",
      map: "https://www.google.com/maps/dir/?api=1&destination=Ashtamudi+Lake,+Kollam"
    },
    {
      name: "Vembanad Lake",
      description: "Vembanad Lake is the longest lake in India and the largest in Kerala, located across the districts of Alappuzha, Kottayam, and Ernakulam. It is a vital part of the Kerala backwaters, a brackish water ecosystem where freshwater from rivers like the Meenachil, Achankovil, Pamba, and Manimala meets the sea. Historically, it has been crucial for transportation, a major source of livelihood through fishing and agriculture, and a center for unique biodiversity. It is also known for tourism, with attractions like the Kumarakom Bird Sanctuary and the Nehru Trophy Boat Race.Largest lake in Kerala, ideal for boating and fishing.",
      image: "images/vembanad.webp",
      timing: "6 AM – 6 PM",
      bestTime: "November to February",
      category: "Activity",
      map: "https://www.google.com/maps/dir/?api=1&destination=Vembanad+Lake"
    },
    {
      name: "Kuttanad",
      description: "Kuttanad is a unique region in Kerala, known as the 'rice bowl of India,' famous for its below-sea-level paddy cultivation and backwaters. Historically, it is associated with the ancient Chera dynasty, particularly King Cheran Chenkuttuvan, who may have reclaimed land to form the region, leading to its name meaning 'Land of the Kuttuvan'. The Kuttanad Wetland Agriculture System is recognized globally for its innovative farming practices using dykes, canals, and pumps to cultivate rice and other crops.Below-sea-level farming region with scenic canals.",
      image: "images/kuttanad.jpg",
      timing: "Open 24 Hours",
      bestTime: "September to March",
      category: "Activity",
      map: "https://www.google.com/maps/dir/?api=1&destination=Kuttanad"
    },

    // 🛕 Temples
    {
      name: "Sree Padmanabhaswamy Temple",
      description: "The Sree Padmanabhaswamy Temple is a historic and wealthy Hindu temple in Thiruvananthapuram, Kerala, dedicated to Lord Vishnu, who is enshrined in a reclining posture on the serpent Adishesha. Historically, the temple is believed to date back to the 8th century, with its current structure dating from the 18th century, and it is considered the tutelary deity of the royal family of Travancore. It is known for its blend of Kerala and Dravidian architecture, its massive and mysterious idol, and for being one of the world's richest temples, a fact highlighted in 2011 when billions of dollars worth of treasure was discovered in its secret vaults. Ancient temple dedicated to Lord Vishnu in Thiruvananthapuram.",
      image: "images/padmanabhaswamy.jpg",
      timing: "3:30 AM – 7:30 PM",
      bestTime: "All Year",
      category: "Temple",
      map: "https://www.google.com/maps/dir/?api=1&destination=Sree+Padmanabhaswamy+Temple,+Thiruvananthapuram"
    },
    {
      name: "Guruvayur Temple",
      description: "The Guruvayur Temple is a sacred Hindu temple in Kerala dedicated to Lord Vishnu, worshipped as Krishna and also known as Guruvayurappan. Revered as Bhuloka Vaikuntham (the holy abode of Vishnu on Earth) and the 'Dwarka of the South,' it is one of South India's most visited pilgrimage sites. Its history is intertwined with legends, including the installation of the idol by the sage Guru and the wind god Vayu, from whom it gets its name. The temple has been rebuilt over the centuries and survived several attacks and fires. Famous Krishna temple known as 'Dwarka of the South'.",
      image: "images/guruvayur.webp",
      timing: "3 AM – 9:30 PM",
      bestTime: "All Year",
      category: "Temple",
      map: "https://www.google.com/maps/dir/?api=1&destination=Guruvayur+Temple"
    },
    {
      name: "Sabarimala Temple",
      description: "Sabarimala is a major Hindu pilgrimage site in Kerala, India, dedicated to Lord Ayyappa, believed to be the son of Shiva and Vishnu. Located in the Western Ghats, its history is rooted in the legend of Ayyappa, who defeated the demoness Mahishi and then established his shrine at Sabari mount. The temple is accessible via various routes and is a prominent religious center known for attracting pilgrims from across India and the world, especially during the mandalam-makaravilakku season.One of the largest annual pilgrimage centers in India.",
      image: "images/sabarimala.webp",
      timing: "Open during Mandala season (Nov–Jan)",
      bestTime: "November to January",
      category: "Temple",
      map: "https://www.google.com/maps/dir/?api=1&destination=Sabarimala+Temple"
    },

    // 🌿 Wildlife & Nature
    {
      name: "Periyar Wildlife Sanctuary",
      description: "Periyar Wildlife Sanctuary, also known as the Periyar Tiger Reserve, is a protected area in the Western Ghats of Kerala, India, established in 1950 to protect the forests around Periyar Lake. Its history began when the forests were declared a private reserve in 1899, followed by a 1934 conversion to a game sanctuary and subsequent expansion in 1950. The sanctuary is known for its diverse wildlife, including elephants and tigers, and features a significant artificial lake created by the Mullaperiyar dam.Famous tiger reserve and elephant habitat in Thekkady.",
      image: "images/periyar.avif",
      timing: "6 AM – 6 PM",
      bestTime: "October to April",
      category: "Wildlife",
      map: "https://www.google.com/maps/dir/?api=1&destination=Periyar+Wildlife+Sanctuary"
    },
    {
      name: "Silent Valley National Park",
      description: "Silent Valley National Park is a pristine tropical rainforest in Kerala's Palakkad district, known for being one of India's last undisturbed tracts of evergreen forest in the Western Ghats. Its history is marked by a successful conservation movement in the 1970s and 80s, which stopped the construction of a hydroelectric dam and led to its official designation as a national park in 1984. The park is a haven for biodiversity, including a large population of endangered Lion-Tailed Macaques, and was declared a UNESCO World Heritage Site in 2012.Rich tropical rainforest with diverse flora and fauna.",
      image: "images/silent.webp",
      timing: "6 AM – 6 PM",
      bestTime: "December to April",
      category: "Park",
      map: "https://www.google.com/maps/dir/?api=1&destination=Silent+Valley+National+Park"
    },

    // 💧 Waterfalls
    {
      name: "Athirappilly Waterfalls",
      description: "Meenmutty Waterfalls are a spectacular three-tiered waterfall in Kerala, India, located in the Wayanad and Thiruvananthapuram districts. The name 'Meenmutty' comes from the Malayalam words for 'fish' and 'blocked,' referring to the way fish are blocked by the terrain. The Wayanad falls are known for their three tiers, a 300-meter height, and a 2 km trek through the jungle, while the Thiruvananthapuram falls require a longer trek through dense forest and a boat ride across the Neyyar reservoir.Athirappilly Falls is a majestic 80-foot waterfall in Kerala, India, known for its impressive size and lush surroundings, often called the 'Niagara of India'. Situated on the Chalakudy River in the Western Ghats, it is Kerala's largest waterfall and a popular tourist spot, rich in biodiversity, with nearby attractions like the Vazhachal Falls. While the waterfall has a long natural history, a significant development is the proposed 1996 Athirappilly Hydel Project.The largest waterfall in Kerala, often called 'Niagara of India'.",
      image: "images/athirappilly.jpg",
      timing: "8 AM – 6 PM",
      bestTime: "June to September",
      category: "Activity",
      map: "https://www.google.com/maps/dir/?api=1&destination=Athirappilly+Waterfalls"
    },
    {
      name: "Meenmutty Waterfalls",
      description: "Three-tiered waterfall surrounded by lush forests in Wayanad.",
      image: "images/meenmutty.jpg",
      timing: "8 AM – 5 PM",
      bestTime: "October to May",
      category: "Activity",
      map: "https://www.google.com/maps/dir/?api=1&destination=Meenmutty+Waterfalls,+Wayanad"
    },
    {
      name: "Vaikom Mahadeva Temple (Kottayam)",
      description: "Vaikom Mahadeva Temple, one of the oldest temples in Kerala, is dedicated to Lord Shiva. It is famous for its Vaikathashtami festival, celebrated with grandeur. The temple's large courtyard, intricate wooden carvings, and spiritual significance make it a must-visit shrine.",
      image: "images/vaikom.jpg",
      timing: "4 AM – 12 PM, 5 PM – 8 PM",
      bestTime: "November to March",
      map: "https://www.google.com/maps/dir/?api=1&destination=Vaikom+Mahadeva+Temple,+Kottayam,+Kerala",
      category: "Temple"
    },
    {
      name: "Chottanikkara Bhagavathy Temple (Ernakulam)",
      description: "Chottanikkara Temple is dedicated to Goddess Bhagavathy, worshipped in three forms — Saraswati, Lakshmi, and Durga — throughout the day. It is believed that the deity cures mental and physical ailments. The temple is one of the most powerful Shakti Peethas in Kerala.",
      image: "images/Chottanikkara.jpg",
      timing: "4 AM – 12 PM, 4 PM – 8:30 PM",
      bestTime: "February to April (during Makom Thozhal Festival)",
      map: "https://www.google.com/maps/dir/?api=1&destination=Chottanikkara+Bhagavathy+Temple,+Ernakulam,+Kerala",
      category: "Temple"
    },
    {
      name: "Ettumanoor Mahadeva Temple (Kottayam)",
      description: "Ettumanoor Mahadeva Temple, dedicated to Lord Shiva, is renowned for its Dravidian architecture and stunning mural paintings, including the famous ‘Nataraja’ painting. The annual Ezharaponnana Festival is a major attraction featuring golden elephant statues.",
      image: "images/Ettumanoor.jpg",
      timing: "4 AM – 12 PM, 5 PM – 8 PM",
      bestTime: "February to March",
      map: "https://www.google.com/maps/dir/?api=1&destination=Ettumanoor+Mahadeva+Temple,+Kottayam,+Kerala",
      category: "Temple"
    },
    {
      name: "Thirunelli Temple (Wayanad)",
      description: "Thirunelli Temple, dedicated to Lord Vishnu, is located amidst the lush forests of Wayanad and is often called the 'Kashi of the South'. Set beside the Papanasini stream, it is believed that taking a dip here washes away all sins. The temple’s serene mountain backdrop adds to its divine aura.",
      image: "images/thirunelli.jpg",
      timing: "5:30 AM – 12 PM, 5:30 PM – 8 PM",
      bestTime: "October to March",
      map: "https://www.google.com/maps/dir/?api=1&destination=Thirunelli+Temple,+Wayanad,+Kerala",
      category: "Temple"
    },
    {
      name: "Attukal Bhagavathy Temple (Thiruvananthapuram)",
      description: "Attukal Bhagavathy Temple, known as the ‘Sabarimala of Women’, is dedicated to Goddess Kannaki (Bhagavathy). The temple holds the Guinness World Record for the largest gathering of women during the Attukal Pongala festival. The event embodies devotion, community, and cultural unity.",
      image: "images/attukal.webp",
      timing: "4:30 AM – 12:30 PM, 5 PM – 8:30 PM",
      bestTime: "February to March (Pongala Festival)",
      map: "https://www.google.com/maps/dir/?api=1&destination=Attukal+Bhagavathy+Temple,+Thiruvananthapuram,+Kerala",
      category: "Temple"
    },

    {
      name: "Mannarasala Nagaraja Temple (Alappuzha)",
      description: "Mannarasala Temple is an ancient shrine dedicated to the serpent gods, located in a serene forest setting. Managed traditionally by a Brahmin woman priestess, it is believed to bless devotees with fertility, prosperity, and protection from snake-related fears.",
      image: "images/mannarasala.jpg",
      timing: "5 AM – 12 PM, 5:30 PM – 7:30 PM",
      bestTime: "October to February",
      map: "https://www.google.com/maps/dir/?api=1&destination=Mannarasala+Sree+Nagaraja+Temple,+Alappuzha,+Kerala",
      category: "Temple"
    },
    {
      name: "Soochipara Waterfalls",
      description: "Soochipara Waterfalls, also known as Sentinel Rock Waterfalls, is a three-tiered cascade in Wayanad, Kerala, named for the 'soochi' (needle) and 'para' (rock) that give it its unique name. Located in the lush forests near Kalpetta, it is a popular destination for adventure activities like trekking, rock climbing, and swimming in the natural pool at its base. The surrounding area is rich in flora and fauna, with deciduous and evergreen forests. Popular rock-climbing spot and scenic waterfall near Wayanad.",
      image: "images/soochipara.jpg",
      timing: "9 AM – 5 PM",
      bestTime: "October to March",
      category: "Activity",
      map: "https://www.google.com/maps/dir/?api=1&destination=Soochipara+Waterfalls,+Wayanad"
    },

    // 🏰 Forts & Heritage
    {
      name: "Bekal Fort",
      description: "Bekal Fort is a large, 17th-century coastal fort in Kerala, India, famous for its keyhole shape and historical significance. Built by Shivappa Nayaka of the Keladi dynasty, it later became an important military station for Tipu Sultan before being acquired by the British East India Company in 1799. Today, it is the largest and best-preserved fort in Kerala, situated on a cliff overlooking the Arabian Sea, and is a popular tourist destination and movie filming location. 17th-century fort overlooking the Arabian Sea.",
      image: "images/bekal.jpeg",
      timing: "8 AM – 6 PM",
      bestTime: "November to February",
      category: "Fort",
      map: "https://www.google.com/maps/dir/?api=1&destination=Bekal+Fort,+Kasargod"
    },
    {
      name: "St. Angelo Fort",
      description: "St. Angelo Fort, also known as Kannur Fort, is a triangular fort in Kerala built by the Portuguese in 1505 to serve as a strategic military base. The fort has changed hands multiple times, from the Portuguese to the Dutch in 1663, and then to the Arakkal dynasty in 1784, before the British seized it in 1790. Today, it is a protected monument under the Archaeological Survey of India and is a popular tourist site known for its architecture and scenic views of the Arabian Sea, Moplah Bay, and Dharmadam Island. Historic fort built by the Portuguese in Kannur.",
      image: "images/stangelo.webp",
      timing: "8 AM – 6 PM",
      bestTime: "October to March",
      category: "Fort",
      map: "https://www.google.com/maps/dir/?api=1&destination=St.+Angelo+Fort,+Kannur"
    }
    
  ]
},
  "Tamil Nadu": {
  places: [
    // 🏛️ Historical & Iconic Landmarks
    {
      name: "Brihadeeswarar Temple",
      description: "The Brihadeeswarar Temple, also known as the Thanjavur Big Temple, is a Hindu temple in Tamil Nadu, India, dedicated to Lord Shiva and built by the Chola king Rajaraja I between 1003 and 1010 CE. It is a UNESCO World Heritage Site, a testament to the peak of Chola architecture, and is famous for its massive Vimana (tower) and a single-stone Nandi statue. The temple's inscriptions provide extensive details about its construction, rituals, and the prosperity of the Chola Empire.UNESCO World Heritage Chola temple, known for its massive tower.",
      image: "images/brihadeeswarar.jpg",
      timing: "6 AM – 12:30 PM, 4 PM – 8:30 PM",
      bestTime: "October to March",
      map: "https://www.google.com/maps/dir/?api=1&destination=Brihadeeswarar+Temple,+Thanjavur",
      category: "Historical",
      category: "Temple",
    },
    {
      name: "Meenakshi Amman Temple",
      description: "The Meenakshi Amman Temple in Madurai is a historic and architecturally significant Hindu temple dedicated to Goddess Meenakshi (an incarnation of Parvati) and her consort, Lord Shiva (Sundareswarar). With a history stretching back over 2,500 years, the temple was extensively rebuilt and expanded by the Nayak dynasty in the 16th century after being damaged in the 14th century. The sprawling complex is famous for its Dravidian architecture, featuring towering gopurams, the Hall of Thousand Pillars, and the 'Golden Lotus' sacred tank. Iconic Dravidian-style temple with stunning gopurams and sculptures.",
      image: "images/meenakshi.jpg",
      timing: "5 AM – 12:30 PM, 4 PM – 9:30 PM",
      bestTime: "October to March",
      map: "https://www.google.com/maps/dir/?api=1&destination=Meenakshi+Amman+Temple,+Madurai",
      category: "Historical"
    },
    {
      name: "Ramanathaswamy Temple",
      description: "The Ramanathaswamy Temple in Rameshwaram, Tamil Nadu, is a significant Hindu temple dedicated to Lord Shiva, famous for its long corridors, which are the longest in Asia. According to legend, Lord Rama worshipped Shiva here after defeating the demon king Ravana, and the temple's history is rooted in this story and the subsequent construction of the main sanctuary.Famous Shiva temple with the longest corridor in India.",
      image: "images/ramanathaswamy.jpg",
      timing: "5 AM – 9 PM",
      bestTime: "October to April",
      map: "https://www.google.com/maps/dir/?api=1&destination=Ramanathaswamy+Temple,+Rameswaram",
      category: "Historical"
    },
    {
      name: "Shore Temple",
      description: "The Shore Temple is a historic 7th-century Hindu temple in Mahabalipuram, Tamil Nadu, India, known for its Dravidian architecture and status as one of the earliest structural stone temples in South India. Built by the Pallava king Rajasimha (Narasimhavarman II), it features two shrines dedicated to Shiva and one to Vishnu and represents a significant step in the evolution of Indian temple construction, moving from cave temples to freestanding, multi-piece structures. It is a UNESCO World Heritage site and the finest early example of medieval southern Indian temple architecture.8th-century stone temple overlooking the Bay of Bengal.",
      image: "images/shore.jpg",
      timing: "6 AM – 6 PM",
      bestTime: "November to February",
      map: "https://www.google.com/maps/dir/?api=1&destination=Shore+Temple,+Mahabalipuram",
      category: "Historical"
    },
    {
      name: "Fort St. George",
      description: "Fort St. George is a historic fortification in Chennai, built in 1640 by the East India Company as its first English fort in India. It served as a military and commercial hub, growing into the administrative center for British rule in South India and the nucleus from which the city of Madras (now Chennai) developed. Today, it houses the Tamil Nadu government's legislative and administrative offices and remains a symbol of colonial history and a tourist destination.First British fortress in India, now houses a museum.",
      image: "images/stgeorge.jpg",
      timing: "9 AM – 5 PM (Closed Fri)",
      bestTime: "October to February",
      map: "https://www.google.com/maps/dir/?api=1&destination=Fort+St.+George,+Chennai",
      category: "Historical"
    },

    // 🕉️ Temples & Religious Sites
    {
      name: "Kapaleeshwarar Temple",
      description: "The Kapaleeshwarar Temple in Mylapore, Chennai, is a 7th-century Dravidian-style temple dedicated to Lord Shiva and Goddess Karpagambal, renowned for its elaborate architecture. The original structure was destroyed by the Portuguese in the 16th century but was rebuilt by the Vijayanagara kings, with its current form largely reflecting their period. The temple gets its name from 'kapalam' (head) and 'eswarar' (Lord Shiva), and legends connect it to Goddess Parvati's penance in the form of a peahen and Lord Brahma seeking forgiveness.Dedicated to Lord Shiva; known for colorful gopurams.",
      image: "images/kapaleeshwarar.jpg",
      timing: "5 AM – 12 PM, 4 PM – 9 PM",
      bestTime: "Throughout the year",
      map: "https://www.google.com/maps/dir/?api=1&destination=Kapaleeshwarar+Temple,+Chennai",
      category: "Temple"
    },
    {
      name: "Kanchipuram Temples",
      description: "Kanchipuram is known as the 'Golden City of a Thousand Temples,' though it historically contained closer to one hundred and fifty. These temples, dedicated to both Shiva and Vishnu, are a testament to centuries of religious and political significance under rulers like the Pallavas, Cholas, and Vijayanagara Empire. Major examples include the oldest, the Kanchi Kailasanathar Temple, and other important sites like the Varadharaja Perumal Temple and the Ekambareswarar Temple.City of 1,000 temples including Ekambareswarar & Kailasanathar.",
      image: "images/kanchipuram.jpeg",
      timing: "6 AM – 8 PM",
      bestTime: "November to February",
      map: "https://www.google.com/maps/dir/?api=1&destination=Kanchipuram+Temples,+Kanchipuram",
      category: "Temple"
    },
    {
      name: "Nataraja Temple",
      description: "The Nataraja Temple in Chidambaram, Tamil Nadu, is a Hindu temple dedicated to Lord Shiva as the cosmic dancer, Nataraja. Originally constructed around the 10th century during the Chola dynasty, it features intricate architecture, including five concentric courtyards and a golden roof laid by Parantaka I. It is considered an important site for the philosophy of space (\(akasha\)) and the origin of the classical Indian dance, Bharatanatyam.Dedicated to Lord Shiva as the cosmic dancer.",
      image: "images/nataraja.jpg",
      timing: "6 AM – 12 PM, 4 PM – 9 PM",
      bestTime: "December to March",
      map: "https://www.google.com/maps/dir/?api=1&destination=Nataraja+Temple,+Chidambaram",
      category: "Temple"
    },

    // 🌊 Beaches & Coastal Attractions
    {
      name: "Marina Beach",
      description: "Marina Beach is a 13 km long natural urban beach in Chennai, India, bordering the Bay of Bengal. It was renovated in the 1880s by Governor Mountstuart Elphinstone Grant Duff and has become a popular destination for recreation, public gatherings, and viewing monuments. Historically, it has been a site for public meetings, especially during India's freedom struggle, and features numerous statues of leaders and memorials, notes Madras Heritage and Carnatic Music.Longest urban beach in India; iconic landmark of Chennai.",
      image: "images/marina.jpg",
      timing: "Open 24 hours",
      bestTime: "October to February",
      map: "https://www.google.com/maps/dir/?api=1&destination=Marina+Beach,+Chennai",
      category: "Beach"
    },
    {
      name: "Kanyakumari Beach",
      description: "Kanyakumari Beach is the southernmost tip of India, where the Bay of Bengal, Indian Ocean, and Arabian Sea meet, creating a unique landscape famous for witnessing both sunrise and sunset from the same location. Historically a part of the Travancore state, the region was later renamed Kanyakumari from 'Cape Comorin' by the government. Key attractions near the beach include the Vivekananda Rock Memorial, the Thiruvalluvar Statue, and the Kanyakumari Temple.Meeting point of three seas with sunrise/sunset views.",
      image: "images/kanyakumari.webp",
      timing: "Open 24 hours",
      bestTime: "October to March",
      map: "https://www.google.com/maps/dir/?api=1&destination=Kanyakumari+Beach,+Kanyakumari",
      category: "Beach"
    },
    {
      name: "Mahabalipuram Beach",
      description: "Mahabalipuram Beach, also known as Mamallapuram Beach, is a picturesque coastal area in Tamil Nadu that serves as a gateway to the UNESCO World Heritage Site of Group of Monuments at Mahabalipuram. The beach is a popular destination for its golden sand, proximity to historical rock-cut temples like the Shore Temple, and various activities including water sports and relaxing. The site's history is rooted in the ancient Pallava dynasty (4th to 9th century), which developed the area into a busy port and created the monumental rock-cut architecture that remains today.Scenic beach near ancient temples and rock sculptures.",
      image: "images/mahabalipuram.webp",
      timing: "Open 24 hours",
      bestTime: "November to February",
      map: "https://www.google.com/maps/dir/?api=1&destination=Mahabalipuram+Beach,+Mahabalipuram",
      category: "Beach"
    },

    // ⛰️ Hill Stations
    {
      name: "Ooty",
      description: "Ooty, or Udhagamandalam, is a popular hill station in Tamil Nadu's Nilgiri mountains, known for its cool climate and attractions like tea estates and botanical gardens. Originally inhabited by the Toda people, it was developed by the British in the 19th century after explorer John Sullivan discovered the plateau in 1819. It became the summer capital of the Madras Presidency, and its development as a tourist destination began in earnest.Queen of hill stations; known for gardens and tea estates.",
      image: "images/ooty.jpeg",
      timing: "Open 24 hours",
      bestTime: "April to June, September to November",
      map: "https://www.google.com/maps/dir/?api=1&destination=Ooty,+Tamil+Nadu",
      category: "Hill Station"
    },
    {
      name: "Kodaikanal",
      description: "Kodaikanal is a hill station in the Palani Hills of Tamil Nadu, known as the 'Princess of Hill Stations' for its scenic beauty and cool climate. Historically, it was established in 1845 by American missionaries and British civil servants seeking a respite from the heat, with earlier exploration dating to 1821 when British surveyor Lt. B.S. Ward visited. Today, it is a popular tourist destination with attractions like an artificial lake, Coaker's Walk, and Guna Caves. Misty hills, boating, and lush valleys.",
      image: "images/kodaikanal.webp",
      timing: "Open 24 hours",
      bestTime: "April to June, September to October",
      map: "https://www.google.com/maps/dir/?api=1&destination=Kodaikanal,+Tamil+Nadu",
      category: "Hill Station"
    },
    {
      name: "Yercaud",
      description: "Yercaud is a hill station in the Shevaroy Hills of Tamil Nadu, known as the 'Jewel of the South,' named after the Tamil words for 'lake' and 'forest'. Its history is shaped by British discovery in the 19th century, when they established it as a resort due to its cool climate. Today, Yercaud is a popular tourist destination offering scenic views, coffee plantations, and attractions like a lake, botanical garden, and viewpoints.Quiet hill retreat with beautiful lakes and viewpoints.",
      image: "images/yercaud.webp",
      timing: "Open 24 hours",
      bestTime: "October to June",
      map: "https://www.google.com/maps/dir/?api=1&destination=Yercaud,+Tamil+Nadu",
      category: "Hill Station"
    },

    // 🌳 Wildlife Sanctuaries & National Parks
    {
      name: "Mudumalai National Park",
      description: "Mudumalai National Park is an ancient sanctuary in the Nilgiri Mountains of Tamil Nadu, India, established in 1940. It is known for its diverse wildlife, including tigers, elephants, and gaur, and is part of the larger Nilgiri Biosphere Reserve. Initially a wildlife sanctuary, it was officially declared a Tiger Reserve in 2007.Tiger reserve known for elephants, deer, and leopards.",
      image: "images/mudumalai.jpeg",
      timing: "6 AM – 6 PM",
      bestTime: "October to May",
      map: "https://www.google.com/maps/dir/?api=1&destination=Mudumalai+National+Park,+Tamil+Nadu",
      category: "Wildlife"
    },
    {
      name: "Guindy National Park",
      description: "Guindy National Park is a protected area in Chennai, India, that is the eighth-smallest national park in the country and one of the few located inside a metropolitan city. Its history dates back to the 1670s when a garden and lodge were established, and the area was officially declared a national park in 1959. The park includes tropical dry evergreen forests and is home to a diverse range of wildlife, including blackbuck, spotted deer, jackals, and over 130 species of birds. Urban park with deer, peacocks, and botanical gardens.",
      image: "images/guindy.webp",
      timing: "9 AM – 5:30 PM",
      bestTime: "November to February",
      map: "https://www.google.com/maps/dir/?api=1&destination=Guindy+National+Park,+Chennai",
      category: "Wildlife"
    },

    // 💦 Waterfalls
    {
      name: "Hogenakkal Waterfalls",
      description: "Hogenakkal Falls is a popular tourist destination on the Kaveri River, located on the border of Tamil Nadu and Karnataka, known for its 'smoky rocks' which is the literal translation of the Kannada name. The waterfall is formed as the Kaveri River enters Tamil Nadu, creating a series of individual waterfalls and is known for its carbonatite rock formation, the oldest of its kind in South Asia. Activities at the falls include taking oil massages, boat rides, and enjoying local fish cuisine.‘Niagara of India’ on the River Cauvery.",
      image: "images/hogenakkal.jpg",
      timing: "8 AM – 6 PM",
      bestTime: "October to February",
      map: "https://www.google.com/maps/dir/?api=1&destination=Hogenakkal+Waterfalls,+Dharmapuri",
      category: "Activity"
    },
    {
      name: "Courtallam Waterfalls",
      description: "Courtallam Falls, located in the Tenkasi District of Tamil Nadu, is a series of waterfalls on the Chittar River, famous as the 'Spa of South India' due to its perceived medicinal properties from its passage over herbs in the Western Ghats. According to legend, the place is named Courtallam because a sage, pleased by his devotion, made the area his abode, and the nearby temple became Kutralanathar. The falls are a major tourist destination with multiple cascades, including the main falls (Peraruvi), the small falls (Chitraruvi), and the five falls (Iyentharuvi). ‘Spa of South India’ with multiple falls.",
      image: "images/courtallam.jpg",
      timing: "6 AM – 8 PM",
      bestTime: "June to September",
      map: "https://www.google.com/maps/dir/?api=1&destination=Courtallam+Waterfalls,+Tenkasi",
      category: "Activity"
    },

    // 🖼️ Museums & Cultural Centres
    {
      name: "Government Museum",
      description: "A Government Museum is a public institution that houses and exhibits collections of artifacts, objects, and art relating to human history, culture, and natural sciences, with notable examples including the Government Museum in Chennai, India, which is one of the oldest and largest in South Asia, and the Government Museum in Chandigarh, established after the partition of India in 1947. These museums preserve and interpret history through diverse galleries, from archaeology and numismatics to art and natural history.One of India’s oldest museums with ancient artifacts.",
      image: "images/government.jpg",
      timing: "9:30 AM – 5 PM (Closed Fri)",
      bestTime: "Throughout the year",
      map: "https://www.google.com/maps/dir/?api=1&destination=Government+Museum,+Chennai",
      category: "Museum"
    },
    {
      name: "DakshinaChitra Museum",
      description: "DakshinaChitra is a living museum in Muttukadu, near Chennai, that preserves and presents the art, architecture, and culture of South India. Founded by the Madras Craft Foundation in 1984, it features 18 recreated heritage houses, traditional crafts, textiles, and has workshops, demonstrations, and a restaurant. Designed by architect Laurie Baker, the museum aims to be an engaging and participatory experience for the public, showcasing the living traditions of the region.Heritage village showcasing South Indian culture.",
      image: "images/dakshinachitra.jpeg",
      timing: "10 AM – 6 PM",
      bestTime: "Throughout the year",
      map: "https://www.google.com/maps/dir/?api=1&destination=DakshinaChitra,+Chennai",
      category: "Museum"
    },

    // 🏰 Forts & Palaces
    {
      name: "Vellore Fort",
      description: "Vellore Fort is a 16th-century granite fort in Tamil Nadu, built by the Vijayanagara rulers and known for its robust architecture and historical significance. The fort features a deep moat, double walls, and ramparts and has been a key site in several battles and political power shifts, from the Vijayanagara and Bijapur sultanates to the Marathas, Carnatic Nawabs, and finally the British. It houses religious buildings like the Jalakanteswarar Temple and St. John's Church, alongside a government museum and other historical structures.16th-century fort with moat and temples inside.",
      image: "images/velllore.jpg",
      timing: "8 AM – 6 PM",
      bestTime: "November to February",
      map: "https://www.google.com/maps/dir/?api=1&destination=Vellore+Fort,+Vellore",
      category: "Fort"
    },
    {
      name: "Gingee Fort",
      description: "Gingee Fort is a historic fortress complex in Tamil Nadu, known for its impregnable structure and strategic location. Built over centuries and expanded by various dynasties, including the Cholas, Vijayanagar, and Marathas, it was captured by many rulers, notably Shivaji Maharaj. Today, it stands as a monument to past battles, recognized as a UNESCO World Heritage Site and a key part of the Mighty Maratha Landscape. Known as the ‘Troy of the East’; surrounded by hills.",
      image: "images/gingee.jpg",
      timing: "9 AM – 4:30 PM",
      bestTime: "November to March",
      map: "https://www.google.com/maps/dir/?api=1&destination=Gingee+Fort,+Villupuram",
      category: "Fort"
    },

    // 🏙️ Cities & Special Attractions
    {
      name: "Chennai",
      description: "Chennai, formerly Madras, is the capital of Tamil Nadu, located on the Coromandel Coast. It was founded as a small settlement in 1639 around Fort St. George by the British East India Company, evolving from a fishing village into a major commercial, industrial, and cultural hub. The city is known for its historic temples, vibrant arts scene, and as India's 'Detroit' due to its large automobile industry.Capital city with beaches, temples, and colonial heritage.",
      image: "images/chennai.jpg",
      timing: "Open 24 hours",
      bestTime: "November to February",
      map: "https://www.google.com/maps/dir/?api=1&destination=Chennai,+Tamil+Nadu",
      category: "Activity"
    },
    {
      name: "Madurai",
      description: "Madurai is an ancient city in Tamil Nadu, renowned as the 'Athens of the East' for its rich cultural and historical significance, especially for its Meenakshi Amman Temple. Historically, the city was a significant center for the Pandyas, Cholas, and Nayakas, and its timeline includes periods of rule by dynasties such as the Cholas and the Vijayanagar dynasty, along with raids by Muslim sultans. Today, it is a bustling hub of spirituality, arts, and commerce, known for its jasmine flowers, silk sarees, and the Jigarthanda dessert. ‘Temple City’ with rich history and culture.",
      image: "images/madurai.jpg",
      timing: "Open 24 hours",
      bestTime: "October to March",
      map: "https://www.google.com/maps/dir/?api=1&destination=Madurai,+Tamil+Nadu",
      category: "Activity"
    },
    {
      name: "Kanyakumari",
      description: "Kanyakumari is a coastal town in India's southernmost tip, famous as the meeting point of the Arabian Sea, Bay of Bengal, and Indian Ocean. Historically part of the Travancore state, it's known for its spiritual significance, especially the Kumari Amman Temple, and natural beauty, with breath-taking sunsets and beaches. Key landmarks include the Vivekananda Rock Memorial, the Thiruvalluvar Statue, and Udayagiri Fort. Southernmost tip of India, meeting point of three seas.",
      image: "images/kanyakumari.webp",
      timing: "Open 24 hours",
      bestTime: "October to March",
      map: "https://www.google.com/maps/dir/?api=1&destination=Kanyakumari,+Tamil+Nadu",
      category: "Activity"
    }
  ]
}
}
