const facultyData = [
{
    id: 11,
  faculty: "Agriculture",
   duration: 4,
  code: "AGR",
  departments: [

    // =====================================================================
    // DEPARTMENT 1: AGRONOMY
    // =====================================================================
    {
      name: "Agronomy",
      code: "AGRO",
      duration: 4,
      levels: {

        // ----- 100 LEVEL -----
        100: {
          first_semester: [
            // GNS Courses
            { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
            { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
            { code: "GNS 105", title: "History and Philosophy of Science", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 101", title: "Elementary Mathematics I", units: 2, type: "C" },
            { code: "PHY 101", title: "General Physics I", units: 2, type: "C" },
            { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
            { code: "CHM 101", title: "General Chemistry I", units: 2, type: "C" },
            { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
            { code: "BIO 101", title: "General Biology I", units: 2, type: "C" },
            { code: "BIO 107", title: "General Biology Laboratory I", units: 1, type: "C" },
            { code: "CPT 101", title: "Introduction to Computer Science I", units: 2, type: "C" },

            // Departmental Courses
            { code: "AGR 101", title: "Introduction to Agriculture I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
            { code: "GNS 104", title: "Citizenship Education", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 102", title: "Elementary Mathematics II", units: 2, type: "C" },
            { code: "PHY 102", title: "General Physics II", units: 2, type: "C" },
            { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
            { code: "CHM 102", title: "General Chemistry II", units: 2, type: "C" },
            { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
            { code: "BIO 102", title: "General Biology II", units: 2, type: "C" },
            { code: "BIO 108", title: "General Biology Laboratory II", units: 1, type: "C" },
            { code: "CPT 102", title: "Introduction to Computer Science II", units: 2, type: "C" },
            { code: "STA 102", title: "Introduction to Statistics", units: 2, type: "C" },

            // Departmental Courses
            { code: "AGR 102", title: "Introduction to Agriculture II", units: 2, type: "C" },
          ],
        },

        // ----- 200 LEVEL -----
        200: {
          first_semester: [
            // GNS Courses
            { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
            { code: "GNS 203", title: "Introduction to Entrepreneurship I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 201", title: "Vocational and Technical Education Practice I", units: 2, type: "C" },

            // Service Courses
            { code: "STA 201", title: "Statistics for Agriculture I", units: 2, type: "C" },
            { code: "CHM 201", title: "Organic Chemistry I", units: 2, type: "C" },
            { code: "CPT 201", title: "Computer Applications I", units: 2, type: "C" },

            // Departmental Courses
            { code: "AGR 201", title: "Principles of Crop Production", units: 3, type: "C" },
            { code: "AGR 203", title: "Introduction to Soil Science", units: 3, type: "C" },
            { code: "AGR 205", title: "Principles of Agricultural Economics", units: 2, type: "C" },
            { code: "AGR 207", title: "Introduction to Forestry and Wildlife", units: 2, type: "C" },
            { code: "AGR 209", title: "Principles of Animal Production", units: 2, type: "C" },
            { code: "AGR 211", title: "Introduction to Agricultural Extension", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
            { code: "GNS 204", title: "Introduction to Entrepreneurship II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 203", title: "Vocational and Technical Education Practice II", units: 2, type: "C" },

            // Service Courses
            { code: "STA 202", title: "Statistics for Agriculture II", units: 2, type: "C" },

            // Departmental Courses
            { code: "AGR 202", title: "Crop Anatomy and Physiology", units: 3, type: "C" },
            { code: "AGR 204", title: "Soil Chemistry and Physics", units: 3, type: "C" },
            { code: "AGR 206", title: "Introduction to Farm Mechanization", units: 2, type: "C" },
            { code: "AGR 208", title: "Genetics and Plant Breeding I", units: 2, type: "C" },
            { code: "AGR 210", title: "Introduction to Food Science and Technology", units: 2, type: "C" },
            { code: "AGR 212", title: "Pasture and Forage Crops", units: 2, type: "C" },
          ],
        },

        // ----- 300 LEVEL -----
        300: {
          first_semester: [
            // GNS Courses
            { code: "GNS 301", title: "Entrepreneurship Development I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 301", title: "Vocational and Technical Education Methodology I", units: 2, type: "C" },

            // Departmental Courses
            { code: "AGR 301", title: "Crop Production and Management I (Cereals and Legumes)", units: 3, type: "C" },
            { code: "AGR 303", title: "Soil Fertility and Fertilizer Use", units: 3, type: "C" },
            { code: "AGR 305", title: "Crop Protection I (Entomology)", units: 3, type: "C" },
            { code: "AGR 307", title: "Plant Pathology", units: 3, type: "C" },
            { code: "AGR 309", title: "Genetics and Plant Breeding II", units: 2, type: "C" },
            { code: "AGR 311", title: "Weed Science", units: 2, type: "C" },
            { code: "AGR 313", title: "Agricultural Microbiology", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 302", title: "Entrepreneurship Development II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 303", title: "Vocational and Technical Education Methodology II", units: 2, type: "C" },

            // SIWES
            { code: "AGR 399", title: "Students Industrial Work Experience Scheme (SIWES)", units: 6, type: "C" },

            // Departmental Courses
            { code: "AGR 302", title: "Crop Production and Management II (Root and Tuber Crops)", units: 3, type: "C" },
            { code: "AGR 304", title: "Soil Survey and Land Use Planning", units: 3, type: "C" },
            { code: "AGR 306", title: "Crop Protection II (Pesticide Application)", units: 2, type: "C" },
            { code: "AGR 308", title: "Seed Technology", units: 2, type: "C" },
            { code: "AGR 310", title: "Irrigation and Drainage", units: 2, type: "C" },
            { code: "AGR 312", title: "Biometry and Research Methods", units: 2, type: "C" },
          ],
        },

        // ----- 400 LEVEL -----
        400: {
          first_semester: [
            // VTE Courses
            { code: "VTE 401", title: "Vocational and Technical Education Seminar I", units: 2, type: "C" },

            // Final Year Project
            { code: "AGR 499A", title: "Final Year Project I (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "AGR 401", title: "Advanced Crop Production (Industrial Crops)", units: 3, type: "C" },
            { code: "AGR 403", title: "Advanced Soil Science", units: 3, type: "C" },
            { code: "AGR 405", title: "Advanced Plant Breeding and Biotechnology", units: 3, type: "C" },
            { code: "AGR 407", title: "Agroclimatology", units: 2, type: "C" },
            { code: "AGR 409", title: "Farming Systems and Sustainable Agriculture", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "AGR 411", title: "Horticultural Crop Production", units: 2, type: "E" },
            { code: "AGR 413", title: "Tissue Culture and Crop Improvement", units: 2, type: "E" },
            { code: "AGR 415", title: "Agroforestry", units: 2, type: "E" },
            { code: "AGR 417", title: "Precision Agriculture", units: 2, type: "E" },
          ],
          second_semester: [
            // VTE Courses
            { code: "VTE 403", title: "Vocational and Technical Education Seminar II", units: 2, type: "C" },

            // Final Year Project
            { code: "AGR 499B", title: "Final Year Project II (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "AGR 402", title: "Advanced Crop Physiology", units: 3, type: "C" },
            { code: "AGR 404", title: "Soil Microbiology and Biochemistry", units: 2, type: "C" },
            { code: "AGR 406", title: "Environmental Impact Assessment in Agriculture", units: 2, type: "C" },
            { code: "AGR 408", title: "Post-Harvest Technology", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "AGR 410", title: "Organic Farming", units: 2, type: "E" },
            { code: "AGR 412", title: "Tropical Crop Ecology", units: 2, type: "E" },
            { code: "AGR 414", title: "Agricultural Waste Management", units: 2, type: "E" },
            { code: "AGR 416", title: "Emerging Issues in Agronomy", units: 2, type: "E" },
          ],
        },
      },
    },

    // =====================================================================
    // DEPARTMENT 2: ANIMAL PRODUCTION
    // =====================================================================
    {
      name: "Animal Production",
      code: "ANP",
      duration: 4,
      levels: {

        // ----- 100 LEVEL -----
        100: {
          first_semester: [
            // GNS Courses
            { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
            { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
            { code: "GNS 105", title: "History and Philosophy of Science", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 101", title: "Elementary Mathematics I", units: 2, type: "C" },
            { code: "PHY 101", title: "General Physics I", units: 2, type: "C" },
            { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
            { code: "CHM 101", title: "General Chemistry I", units: 2, type: "C" },
            { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
            { code: "BIO 101", title: "General Biology I", units: 2, type: "C" },
            { code: "BIO 107", title: "General Biology Laboratory I", units: 1, type: "C" },
            { code: "CPT 101", title: "Introduction to Computer Science I", units: 2, type: "C" },

            // Departmental Courses
            { code: "AGR 101", title: "Introduction to Agriculture I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
            { code: "GNS 104", title: "Citizenship Education", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 102", title: "Elementary Mathematics II", units: 2, type: "C" },
            { code: "PHY 102", title: "General Physics II", units: 2, type: "C" },
            { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
            { code: "CHM 102", title: "General Chemistry II", units: 2, type: "C" },
            { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
            { code: "BIO 102", title: "General Biology II", units: 2, type: "C" },
            { code: "BIO 108", title: "General Biology Laboratory II", units: 1, type: "C" },
            { code: "CPT 102", title: "Introduction to Computer Science II", units: 2, type: "C" },
            { code: "STA 102", title: "Introduction to Statistics", units: 2, type: "C" },

            // Departmental Courses
            { code: "AGR 102", title: "Introduction to Agriculture II", units: 2, type: "C" },
          ],
        },

        // ----- 200 LEVEL -----
        200: {
          first_semester: [
            // GNS Courses
            { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
            { code: "GNS 203", title: "Introduction to Entrepreneurship I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 201", title: "Vocational and Technical Education Practice I", units: 2, type: "C" },

            // Service Courses
            { code: "STA 201", title: "Statistics for Agriculture I", units: 2, type: "C" },
            { code: "CHM 201", title: "Organic Chemistry I", units: 2, type: "C" },
            { code: "CPT 201", title: "Computer Applications I", units: 2, type: "C" },

            // Departmental Courses
            { code: "ANP 201", title: "Principles of Animal Production", units: 3, type: "C" },
            { code: "ANP 203", title: "Introduction to Animal Anatomy and Physiology", units: 3, type: "C" },
            { code: "ANP 205", title: "Introduction to Animal Nutrition", units: 2, type: "C" },
            { code: "ANP 207", title: "Introduction to Animal Genetics", units: 2, type: "C" },
            { code: "AGR 203", title: "Introduction to Soil Science", units: 2, type: "C" },
            { code: "AGR 205", title: "Principles of Agricultural Economics", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
            { code: "GNS 204", title: "Introduction to Entrepreneurship II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 203", title: "Vocational and Technical Education Practice II", units: 2, type: "C" },

            // Service Courses
            { code: "STA 202", title: "Statistics for Agriculture II", units: 2, type: "C" },

            // Departmental Courses
            { code: "ANP 202", title: "Ruminant Animal Production", units: 3, type: "C" },
            { code: "ANP 204", title: "Non-Ruminant Animal Production", units: 3, type: "C" },
            { code: "ANP 206", title: "Poultry Production", units: 2, type: "C" },
            { code: "ANP 208", title: "Pasture and Forage Crop Production", units: 2, type: "C" },
            { code: "ANP 210", title: "Livestock Farm Practical", units: 2, type: "C" },
            { code: "AGR 210", title: "Introduction to Food Science and Technology", units: 2, type: "C" },
          ],
        },

        // ----- 300 LEVEL -----
        300: {
          first_semester: [
            // GNS Courses
            { code: "GNS 301", title: "Entrepreneurship Development I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 301", title: "Vocational and Technical Education Methodology I", units: 2, type: "C" },

            // Departmental Courses
            { code: "ANP 301", title: "Animal Nutrition and Feed Formulation", units: 3, type: "C" },
            { code: "ANP 303", title: "Animal Breeding and Genetics", units: 3, type: "C" },
            { code: "ANP 305", title: "Animal Reproduction and Reproductive Technology", units: 3, type: "C" },
            { code: "ANP 307", title: "Animal Health and Disease Management", units: 3, type: "C" },
            { code: "ANP 309", title: "Meat Science and Technology", units: 2, type: "C" },
            { code: "ANP 311", title: "Dairy Science and Technology", units: 2, type: "C" },
            { code: "ANP 313", title: "Livestock Management and Production Economics", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 302", title: "Entrepreneurship Development II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 303", title: "Vocational and Technical Education Methodology II", units: 2, type: "C" },

            // SIWES
            { code: "ANP 399", title: "Students Industrial Work Experience Scheme (SIWES)", units: 6, type: "C" },

            // Departmental Courses
            { code: "ANP 302", title: "Advanced Animal Nutrition", units: 3, type: "C" },
            { code: "ANP 304", title: "Pig and Rabbit Production", units: 2, type: "C" },
            { code: "ANP 306", title: "Advanced Poultry Production", units: 2, type: "C" },
            { code: "ANP 308", title: "Animal Behaviour and Welfare", units: 2, type: "C" },
            { code: "ANP 310", title: "Fisheries and Aquaculture", units: 2, type: "C" },
            { code: "ANP 312", title: "Research Methods in Animal Science", units: 2, type: "C" },
          ],
        },

        // ----- 400 LEVEL -----
        400: {
          first_semester: [
            // VTE Courses
            { code: "VTE 401", title: "Vocational and Technical Education Seminar I", units: 2, type: "C" },

            // Final Year Project
            { code: "ANP 499A", title: "Final Year Project I (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "ANP 401", title: "Advanced Animal Breeding", units: 3, type: "C" },
            { code: "ANP 403", title: "Advanced Ruminant Production", units: 3, type: "C" },
            { code: "ANP 405", title: "Feed Milling Technology", units: 2, type: "C" },
            { code: "ANP 407", title: "Livestock Entrepreneurship and Farm Management", units: 2, type: "C" },
            { code: "ANP 409", title: "Animal Biotechnology", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "ANP 411", title: "Wildlife Management and Conservation", units: 2, type: "E" },
            { code: "ANP 413", title: "Apiculture (Beekeeping)", units: 2, type: "E" },
            { code: "ANP 415", title: "Animal Waste Management", units: 2, type: "E" },
            { code: "ANP 417", title: "Laboratory Animal Science", units: 2, type: "E" },
          ],
          second_semester: [
            // VTE Courses
            { code: "VTE 403", title: "Vocational and Technical Education Seminar II", units: 2, type: "C" },

            // Final Year Project
            { code: "ANP 499B", title: "Final Year Project II (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "ANP 402", title: "Advanced Non-Ruminant Production", units: 3, type: "C" },
            { code: "ANP 404", title: "Egg and Poultry Products Technology", units: 2, type: "C" },
            { code: "ANP 406", title: "Livestock Policy and Development", units: 2, type: "C" },
            { code: "ANP 408", title: "Animal Production and Climate Change", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "ANP 410", title: "Advanced Aquaculture", units: 2, type: "E" },
            { code: "ANP 412", title: "Snail and Micro-Livestock Production", units: 2, type: "E" },
            { code: "ANP 414", title: "Leather and Hide Technology", units: 2, type: "E" },
            { code: "ANP 416", title: "Emerging Issues in Animal Production", units: 2, type: "E" },
          ],
        },
      },
    },

    // =====================================================================
    // DEPARTMENT 3: AGRICULTURAL ECONOMICS AND EXTENSION
    // =====================================================================
    {
      name: "Agricultural Economics and Extension",
      code: "AEE",
      duration: 4,
      levels: {

        // ----- 100 LEVEL -----
        100: {
          first_semester: [
            // GNS Courses
            { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
            { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
            { code: "GNS 105", title: "History and Philosophy of Science", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 101", title: "Elementary Mathematics I", units: 2, type: "C" },
            { code: "PHY 101", title: "General Physics I", units: 2, type: "C" },
            { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
            { code: "CHM 101", title: "General Chemistry I", units: 2, type: "C" },
            { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
            { code: "BIO 101", title: "General Biology I", units: 2, type: "C" },
            { code: "BIO 107", title: "General Biology Laboratory I", units: 1, type: "C" },
            { code: "CPT 101", title: "Introduction to Computer Science I", units: 2, type: "C" },

            // Departmental Courses
            { code: "AGR 101", title: "Introduction to Agriculture I", units: 2, type: "C" },
            { code: "ECN 101", title: "Introduction to Economics I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
            { code: "GNS 104", title: "Citizenship Education", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 102", title: "Elementary Mathematics II", units: 2, type: "C" },
            { code: "PHY 102", title: "General Physics II", units: 2, type: "C" },
            { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
            { code: "CHM 102", title: "General Chemistry II", units: 2, type: "C" },
            { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
            { code: "BIO 102", title: "General Biology II", units: 2, type: "C" },
            { code: "BIO 108", title: "General Biology Laboratory II", units: 1, type: "C" },
            { code: "CPT 102", title: "Introduction to Computer Science II", units: 2, type: "C" },
            { code: "STA 102", title: "Introduction to Statistics", units: 2, type: "C" },

            // Departmental Courses
            { code: "AGR 102", title: "Introduction to Agriculture II", units: 2, type: "C" },
            { code: "ECN 102", title: "Introduction to Economics II", units: 2, type: "C" },
          ],
        },

        // ----- 200 LEVEL -----
        200: {
          first_semester: [
            // GNS Courses
            { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
            { code: "GNS 203", title: "Introduction to Entrepreneurship I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 201", title: "Vocational and Technical Education Practice I", units: 2, type: "C" },

            // Service Courses
            { code: "STA 201", title: "Statistics for Agriculture I", units: 2, type: "C" },
            { code: "CPT 201", title: "Computer Applications I", units: 2, type: "C" },

            // Departmental Courses
            { code: "AEE 201", title: "Principles of Agricultural Economics", units: 3, type: "C" },
            { code: "AEE 203", title: "Introduction to Agricultural Extension", units: 3, type: "C" },
            { code: "AEE 205", title: "Introduction to Farm Management", units: 2, type: "C" },
            { code: "AEE 207", title: "Rural Sociology", units: 2, type: "C" },
            { code: "AGR 201", title: "Principles of Crop Production", units: 2, type: "C" },
            { code: "AGR 209", title: "Principles of Animal Production", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
            { code: "GNS 204", title: "Introduction to Entrepreneurship II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 203", title: "Vocational and Technical Education Practice II", units: 2, type: "C" },

            // Service Courses
            { code: "STA 202", title: "Statistics for Agriculture II", units: 2, type: "C" },

            // Departmental Courses
            { code: "AEE 202", title: "Agricultural Production Economics", units: 3, type: "C" },
            { code: "AEE 204", title: "Communication in Agricultural Extension", units: 2, type: "C" },
            { code: "AEE 206", title: "Introduction to Agribusiness Management", units: 2, type: "C" },
            { code: "AEE 208", title: "Introduction to Cooperative Management", units: 2, type: "C" },
            { code: "AEE 210", title: "Agricultural Marketing", units: 2, type: "C" },
            { code: "AGR 204", title: "Soil Chemistry and Physics", units: 2, type: "C" },
          ],
        },

        // ----- 300 LEVEL -----
        300: {
          first_semester: [
            // GNS Courses
            { code: "GNS 301", title: "Entrepreneurship Development I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 301", title: "Vocational and Technical Education Methodology I", units: 2, type: "C" },

            // Departmental Courses
            { code: "AEE 301", title: "Agricultural Finance and Credit", units: 3, type: "C" },
            { code: "AEE 303", title: "Agricultural Extension Methods and Techniques", units: 3, type: "C" },
            { code: "AEE 305", title: "Farm Management and Production Planning", units: 3, type: "C" },
            { code: "AEE 307", title: "Agricultural Policy Analysis", units: 2, type: "C" },
            { code: "AEE 309", title: "Agricultural Prices and Market Analysis", units: 2, type: "C" },
            { code: "AEE 311", title: "Research Methods in Agricultural Economics", units: 3, type: "C" },
            { code: "AEE 313", title: "Rural Development Planning", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 302", title: "Entrepreneurship Development II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 303", title: "Vocational and Technical Education Methodology II", units: 2, type: "C" },

            // SIWES
            { code: "AEE 399", title: "Students Industrial Work Experience Scheme (SIWES)", units: 6, type: "C" },

            // Departmental Courses
            { code: "AEE 302", title: "Agricultural Resource Economics", units: 3, type: "C" },
            { code: "AEE 304", title: "Extension Programme Planning and Evaluation", units: 3, type: "C" },
            { code: "AEE 306", title: "Agribusiness Management", units: 2, type: "C" },
            { code: "AEE 308", title: "Agricultural Trade and International Economics", units: 2, type: "C" },
            { code: "AEE 310", title: "Community Development", units: 2, type: "C" },
            { code: "AEE 312", title: "Gender Issues in Agricultural Development", units: 2, type: "C" },
          ],
        },

        // ----- 400 LEVEL -----
        400: {
          first_semester: [
            // VTE Courses
            { code: "VTE 401", title: "Vocational and Technical Education Seminar I", units: 2, type: "C" },

            // Final Year Project
            { code: "AEE 499A", title: "Final Year Project I (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "AEE 401", title: "Advanced Farm Management", units: 3, type: "C" },
            { code: "AEE 403", title: "Advanced Agricultural Extension", units: 3, type: "C" },
            { code: "AEE 405", title: "Econometrics and Quantitative Analysis", units: 3, type: "C" },
            { code: "AEE 407", title: "Agricultural Project Appraisal and Evaluation", units: 2, type: "C" },
            { code: "AEE 409", title: "Agricultural Development and Food Security", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "AEE 411", title: "Livestock Economics", units: 2, type: "E" },
            { code: "AEE 413", title: "Environmental and Natural Resource Economics", units: 2, type: "E" },
            { code: "AEE 415", title: "ICT in Agricultural Extension", units: 2, type: "E" },
            { code: "AEE 417", title: "Microfinance and Rural Banking", units: 2, type: "E" },
          ],
          second_semester: [
            // VTE Courses
            { code: "VTE 403", title: "Vocational and Technical Education Seminar II", units: 2, type: "C" },

            // Final Year Project
            { code: "AEE 499B", title: "Final Year Project II (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "AEE 402", title: "Agricultural Cooperative Management", units: 3, type: "C" },
            { code: "AEE 404", title: "Advanced Agricultural Marketing", units: 2, type: "C" },
            { code: "AEE 406", title: "Agricultural Insurance and Risk Management", units: 2, type: "C" },
            { code: "AEE 408", title: "Innovation Systems in Agriculture", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "AEE 410", title: "Agribusiness Entrepreneurship", units: 2, type: "E" },
            { code: "AEE 412", title: "Climate Change and Agriculture", units: 2, type: "E" },
            { code: "AEE 414", title: "Agricultural Value Chain Analysis", units: 2, type: "E" },
            { code: "AEE 416", title: "Emerging Issues in Agricultural Economics", units: 2, type: "E" },
          ],
        },
      },
    },
  ],

},  //agriculture

{
  id: 3,
  name: "Faculty of Arts",
  code: "ARTS",
  duration: 4,
  departments: [

    // ======================================================
    // DEPARTMENT 1: ENGLISH AND LITERARY STUDIES
    // ======================================================
    {
      id: 301,
      name: "English and Literary Studies",
      code: "ELS",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "ELS 101", title: "Introduction to Literature I (Poetry)", units: 3, type: "C" },
                { code: "ELS 103", title: "Introduction to Language Studies I (Phonetics & Phonology)", units: 3, type: "C" },
                { code: "ELS 105", title: "Introduction to Drama I", units: 2, type: "C" },
                { code: "ELS 107", title: "Introduction to Prose Fiction I", units: 2, type: "C" },
                { code: "HIS 101", title: "Introduction to History I", units: 3, type: "R" },
                { code: "PHI 101", title: "Introduction to Philosophy I", units: 3, type: "R" },
                { code: "FRN 101", title: "Elementary French I", units: 2, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "ELS 102", title: "Introduction to Literature II (African Literature)", units: 3, type: "C" },
                { code: "ELS 104", title: "Introduction to Language Studies II (Morphology & Syntax)", units: 3, type: "C" },
                { code: "ELS 106", title: "Introduction to Drama II", units: 2, type: "C" },
                { code: "ELS 108", title: "Introduction to Prose Fiction II", units: 2, type: "C" },
                { code: "HIS 102", title: "Introduction to History II", units: 3, type: "R" },
                { code: "PHI 102", title: "Introduction to Philosophy II", units: 3, type: "R" },
                { code: "FRN 102", title: "Elementary French II", units: 2, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "ELS 201", title: "English Phonetics and Phonology", units: 3, type: "C" },
                { code: "ELS 203", title: "African Poetry", units: 3, type: "C" },
                { code: "ELS 205", title: "Survey of English Literature I (Old to Renaissance)", units: 3, type: "C" },
                { code: "ELS 207", title: "Introduction to Literary Criticism I", units: 3, type: "C" },
                { code: "ELS 209", title: "Creative Writing I (Poetry & Short Story)", units: 2, type: "C" },
                { code: "ELS 211", title: "African Drama", units: 3, type: "C" },
                { code: "ELS 213", title: "English Grammar and Usage I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "ELS 202", title: "English Morphology and Syntax", units: 3, type: "C" },
                { code: "ELS 204", title: "African Prose Fiction", units: 3, type: "C" },
                { code: "ELS 206", title: "Survey of English Literature II (17th to 18th Century)", units: 3, type: "C" },
                { code: "ELS 208", title: "Introduction to Literary Criticism II", units: 3, type: "C" },
                { code: "ELS 210", title: "Creative Writing II (Drama & Novel)", units: 2, type: "C" },
                { code: "ELS 212", title: "Oral Literature", units: 3, type: "C" },
                { code: "ELS 214", title: "English Grammar and Usage II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "ELS 301", title: "Semantics and Pragmatics", units: 3, type: "C" },
                { code: "ELS 303", title: "19th Century English Novel", units: 3, type: "C" },
                { code: "ELS 305", title: "Shakespearean Literature", units: 3, type: "C" },
                { code: "ELS 307", title: "Literary Theory I (Classical to Romantic)", units: 3, type: "C" },
                { code: "ELS 309", title: "Sociolinguistics", units: 3, type: "C" },
                { code: "ELS 311", title: "West African Literature I", units: 3, type: "C" },
                { code: "ELS 313", title: "Applied Linguistics I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "ELS 302", title: "Discourse Analysis", units: 3, type: "C" },
                { code: "ELS 304", title: "20th Century English Novel", units: 3, type: "C" },
                { code: "ELS 306", title: "Modern English Drama", units: 3, type: "C" },
                { code: "ELS 308", title: "Literary Theory II (Modern & Postmodern)", units: 3, type: "C" },
                { code: "ELS 310", title: "Psycholinguistics", units: 3, type: "C" },
                { code: "ELS 312", title: "West African Literature II", units: 3, type: "C" },
                { code: "ELS 314", title: "Applied Linguistics II", units: 3, type: "C" },
                { code: "ELS 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "ELS 401", title: "Advanced Syntax and Transformational Grammar", units: 3, type: "C" },
                { code: "ELS 403", title: "American Literature", units: 3, type: "C" },
                { code: "ELS 405", title: "Comparative Literature", units: 3, type: "C" },
                { code: "ELS 407", title: "Stylistics and Textual Analysis", units: 3, type: "C" },
                { code: "ELS 409", title: "African American and Caribbean Literature", units: 3, type: "E" },
                { code: "ELS 411", title: "Language and Gender", units: 3, type: "E" },
                { code: "ELS 413", title: "Nigerian English (Varieties of English)", units: 3, type: "E" },
                { code: "ELS 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "ELS 402", title: "History of the English Language", units: 3, type: "C" },
                { code: "ELS 404", title: "Postcolonial Literature", units: 3, type: "C" },
                { code: "ELS 406", title: "Advanced Literary Theory and Criticism", units: 3, type: "C" },
                { code: "ELS 408", title: "Translation Studies", units: 3, type: "E" },
                { code: "ELS 410", title: "Feminist Literary Criticism", units: 3, type: "E" },
                { code: "ELS 412", title: "Language Planning and Policy", units: 3, type: "E" },
                { code: "ELS 414", title: "English Studies Seminar", units: 2, type: "C" },
                { code: "ELS 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 2: HISTORY AND INTERNATIONAL STUDIES
    // ======================================================
    {
      id: 302,
      name: "History and International Studies",
      code: "HIS",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "HIS 101", title: "Introduction to African History I (Pre-Colonial)", units: 3, type: "C" },
                { code: "HIS 103", title: "Introduction to European History I", units: 3, type: "C" },
                { code: "HIS 105", title: "Introduction to Historical Methods", units: 2, type: "C" },
                { code: "HIS 107", title: "Introduction to International Relations", units: 3, type: "C" },
                { code: "ELS 101", title: "Introduction to Literature I", units: 3, type: "R" },
                { code: "PHI 101", title: "Introduction to Philosophy I", units: 3, type: "R" },
                { code: "POL 101", title: "Introduction to Political Science I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "HIS 102", title: "Introduction to African History II (Colonial & Post-Colonial)", units: 3, type: "C" },
                { code: "HIS 104", title: "Introduction to European History II", units: 3, type: "C" },
                { code: "HIS 106", title: "Nigerian History to 1800", units: 3, type: "C" },
                { code: "HIS 108", title: "Introduction to Asian History", units: 3, type: "C" },
                { code: "ELS 102", title: "Introduction to Literature II", units: 3, type: "R" },
                { code: "PHI 102", title: "Introduction to Philosophy II", units: 3, type: "R" },
                { code: "POL 102", title: "Introduction to Political Science II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "HIS 201", title: "Nigerian History 1800–1900", units: 3, type: "C" },
                { code: "HIS 203", title: "History of West Africa to 1800", units: 3, type: "C" },
                { code: "HIS 205", title: "Europe in the Middle Ages", units: 3, type: "C" },
                { code: "HIS 207", title: "History of the Americas I", units: 3, type: "C" },
                { code: "HIS 209", title: "Historiography and Historical Methods", units: 3, type: "C" },
                { code: "HIS 211", title: "Introduction to Diplomacy", units: 3, type: "C" },
                { code: "HIS 213", title: "African Civilizations I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "HIS 202", title: "Nigerian History 1900–1960", units: 3, type: "C" },
                { code: "HIS 204", title: "History of West Africa 1800–1960", units: 3, type: "C" },
                { code: "HIS 206", title: "Europe from Renaissance to Reformation", units: 3, type: "C" },
                { code: "HIS 208", title: "History of the Americas II", units: 3, type: "C" },
                { code: "HIS 210", title: "History of Science and Technology", units: 3, type: "C" },
                { code: "HIS 212", title: "International Organizations", units: 3, type: "C" },
                { code: "HIS 214", title: "African Civilizations II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "HIS 301", title: "Nigeria Since Independence I (1960–1985)", units: 3, type: "C" },
                { code: "HIS 303", title: "History of East and Central Africa", units: 3, type: "C" },
                { code: "HIS 305", title: "Modern European History I (1789–1914)", units: 3, type: "C" },
                { code: "HIS 307", title: "Trans-Atlantic Slave Trade and Diaspora", units: 3, type: "C" },
                { code: "HIS 309", title: "History of International Relations I (1648–1914)", units: 3, type: "C" },
                { code: "HIS 311", title: "Economic History of Nigeria", units: 3, type: "C" },
                { code: "HIS 313", title: "African Intellectual History", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "HIS 302", title: "Nigeria Since Independence II (1985–Present)", units: 3, type: "C" },
                { code: "HIS 304", title: "History of Southern Africa", units: 3, type: "C" },
                { code: "HIS 306", title: "Modern European History II (1914–Present)", units: 3, type: "C" },
                { code: "HIS 308", title: "Pan-Africanism and African Nationalism", units: 3, type: "C" },
                { code: "HIS 310", title: "History of International Relations II (1914–Present)", units: 3, type: "C" },
                { code: "HIS 312", title: "History of Warfare and Military Strategy", units: 3, type: "C" },
                { code: "HIS 314", title: "Research Methods in History", units: 2, type: "C" },
                { code: "HIS 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "HIS 401", title: "Advanced Nigerian History (Themes & Issues)", units: 3, type: "C" },
                { code: "HIS 403", title: "African Diaspora Studies", units: 3, type: "C" },
                { code: "HIS 405", title: "Contemporary International Relations", units: 3, type: "C" },
                { code: "HIS 407", title: "History of the Middle East", units: 3, type: "E" },
                { code: "HIS 409", title: "History of Gender in Africa", units: 3, type: "E" },
                { code: "HIS 411", title: "History of Globalization", units: 3, type: "E" },
                { code: "HIS 413", title: "Oral History and Oral Tradition", units: 3, type: "E" },
                { code: "HIS 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "HIS 402", title: "Advanced West African History", units: 3, type: "C" },
                { code: "HIS 404", title: "Foreign Policy Analysis", units: 3, type: "C" },
                { code: "HIS 406", title: "Conflict and Peace Studies in Africa", units: 3, type: "C" },
                { code: "HIS 408", title: "Environmental History of Africa", units: 3, type: "E" },
                { code: "HIS 410", title: "History of Religion in Africa", units: 3, type: "E" },
                { code: "HIS 412", title: "Museum and Heritage Studies", units: 3, type: "E" },
                { code: "HIS 414", title: "History Seminar", units: 2, type: "C" },
                { code: "HIS 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 3: ARABIC AND ISLAMIC STUDIES
    // ======================================================
    {
      id: 303,
      name: "Arabic and Islamic Studies",
      code: "AIS",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "AIS 101", title: "Elementary Arabic Language I (Grammar & Composition)", units: 3, type: "C" },
                { code: "AIS 103", title: "Introduction to Islamic Studies I", units: 3, type: "C" },
                { code: "AIS 105", title: "Arabic Reading and Comprehension I", units: 2, type: "C" },
                { code: "AIS 107", title: "Introduction to Quranic Studies I", units: 3, type: "C" },
                { code: "HIS 101", title: "Introduction to African History I", units: 3, type: "R" },
                { code: "ELS 101", title: "Introduction to Literature I", units: 3, type: "R" },
                { code: "PHI 101", title: "Introduction to Philosophy I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "AIS 102", title: "Elementary Arabic Language II (Grammar & Conversation)", units: 3, type: "C" },
                { code: "AIS 104", title: "Introduction to Islamic Studies II", units: 3, type: "C" },
                { code: "AIS 106", title: "Arabic Reading and Comprehension II", units: 2, type: "C" },
                { code: "AIS 108", title: "Introduction to Quranic Studies II", units: 3, type: "C" },
                { code: "HIS 102", title: "Introduction to African History II", units: 3, type: "R" },
                { code: "ELS 102", title: "Introduction to Literature II", units: 3, type: "R" },
                { code: "PHI 102", title: "Introduction to Philosophy II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "AIS 201", title: "Intermediate Arabic Language I (Nahw & Sarf)", units: 3, type: "C" },
                { code: "AIS 203", title: "Quranic Exegesis (Tafsir) I", units: 3, type: "C" },
                { code: "AIS 205", title: "Hadith Studies I", units: 3, type: "C" },
                { code: "AIS 207", title: "Arabic Literature I (Pre-Islamic & Early Islamic)", units: 3, type: "C" },
                { code: "AIS 209", title: "History of Islam I (The Prophet & Caliphates)", units: 3, type: "C" },
                { code: "AIS 211", title: "Islamic Jurisprudence (Fiqh) I", units: 3, type: "C" },
                { code: "AIS 213", title: "Arabic Essay Writing I", units: 2, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "AIS 202", title: "Intermediate Arabic Language II (Balagha)", units: 3, type: "C" },
                { code: "AIS 204", title: "Quranic Exegesis (Tafsir) II", units: 3, type: "C" },
                { code: "AIS 206", title: "Hadith Studies II", units: 3, type: "C" },
                { code: "AIS 208", title: "Arabic Literature II (Abbasid Period)", units: 3, type: "C" },
                { code: "AIS 210", title: "History of Islam II (Umayyad & Abbasid)", units: 3, type: "C" },
                { code: "AIS 212", title: "Islamic Jurisprudence (Fiqh) II", units: 3, type: "C" },
                { code: "AIS 214", title: "Arabic Essay Writing II", units: 2, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "AIS 301", title: "Advanced Arabic Grammar (Nahw al-Wafi) I", units: 3, type: "C" },
                { code: "AIS 303", title: "Arabic Literature III (Andalusian Period)", units: 3, type: "C" },
                { code: "AIS 305", title: "Islamic Theology (Aqeedah & Kalam)", units: 3, type: "C" },
                { code: "AIS 307", title: "Quranic Sciences (Ulum al-Quran)", units: 3, type: "C" },
                { code: "AIS 309", title: "Islam in West Africa I", units: 3, type: "C" },
                { code: "AIS 311", title: "Usul al-Fiqh (Principles of Islamic Jurisprudence)", units: 3, type: "C" },
                { code: "AIS 313", title: "Arabic Translation I (Arabic to English)", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "AIS 302", title: "Advanced Arabic Grammar II", units: 3, type: "C" },
                { code: "AIS 304", title: "Arabic Literature IV (Modern Arabic Literature)", units: 3, type: "C" },
                { code: "AIS 306", title: "Islamic Philosophy (Falsafa)", units: 3, type: "C" },
                { code: "AIS 308", title: "Hadith Sciences (Ulum al-Hadith)", units: 3, type: "C" },
                { code: "AIS 310", title: "Islam in West Africa II", units: 3, type: "C" },
                { code: "AIS 312", title: "Islamic Family Law and Inheritance", units: 3, type: "C" },
                { code: "AIS 314", title: "Arabic Translation II (English to Arabic)", units: 3, type: "C" },
                { code: "AIS 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "AIS 401", title: "Advanced Arabic Rhetoric (Balagha al-Arabiyya)", units: 3, type: "C" },
                { code: "AIS 403", title: "Arabic Literary Criticism", units: 3, type: "C" },
                { code: "AIS 405", title: "Comparative Religion I", units: 3, type: "C" },
                { code: "AIS 407", title: "Islamic Economics and Banking", units: 3, type: "E" },
                { code: "AIS 409", title: "Islamic Political Thought", units: 3, type: "E" },
                { code: "AIS 411", title: "Sufism and Mysticism in Islam", units: 3, type: "E" },
                { code: "AIS 413", title: "Islam and Contemporary Issues", units: 3, type: "E" },
                { code: "AIS 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "AIS 402", title: "Arabic Prosody and Metrics (Arud)", units: 3, type: "C" },
                { code: "AIS 404", title: "Modern Arabic Novel and Poetry", units: 3, type: "C" },
                { code: "AIS 406", title: "Comparative Religion II", units: 3, type: "E" },
                { code: "AIS 408", title: "Islam in Nigeria (History & Contemporary)", units: 3, type: "C" },
                { code: "AIS 410", title: "Islamic Education and Pedagogy", units: 3, type: "E" },
                { code: "AIS 412", title: "Arabic Lexicography and Dictionaries", units: 3, type: "E" },
                { code: "AIS 414", title: "Arabic and Islamic Studies Seminar", units: 2, type: "C" },
                { code: "AIS 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 4: CHRISTIAN RELIGIOUS STUDIES
    // ======================================================
    {
      id: 304,
      name: "Christian Religious Studies",
      code: "CRS",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "CRS 101", title: "Introduction to the Old Testament I (Pentateuch)", units: 3, type: "C" },
                { code: "CRS 103", title: "Introduction to the New Testament I (Synoptic Gospels)", units: 3, type: "C" },
                { code: "CRS 105", title: "Introduction to Christian Theology I", units: 3, type: "C" },
                { code: "CRS 107", title: "History of Christianity I (Early Church)", units: 3, type: "C" },
                { code: "PHI 101", title: "Introduction to Philosophy I", units: 3, type: "R" },
                { code: "HIS 101", title: "Introduction to African History I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "CRS 102", title: "Introduction to the Old Testament II (Historical Books)", units: 3, type: "C" },
                { code: "CRS 104", title: "Introduction to the New Testament II (Acts & Epistles)", units: 3, type: "C" },
                { code: "CRS 106", title: "Introduction to Christian Theology II", units: 3, type: "C" },
                { code: "CRS 108", title: "History of Christianity II (Medieval Church)", units: 3, type: "C" },
                { code: "PHI 102", title: "Introduction to Philosophy II", units: 3, type: "R" },
                { code: "HIS 102", title: "Introduction to African History II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "CRS 201", title: "Old Testament Prophetic Literature", units: 3, type: "C" },
                { code: "CRS 203", title: "New Testament Theology I", units: 3, type: "C" },
                { code: "CRS 205", title: "History of Christianity III (Reformation)", units: 3, type: "C" },
                { code: "CRS 207", title: "Christian Ethics I", units: 3, type: "C" },
                { code: "CRS 209", title: "Introduction to Biblical Languages (Greek I)", units: 3, type: "C" },
                { code: "CRS 211", title: "African Traditional Religion I", units: 3, type: "C" },
                { code: "CRS 213", title: "Christian Worship and Liturgy", units: 2, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "CRS 202", title: "Old Testament Wisdom Literature (Psalms & Proverbs)", units: 3, type: "C" },
                { code: "CRS 204", title: "New Testament Theology II", units: 3, type: "C" },
                { code: "CRS 206", title: "History of Christianity IV (Modern Period)", units: 3, type: "C" },
                { code: "CRS 208", title: "Christian Ethics II", units: 3, type: "C" },
                { code: "CRS 210", title: "Introduction to Biblical Languages (Hebrew I)", units: 3, type: "C" },
                { code: "CRS 212", title: "African Traditional Religion II", units: 3, type: "C" },
                { code: "CRS 214", title: "Christian Missions and Evangelism", units: 2, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "CRS 301", title: "Pauline Epistles I (Romans & Corinthians)", units: 3, type: "C" },
                { code: "CRS 303", title: "Old Testament Exegesis", units: 3, type: "C" },
                { code: "CRS 305", title: "Systematic Theology I (God, Creation & Christology)", units: 3, type: "C" },
                { code: "CRS 307", title: "Christianity in West Africa I", units: 3, type: "C" },
                { code: "CRS 309", title: "Philosophy of Religion I", units: 3, type: "C" },
                { code: "CRS 311", title: "Religion and Society", units: 3, type: "C" },
                { code: "CRS 313", title: "Biblical Archaeology", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "CRS 302", title: "Pauline Epistles II (Galatians to Philemon)", units: 3, type: "C" },
                { code: "CRS 304", title: "New Testament Exegesis", units: 3, type: "C" },
                { code: "CRS 306", title: "Systematic Theology II (Pneumatology & Ecclesiology)", units: 3, type: "C" },
                { code: "CRS 308", title: "Christianity in West Africa II", units: 3, type: "C" },
                { code: "CRS 310", title: "Philosophy of Religion II", units: 3, type: "C" },
                { code: "CRS 312", title: "Comparative Religion", units: 3, type: "C" },
                { code: "CRS 314", title: "Research Methods in Religious Studies", units: 2, type: "C" },
                { code: "CRS 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "CRS 401", title: "Johannine Literature (Gospel & Epistles of John)", units: 3, type: "C" },
                { code: "CRS 403", title: "African Christian Theology", units: 3, type: "C" },
                { code: "CRS 405", title: "Eschatology and Apocalyptic Literature", units: 3, type: "C" },
                { code: "CRS 407", title: "Religion and Politics in Nigeria", units: 3, type: "E" },
                { code: "CRS 409", title: "Pastoral Theology and Counselling", units: 3, type: "E" },
                { code: "CRS 411", title: "Christianity and Islam (Inter-Faith Dialogue)", units: 3, type: "E" },
                { code: "CRS 413", title: "Religion and Gender Issues", units: 3, type: "E" },
                { code: "CRS 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "CRS 402", title: "Revelation and Apocalypticism", units: 3, type: "C" },
                { code: "CRS 404", title: "Contemporary Issues in Christian Theology", units: 3, type: "C" },
                { code: "CRS 406", title: "New Religious Movements in Africa", units: 3, type: "E" },
                { code: "CRS 408", title: "Religion and Development", units: 3, type: "E" },
                { code: "CRS 410", title: "Christian Social Teaching", units: 3, type: "E" },
                { code: "CRS 412", title: "Pentecostalism and Charismatic Movements", units: 3, type: "E" },
                { code: "CRS 414", title: "Christian Religious Studies Seminar", units: 2, type: "C" },
                { code: "CRS 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 5: FRENCH
    // ======================================================
    {
      id: 305,
      name: "French",
      code: "FRN",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "FRN 101", title: "Elementary French I (Grammaire et Vocabulaire)", units: 3, type: "C" },
                { code: "FRN 103", title: "French Oral Skills I (Phonétique et Expression Orale)", units: 2, type: "C" },
                { code: "FRN 105", title: "French Reading and Comprehension I (Lecture et Compréhension)", units: 2, type: "C" },
                { code: "FRN 107", title: "Introduction to French Literature I (La Littérature Française)", units: 3, type: "C" },
                { code: "FRN 109", title: "Introduction to French Civilization I", units: 3, type: "C" },
                { code: "ELS 101", title: "Introduction to Literature I", units: 3, type: "R" },
                { code: "HIS 101", title: "Introduction to African History I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "FRN 102", title: "Elementary French II (Grammaire Avancée)", units: 3, type: "C" },
                { code: "FRN 104", title: "French Oral Skills II", units: 2, type: "C" },
                { code: "FRN 106", title: "French Reading and Comprehension II", units: 2, type: "C" },
                { code: "FRN 108", title: "Introduction to French Literature II", units: 3, type: "C" },
                { code: "FRN 110", title: "Introduction to French Civilization II", units: 3, type: "C" },
                { code: "ELS 102", title: "Introduction to Literature II", units: 3, type: "R" },
                { code: "HIS 102", title: "Introduction to African History II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "FRN 201", title: "Intermediate French Grammar I", units: 3, type: "C" },
                { code: "FRN 203", title: "French Prose I (17th & 18th Century)", units: 3, type: "C" },
                { code: "FRN 205", title: "French Drama I", units: 3, type: "C" },
                { code: "FRN 207", title: "French Poetry I", units: 3, type: "C" },
                { code: "FRN 209", title: "French Oral and Aural Practice I", units: 2, type: "C" },
                { code: "FRN 211", title: "French Composition I (Expression Écrite)", units: 3, type: "C" },
                { code: "FRN 213", title: "Francophone African Literature I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "FRN 202", title: "Intermediate French Grammar II", units: 3, type: "C" },
                { code: "FRN 204", title: "French Prose II (19th Century)", units: 3, type: "C" },
                { code: "FRN 206", title: "French Drama II", units: 3, type: "C" },
                { code: "FRN 208", title: "French Poetry II", units: 3, type: "C" },
                { code: "FRN 210", title: "French Oral and Aural Practice II", units: 2, type: "C" },
                { code: "FRN 212", title: "French Composition II", units: 3, type: "C" },
                { code: "FRN 214", title: "Francophone African Literature II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "FRN 301", title: "Advanced French Grammar I", units: 3, type: "C" },
                { code: "FRN 303", title: "French Prose III (20th Century Novel)", units: 3, type: "C" },
                { code: "FRN 305", title: "French Literary Criticism I", units: 3, type: "C" },
                { code: "FRN 307", title: "French Translation I (Thème et Version)", units: 3, type: "C" },
                { code: "FRN 309", title: "French Linguistics I (Phonology & Morphology)", units: 3, type: "C" },
                { code: "FRN 311", title: "Francophone Caribbean Literature", units: 3, type: "C" },
                { code: "FRN 313", title: "French for Business and Commerce I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "FRN 302", title: "Advanced French Grammar II", units: 3, type: "C" },
                { code: "FRN 304", title: "French Drama III (Modern French Theatre)", units: 3, type: "C" },
                { code: "FRN 306", title: "French Literary Criticism II", units: 3, type: "C" },
                { code: "FRN 308", title: "French Translation II (Advanced)", units: 3, type: "C" },
                { code: "FRN 310", title: "French Linguistics II (Syntax & Semantics)", units: 3, type: "C" },
                { code: "FRN 312", title: "French Civilization and Culture", units: 3, type: "C" },
                { code: "FRN 314", title: "French for Business and Commerce II", units: 3, type: "C" },
                { code: "FRN 300", title: "Year Abroad Programme / SIWES", units: 6, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "FRN 401", title: "Advanced Translation and Interpretation I", units: 3, type: "C" },
                { code: "FRN 403", title: "French Poetry III (Modern French Poetry)", units: 3, type: "C" },
                { code: "FRN 405", title: "History of the French Language", units: 3, type: "C" },
                { code: "FRN 407", title: "Francophone African Novel", units: 3, type: "E" },
                { code: "FRN 409", title: "French for Diplomacy and International Relations", units: 3, type: "E" },
                { code: "FRN 411", title: "French Sociolinguistics", units: 3, type: "E" },
                { code: "FRN 413", title: "Contemporary Francophone Literature", units: 3, type: "E" },
                { code: "FRN 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "FRN 402", title: "Advanced Translation and Interpretation II", units: 3, type: "C" },
                { code: "FRN 404", title: "Comparative Literature (French & African)", units: 3, type: "C" },
                { code: "FRN 406", title: "Applied French Linguistics", units: 3, type: "C" },
                { code: "FRN 408", title: "Francophone Theatre and Performance", units: 3, type: "E" },
                { code: "FRN 410", title: "French Media and Journalism", units: 3, type: "E" },
                { code: "FRN 412", title: "Négritude and Francophone Literary Movements", units: 3, type: "E" },
                { code: "FRN 414", title: "French Studies Seminar", units: 2, type: "C" },
                { code: "FRN 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 6: LINGUISTICS AND NIGERIAN LANGUAGES
    // ======================================================
    {
      id: 306,
      name: "Linguistics and Nigerian Languages",
      code: "LIN",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "LIN 101", title: "Introduction to Language I (Nature & Functions of Language)", units: 3, type: "C" },
                { code: "LIN 103", title: "Introduction to Phonetics and Phonology I", units: 3, type: "C" },
                { code: "LIN 105", title: "Introduction to Nigerian Languages I (Yoruba/Hausa/Igbo)", units: 3, type: "C" },
                { code: "LIN 107", title: "Language and Society I", units: 2, type: "C" },
                { code: "ELS 101", title: "Introduction to Literature I", units: 3, type: "R" },
                { code: "PHI 101", title: "Introduction to Philosophy I", units: 3, type: "R" },
                { code: "HIS 101", title: "Introduction to African History I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "LIN 102", title: "Introduction to Language II (Language Families)", units: 3, type: "C" },
                { code: "LIN 104", title: "Introduction to Phonetics and Phonology II", units: 3, type: "C" },
                { code: "LIN 106", title: "Introduction to Nigerian Languages II", units: 3, type: "C" },
                { code: "LIN 108", title: "Language and Society II", units: 2, type: "C" },
                { code: "ELS 102", title: "Introduction to Literature II", units: 3, type: "R" },
                { code: "PHI 102", title: "Introduction to Philosophy II", units: 3, type: "R" },
                { code: "HIS 102", title: "Introduction to African History II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "LIN 201", title: "Phonology I (Segmental Phonology)", units: 3, type: "C" },
                { code: "LIN 203", title: "Morphology I (Word Formation Processes)", units: 3, type: "C" },
                { code: "LIN 205", title: "Syntax I (Phrase Structure)", units: 3, type: "C" },
                { code: "LIN 207", title: "Yoruba Language and Literature I", units: 3, type: "C" },
                { code: "LIN 209", title: "Sociolinguistics I", units: 3, type: "C" },
                { code: "LIN 211", title: "History of Linguistics", units: 3, type: "C" },
                { code: "LIN 213", title: "Language Documentation", units: 2, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "LIN 202", title: "Phonology II (Suprasegmental Phonology)", units: 3, type: "C" },
                { code: "LIN 204", title: "Morphology II (Inflectional & Derivational)", units: 3, type: "C" },
                { code: "LIN 206", title: "Syntax II (Transformational Grammar)", units: 3, type: "C" },
                { code: "LIN 208", title: "Yoruba Language and Literature II", units: 3, type: "C" },
                { code: "LIN 210", title: "Sociolinguistics II (Language Contact)", units: 3, type: "C" },
                { code: "LIN 212", title: "African Linguistics", units: 3, type: "C" },
                { code: "LIN 214", title: "Language Acquisition", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "LIN 301", title: "Semantics I (Lexical Semantics)", units: 3, type: "C" },
                { code: "LIN 303", title: "Pragmatics I (Speech Acts & Implicature)", units: 3, type: "C" },
                { code: "LIN 305", title: "Psycholinguistics I", units: 3, type: "C" },
                { code: "LIN 307", title: "Typology and Universals", units: 3, type: "C" },
                { code: "LIN 309", title: "Yoruba Phonology and Morphology", units: 3, type: "C" },
                { code: "LIN 311", title: "Historical and Comparative Linguistics", units: 3, type: "C" },
                { code: "LIN 313", title: "Computational Linguistics I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "LIN 302", title: "Semantics II (Formal Semantics)", units: 3, type: "C" },
                { code: "LIN 304", title: "Pragmatics II (Discourse Analysis)", units: 3, type: "C" },
                { code: "LIN 306", title: "Psycholinguistics II (Neurolinguistics)", units: 3, type: "C" },
                { code: "LIN 308", title: "Dialectology", units: 3, type: "C" },
                { code: "LIN 310", title: "Yoruba Syntax and Semantics", units: 3, type: "C" },
                { code: "LIN 312", title: "Language and Communication", units: 3, type: "C" },
                { code: "LIN 314", title: "Computational Linguistics II", units: 3, type: "C" },
                { code: "LIN 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "LIN 401", title: "Advanced Syntax (Minimalist Programme)", units: 3, type: "C" },
                { code: "LIN 403", title: "Applied Linguistics", units: 3, type: "C" },
                { code: "LIN 405", title: "Language Planning and Policy", units: 3, type: "C" },
                { code: "LIN 407", title: "Forensic Linguistics", units: 3, type: "E" },
                { code: "LIN 409", title: "Clinical Linguistics", units: 3, type: "E" },
                { code: "LIN 411", title: "Translation Theory and Practice", units: 3, type: "E" },
                { code: "LIN 413", title: "Corpus Linguistics", units: 3, type: "E" },
                { code: "LIN 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "LIN 402", title: "Advanced Phonological Theory", units: 3, type: "C" },
                { code: "LIN 404", title: "Language Endangerment and Revitalization", units: 3, type: "C" },
                { code: "LIN 406", title: "Multilingualism and Code-Switching", units: 3, type: "E" },
                { code: "LIN 408", title: "Language and the Media", units: 3, type: "E" },
                { code: "LIN 410", title: "Sign Language Linguistics", units: 3, type: "E" },
                { code: "LIN 412", title: "Lexicography", units: 3, type: "E" },
                { code: "LIN 414", title: "Linguistics Seminar", units: 2, type: "C" },
                { code: "LIN 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 7: PERFORMING ARTS (THEATRE ARTS)
    // ======================================================
    {
      id: 307,
      name: "Performing Arts",
      code: "PFA",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "PFA 101", title: "Introduction to Theatre Arts I", units: 3, type: "C" },
                { code: "PFA 103", title: "Introduction to Acting I (Movement & Voice)", units: 3, type: "C" },
                { code: "PFA 105", title: "Introduction to Dance I (Traditional African Dance)", units: 2, type: "C" },
                { code: "PFA 107", title: "Introduction to Music I (Theory & Appreciation)", units: 3, type: "C" },
                { code: "PFA 109", title: "History of World Theatre I (Ancient & Classical)", units: 3, type: "C" },
                { code: "ELS 101", title: "Introduction to Literature I", units: 3, type: "R" },
                { code: "HIS 101", title: "Introduction to African History I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "PFA 102", title: "Introduction to Theatre Arts II", units: 3, type: "C" },
                { code: "PFA 104", title: "Introduction to Acting II (Improvisation)", units: 3, type: "C" },
                { code: "PFA 106", title: "Introduction to Dance II (Contemporary Dance)", units: 2, type: "C" },
                { code: "PFA 108", title: "Introduction to Music II (African Music)", units: 3, type: "C" },
                { code: "PFA 110", title: "History of World Theatre II (Medieval to Renaissance)", units: 3, type: "C" },
                { code: "ELS 102", title: "Introduction to Literature II", units: 3, type: "R" },
                { code: "HIS 102", title: "Introduction to African History II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "PFA 201", title: "Theories of Drama I", units: 3, type: "C" },
                { code: "PFA 203", title: "Acting Techniques I (Stanislavski Method)", units: 3, type: "C" },
                { code: "PFA 205", title: "Stagecraft and Technical Theatre I", units: 3, type: "C" },
                { code: "PFA 207", title: "African Drama and Theatre I", units: 3, type: "C" },
                { code: "PFA 209", title: "Playwriting I (Elements of Dramatic Writing)", units: 3, type: "C" },
                { code: "PFA 211", title: "Choreography I", units: 2, type: "C" },
                { code: "PFA 213", title: "Nigerian Traditional Festival Theatre", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "PFA 202", title: "Theories of Drama II", units: 3, type: "C" },
                { code: "PFA 204", title: "Acting Techniques II (Brecht & Grotowski)", units: 3, type: "C" },
                { code: "PFA 206", title: "Stagecraft and Technical Theatre II (Lighting & Sound)", units: 3, type: "C" },
                { code: "PFA 208", title: "African Drama and Theatre II", units: 3, type: "C" },
                { code: "PFA 210", title: "Playwriting II (One-Act Play)", units: 3, type: "C" },
                { code: "PFA 212", title: "Choreography II", units: 2, type: "C" },
                { code: "PFA 214", title: "Theatre History (17th–19th Century)", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "PFA 301", title: "Directing I (Fundamentals of Stage Direction)", units: 3, type: "C" },
                { code: "PFA 303", title: "Theatre Administration and Management I", units: 3, type: "C" },
                { code: "PFA 305", title: "Film Studies I (History & Theory of Film)", units: 3, type: "C" },
                { code: "PFA 307", title: "Costume and Make-Up Design I", units: 3, type: "C" },
                { code: "PFA 309", title: "Community Theatre and Theatre for Development I", units: 3, type: "C" },
                { code: "PFA 311", title: "Music Composition and Arrangement I", units: 3, type: "C" },
                { code: "PFA 313", title: "Children's Theatre", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "PFA 302", title: "Directing II (Advanced Stage Direction)", units: 3, type: "C" },
                { code: "PFA 304", title: "Theatre Administration and Management II", units: 3, type: "C" },
                { code: "PFA 306", title: "Film Studies II (Screenwriting & Production)", units: 3, type: "C" },
                { code: "PFA 308", title: "Costume and Make-Up Design II", units: 3, type: "C" },
                { code: "PFA 310", title: "Community Theatre and Theatre for Development II", units: 3, type: "C" },
                { code: "PFA 312", title: "Music Composition and Arrangement II", units: 3, type: "C" },
                { code: "PFA 314", title: "Research Methods in Theatre Arts", units: 2, type: "C" },
                { code: "PFA 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "PFA 401", title: "Advanced Directing and Production", units: 3, type: "C" },
                { code: "PFA 403", title: "Film Production (Advanced)", units: 3, type: "C" },
                { code: "PFA 405", title: "Theatre Criticism and Semiotics", units: 3, type: "C" },
                { code: "PFA 407", title: "Television and Radio Production", units: 3, type: "E" },
                { code: "PFA 409", title: "Dance Theatre and Performance", units: 3, type: "E" },
                { code: "PFA 411", title: "Musical Theatre", units: 3, type: "E" },
                { code: "PFA 413", title: "Arts and Cultural Management", units: 3, type: "E" },
                { code: "PFA 499", title: "Final Year Project I (Research/Production)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "PFA 402", title: "Contemporary World Theatre", units: 3, type: "C" },
                { code: "PFA 404", title: "Documentary Film Making", units: 3, type: "E" },
                { code: "PFA 406", title: "Postcolonial Theatre and Performance", units: 3, type: "C" },
                { code: "PFA 408", title: "Digital Media and Performance", units: 3, type: "E" },
                { code: "PFA 410", title: "Popular Theatre and Entertainment", units: 3, type: "E" },
                { code: "PFA 412", title: "Theatre Architecture and Design", units: 3, type: "E" },
                { code: "PFA 414", title: "Performing Arts Seminar", units: 2, type: "C" },
                { code: "PFA 498", title: "Final Year Project II (Research/Production)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 8: PHILOSOPHY
    // ======================================================
    {
      id: 308,
      name: "Philosophy",
      code: "PHI",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "PHI 101", title: "Introduction to Philosophy I (Nature & Scope)", units: 3, type: "C" },
                { code: "PHI 103", title: "Introduction to Logic I (Informal Logic)", units: 3, type: "C" },
                { code: "PHI 105", title: "Greek Philosophy I (Pre-Socratics to Plato)", units: 3, type: "C" },
                { code: "PHI 107", title: "Introduction to Ethics I", units: 3, type: "C" },
                { code: "ELS 101", title: "Introduction to Literature I", units: 3, type: "R" },
                { code: "HIS 101", title: "Introduction to African History I", units: 3, type: "R" },
                { code: "POL 101", title: "Introduction to Political Science I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "PHI 102", title: "Introduction to Philosophy II (Branches of Philosophy)", units: 3, type: "C" },
                { code: "PHI 104", title: "Introduction to Logic II (Formal Logic)", units: 3, type: "C" },
                { code: "PHI 106", title: "Greek Philosophy II (Aristotle to Neo-Platonism)", units: 3, type: "C" },
                { code: "PHI 108", title: "Introduction to Ethics II", units: 3, type: "C" },
                { code: "ELS 102", title: "Introduction to Literature II", units: 3, type: "R" },
                { code: "HIS 102", title: "Introduction to African History II", units: 3, type: "R" },
                { code: "POL 102", title: "Introduction to Political Science II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "PHI 201", title: "Medieval Philosophy (Augustine to Aquinas)", units: 3, type: "C" },
                { code: "PHI 203", title: "Symbolic Logic I (Propositional Logic)", units: 3, type: "C" },
                { code: "PHI 205", title: "Epistemology I (Theory of Knowledge)", units: 3, type: "C" },
                { code: "PHI 207", title: "Metaphysics I (Nature of Reality)", units: 3, type: "C" },
                { code: "PHI 209", title: "African Philosophy I", units: 3, type: "C" },
                { code: "PHI 211", title: "Political Philosophy I", units: 3, type: "C" },
                { code: "PHI 213", title: "Philosophy of Religion I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "PHI 202", title: "Modern Philosophy I (Descartes to Kant)", units: 3, type: "C" },
                { code: "PHI 204", title: "Symbolic Logic II (Predicate Logic)", units: 3, type: "C" },
                { code: "PHI 206", title: "Epistemology II", units: 3, type: "C" },
                { code: "PHI 208", title: "Metaphysics II", units: 3, type: "C" },
                { code: "PHI 210", title: "African Philosophy II", units: 3, type: "C" },
                { code: "PHI 212", title: "Political Philosophy II", units: 3, type: "C" },
                { code: "PHI 214", title: "Philosophy of Religion II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "PHI 301", title: "Modern Philosophy II (Post-Kantian Philosophy)", units: 3, type: "C" },
                { code: "PHI 303", title: "Philosophy of Science I", units: 3, type: "C" },
                { code: "PHI 305", title: "Aesthetics and Philosophy of Art I", units: 3, type: "C" },
                { code: "PHI 307", title: "Social and Moral Philosophy I", units: 3, type: "C" },
                { code: "PHI 309", title: "Existentialism and Phenomenology", units: 3, type: "C" },
                { code: "PHI 311", title: "Philosophy of Mind I", units: 3, type: "C" },
                { code: "PHI 313", title: "Philosophy of Language I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "PHI 302", title: "Contemporary Philosophy (Analytic & Continental)", units: 3, type: "C" },
                { code: "PHI 304", title: "Philosophy of Science II", units: 3, type: "C" },
                { code: "PHI 306", title: "Aesthetics and Philosophy of Art II", units: 3, type: "C" },
                { code: "PHI 308", title: "Social and Moral Philosophy II", units: 3, type: "C" },
                { code: "PHI 310", title: "Hermeneutics and Critical Theory", units: 3, type: "C" },
                { code: "PHI 312", title: "Philosophy of Mind II", units: 3, type: "C" },
                { code: "PHI 314", title: "Research Methods in Philosophy", units: 2, type: "C" },
                { code: "PHI 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "PHI 401", title: "Advanced Logic (Modal & Deontic Logic)", units: 3, type: "C" },
                { code: "PHI 403", title: "Philosophy of Law (Jurisprudence)", units: 3, type: "C" },
                { code: "PHI 405", title: "Philosophy of Education", units: 3, type: "C" },
                { code: "PHI 407", title: "Bioethics and Medical Ethics", units: 3, type: "E" },
                { code: "PHI 409", title: "Environmental Ethics", units: 3, type: "E" },
                { code: "PHI 411", title: "Business Ethics", units: 3, type: "E" },
                { code: "PHI 413", title: "Philosophy of Technology", units: 3, type: "E" },
                { code: "PHI 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "PHI 402", title: "Advanced African Philosophy", units: 3, type: "C" },
                { code: "PHI 404", title: "Philosophy of History", units: 3, type: "C" },
                { code: "PHI 406", title: "Feminist Philosophy", units: 3, type: "E" },
                { code: "PHI 408", title: "Philosophy of Human Rights", units: 3, type: "E" },
                { code: "PHI 410", title: "Postmodernism and Deconstruction", units: 3, type: "E" },
                { code: "PHI 412", title: "Philosophical Logic (Advanced)", units: 3, type: "E" },
                { code: "PHI 414", title: "Philosophy Seminar", units: 2, type: "C" },
                { code: "PHI 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 9: YORUBA
    // ======================================================
    {
      id: 309,
      name: "Yoruba",
      code: "YOR",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "YOR 101", title: "Introduction to Yoruba Language I (Grammar)", units: 3, type: "C" },
                { code: "YOR 103", title: "Introduction to Yoruba Literature I (Oral Literature)", units: 3, type: "C" },
                { code: "YOR 105", title: "Yoruba Composition and Essay Writing I", units: 2, type: "C" },
                { code: "YOR 107", title: "Yoruba Phonetics and Phonology I", units: 3, type: "C" },
                { code: "YOR 109", title: "Introduction to Yoruba Culture and Traditions", units: 3, type: "C" },
                { code: "ELS 101", title: "Introduction to Literature I", units: 3, type: "R" },
                { code: "HIS 101", title: "Introduction to African History I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "YOR 102", title: "Introduction to Yoruba Language II (Morphology)", units: 3, type: "C" },
                { code: "YOR 104", title: "Introduction to Yoruba Literature II (Written Literature)", units: 3, type: "C" },
                { code: "YOR 106", title: "Yoruba Composition and Essay Writing II", units: 2, type: "C" },
                { code: "YOR 108", title: "Yoruba Phonetics and Phonology II", units: 3, type: "C" },
                { code: "YOR 110", title: "History of Yoruba People", units: 3, type: "C" },
                { code: "ELS 102", title: "Introduction to Literature II", units: 3, type: "R" },
                { code: "HIS 102", title: "Introduction to African History II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "YOR 201", title: "Yoruba Syntax I", units: 3, type: "C" },
                { code: "YOR 203", title: "Yoruba Poetry I (Traditional Poetry - Ewi & Oriki)", units: 3, type: "C" },
                { code: "YOR 205", title: "Yoruba Prose Fiction I (Novel)", units: 3, type: "C" },
                { code: "YOR 207", title: "Yoruba Drama I", units: 3, type: "C" },
                { code: "YOR 209", title: "Yoruba Oral Literature I (Alo, Owe & Proverbs)", units: 3, type: "C" },
                { code: "YOR 211", title: "Yoruba Translation I (Yoruba to English)", units: 3, type: "C" },
                { code: "YOR 213", title: "Yoruba Dialectology I", units: 2, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "YOR 202", title: "Yoruba Syntax II", units: 3, type: "C" },
                { code: "YOR 204", title: "Yoruba Poetry II (Modern Poetry)", units: 3, type: "C" },
                { code: "YOR 206", title: "Yoruba Prose Fiction II", units: 3, type: "C" },
                { code: "YOR 208", title: "Yoruba Drama II", units: 3, type: "C" },
                { code: "YOR 210", title: "Yoruba Oral Literature II (Ifa & Liturgical Texts)", units: 3, type: "C" },
                { code: "YOR 212", title: "Yoruba Translation II (English to Yoruba)", units: 3, type: "C" },
                { code: "YOR 214", title: "Yoruba Dialectology II", units: 2, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "YOR 301", title: "Yoruba Semantics I", units: 3, type: "C" },
                { code: "YOR 303", title: "Yoruba Literary Criticism I", units: 3, type: "C" },
                { code: "YOR 305", title: "Yoruba Advanced Prose I (D.O. Fagunwa & Others)", units: 3, type: "C" },
                { code: "YOR 307", title: "Yoruba Theatre and Film I", units: 3, type: "C" },
                { code: "YOR 309", title: "Yoruba Sociolinguistics", units: 3, type: "C" },
                { code: "YOR 311", title: "Yoruba Applied Linguistics", units: 3, type: "C" },
                { code: "YOR 313", title: "Yoruba Journalism and Media Writing", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "YOR 302", title: "Yoruba Semantics II (Pragmatics)", units: 3, type: "C" },
                { code: "YOR 304", title: "Yoruba Literary Criticism II", units: 3, type: "C" },
                { code: "YOR 306", title: "Yoruba Advanced Prose II (Contemporary Novels)", units: 3, type: "C" },
                { code: "YOR 308", title: "Yoruba Theatre and Film II", units: 3, type: "C" },
                { code: "YOR 310", title: "Comparative Nigerian Languages", units: 3, type: "C" },
                { code: "YOR 312", title: "Yoruba Lexicography and Dictionary Making", units: 3, type: "C" },
                { code: "YOR 314", title: "Research Methods in Yoruba Studies", units: 2, type: "C" },
                { code: "YOR 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "YOR 401", title: "Advanced Yoruba Grammar (Syntax & Semantics)", units: 3, type: "C" },
                { code: "YOR 403", title: "Ifa Literary Corpus and Analysis", units: 3, type: "C" },
                { code: "YOR 405", title: "Yoruba and African Diaspora Studies", units: 3, type: "C" },
                { code: "YOR 407", title: "Computational Yoruba Linguistics", units: 3, type: "E" },
                { code: "YOR 409", title: "Yoruba Philosophy and Worldview", units: 3, type: "E" },
                { code: "YOR 411", title: "Creative Writing in Yoruba", units: 3, type: "E" },
                { code: "YOR 413", title: "Yoruba Music and Cultural Performance", units: 3, type: "E" },
                { code: "YOR 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "YOR 402", title: "Advanced Translation Theory and Practice", units: 3, type: "C" },
                { code: "YOR 404", title: "Advanced Yoruba Poetry (Oriki & Rara)", units: 3, type: "C" },
                { code: "YOR 406", title: "Yoruba Language Endangerment and Revitalization", units: 3, type: "E" },
                { code: "YOR 408", title: "Nollywood and Yoruba Film Studies", units: 3, type: "E" },
                { code: "YOR 410", title: "Yoruba Stylistics", units: 3, type: "E" },
                { code: "YOR 412", title: "Yoruba Herbal Medicine and Ethnobotany", units: 3, type: "E" },
                { code: "YOR 414", title: "Yoruba Studies Seminar", units: 2, type: "C" },
                { code: "YOR 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 10: FINE AND APPLIED ARTS
    // ======================================================
    {
      id: 310,
      name: "Fine and Applied Arts",
      code: "FAA",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "FAA 101", title: "Introduction to Fine and Applied Arts I", units: 3, type: "C" },
                { code: "FAA 103", title: "Drawing I (Freehand & Still Life)", units: 3, type: "C" },
                { code: "FAA 105", title: "Painting I (Introduction to Colour Theory)", units: 3, type: "C" },
                { code: "FAA 107", title: "Sculpture I (Modelling Techniques)", units: 3, type: "C" },
                { code: "FAA 109", title: "History of Art I (Prehistoric to Ancient Art)", units: 3, type: "C" },
                { code: "ELS 101", title: "Introduction to Literature I", units: 3, type: "R" },
                { code: "HIS 101", title: "Introduction to African History I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "FAA 102", title: "Introduction to Fine and Applied Arts II", units: 3, type: "C" },
                { code: "FAA 104", title: "Drawing II (Figure Drawing)", units: 3, type: "C" },
                { code: "FAA 106", title: "Painting II (Watercolour & Acrylic)", units: 3, type: "C" },
                { code: "FAA 108", title: "Sculpture II (Carving Techniques)", units: 3, type: "C" },
                { code: "FAA 110", title: "History of Art II (African Art)", units: 3, type: "C" },
                { code: "FAA 112", title: "Design Fundamentals (Elements & Principles)", units: 3, type: "C" },
                { code: "ELS 102", title: "Introduction to Literature II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "FAA 201", title: "Graphic Design I (Typography & Layout)", units: 3, type: "C" },
                { code: "FAA 203", title: "Drawing III (Advanced Figure & Anatomy)", units: 3, type: "C" },
                { code: "FAA 205", title: "Painting III (Oil Painting)", units: 3, type: "C" },
                { code: "FAA 207", title: "Sculpture III (Metal Casting)", units: 3, type: "C" },
                { code: "FAA 209", title: "Ceramics I (Hand Building & Wheel Throwing)", units: 3, type: "C" },
                { code: "FAA 211", title: "Textile Design I (Dyeing & Printing)", units: 3, type: "C" },
                { code: "FAA 213", title: "History of Art III (Renaissance to Baroque)", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "FAA 202", title: "Graphic Design II (Logo & Brand Identity)", units: 3, type: "C" },
                { code: "FAA 204", title: "Drawing IV (Perspective & Architectural Drawing)", units: 3, type: "C" },
                { code: "FAA 206", title: "Painting IV (Mixed Media)", units: 3, type: "C" },
                { code: "FAA 208", title: "Sculpture IV (Assemblage & Installation)", units: 3, type: "C" },
                { code: "FAA 210", title: "Ceramics II (Glazing & Decoration)", units: 3, type: "C" },
                { code: "FAA 212", title: "Textile Design II (Weaving & Embroidery)", units: 3, type: "C" },
                { code: "FAA 214", title: "History of Art IV (Modern & Contemporary Art)", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "FAA 301", title: "Graphic Design III (Advertising Design)", units: 3, type: "C" },
                { code: "FAA 303", title: "Printmaking I (Relief & Intaglio)", units: 3, type: "C" },
                { code: "FAA 305", title: "Photography I (Fundamentals & Composition)", units: 3, type: "C" },
                { code: "FAA 307", title: "Computer Graphics I (Digital Design)", units: 3, type: "C" },
                { code: "FAA 309", title: "Art Criticism and Aesthetics", units: 3, type: "C" },
                { code: "FAA 311", title: "Mural Painting", units: 3, type: "C" },
                { code: "FAA 313", title: "Nigerian Art History", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "FAA 302", title: "Graphic Design IV (Packaging Design)", units: 3, type: "C" },
                { code: "FAA 304", title: "Printmaking II (Screen Printing & Lithography)", units: 3, type: "C" },
                { code: "FAA 306", title: "Photography II (Digital Photography)", units: 3, type: "C" },
                { code: "FAA 308", title: "Computer Graphics II (Motion Graphics)", units: 3, type: "C" },
                { code: "FAA 310", title: "Industrial Design (Product Design)", units: 3, type: "C" },
                { code: "FAA 312", title: "Art Gallery and Museum Management", units: 3, type: "C" },
                { code: "FAA 314", title: "Research Methods in Fine Arts", units: 2, type: "C" },
                { code: "FAA 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "FAA 401", title: "Advanced Painting (Studio Practice)", units: 3, type: "C" },
                { code: "FAA 403", title: "Advanced Graphic Design (UI/UX Design)", units: 3, type: "C" },
                { code: "FAA 405", title: "Advanced Sculpture (Public Art & Monuments)", units: 3, type: "C" },
                { code: "FAA 407", title: "Illustration (Editorial & Book Illustration)", units: 3, type: "E" },
                { code: "FAA 409", title: "Animation and Multimedia", units: 3, type: "E" },
                { code: "FAA 411", title: "Fashion Design", units: 3, type: "E" },
                { code: "FAA 413", title: "Art Business and Entrepreneurship", units: 3, type: "E" },
                { code: "FAA 499", title: "Final Year Project I (Studio Project/Exhibition)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "FAA 402", title: "Advanced Ceramics and Pottery", units: 3, type: "E" },
                { code: "FAA 404", title: "Advanced Textile Art", units: 3, type: "E" },
                { code: "FAA 406", title: "Environmental Design (Interior Design)", units: 3, type: "E" },
                { code: "FAA 408", title: "Contemporary African Art Discourse", units: 3, type: "C" },
                { code: "FAA 410", title: "Art Therapy", units: 3, type: "E" },
                { code: "FAA 412", title: "Digital Art and New Media", units: 3, type: "E" },
                { code: "FAA 414", title: "Fine and Applied Arts Seminar", units: 2, type: "C" },
                { code: "FAA 498", title: "Final Year Project II (Exhibition/Thesis)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    }
  ] // end departments array
}, //environment

{
  id: 5,
  name: "Faculty of Education",
  code: "EDU",
  duration: 4,
  departments: [

    // ======================================================
    // DEPARTMENT 1: EDUCATIONAL MANAGEMENT
    // ======================================================
    {
      id: 501,
      name: "Educational Management",
      code: "EDM",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "EDU 101", title: "Introduction to Education I (History & Philosophy)", units: 3, type: "C" },
                { code: "EDU 103", title: "Introduction to Educational Psychology I", units: 3, type: "C" },
                { code: "EDM 101", title: "Introduction to Educational Administration", units: 3, type: "C" },
                { code: "EDM 103", title: "Foundations of Educational Management", units: 2, type: "C" },
                { code: "POL 101", title: "Introduction to Political Science I", units: 3, type: "R" },
                { code: "SOC 101", title: "Introduction to Sociology I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "EDU 102", title: "Introduction to Education II (Sociology of Education)", units: 3, type: "C" },
                { code: "EDU 104", title: "Introduction to Educational Psychology II", units: 3, type: "C" },
                { code: "EDM 102", title: "Principles of School Organization", units: 3, type: "C" },
                { code: "EDM 104", title: "Introduction to Educational Planning", units: 2, type: "C" },
                { code: "POL 102", title: "Introduction to Political Science II", units: 3, type: "R" },
                { code: "ECO 102", title: "Principles of Economics II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "EDU 201", title: "Curriculum and Instruction I", units: 3, type: "C" },
                { code: "EDU 203", title: "Educational Psychology (Learning Theories)", units: 3, type: "C" },
                { code: "EDM 201", title: "Educational Administration I (Principles & Practice)", units: 3, type: "C" },
                { code: "EDM 203", title: "Educational Planning I (Macro Planning)", units: 3, type: "C" },
                { code: "EDM 205", title: "School Management I", units: 3, type: "C" },
                { code: "EDM 207", title: "Introduction to Educational Law", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Education I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "EDU 202", title: "Curriculum and Instruction II", units: 3, type: "C" },
                { code: "EDU 204", title: "Educational Measurement and Evaluation I", units: 3, type: "C" },
                { code: "EDM 202", title: "Educational Administration II", units: 3, type: "C" },
                { code: "EDM 204", title: "Educational Planning II (Micro Planning)", units: 3, type: "C" },
                { code: "EDM 206", title: "School Management II", units: 3, type: "C" },
                { code: "EDM 208", title: "Educational Finance I", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Education II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "EDU 301", title: "Educational Technology I", units: 3, type: "C" },
                { code: "EDU 303", title: "Educational Measurement and Evaluation II", units: 3, type: "C" },
                { code: "EDM 301", title: "Personnel Management in Education I", units: 3, type: "C" },
                { code: "EDM 303", title: "Educational Finance II (Budgeting)", units: 3, type: "C" },
                { code: "EDM 305", title: "Educational Supervision I", units: 3, type: "C" },
                { code: "EDM 307", title: "Comparative Educational Administration", units: 3, type: "C" },
                { code: "EDM 309", title: "Research Methods in Educational Management I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "EDU 302", title: "Educational Technology II", units: 3, type: "C" },
                { code: "EDM 302", title: "Personnel Management in Education II", units: 3, type: "C" },
                { code: "EDM 304", title: "Educational Policy Analysis", units: 3, type: "C" },
                { code: "EDM 306", title: "Educational Supervision II (Instructional)", units: 3, type: "C" },
                { code: "EDM 308", title: "School Plant Planning and Management", units: 3, type: "C" },
                { code: "EDM 310", title: "Research Methods in Educational Management II", units: 3, type: "C" },
                { code: "EDM 312", title: "Teaching Practice I (Micro-Teaching)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "EDM 401", title: "Leadership in Educational Organizations", units: 3, type: "C" },
                { code: "EDM 403", title: "Educational Project Management", units: 3, type: "C" },
                { code: "EDM 405", title: "Higher Education Administration", units: 3, type: "C" },
                { code: "EDM 407", title: "Records Management in Education", units: 3, type: "E" },
                { code: "EDM 409", title: "Change Management in Education", units: 3, type: "E" },
                { code: "EDM 411", title: "Quality Assurance in Education", units: 3, type: "E" },
                { code: "EDM 413", title: "Teaching Practice II (Field Experience)", units: 6, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "EDM 402", title: "School-Community Relations", units: 3, type: "C" },
                { code: "EDM 404", title: "Strategic Planning in Education", units: 3, type: "C" },
                { code: "EDM 406", title: "Education and National Development", units: 3, type: "C" },
                { code: "EDM 408", title: "Conflict Management in Educational Institutions", units: 3, type: "E" },
                { code: "EDM 410", title: "ICT in Educational Management", units: 3, type: "E" },
                { code: "EDM 412", title: "Educational Management Seminar", units: 2, type: "C" },
                { code: "EDM 499", title: "Final Year Project (Research Project)", units: 6, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 2: GUIDANCE AND COUNSELLING
    // ======================================================
    {
      id: 502,
      name: "Guidance and Counselling",
      code: "GCE",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "EDU 101", title: "Introduction to Education I", units: 3, type: "C" },
                { code: "EDU 103", title: "Introduction to Educational Psychology I", units: 3, type: "C" },
                { code: "GCE 101", title: "Introduction to Guidance and Counselling I", units: 3, type: "C" },
                { code: "GCE 103", title: "Foundations of Guidance Services", units: 2, type: "C" },
                { code: "PSY 101", title: "Introduction to Psychology I", units: 3, type: "R" },
                { code: "SOC 101", title: "Introduction to Sociology I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "EDU 102", title: "Introduction to Education II", units: 3, type: "C" },
                { code: "EDU 104", title: "Introduction to Educational Psychology II", units: 3, type: "C" },
                { code: "GCE 102", title: "Introduction to Guidance and Counselling II", units: 3, type: "C" },
                { code: "GCE 104", title: "History of Guidance Movement", units: 2, type: "C" },
                { code: "PSY 102", title: "Introduction to Psychology II", units: 3, type: "R" },
                { code: "SOC 102", title: "Introduction to Sociology II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "EDU 201", title: "Curriculum and Instruction I", units: 3, type: "C" },
                { code: "EDU 203", title: "Educational Psychology (Learning Theories)", units: 3, type: "C" },
                { code: "GCE 201", title: "Theories of Counselling I (Psychoanalytic & Behavioural)", units: 3, type: "C" },
                { code: "GCE 203", title: "Psychology of Adjustment", units: 3, type: "C" },
                { code: "GCE 205", title: "Educational Guidance", units: 3, type: "C" },
                { code: "GCE 207", title: "Developmental Psychology I (Child & Adolescent)", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Education I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "EDU 202", title: "Curriculum and Instruction II", units: 3, type: "C" },
                { code: "EDU 204", title: "Educational Measurement and Evaluation I", units: 3, type: "C" },
                { code: "GCE 202", title: "Theories of Counselling II (Humanistic & Cognitive)", units: 3, type: "C" },
                { code: "GCE 204", title: "Personality Psychology", units: 3, type: "C" },
                { code: "GCE 206", title: "Vocational Guidance", units: 3, type: "C" },
                { code: "GCE 208", title: "Developmental Psychology II (Adult & Aging)", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Education II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "EDU 301", title: "Educational Technology I", units: 3, type: "C" },
                { code: "EDU 303", title: "Educational Measurement and Evaluation II", units: 3, type: "C" },
                { code: "GCE 301", title: "Counselling Techniques and Skills I", units: 3, type: "C" },
                { code: "GCE 303", title: "Psychological Testing I (Intelligence & Aptitude)", units: 3, type: "C" },
                { code: "GCE 305", title: "Group Counselling I", units: 3, type: "C" },
                { code: "GCE 307", title: "Abnormal Psychology", units: 3, type: "C" },
                { code: "GCE 309", title: "Research Methods in Guidance and Counselling I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "EDU 302", title: "Educational Technology II", units: 3, type: "C" },
                { code: "GCE 302", title: "Counselling Techniques and Skills II", units: 3, type: "C" },
                { code: "GCE 304", title: "Psychological Testing II (Personality & Interest)", units: 3, type: "C" },
                { code: "GCE 306", title: "Group Counselling II", units: 3, type: "C" },
                { code: "GCE 308", title: "Career Counselling", units: 3, type: "C" },
                { code: "GCE 310", title: "Research Methods in Guidance and Counselling II", units: 3, type: "C" },
                { code: "GCE 312", title: "Teaching Practice I (Micro-Teaching)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GCE 401", title: "Marriage and Family Counselling", units: 3, type: "C" },
                { code: "GCE 403", title: "Counselling Practicum I", units: 3, type: "C" },
                { code: "GCE 405", title: "Substance Abuse Counselling", units: 3, type: "C" },
                { code: "GCE 407", title: "Crisis Intervention and Trauma Counselling", units: 3, type: "E" },
                { code: "GCE 409", title: "Counselling Special Populations", units: 3, type: "E" },
                { code: "GCE 411", title: "Ethics in Counselling", units: 3, type: "E" },
                { code: "GCE 413", title: "Teaching Practice II (Field Experience)", units: 6, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GCE 402", title: "Rehabilitation Counselling", units: 3, type: "C" },
                { code: "GCE 404", title: "Counselling Practicum II", units: 3, type: "C" },
                { code: "GCE 406", title: "Child and Adolescent Counselling", units: 3, type: "C" },
                { code: "GCE 408", title: "Multicultural Counselling", units: 3, type: "E" },
                { code: "GCE 410", title: "Health and HIV/AIDS Counselling", units: 3, type: "E" },
                { code: "GCE 412", title: "Guidance and Counselling Seminar", units: 2, type: "C" },
                { code: "GCE 499", title: "Final Year Project (Research Project)", units: 6, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 3: CURRICULUM AND INSTRUCTION
    // ======================================================
    {
      id: 503,
      name: "Curriculum and Instruction",
      code: "CUI",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "EDU 101", title: "Introduction to Education I", units: 3, type: "C" },
                { code: "EDU 103", title: "Introduction to Educational Psychology I", units: 3, type: "C" },
                { code: "CUI 101", title: "Introduction to Curriculum Studies I", units: 3, type: "C" },
                { code: "CUI 103", title: "Foundations of Curriculum Development", units: 2, type: "C" },
                { code: "ELS 101", title: "Introduction to Literature I", units: 3, type: "R" },
                { code: "PHI 101", title: "Introduction to Philosophy I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "EDU 102", title: "Introduction to Education II", units: 3, type: "C" },
                { code: "EDU 104", title: "Introduction to Educational Psychology II", units: 3, type: "C" },
                { code: "CUI 102", title: "Introduction to Curriculum Studies II", units: 3, type: "C" },
                { code: "CUI 104", title: "Introduction to Instructional Process", units: 2, type: "C" },
                { code: "ELS 102", title: "Introduction to Literature II", units: 3, type: "R" },
                { code: "PHI 102", title: "Introduction to Philosophy II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "EDU 201", title: "Curriculum and Instruction I", units: 3, type: "C" },
                { code: "EDU 203", title: "Educational Psychology (Learning Theories)", units: 3, type: "C" },
                { code: "CUI 201", title: "Curriculum Theory and Design I", units: 3, type: "C" },
                { code: "CUI 203", title: "Instructional Strategies I", units: 3, type: "C" },
                { code: "CUI 205", title: "Philosophical Foundations of Curriculum", units: 3, type: "C" },
                { code: "CUI 207", title: "Psychology of Learning and Instruction", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Education I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "EDU 202", title: "Curriculum and Instruction II", units: 3, type: "C" },
                { code: "EDU 204", title: "Educational Measurement and Evaluation I", units: 3, type: "C" },
                { code: "CUI 202", title: "Curriculum Theory and Design II", units: 3, type: "C" },
                { code: "CUI 204", title: "Instructional Strategies II", units: 3, type: "C" },
                { code: "CUI 206", title: "Sociological Foundations of Curriculum", units: 3, type: "C" },
                { code: "CUI 208", title: "Curriculum Materials Development", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Education II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "EDU 301", title: "Educational Technology I", units: 3, type: "C" },
                { code: "EDU 303", title: "Educational Measurement and Evaluation II", units: 3, type: "C" },
                { code: "CUI 301", title: "Curriculum Implementation and Change", units: 3, type: "C" },
                { code: "CUI 303", title: "Instructional Design I", units: 3, type: "C" },
                { code: "CUI 305", title: "Curriculum Evaluation I", units: 3, type: "C" },
                { code: "CUI 307", title: "Comparative Curriculum Studies", units: 3, type: "C" },
                { code: "CUI 309", title: "Research Methods in Curriculum Studies I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "EDU 302", title: "Educational Technology II", units: 3, type: "C" },
                { code: "CUI 302", title: "Curriculum Innovation and Reform", units: 3, type: "C" },
                { code: "CUI 304", title: "Instructional Design II", units: 3, type: "C" },
                { code: "CUI 306", title: "Curriculum Evaluation II", units: 3, type: "C" },
                { code: "CUI 308", title: "Subject-Specific Curriculum (Elective Area)", units: 3, type: "C" },
                { code: "CUI 310", title: "Research Methods in Curriculum Studies II", units: 3, type: "C" },
                { code: "CUI 312", title: "Teaching Practice I (Micro-Teaching)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "CUI 401", title: "Advanced Curriculum Theory", units: 3, type: "C" },
                { code: "CUI 403", title: "Curriculum for Special Needs Education", units: 3, type: "C" },
                { code: "CUI 405", title: "Teacher Education Curriculum", units: 3, type: "C" },
                { code: "CUI 407", title: "Differentiated Instruction", units: 3, type: "E" },
                { code: "CUI 409", title: "Assessment and Curriculum Alignment", units: 3, type: "E" },
                { code: "CUI 411", title: "Standards-Based Curriculum", units: 3, type: "E" },
                { code: "CUI 413", title: "Teaching Practice II (Field Experience)", units: 6, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "CUI 402", title: "Curriculum Leadership", units: 3, type: "C" },
                { code: "CUI 404", title: "ICT and Curriculum Integration", units: 3, type: "C" },
                { code: "CUI 406", title: "Curriculum and National Development", units: 3, type: "C" },
                { code: "CUI 408", title: "Curriculum for 21st Century Skills", units: 3, type: "E" },
                { code: "CUI 410", title: "Action Research in Curriculum", units: 3, type: "E" },
                { code: "CUI 412", title: "Curriculum and Instruction Seminar", units: 2, type: "C" },
                { code: "CUI 499", title: "Final Year Project (Research Project)", units: 6, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 4: EDUCATIONAL PSYCHOLOGY
    // ======================================================
    {
      id: 504,
      name: "Educational Psychology",
      code: "EDP",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "EDU 101", title: "Introduction to Education I", units: 3, type: "C" },
                { code: "EDU 103", title: "Introduction to Educational Psychology I", units: 3, type: "C" },
                { code: "EDP 101", title: "Foundations of Psychology I", units: 3, type: "C" },
                { code: "EDP 103", title: "Introduction to Human Development I", units: 2, type: "C" },
                { code: "PSY 101", title: "General Psychology I", units: 3, type: "R" },
                { code: "BIO 101", title: "General Biology I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "EDU 102", title: "Introduction to Education II", units: 3, type: "C" },
                { code: "EDU 104", title: "Introduction to Educational Psychology II", units: 3, type: "C" },
                { code: "EDP 102", title: "Foundations of Psychology II", units: 3, type: "C" },
                { code: "EDP 104", title: "Introduction to Human Development II", units: 2, type: "C" },
                { code: "PSY 102", title: "General Psychology II", units: 3, type: "R" },
                { code: "BIO 102", title: "General Biology II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "EDU 201", title: "Curriculum and Instruction I", units: 3, type: "C" },
                { code: "EDU 203", title: "Educational Psychology (Learning Theories)", units: 3, type: "C" },
                { code: "EDP 201", title: "Psychology of Learning I (Behavioural)", units: 3, type: "C" },
                { code: "EDP 203", title: "Child and Adolescent Psychology I", units: 3, type: "C" },
                { code: "EDP 205", title: "Cognitive Psychology I", units: 3, type: "C" },
                { code: "EDP 207", title: "Biological Bases of Behaviour", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Education I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "EDU 202", title: "Curriculum and Instruction II", units: 3, type: "C" },
                { code: "EDU 204", title: "Educational Measurement and Evaluation I", units: 3, type: "C" },
                { code: "EDP 202", title: "Psychology of Learning II (Cognitive)", units: 3, type: "C" },
                { code: "EDP 204", title: "Child and Adolescent Psychology II", units: 3, type: "C" },
                { code: "EDP 206", title: "Cognitive Psychology II", units: 3, type: "C" },
                { code: "EDP 208", title: "Social Psychology in Education", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Education II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "EDU 301", title: "Educational Technology I", units: 3, type: "C" },
                { code: "EDU 303", title: "Educational Measurement and Evaluation II", units: 3, type: "C" },
                { code: "EDP 301", title: "Motivation and Learning", units: 3, type: "C" },
                { code: "EDP 303", title: "Psychological Testing and Assessment I", units: 3, type: "C" },
                { code: "EDP 305", title: "Abnormal Psychology and Education", units: 3, type: "C" },
                { code: "EDP 307", title: "Psychology of Individual Differences", units: 3, type: "C" },
                { code: "EDP 309", title: "Research Methods in Educational Psychology I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "EDU 302", title: "Educational Technology II", units: 3, type: "C" },
                { code: "EDP 302", title: "Memory, Thinking and Problem Solving", units: 3, type: "C" },
                { code: "EDP 304", title: "Psychological Testing and Assessment II", units: 3, type: "C" },
                { code: "EDP 306", title: "Classroom Management and Behaviour", units: 3, type: "C" },
                { code: "EDP 308", title: "Psychology of Exceptional Children", units: 3, type: "C" },
                { code: "EDP 310", title: "Research Methods in Educational Psychology II", units: 3, type: "C" },
                { code: "EDP 312", title: "Teaching Practice I (Micro-Teaching)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "EDP 401", title: "Advanced Educational Psychology", units: 3, type: "C" },
                { code: "EDP 403", title: "Psychology of Reading and Language", units: 3, type: "C" },
                { code: "EDP 405", title: "School Psychology", units: 3, type: "C" },
                { code: "EDP 407", title: "Neuropsychology and Learning", units: 3, type: "E" },
                { code: "EDP 409", title: "Positive Psychology in Education", units: 3, type: "E" },
                { code: "EDP 411", title: "Self-Regulated Learning", units: 3, type: "E" },
                { code: "EDP 413", title: "Teaching Practice II (Field Experience)", units: 6, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "EDP 402", title: "Creativity and Giftedness", units: 3, type: "C" },
                { code: "EDP 404", title: "Learning Disabilities and Interventions", units: 3, type: "C" },
                { code: "EDP 406", title: "Psychology of Moral Development", units: 3, type: "C" },
                { code: "EDP 408", title: "Cross-Cultural Educational Psychology", units: 3, type: "E" },
                { code: "EDP 410", title: "Technology and Cognitive Development", units: 3, type: "E" },
                { code: "EDP 412", title: "Educational Psychology Seminar", units: 2, type: "C" },
                { code: "EDP 499", title: "Final Year Project (Research Project)", units: 6, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 5: SCIENCE EDUCATION
    // ======================================================
    {
      id: 505,
      name: "Science Education",
      code: "SCE",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "EDU 101", title: "Introduction to Education I", units: 3, type: "C" },
                { code: "EDU 103", title: "Introduction to Educational Psychology I", units: 3, type: "C" },
                { code: "SCE 101", title: "Introduction to Science Education I", units: 2, type: "C" },
                { code: "PHY 101", title: "General Physics I", units: 3, type: "C" },
                { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                { code: "BIO 101", title: "General Biology I", units: 3, type: "C" },
                { code: "BIO 107", title: "General Biology Laboratory I", units: 1, type: "C" },
                { code: "MTH 101", title: "Elementary Mathematics I", units: 3, type: "C" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "EDU 102", title: "Introduction to Education II", units: 3, type: "C" },
                { code: "EDU 104", title: "Introduction to Educational Psychology II", units: 3, type: "C" },
                { code: "SCE 102", title: "Introduction to Science Education II", units: 2, type: "C" },
                { code: "PHY 102", title: "General Physics II", units: 3, type: "C" },
                { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                { code: "BIO 102", title: "General Biology II", units: 3, type: "C" },
                { code: "BIO 108", title: "General Biology Laboratory II", units: 1, type: "C" },
                { code: "MTH 102", title: "Elementary Mathematics II", units: 3, type: "C" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "EDU 201", title: "Curriculum and Instruction I", units: 3, type: "C" },
                { code: "EDU 203", title: "Educational Psychology (Learning Theories)", units: 3, type: "C" },
                { code: "SCE 201", title: "Foundations of Science Education", units: 3, type: "C" },
                { code: "SCE 203", title: "Methods of Teaching Science I", units: 3, type: "C" },
                { code: "SCE 205", title: "Science Process Skills", units: 3, type: "C" },
                // Subject Specialization (Choose One Track: Physics, Chemistry, or Biology)
                { code: "PHY 201", title: "Classical Mechanics I / CHM 201 Organic Chemistry I / BIO 201 Genetics I", units: 3, type: "C" },
                { code: "PHY 203", title: "Thermal Physics I / CHM 203 Physical Chemistry I / BIO 203 Plant Anatomy", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Education I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "EDU 202", title: "Curriculum and Instruction II", units: 3, type: "C" },
                { code: "EDU 204", title: "Educational Measurement and Evaluation I", units: 3, type: "C" },
                { code: "SCE 202", title: "History and Philosophy of Science Education", units: 3, type: "C" },
                { code: "SCE 204", title: "Methods of Teaching Science II", units: 3, type: "C" },
                { code: "SCE 206", title: "Laboratory Management and Safety", units: 3, type: "C" },
                { code: "PHY 202", title: "Classical Mechanics II / CHM 202 Organic Chemistry II / BIO 202 Genetics II", units: 3, type: "C" },
                { code: "PHY 204", title: "Thermal Physics II / CHM 204 Physical Chemistry II / BIO 204 Plant Physiology", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Education II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "EDU 301", title: "Educational Technology I", units: 3, type: "C" },
                { code: "EDU 303", title: "Educational Measurement and Evaluation II", units: 3, type: "C" },
                { code: "SCE 301", title: "Curriculum Development in Science Education", units: 3, type: "C" },
                { code: "SCE 303", title: "Science Education for Sustainable Development", units: 3, type: "C" },
                { code: "SCE 305", title: "Assessment in Science Education", units: 3, type: "C" },
                { code: "SCE 307", title: "ICT in Science Teaching", units: 3, type: "C" },
                { code: "SCE 309", title: "Research Methods in Science Education I", units: 3, type: "C" },
                // Subject Specialization continues
                { code: "PHY 301", title: "Quantum Mechanics I / CHM 301 Organic Chemistry III / BIO 301 Molecular Biology", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "EDU 302", title: "Educational Technology II", units: 3, type: "C" },
                { code: "SCE 302", title: "Improvisation in Science Teaching", units: 3, type: "C" },
                { code: "SCE 304", title: "Environmental Science Education", units: 3, type: "C" },
                { code: "SCE 306", title: "Gender Issues in Science Education", units: 3, type: "C" },
                { code: "SCE 308", title: "Practical Work in Science Education", units: 3, type: "C" },
                { code: "SCE 310", title: "Research Methods in Science Education II", units: 3, type: "C" },
                { code: "SCE 312", title: "Teaching Practice I (Micro-Teaching)", units: 3, type: "C" },
                { code: "PHY 302", title: "Quantum Mechanics II / CHM 302 Reaction Mechanisms / BIO 302 Microbial Genetics", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "SCE 401", title: "Advanced Methods of Teaching Science", units: 3, type: "C" },
                { code: "SCE 403", title: "Science Education and Society", units: 3, type: "C" },
                { code: "SCE 405", title: "Comparative Science Education", units: 3, type: "C" },
                { code: "SCE 407", title: "Misconceptions in Science Learning", units: 3, type: "E" },
                { code: "SCE 409", title: "STEM Education", units: 3, type: "E" },
                { code: "SCE 411", title: "Science Teacher Professional Development", units: 3, type: "E" },
                { code: "SCE 413", title: "Teaching Practice II (Field Experience)", units: 6, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "SCE 402", title: "Science Curriculum Reform", units: 3, type: "C" },
                { code: "SCE 404", title: "Inquiry-Based Science Teaching", units: 3, type: "C" },
                { code: "SCE 406", title: "Scientific Literacy", units: 3, type: "C" },
                { code: "SCE 408", title: "Constructivism in Science Education", units: 3, type: "E" },
                { code: "SCE 410", title: "Indigenous Knowledge and Science Teaching", units: 3, type: "E" },
                { code: "SCE 412", title: "Science Education Seminar", units: 2, type: "C" },
                { code: "SCE 499", title: "Final Year Project (Research Project)", units: 6, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 6: ARTS EDUCATION
    // ======================================================
    {
      id: 506,
      name: "Arts Education",
      code: "AED",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "EDU 101", title: "Introduction to Education I", units: 3, type: "C" },
                { code: "EDU 103", title: "Introduction to Educational Psychology I", units: 3, type: "C" },
                { code: "AED 101", title: "Introduction to Arts Education I", units: 2, type: "C" },
                { code: "ELS 101", title: "Introduction to Literature I", units: 3, type: "C" },
                { code: "ELS 103", title: "Introduction to Language Studies I", units: 3, type: "C" },
                { code: "HIS 101", title: "Introduction to African History I", units: 3, type: "R" },
                { code: "PHI 101", title: "Introduction to Philosophy I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "EDU 102", title: "Introduction to Education II", units: 3, type: "C" },
                { code: "EDU 104", title: "Introduction to Educational Psychology II", units: 3, type: "C" },
                { code: "AED 102", title: "Introduction to Arts Education II", units: 2, type: "C" },
                { code: "ELS 102", title: "Introduction to Literature II", units: 3, type: "C" },
                { code: "ELS 104", title: "Introduction to Language Studies II", units: 3, type: "C" },
                { code: "HIS 102", title: "Introduction to African History II", units: 3, type: "R" },
                { code: "PHI 102", title: "Introduction to Philosophy II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "EDU 201", title: "Curriculum and Instruction I", units: 3, type: "C" },
                { code: "EDU 203", title: "Educational Psychology (Learning Theories)", units: 3, type: "C" },
                { code: "AED 201", title: "Foundations of Arts Education", units: 3, type: "C" },
                { code: "AED 203", title: "Methods of Teaching Arts Subjects I", units: 3, type: "C" },
                { code: "AED 205", title: "Language Arts Teaching I (English)", units: 3, type: "C" },
                // Subject Specialization (English, History, or Religious Studies)
                { code: "ELS 201", title: "English Phonetics and Phonology / HIS 201 Nigerian History / CRS 201 OT Prophetic Literature", units: 3, type: "C" },
                { code: "ELS 203", title: "African Poetry / HIS 203 West African History / AIS 203 Tafsir I", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Education I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "EDU 202", title: "Curriculum and Instruction II", units: 3, type: "C" },
                { code: "EDU 204", title: "Educational Measurement and Evaluation I", units: 3, type: "C" },
                { code: "AED 202", title: "History and Philosophy of Arts Education", units: 3, type: "C" },
                { code: "AED 204", title: "Methods of Teaching Arts Subjects II", units: 3, type: "C" },
                { code: "AED 206", title: "Language Arts Teaching II", units: 3, type: "C" },
                { code: "ELS 202", title: "English Morphology and Syntax / HIS 202 Nigerian History II / CRS 202 OT Wisdom Literature", units: 3, type: "C" },
                { code: "ELS 204", title: "African Prose Fiction / HIS 204 West African History II / AIS 204 Tafsir II", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Education II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "EDU 301", title: "Educational Technology I", units: 3, type: "C" },
                { code: "EDU 303", title: "Educational Measurement and Evaluation II", units: 3, type: "C" },
                { code: "AED 301", title: "Curriculum Development in Arts Education", units: 3, type: "C" },
                { code: "AED 303", title: "Assessment in Arts Education", units: 3, type: "C" },
                { code: "AED 305", title: "Teaching Literature in Schools", units: 3, type: "C" },
                { code: "AED 307", title: "ICT in Arts Teaching", units: 3, type: "C" },
                { code: "AED 309", title: "Research Methods in Arts Education I", units: 3, type: "C" },
                { code: "ELS 301", title: "Semantics and Pragmatics / HIS 301 Nigeria Since Independence I / CRS 301 Pauline Epistles I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "EDU 302", title: "Educational Technology II", units: 3, type: "C" },
                { code: "AED 302", title: "Problems of Teaching Arts Subjects", units: 3, type: "C" },
                { code: "AED 304", title: "Instructional Materials in Arts Education", units: 3, type: "C" },
                { code: "AED 306", title: "Teaching Language Skills (Reading, Writing, Speaking)", units: 3, type: "C" },
                { code: "AED 308", title: "Creative Arts in Education", units: 3, type: "C" },
                { code: "AED 310", title: "Research Methods in Arts Education II", units: 3, type: "C" },
                { code: "AED 312", title: "Teaching Practice I (Micro-Teaching)", units: 3, type: "C" },
                { code: "ELS 302", title: "Discourse Analysis / HIS 302 Nigeria Since Independence II / CRS 302 Pauline Epistles II", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "AED 401", title: "Advanced Methods of Teaching Arts Subjects", units: 3, type: "C" },
                { code: "AED 403", title: "Language Across the Curriculum", units: 3, type: "C" },
                { code: "AED 405", title: "Comparative Arts Education", units: 3, type: "C" },
                { code: "AED 407", title: "Drama and Theatre in Education", units: 3, type: "E" },
                { code: "AED 409", title: "Cultural Studies and Arts Teaching", units: 3, type: "E" },
                { code: "AED 411", title: "Arts Teacher Professional Development", units: 3, type: "E" },
                { code: "AED 413", title: "Teaching Practice II (Field Experience)", units: 6, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "AED 402", title: "Arts Curriculum Reform", units: 3, type: "C" },
                { code: "AED 404", title: "Literacy Education", units: 3, type: "C" },
                { code: "AED 406", title: "Arts Education and National Development", units: 3, type: "C" },
                { code: "AED 408", title: "Second Language Teaching", units: 3, type: "E" },
                { code: "AED 410", title: "Media and Arts Education", units: 3, type: "E" },
                { code: "AED 412", title: "Arts Education Seminar", units: 2, type: "C" },
                { code: "AED 499", title: "Final Year Project (Research Project)", units: 6, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 7: SOCIAL SCIENCE EDUCATION
    // ======================================================
    {
      id: 507,
      name: "Social Science Education",
      code: "SSE",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "EDU 101", title: "Introduction to Education I", units: 3, type: "C" },
                { code: "EDU 103", title: "Introduction to Educational Psychology I", units: 3, type: "C" },
                { code: "SSE 101", title: "Introduction to Social Science Education I", units: 2, type: "C" },
                { code: "ECO 101", title: "Principles of Economics I", units: 3, type: "C" },
                { code: "POL 101", title: "Introduction to Political Science I", units: 3, type: "C" },
                { code: "SOC 101", title: "Introduction to Sociology I", units: 3, type: "R" },
                { code: "GEO 101", title: "Introduction to Physical Geography I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "EDU 102", title: "Introduction to Education II", units: 3, type: "C" },
                { code: "EDU 104", title: "Introduction to Educational Psychology II", units: 3, type: "C" },
                { code: "SSE 102", title: "Introduction to Social Science Education II", units: 2, type: "C" },
                { code: "ECO 102", title: "Principles of Economics II", units: 3, type: "C" },
                { code: "POL 102", title: "Introduction to Political Science II", units: 3, type: "C" },
                { code: "SOC 102", title: "Introduction to Sociology II", units: 3, type: "R" },
                { code: "GEO 102", title: "Introduction to Physical Geography II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "EDU 201", title: "Curriculum and Instruction I", units: 3, type: "C" },
                { code: "EDU 203", title: "Educational Psychology (Learning Theories)", units: 3, type: "C" },
                { code: "SSE 201", title: "Foundations of Social Science Education", units: 3, type: "C" },
                { code: "SSE 203", title: "Methods of Teaching Social Sciences I", units: 3, type: "C" },
                { code: "SSE 205", title: "Civic Education", units: 3, type: "C" },
                // Subject Specialization (Economics, Political Science, or Geography)
                { code: "ECO 201", title: "Microeconomic Theory I / POL 201 Political Theory I / GEO 201 Geomorphology I", units: 3, type: "C" },
                { code: "ECO 203", title: "Macroeconomic Theory I / POL 203 Nigerian Government I / GEO 203 Climatology I", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Education I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "EDU 202", title: "Curriculum and Instruction II", units: 3, type: "C" },
                { code: "EDU 204", title: "Educational Measurement and Evaluation I", units: 3, type: "C" },
                { code: "SSE 202", title: "History and Philosophy of Social Science Education", units: 3, type: "C" },
                { code: "SSE 204", title: "Methods of Teaching Social Sciences II", units: 3, type: "C" },
                { code: "SSE 206", title: "Social Studies Curriculum", units: 3, type: "C" },
                { code: "ECO 202", title: "Microeconomic Theory II / POL 202 Political Theory II / GEO 202 Geomorphology II", units: 3, type: "C" },
                { code: "ECO 204", title: "Macroeconomic Theory II / POL 204 Nigerian Government II / GEO 204 Climatology II", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Education II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "EDU 301", title: "Educational Technology I", units: 3, type: "C" },
                { code: "EDU 303", title: "Educational Measurement and Evaluation II", units: 3, type: "C" },
                { code: "SSE 301", title: "Curriculum Development in Social Science Education", units: 3, type: "C" },
                { code: "SSE 303", title: "Assessment in Social Science Education", units: 3, type: "C" },
                { code: "SSE 305", title: "Teaching Economics in Schools", units: 3, type: "C" },
                { code: "SSE 307", title: "ICT in Social Science Teaching", units: 3, type: "C" },
                { code: "SSE 309", title: "Research Methods in Social Science Education I", units: 3, type: "C" },
                { code: "ECO 301", title: "Intermediate Microeconomics / POL 301 Political Theory III / GEO 301 Hydrology I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "EDU 302", title: "Educational Technology II", units: 3, type: "C" },
                { code: "SSE 302", title: "Problems of Teaching Social Sciences", units: 3, type: "C" },
                { code: "SSE 304", title: "Instructional Materials in Social Science Education", units: 3, type: "C" },
                { code: "SSE 306", title: "Teaching Government/Political Science in Schools", units: 3, type: "C" },
                { code: "SSE 308", title: "Values Education", units: 3, type: "C" },
                { code: "SSE 310", title: "Research Methods in Social Science Education II", units: 3, type: "C" },
                { code: "SSE 312", title: "Teaching Practice I (Micro-Teaching)", units: 3, type: "C" },
                { code: "ECO 302", title: "Intermediate Macroeconomics / POL 302 International Law / GEO 302 Hydrology II", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "SSE 401", title: "Advanced Methods of Teaching Social Sciences", units: 3, type: "C" },
                { code: "SSE 403", title: "Social Science Education and Society", units: 3, type: "C" },
                { code: "SSE 405", title: "Comparative Social Science Education", units: 3, type: "C" },
                { code: "SSE 407", title: "Human Rights Education", units: 3, type: "E" },
                { code: "SSE 409", title: "Environmental Education", units: 3, type: "E" },
                { code: "SSE 411", title: "Entrepreneurship Education", units: 3, type: "E" },
                { code: "SSE 413", title: "Teaching Practice II (Field Experience)", units: 6, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "SSE 402", title: "Social Science Curriculum Reform", units: 3, type: "C" },
                { code: "SSE 404", title: "Global Citizenship Education", units: 3, type: "C" },
                { code: "SSE 406", title: "Social Science Education and National Development", units: 3, type: "C" },
                { code: "SSE 408", title: "Peace and Conflict Education", units: 3, type: "E" },
                { code: "SSE 410", title: "Population and Family Life Education", units: 3, type: "E" },
                { code: "SSE 412", title: "Social Science Education Seminar", units: 2, type: "C" },
                { code: "SSE 499", title: "Final Year Project (Research Project)", units: 6, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 8: EDUCATIONAL FOUNDATIONS
    // ======================================================
    {
      id: 508,
      name: "Educational Foundations",
      code: "EDF",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "EDU 101", title: "Introduction to Education I", units: 3, type: "C" },
                { code: "EDU 103", title: "Introduction to Educational Psychology I", units: 3, type: "C" },
                { code: "EDF 101", title: "Introduction to Educational Foundations I", units: 3, type: "C" },
                { code: "EDF 103", title: "Philosophy of Education I", units: 2, type: "C" },
                { code: "PHI 101", title: "Introduction to Philosophy I", units: 3, type: "R" },
                { code: "SOC 101", title: "Introduction to Sociology I", units: 3, type: "R" },
                { code: "HIS 101", title: "Introduction to African History I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "EDU 102", title: "Introduction to Education II", units: 3, type: "C" },
                { code: "EDU 104", title: "Introduction to Educational Psychology II", units: 3, type: "C" },
                { code: "EDF 102", title: "Introduction to Educational Foundations II", units: 3, type: "C" },
                { code: "EDF 104", title: "Philosophy of Education II", units: 2, type: "C" },
                { code: "PHI 102", title: "Introduction to Philosophy II", units: 3, type: "R" },
                { code: "SOC 102", title: "Introduction to Sociology II", units: 3, type: "R" },
                { code: "HIS 102", title: "Introduction to African History II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "EDU 201", title: "Curriculum and Instruction I", units: 3, type: "C" },
                { code: "EDU 203", title: "Educational Psychology (Learning Theories)", units: 3, type: "C" },
                { code: "EDF 201", title: "Sociology of Education I", units: 3, type: "C" },
                { code: "EDF 203", title: "History of Education I (World History)", units: 3, type: "C" },
                { code: "EDF 205", title: "Philosophical Foundations of Education I", units: 3, type: "C" },
                { code: "EDF 207", title: "Economics of Education I", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Education I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "EDU 202", title: "Curriculum and Instruction II", units: 3, type: "C" },
                { code: "EDU 204", title: "Educational Measurement and Evaluation I", units: 3, type: "C" },
                { code: "EDF 202", title: "Sociology of Education II", units: 3, type: "C" },
                { code: "EDF 204", title: "History of Education II (Nigerian Education)", units: 3, type: "C" },
                { code: "EDF 206", title: "Philosophical Foundations of Education II", units: 3, type: "C" },
                { code: "EDF 208", title: "Economics of Education II", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Education II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "EDU 301", title: "Educational Technology I", units: 3, type: "C" },
                { code: "EDU 303", title: "Educational Measurement and Evaluation II", units: 3, type: "C" },
                { code: "EDF 301", title: "Comparative Education I", units: 3, type: "C" },
                { code: "EDF 303", title: "Anthropology of Education", units: 3, type: "C" },
                { code: "EDF 305", title: "Politics of Education", units: 3, type: "C" },
                { code: "EDF 307", title: "African Educational Thought", units: 3, type: "C" },
                { code: "EDF 309", title: "Research Methods in Educational Foundations I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "EDU 302", title: "Educational Technology II", units: 3, type: "C" },
                { code: "EDF 302", title: "Comparative Education II", units: 3, type: "C" },
                { code: "EDF 304", title: "Education and Social Change", units: 3, type: "C" },
                { code: "EDF 306", title: "Gender Issues in Education", units: 3, type: "C" },
                { code: "EDF 308", title: "International Education", units: 3, type: "C" },
                { code: "EDF 310", title: "Research Methods in Educational Foundations II", units: 3, type: "C" },
                { code: "EDF 312", title: "Teaching Practice I (Micro-Teaching)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "EDF 401", title: "Advanced Philosophy of Education", units: 3, type: "C" },
                { code: "EDF 403", title: "Advanced Sociology of Education", units: 3, type: "C" },
                { code: "EDF 405", title: "Education and Development", units: 3, type: "C" },
                { code: "EDF 407", title: "Ethics in Education", units: 3, type: "E" },
                { code: "EDF 409", title: "Multicultural Education", units: 3, type: "E" },
                { code: "EDF 411", title: "Education and Globalization", units: 3, type: "E" },
                { code: "EDF 413", title: "Teaching Practice II (Field Experience)", units: 6, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "EDF 402", title: "Critical Pedagogy", units: 3, type: "C" },
                { code: "EDF 404", title: "Education Policy Analysis", units: 3, type: "C" },
                { code: "EDF 406", title: "Education and Social Justice", units: 3, type: "C" },
                { code: "EDF 408", title: "Indigenous Knowledge and Education", units: 3, type: "E" },
                { code: "EDF 410", title: "Education and Human Rights", units: 3, type: "E" },
                { code: "EDF 412", title: "Educational Foundations Seminar", units: 2, type: "C" },
                { code: "EDF 499", title: "Final Year Project (Research Project)", units: 6, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 9: COMPUTER SCIENCE EDUCATION
    // ======================================================
    {
      id: 509,
      name: "Computer Science Education",
      code: "CSE",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "EDU 101", title: "Introduction to Education I", units: 3, type: "C" },
                { code: "EDU 103", title: "Introduction to Educational Psychology I", units: 3, type: "C" },
                { code: "CSE 101", title: "Introduction to Computer Science Education", units: 2, type: "C" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 3, type: "C" },
                { code: "CPT 103", title: "Introduction to Computer Programming I", units: 3, type: "C" },
                { code: "MTH 101", title: "Elementary Mathematics I", units: 3, type: "C" },
                { code: "PHY 101", title: "General Physics I", units: 3, type: "R" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "EDU 102", title: "Introduction to Education II", units: 3, type: "C" },
                { code: "EDU 104", title: "Introduction to Educational Psychology II", units: 3, type: "C" },
                { code: "CSE 102", title: "Foundations of Computer Science Education", units: 2, type: "C" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 3, type: "C" },
                { code: "CPT 104", title: "Introduction to Computer Programming II", units: 3, type: "C" },
                { code: "MTH 102", title: "Elementary Mathematics II", units: 3, type: "C" },
                { code: "PHY 102", title: "General Physics II", units: 3, type: "R" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "EDU 201", title: "Curriculum and Instruction I", units: 3, type: "C" },
                { code: "EDU 203", title: "Educational Psychology (Learning Theories)", units: 3, type: "C" },
                { code: "CSE 201", title: "Methods of Teaching Computer Science I", units: 3, type: "C" },
                { code: "CSE 203", title: "ICT in Education I", units: 3, type: "C" },
                { code: "CPT 201", title: "Computer Programming (C/C++)", units: 3, type: "C" },
                { code: "CPT 203", title: "Data Structures and Algorithms I", units: 3, type: "C" },
                { code: "CPT 205", title: "Computer Hardware and Maintenance", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Education I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "EDU 202", title: "Curriculum and Instruction II", units: 3, type: "C" },
                { code: "EDU 204", title: "Educational Measurement and Evaluation I", units: 3, type: "C" },
                { code: "CSE 202", title: "Methods of Teaching Computer Science II", units: 3, type: "C" },
                { code: "CSE 204", title: "ICT in Education II", units: 3, type: "C" },
                { code: "CPT 202", title: "Object-Oriented Programming (Java)", units: 3, type: "C" },
                { code: "CPT 204", title: "Data Structures and Algorithms II", units: 3, type: "C" },
                { code: "CPT 206", title: "Introduction to Database Systems", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Education II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "EDU 301", title: "Educational Technology I", units: 3, type: "C" },
                { code: "EDU 303", title: "Educational Measurement and Evaluation II", units: 3, type: "C" },
                { code: "CSE 301", title: "Curriculum Development in Computer Science Education", units: 3, type: "C" },
                { code: "CSE 303", title: "E-Learning and Instructional Design", units: 3, type: "C" },
                { code: "CSE 305", title: "Computer Laboratory Management", units: 3, type: "C" },
                { code: "CPT 301", title: "Operating Systems", units: 3, type: "C" },
                { code: "CPT 303", title: "Computer Networks I", units: 3, type: "C" },
                { code: "CSE 309", title: "Research Methods in Computer Science Education I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "EDU 302", title: "Educational Technology II", units: 3, type: "C" },
                { code: "CSE 302", title: "Assessment in Computer Science Education", units: 3, type: "C" },
                { code: "CSE 304", title: "Web Design and Development for Educators", units: 3, type: "C" },
                { code: "CSE 306", title: "Multimedia in Education", units: 3, type: "C" },
                { code: "CPT 302", title: "Software Engineering", units: 3, type: "C" },
                { code: "CPT 304", title: "Computer Networks II", units: 3, type: "C" },
                { code: "CSE 310", title: "Research Methods in Computer Science Education II", units: 3, type: "C" },
                { code: "CSE 312", title: "Teaching Practice I (Micro-Teaching)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "CSE 401", title: "Advanced Methods of Teaching Computer Science", units: 3, type: "C" },
                { code: "CSE 403", title: "Computational Thinking in Education", units: 3, type: "C" },
                { code: "CSE 405", title: "Artificial Intelligence in Education", units: 3, type: "C" },
                { code: "CSE 407", title: "Cybersecurity Education", units: 3, type: "E" },
                { code: "CSE 409", title: "Robotics and Coding Education", units: 3, type: "E" },
                { code: "CSE 411", title: "Mobile Learning", units: 3, type: "E" },
                { code: "CSE 413", title: "Teaching Practice II (Field Experience)", units: 6, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "CSE 402", title: "Computer Science Curriculum Reform", units: 3, type: "C" },
                { code: "CSE 404", title: "Educational Software Development", units: 3, type: "C" },
                { code: "CSE 406", title: "Digital Literacy and Citizenship", units: 3, type: "C" },
                { code: "CSE 408", title: "Data Science Education", units: 3, type: "E" },
                { code: "CSE 410", title: "Gamification in Education", units: 3, type: "E" },
                { code: "CSE 412", title: "Computer Science Education Seminar", units: 2, type: "C" },
                { code: "CSE 499", title: "Final Year Project (Research Project)", units: 6, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 10: SPECIAL EDUCATION
    // ======================================================
    {
      id: 510,
      name: "Special Education",
      code: "SPE",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "EDU 101", title: "Introduction to Education I", units: 3, type: "C" },
                { code: "EDU 103", title: "Introduction to Educational Psychology I", units: 3, type: "C" },
                { code: "SPE 101", title: "Introduction to Special Education I", units: 3, type: "C" },
                { code: "SPE 103", title: "Foundations of Special Needs", units: 2, type: "C" },
                { code: "PSY 101", title: "Introduction to Psychology I", units: 3, type: "R" },
                { code: "BIO 101", title: "General Biology I", units: 3, type: "R" },
                { code: "SOC 101", title: "Introduction to Sociology I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "EDU 102", title: "Introduction to Education II", units: 3, type: "C" },
                { code: "EDU 104", title: "Introduction to Educational Psychology II", units: 3, type: "C" },
                { code: "SPE 102", title: "Introduction to Special Education II", units: 3, type: "C" },
                { code: "SPE 104", title: "History and Philosophy of Special Education", units: 2, type: "C" },
                { code: "PSY 102", title: "Introduction to Psychology II", units: 3, type: "R" },
                { code: "BIO 102", title: "General Biology II", units: 3, type: "R" },
                { code: "SOC 102", title: "Introduction to Sociology II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "EDU 201", title: "Curriculum and Instruction I", units: 3, type: "C" },
                { code: "EDU 203", title: "Educational Psychology (Learning Theories)", units: 3, type: "C" },
                { code: "SPE 201", title: "Education of the Visually Impaired I", units: 3, type: "C" },
                { code: "SPE 203", title: "Education of the Hearing Impaired I", units: 3, type: "C" },
                { code: "SPE 205", title: "Education of the Intellectually Disabled I", units: 3, type: "C" },
                { code: "SPE 207", title: "Anatomy and Physiology of the Sense Organs", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Education I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "EDU 202", title: "Curriculum and Instruction II", units: 3, type: "C" },
                { code: "EDU 204", title: "Educational Measurement and Evaluation I", units: 3, type: "C" },
                { code: "SPE 202", title: "Education of the Visually Impaired II", units: 3, type: "C" },
                { code: "SPE 204", title: "Education of the Hearing Impaired II", units: 3, type: "C" },
                { code: "SPE 206", title: "Education of the Intellectually Disabled II", units: 3, type: "C" },
                { code: "SPE 208", title: "Psychology of Exceptional Children", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Education II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "EDU 301", title: "Educational Technology I", units: 3, type: "C" },
                { code: "EDU 303", title: "Educational Measurement and Evaluation II", units: 3, type: "C" },
                { code: "SPE 301", title: "Education of the Physically Challenged", units: 3, type: "C" },
                { code: "SPE 303", title: "Education of the Gifted and Talented", units: 3, type: "C" },
                { code: "SPE 305", title: "Learning Disabilities", units: 3, type: "C" },
                { code: "SPE 307", title: "Braille and Orientation & Mobility", units: 3, type: "C" },
                { code: "SPE 309", title: "Sign Language and Total Communication", units: 3, type: "C" },
                { code: "SPE 311", title: "Research Methods in Special Education I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "EDU 302", title: "Educational Technology II", units: 3, type: "C" },
                { code: "SPE 302", title: "Behaviour Disorders and Emotional Disturbance", units: 3, type: "C" },
                { code: "SPE 304", title: "Speech and Language Disorders", units: 3, type: "C" },
                { code: "SPE 306", title: "Inclusive Education", units: 3, type: "C" },
                { code: "SPE 308", title: "Curriculum Adaptation for Special Needs", units: 3, type: "C" },
                { code: "SPE 310", title: "Assistive Technology in Special Education", units: 3, type: "C" },
                { code: "SPE 312", title: "Teaching Practice I (Micro-Teaching)", units: 3, type: "C" },
                { code: "SPE 314", title: "Research Methods in Special Education II", units: 2, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "SPE 401", title: "Advanced Methods in Special Education", units: 3, type: "C" },
                { code: "SPE 403", title: "Assessment and Diagnosis of Special Needs", units: 3, type: "C" },
                { code: "SPE 405", title: "Transition and Vocational Training for Special Needs", units: 3, type: "C" },
                { code: "SPE 407", title: "Autism Spectrum Disorders", units: 3, type: "E" },
                { code: "SPE 409", title: "Multiple Disabilities", units: 3, type: "E" },
                { code: "SPE 411", title: "Early Intervention Programs", units: 3, type: "E" },
                { code: "SPE 413", title: "Teaching Practice II (Field Experience)", units: 6, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "SPE 402", title: "Policy and Legislation in Special Education", units: 3, type: "C" },
                { code: "SPE 404", title: "Counselling for Special Needs Families", units: 3, type: "C" },
                { code: "SPE 406", title: "Community-Based Rehabilitation", units: 3, type: "C" },
                { code: "SPE 408", title: "Comparative Special Education", units: 3, type: "E" },
                { code: "SPE 410", title: "Therapeutic Interventions in Special Education", units: 3, type: "E" },
                { code: "SPE 412", title: "Special Education Seminar", units: 2, type: "C" },
                { code: "SPE 499", title: "Final Year Project (Research Project)", units: 6, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 11: PHYSICAL AND HEALTH EDUCATION
    // ======================================================
    {
      id: 511,
      name: "Physical and Health Education",
      code: "PHE",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "EDU 101", title: "Introduction to Education I", units: 3, type: "C" },
                { code: "EDU 103", title: "Introduction to Educational Psychology I", units: 3, type: "C" },
                { code: "PHE 101", title: "Introduction to Physical Education I", units: 3, type: "C" },
                { code: "PHE 103", title: "Introduction to Health Education I", units: 2, type: "C" },
                { code: "PHE 105", title: "Practical Sports I (Track Events)", units: 2, type: "C" },
                { code: "BIO 101", title: "General Biology I", units: 3, type: "R" },
                { code: "CHM 101", title: "General Chemistry I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "EDU 102", title: "Introduction to Education II", units: 3, type: "C" },
                { code: "EDU 104", title: "Introduction to Educational Psychology II", units: 3, type: "C" },
                { code: "PHE 102", title: "Introduction to Physical Education II", units: 3, type: "C" },
                { code: "PHE 104", title: "Introduction to Health Education II", units: 2, type: "C" },
                { code: "PHE 106", title: "Practical Sports II (Field Events)", units: 2, type: "C" },
                { code: "BIO 102", title: "General Biology II", units: 3, type: "R" },
                { code: "CHM 102", title: "General Chemistry II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "EDU 201", title: "Curriculum and Instruction I", units: 3, type: "C" },
                { code: "EDU 203", title: "Educational Psychology (Learning Theories)", units: 3, type: "C" },
                { code: "PHE 201", title: "Human Anatomy and Physiology I", units: 3, type: "C" },
                { code: "PHE 203", title: "Kinesiology and Biomechanics I", units: 3, type: "C" },
                { code: "PHE 205", title: "Theory and Practice of Team Sports I (Football, Basketball)", units: 3, type: "C" },
                { code: "PHE 207", title: "Foundations of Health Education", units: 3, type: "C" },
                { code: "PHE 209", title: "Practical Sports III (Gymnastics)", units: 2, type: "C" },
                { code: "STA 201", title: "Statistics for Education I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "EDU 202", title: "Curriculum and Instruction II", units: 3, type: "C" },
                { code: "EDU 204", title: "Educational Measurement and Evaluation I", units: 3, type: "C" },
                { code: "PHE 202", title: "Human Anatomy and Physiology II", units: 3, type: "C" },
                { code: "PHE 204", title: "Kinesiology and Biomechanics II", units: 3, type: "C" },
                { code: "PHE 206", title: "Theory and Practice of Team Sports II (Volleyball, Handball)", units: 3, type: "C" },
                { code: "PHE 208", title: "Nutrition and Health", units: 3, type: "C" },
                { code: "PHE 210", title: "Practical Sports IV (Swimming)", units: 2, type: "C" },
                { code: "STA 202", title: "Statistics for Education II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "EDU 301", title: "Educational Technology I", units: 3, type: "C" },
                { code: "EDU 303", title: "Educational Measurement and Evaluation II", units: 3, type: "C" },
                { code: "PHE 301", title: "Exercise Physiology I", units: 3, type: "C" },
                { code: "PHE 303", title: "Methods of Teaching Physical Education", units: 3, type: "C" },
                { code: "PHE 305", title: "Theory and Practice of Individual Sports (Tennis, Badminton)", units: 3, type: "C" },
                { code: "PHE 307", title: "Community Health I", units: 3, type: "C" },
                { code: "PHE 309", title: "Sports Psychology", units: 3, type: "C" },
                { code: "PHE 311", title: "Research Methods in Physical and Health Education I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "EDU 302", title: "Educational Technology II", units: 3, type: "C" },
                { code: "PHE 302", title: "Exercise Physiology II", units: 3, type: "C" },
                { code: "PHE 304", title: "Methods of Teaching Health Education", units: 3, type: "C" },
                { code: "PHE 306", title: "Theory and Practice of Combat Sports (Wrestling, Judo, Taekwondo)", units: 3, type: "C" },
                { code: "PHE 308", title: "Community Health II (Epidemiology)", units: 3, type: "C" },
                { code: "PHE 310", title: "First Aid and Safety Education", units: 3, type: "C" },
                { code: "PHE 312", title: "Teaching Practice I (Micro-Teaching)", units: 3, type: "C" },
                { code: "PHE 314", title: "Research Methods in Physical and Health Education II", units: 2, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "PHE 401", title: "Sports Administration and Management", units: 3, type: "C" },
                { code: "PHE 403", title: "Adapted Physical Education", units: 3, type: "C" },
                { code: "PHE 405", title: "Athletic Training and Sports Medicine", units: 3, type: "C" },
                { code: "PHE 407", title: "Fitness and Wellness", units: 3, type: "E" },
                { code: "PHE 409", title: "Recreation and Leisure Management", units: 3, type: "E" },
                { code: "PHE 411", title: "Drug Abuse and Health", units: 3, type: "E" },
                { code: "PHE 413", title: "Teaching Practice II (Field Experience)", units: 6, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "PHE 402", title: "Measurement and Evaluation in Physical Education", units: 3, type: "C" },
                { code: "PHE 404", title: "Environmental and School Health", units: 3, type: "C" },
                { code: "PHE 406", title: "Sports Officiating and Coaching", units: 3, type: "C" },
                { code: "PHE 408", title: "Reproductive and Sexual Health Education", units: 3, type: "E" },
                { code: "PHE 410", title: "Sports Tourism", units: 3, type: "E" },
                { code: "PHE 412", title: "Physical and Health Education Seminar", units: 2, type: "C" },
                { code: "PHE 499", title: "Final Year Project (Research Project)", units: 6, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 12: EARLY CHILDHOOD EDUCATION
    // ======================================================
    {
      id: 512,
      name: "Early Childhood Education",
      code: "ECE",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "EDU 101", title: "Introduction to Education I", units: 3, type: "C" },
                { code: "EDU 103", title: "Introduction to Educational Psychology I", units: 3, type: "C" },
                { code: "ECE 101", title: "Introduction to Early Childhood Education I", units: 3, type: "C" },
                { code: "ECE 103", title: "Foundations of Early Childhood Development", units: 2, type: "C" },
                { code: "PSY 101", title: "Introduction to Psychology I", units: 3, type: "R" },
                { code: "BIO 101", title: "General Biology I", units: 3, type: "R" },
                { code: "SOC 101", title: "Introduction to Sociology I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "EDU 102", title: "Introduction to Education II", units: 3, type: "C" },
                { code: "EDU 104", title: "Introduction to Educational Psychology II", units: 3, type: "C" },
                { code: "ECE 102", title: "Introduction to Early Childhood Education II", units: 3, type: "C" },
                { code: "ECE 104", title: "History and Philosophy of Early Childhood Education", units: 2, type: "C" },
                { code: "PSY 102", title: "Introduction to Psychology II", units: 3, type: "R" },
                { code: "BIO 102", title: "General Biology II", units: 3, type: "R" },
                { code: "SOC 102", title: "Introduction to Sociology II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "EDU 201", title: "Curriculum and Instruction I", units: 3, type: "C" },
                { code: "EDU 203", title: "Educational Psychology (Learning Theories)", units: 3, type: "C" },
                { code: "ECE 201", title: "Child Development I (Physical & Motor)", units: 3, type: "C" },
                { code: "ECE 203", title: "Play and Learning in Early Childhood", units: 3, type: "C" },
                { code: "ECE 205", title: "Language Development in Young Children", units: 3, type: "C" },
                { code: "ECE 207", title: "Early Childhood Health and Nutrition", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Education I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "EDU 202", title: "Curriculum and Instruction II", units: 3, type: "C" },
                { code: "EDU 204", title: "Educational Measurement and Evaluation I", units: 3, type: "C" },
                { code: "ECE 202", title: "Child Development II (Cognitive & Socio-Emotional)", units: 3, type: "C" },
                { code: "ECE 204", title: "Creative Arts in Early Childhood", units: 3, type: "C" },
                { code: "ECE 206", title: "Emergent Literacy and Numeracy", units: 3, type: "C" },
                { code: "ECE 208", title: "Guidance and Classroom Management in Early Childhood", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Education II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "EDU 301", title: "Educational Technology I", units: 3, type: "C" },
                { code: "EDU 303", title: "Educational Measurement and Evaluation II", units: 3, type: "C" },
                { code: "ECE 301", title: "Curriculum Development in Early Childhood Education", units: 3, type: "C" },
                { code: "ECE 303", title: "Methods of Teaching Young Children I (Pre-Primary)", units: 3, type: "C" },
                { code: "ECE 305", title: "Science and Mathematics for Young Children", units: 3, type: "C" },
                { code: "ECE 307", title: "Early Childhood Special Education", units: 3, type: "C" },
                { code: "ECE 309", title: "Research Methods in Early Childhood Education I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "EDU 302", title: "Educational Technology II", units: 3, type: "C" },
                { code: "ECE 302", title: "Methods of Teaching Young Children II (Lower Primary)", units: 3, type: "C" },
                { code: "ECE 304", title: "Instructional Materials and Resources for Young Children", units: 3, type: "C" },
                { code: "ECE 306", title: "Social Studies for Young Children", units: 3, type: "C" },
                { code: "ECE 308", title: "Parent and Community Involvement in ECE", units: 3, type: "C" },
                { code: "ECE 310", title: "Research Methods in Early Childhood Education II", units: 3, type: "C" },
                { code: "ECE 312", title: "Teaching Practice I (Micro-Teaching)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "ECE 401", title: "Advanced Methods in Early Childhood Teaching", units: 3, type: "C" },
                { code: "ECE 403", title: "Assessment in Early Childhood Education", units: 3, type: "C" },
                { code: "ECE 405", title: "Early Childhood Program Administration", units: 3, type: "C" },
                { code: "ECE 407", title: "Technology in Early Childhood Education", units: 3, type: "E" },
                { code: "ECE 409", title: "Montessori Method and Other Approaches", units: 3, type: "E" },
                { code: "ECE 411", title: "Early Intervention Programs", units: 3, type: "E" },
                { code: "ECE 413", title: "Teaching Practice II (Field Experience)", units: 6, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "ECE 402", title: "Early Childhood Education and National Development", units: 3, type: "C" },
                { code: "ECE 404", title: "Comparative Early Childhood Education", units: 3, type: "C" },
                { code: "ECE 406", title: "Child Advocacy and Rights", units: 3, type: "C" },
                { code: "ECE 408", title: "Bilingual and Multicultural Early Childhood Education", units: 3, type: "E" },
                { code: "ECE 410", title: "Quality Assurance in Early Childhood Settings", units: 3, type: "E" },
                { code: "ECE 412", title: "Early Childhood Education Seminar", units: 2, type: "C" },
                { code: "ECE 499", title: "Final Year Project (Research Project)", units: 6, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    }
  ] // end departments array
}, //ict


 [
  {
    id: 1,
    name: "Faculty of Engineering and Technology",
    code: "ENGR",
    duration: 5,
    departments: [

      // ======================================================
      // DEPARTMENT 1: CIVIL ENGINEERING
      // ======================================================
      {
        id: 101,
        name: "Civil Engineering",
        code: "CVE",
        duration: 5,
        levels: [
          {
            level: 100,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                  { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                  { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                  { code: "PHY 101", title: "General Physics I (Mechanics, Heat & Properties of Matter)", units: 3, type: "C" },
                  { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                  { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                  { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                  { code: "ENG 101", title: "Introduction to Engineering", units: 2, type: "C" },
                  { code: "ENG 103", title: "Engineering Drawing I", units: 2, type: "C" },
                  { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                  { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                  { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                  { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                  { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                  { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                  { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                  { code: "ENG 102", title: "Workshop Practice I", units: 2, type: "C" },
                  { code: "ENG 104", title: "Engineering Drawing II", units: 2, type: "C" },
                  { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                  { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 200,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                  { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
                  { code: "ENG 201", title: "Engineer in Society", units: 2, type: "C" },
                  { code: "MEE 201", title: "Engineering Mechanics I (Statics)", units: 3, type: "C" },
                  { code: "CVE 201", title: "Strength of Materials I", units: 3, type: "C" },
                  { code: "CVE 203", title: "Surveying I", units: 3, type: "C" },
                  { code: "CVE 205", title: "Civil Engineering Drawing", units: 2, type: "C" },
                  { code: "EEE 201", title: "Applied Electricity I", units: 2, type: "C" },
                  { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                  { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
                  { code: "ENG 202", title: "Workshop Practice II", units: 2, type: "C" },
                  { code: "MEE 202", title: "Engineering Mechanics II (Dynamics)", units: 3, type: "C" },
                  { code: "CVE 202", title: "Strength of Materials II", units: 3, type: "C" },
                  { code: "CVE 204", title: "Surveying II", units: 3, type: "C" },
                  { code: "CVE 206", title: "Introduction to Structural Engineering", units: 2, type: "C" },
                  { code: "EEE 202", title: "Applied Electricity II", units: 2, type: "C" },
                  { code: "CPT 201", title: "Computer Programming", units: 2, type: "C" },
                  { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 300,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                  { code: "MTH 301", title: "Engineering Mathematics III", units: 3, type: "C" },
                  { code: "CVE 301", title: "Structural Analysis I", units: 3, type: "C" },
                  { code: "CVE 303", title: "Fluid Mechanics I", units: 3, type: "C" },
                  { code: "CVE 305", title: "Geotechnical Engineering I (Soil Mechanics)", units: 3, type: "C" },
                  { code: "CVE 307", title: "Civil Engineering Materials", units: 3, type: "C" },
                  { code: "CVE 309", title: "Highway Engineering I", units: 3, type: "C" },
                  { code: "CVE 311", title: "Engineering Geology", units: 2, type: "C" },
                  { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                  { code: "CVE 302", title: "Structural Analysis II", units: 3, type: "C" },
                  { code: "CVE 304", title: "Fluid Mechanics II", units: 3, type: "C" },
                  { code: "CVE 306", title: "Geotechnical Engineering II", units: 3, type: "C" },
                  { code: "CVE 308", title: "Engineering Hydrology", units: 3, type: "C" },
                  { code: "CVE 310", title: "Highway Engineering II", units: 3, type: "C" },
                  { code: "CVE 312", title: "Structural Design I (Reinforced Concrete)", units: 3, type: "C" },
                  { code: "CVE 314", title: "Numerical Methods in Civil Engineering", units: 2, type: "C" },
                  { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 400,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "CVE 401", title: "Structural Design II (Steel Structures)", units: 3, type: "C" },
                  { code: "CVE 403", title: "Water Resources Engineering I", units: 3, type: "C" },
                  { code: "CVE 405", title: "Transportation Engineering", units: 3, type: "C" },
                  { code: "CVE 407", title: "Environmental Engineering I (Water Supply)", units: 3, type: "C" },
                  { code: "CVE 409", title: "Construction Management I", units: 3, type: "C" },
                  { code: "CVE 411", title: "Foundation Engineering", units: 3, type: "C" },
                  { code: "CVE 413", title: "Engineering Economics and Finance", units: 2, type: "C" },
                  { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "CVE 402", title: "Structural Design III (Timber & Masonry)", units: 3, type: "C" },
                  { code: "CVE 404", title: "Water Resources Engineering II", units: 3, type: "C" },
                  { code: "CVE 406", title: "Environmental Engineering II (Waste Management)", units: 3, type: "C" },
                  { code: "CVE 408", title: "Construction Management II", units: 3, type: "C" },
                  { code: "CVE 410", title: "Engineering Law and Ethics", units: 2, type: "C" },
                  { code: "CVE 400", title: "SIWES (Industrial Training)", units: 6, type: "C" },
                  { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 500,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "CVE 501", title: "Advanced Structural Analysis and Design", units: 3, type: "C" },
                  { code: "CVE 503", title: "Advanced Geotechnical Engineering", units: 3, type: "C" },
                  { code: "CVE 505", title: "Advanced Highway and Pavement Design", units: 3, type: "C" },
                  { code: "CVE 507", title: "Project Management and Evaluation", units: 3, type: "C" },
                  { code: "CVE 509", title: "Irrigation and Drainage Engineering", units: 3, type: "E" },
                  { code: "CVE 511", title: "Finite Element Methods in Engineering", units: 3, type: "E" },
                  { code: "CVE 599", title: "Final Year Project I", units: 3, type: "C" },
                  { code: "VTE 501", title: "Research Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "CVE 502", title: "Advanced Structural Design (Prestressed Concrete)", units: 3, type: "C" },
                  { code: "CVE 504", title: "Water and Wastewater Treatment", units: 3, type: "C" },
                  { code: "CVE 506", title: "Coastal and Harbour Engineering", units: 3, type: "E" },
                  { code: "CVE 508", title: "Traffic Engineering and Planning", units: 3, type: "E" },
                  { code: "CVE 510", title: "Civil Engineering Seminar", units: 2, type: "C" },
                  { code: "CVE 512", title: "Advanced Foundation Engineering", units: 3, type: "E" },
                  { code: "CVE 598", title: "Final Year Project II", units: 3, type: "C" },
                  { code: "VTE 503", title: "Seminar in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          }
        ]
      },

      // ======================================================
      // DEPARTMENT 2: MECHANICAL ENGINEERING
      // ======================================================
      {
        id: 102,
        name: "Mechanical Engineering",
        code: "MEE",
        duration: 5,
        levels: [
          {
            level: 100,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                  { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                  { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                  { code: "PHY 101", title: "General Physics I (Mechanics, Heat & Properties of Matter)", units: 3, type: "C" },
                  { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                  { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                  { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                  { code: "ENG 101", title: "Introduction to Engineering", units: 2, type: "C" },
                  { code: "ENG 103", title: "Engineering Drawing I", units: 2, type: "C" },
                  { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                  { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                  { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                  { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                  { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                  { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                  { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                  { code: "ENG 102", title: "Workshop Practice I", units: 2, type: "C" },
                  { code: "ENG 104", title: "Engineering Drawing II", units: 2, type: "C" },
                  { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                  { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 200,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                  { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
                  { code: "ENG 201", title: "Engineer in Society", units: 2, type: "C" },
                  { code: "MEE 201", title: "Engineering Mechanics I (Statics)", units: 3, type: "C" },
                  { code: "MEE 203", title: "Engineering Thermodynamics I", units: 3, type: "C" },
                  { code: "MEE 205", title: "Strength of Materials I", units: 3, type: "C" },
                  { code: "MEE 207", title: "Mechanical Engineering Drawing I", units: 2, type: "C" },
                  { code: "EEE 201", title: "Applied Electricity I", units: 2, type: "C" },
                  { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                  { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
                  { code: "ENG 202", title: "Workshop Practice II", units: 2, type: "C" },
                  { code: "MEE 202", title: "Engineering Mechanics II (Dynamics)", units: 3, type: "C" },
                  { code: "MEE 204", title: "Engineering Thermodynamics II", units: 3, type: "C" },
                  { code: "MEE 206", title: "Strength of Materials II", units: 3, type: "C" },
                  { code: "MEE 208", title: "Mechanical Engineering Drawing II", units: 2, type: "C" },
                  { code: "MEE 210", title: "Introduction to Materials Science", units: 2, type: "C" },
                  { code: "CPT 201", title: "Computer Programming", units: 2, type: "C" },
                  { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 300,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                  { code: "MTH 301", title: "Engineering Mathematics III", units: 3, type: "C" },
                  { code: "MEE 301", title: "Fluid Mechanics I", units: 3, type: "C" },
                  { code: "MEE 303", title: "Theory of Machines I (Kinematics)", units: 3, type: "C" },
                  { code: "MEE 305", title: "Manufacturing Technology I", units: 3, type: "C" },
                  { code: "MEE 307", title: "Engineering Metallurgy", units: 3, type: "C" },
                  { code: "MEE 309", title: "Mechanical Engineering Laboratory I", units: 2, type: "C" },
                  { code: "MEE 311", title: "Heat Transfer I", units: 3, type: "C" },
                  { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                  { code: "MEE 302", title: "Fluid Mechanics II", units: 3, type: "C" },
                  { code: "MEE 304", title: "Theory of Machines II (Dynamics of Machines)", units: 3, type: "C" },
                  { code: "MEE 306", title: "Manufacturing Technology II", units: 3, type: "C" },
                  { code: "MEE 308", title: "Machine Design I", units: 3, type: "C" },
                  { code: "MEE 310", title: "Mechanical Engineering Laboratory II", units: 2, type: "C" },
                  { code: "MEE 312", title: "Heat Transfer II", units: 3, type: "C" },
                  { code: "MEE 314", title: "Numerical Methods in Mechanical Engineering", units: 2, type: "C" },
                  { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 400,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "MEE 401", title: "Machine Design II", units: 3, type: "C" },
                  { code: "MEE 403", title: "Control Engineering I", units: 3, type: "C" },
                  { code: "MEE 405", title: "Internal Combustion Engines", units: 3, type: "C" },
                  { code: "MEE 407", title: "Turbomachinery", units: 3, type: "C" },
                  { code: "MEE 409", title: "Mechanical Vibrations", units: 3, type: "C" },
                  { code: "MEE 411", title: "Production Engineering", units: 3, type: "C" },
                  { code: "MEE 413", title: "Engineering Economics and Finance", units: 2, type: "C" },
                  { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "MEE 402", title: "Machine Design III (Advanced)", units: 3, type: "C" },
                  { code: "MEE 404", title: "Control Engineering II", units: 3, type: "C" },
                  { code: "MEE 406", title: "Refrigeration and Air Conditioning", units: 3, type: "C" },
                  { code: "MEE 408", title: "Power Plant Engineering", units: 3, type: "C" },
                  { code: "MEE 410", title: "Engineering Law and Ethics", units: 2, type: "C" },
                  { code: "MEE 400", title: "SIWES (Industrial Training)", units: 6, type: "C" },
                  { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 500,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "MEE 501", title: "Advanced Thermodynamics", units: 3, type: "C" },
                  { code: "MEE 503", title: "Advanced Fluid Mechanics", units: 3, type: "C" },
                  { code: "MEE 505", title: "Automobile Engineering", units: 3, type: "E" },
                  { code: "MEE 507", title: "Renewable Energy Engineering", units: 3, type: "E" },
                  { code: "MEE 509", title: "Computer Aided Design (CAD/CAM)", units: 3, type: "C" },
                  { code: "MEE 511", title: "Project Management", units: 3, type: "C" },
                  { code: "MEE 599", title: "Final Year Project I", units: 3, type: "C" },
                  { code: "VTE 501", title: "Research Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "MEE 502", title: "Advanced Machine Design", units: 3, type: "C" },
                  { code: "MEE 504", title: "Finite Element Analysis", units: 3, type: "E" },
                  { code: "MEE 506", title: "Mechatronics", units: 3, type: "E" },
                  { code: "MEE 508", title: "Industrial Management", units: 3, type: "C" },
                  { code: "MEE 510", title: "Mechanical Engineering Seminar", units: 2, type: "C" },
                  { code: "MEE 512", title: "Robotics and Automation", units: 3, type: "E" },
                  { code: "MEE 598", title: "Final Year Project II", units: 3, type: "C" },
                  { code: "VTE 503", title: "Seminar in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          }
        ]
      },

      // ======================================================
      // DEPARTMENT 3: ELECTRICAL AND ELECTRONICS ENGINEERING
      // ======================================================
      {
        id: 103,
        name: "Electrical and Electronics Engineering",
        code: "EEE",
        duration: 5,
        levels: [
          {
            level: 100,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                  { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                  { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                  { code: "PHY 101", title: "General Physics I (Mechanics, Heat & Properties of Matter)", units: 3, type: "C" },
                  { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                  { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                  { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                  { code: "ENG 101", title: "Introduction to Engineering", units: 2, type: "C" },
                  { code: "ENG 103", title: "Engineering Drawing I", units: 2, type: "C" },
                  { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                  { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                  { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                  { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                  { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                  { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                  { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                  { code: "ENG 102", title: "Workshop Practice I", units: 2, type: "C" },
                  { code: "ENG 104", title: "Engineering Drawing II", units: 2, type: "C" },
                  { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                  { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 200,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                  { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
                  { code: "ENG 201", title: "Engineer in Society", units: 2, type: "C" },
                  { code: "EEE 201", title: "Circuit Theory I", units: 3, type: "C" },
                  { code: "EEE 203", title: "Electronic Devices and Circuits I", units: 3, type: "C" },
                  { code: "EEE 205", title: "Electrical Engineering Materials", units: 2, type: "C" },
                  { code: "EEE 207", title: "Electromagnetic Fields and Waves I", units: 3, type: "C" },
                  { code: "EEE 209", title: "Electrical Engineering Drawing", units: 2, type: "C" },
                  { code: "MEE 201", title: "Engineering Mechanics I (Statics)", units: 3, type: "C" },
                  { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                  { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
                  { code: "ENG 202", title: "Workshop Practice II", units: 2, type: "C" },
                  { code: "EEE 202", title: "Circuit Theory II", units: 3, type: "C" },
                  { code: "EEE 204", title: "Electronic Devices and Circuits II", units: 3, type: "C" },
                  { code: "EEE 206", title: "Measurements and Instrumentation I", units: 3, type: "C" },
                  { code: "EEE 208", title: "Electromagnetic Fields and Waves II", units: 3, type: "C" },
                  { code: "CPT 201", title: "Computer Programming", units: 2, type: "C" },
                  { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 300,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                  { code: "MTH 301", title: "Engineering Mathematics III", units: 3, type: "C" },
                  { code: "EEE 301", title: "Network Analysis", units: 3, type: "C" },
                  { code: "EEE 303", title: "Analog Electronics I", units: 3, type: "C" },
                  { code: "EEE 305", title: "Electrical Machines I", units: 3, type: "C" },
                  { code: "EEE 307", title: "Digital Electronics I", units: 3, type: "C" },
                  { code: "EEE 309", title: "Signals and Systems I", units: 3, type: "C" },
                  { code: "EEE 311", title: "EEE Laboratory I", units: 2, type: "C" },
                  { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                  { code: "EEE 302", title: "Control Systems I", units: 3, type: "C" },
                  { code: "EEE 304", title: "Analog Electronics II", units: 3, type: "C" },
                  { code: "EEE 306", title: "Electrical Machines II", units: 3, type: "C" },
                  { code: "EEE 308", title: "Digital Electronics II", units: 3, type: "C" },
                  { code: "EEE 310", title: "Signals and Systems II", units: 3, type: "C" },
                  { code: "EEE 312", title: "EEE Laboratory II", units: 2, type: "C" },
                  { code: "EEE 314", title: "Numerical Methods in Engineering", units: 2, type: "C" },
                  { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 400,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "EEE 401", title: "Power Systems Analysis I", units: 3, type: "C" },
                  { code: "EEE 403", title: "Communication Systems I", units: 3, type: "C" },
                  { code: "EEE 405", title: "Control Systems II", units: 3, type: "C" },
                  { code: "EEE 407", title: "Microprocessors and Microcontrollers", units: 3, type: "C" },
                  { code: "EEE 409", title: "Power Electronics", units: 3, type: "C" },
                  { code: "EEE 411", title: "Measurements and Instrumentation II", units: 3, type: "C" },
                  { code: "EEE 413", title: "Engineering Economics and Finance", units: 2, type: "C" },
                  { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "EEE 402", title: "Power Systems Analysis II", units: 3, type: "C" },
                  { code: "EEE 404", title: "Communication Systems II", units: 3, type: "C" },
                  { code: "EEE 406", title: "Electrical Machine Design", units: 3, type: "C" },
                  { code: "EEE 408", title: "Antenna and Wave Propagation", units: 3, type: "C" },
                  { code: "EEE 410", title: "Engineering Law and Ethics", units: 2, type: "C" },
                  { code: "EEE 400", title: "SIWES (Industrial Training)", units: 6, type: "C" },
                  { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 500,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "EEE 501", title: "Power Systems Protection and Switchgear", units: 3, type: "C" },
                  { code: "EEE 503", title: "Digital Signal Processing", units: 3, type: "C" },
                  { code: "EEE 505", title: "High Voltage Engineering", units: 3, type: "E" },
                  { code: "EEE 507", title: "Telecommunication Networks", units: 3, type: "E" },
                  { code: "EEE 509", title: "Computer Networks and Security", units: 3, type: "E" },
                  { code: "EEE 511", title: "Project Management", units: 3, type: "C" },
                  { code: "EEE 599", title: "Final Year Project I", units: 3, type: "C" },
                  { code: "VTE 501", title: "Research Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "EEE 502", title: "Power Systems Planning and Economics", units: 3, type: "C" },
                  { code: "EEE 504", title: "Advanced Communication Engineering", units: 3, type: "E" },
                  { code: "EEE 506", title: "Renewable Energy Systems", units: 3, type: "E" },
                  { code: "EEE 508", title: "Industrial Drives and Automation", units: 3, type: "E" },
                  { code: "EEE 510", title: "Electrical Engineering Seminar", units: 2, type: "C" },
                  { code: "EEE 512", title: "Advanced Control Systems", units: 3, type: "E" },
                  { code: "EEE 598", title: "Final Year Project II", units: 3, type: "C" },
                  { code: "VTE 503", title: "Seminar in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          }
        ]
      },

      // ======================================================
      // DEPARTMENT 4: COMPUTER ENGINEERING
      // ======================================================
      {
        id: 104,
        name: "Computer Engineering",
        code: "CPE",
        duration: 5,
        levels: [
          {
            level: 100,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                  { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                  { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                  { code: "PHY 101", title: "General Physics I (Mechanics, Heat & Properties of Matter)", units: 3, type: "C" },
                  { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                  { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                  { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                  { code: "ENG 101", title: "Introduction to Engineering", units: 2, type: "C" },
                  { code: "ENG 103", title: "Engineering Drawing I", units: 2, type: "C" },
                  { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                  { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                  { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                  { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                  { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                  { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                  { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                  { code: "ENG 102", title: "Workshop Practice I", units: 2, type: "C" },
                  { code: "ENG 104", title: "Engineering Drawing II", units: 2, type: "C" },
                  { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                  { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 200,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                  { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
                  { code: "ENG 201", title: "Engineer in Society", units: 2, type: "C" },
                  { code: "CPE 201", title: "Introduction to Computer Engineering", units: 3, type: "C" },
                  { code: "CPE 203", title: "Structured Programming (C/C++)", units: 3, type: "C" },
                  { code: "CPE 205", title: "Digital Logic Design I", units: 3, type: "C" },
                  { code: "EEE 201", title: "Circuit Theory I", units: 3, type: "C" },
                  { code: "EEE 203", title: "Electronic Devices and Circuits I", units: 3, type: "C" },
                  { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                  { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
                  { code: "ENG 202", title: "Workshop Practice II", units: 2, type: "C" },
                  { code: "CPE 202", title: "Object Oriented Programming (Java)", units: 3, type: "C" },
                  { code: "CPE 204", title: "Digital Logic Design II", units: 3, type: "C" },
                  { code: "CPE 206", title: "Data Structures and Algorithms", units: 3, type: "C" },
                  { code: "EEE 202", title: "Circuit Theory II", units: 3, type: "C" },
                  { code: "EEE 204", title: "Electronic Devices and Circuits II", units: 3, type: "C" },
                  { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 300,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                  { code: "MTH 301", title: "Engineering Mathematics III", units: 3, type: "C" },
                  { code: "CPE 301", title: "Computer Architecture and Organization I", units: 3, type: "C" },
                  { code: "CPE 303", title: "Microprocessors and Assembly Language", units: 3, type: "C" },
                  { code: "CPE 305", title: "Operating Systems I", units: 3, type: "C" },
                  { code: "CPE 307", title: "Database Systems", units: 3, type: "C" },
                  { code: "CPE 309", title: "Signals and Systems", units: 3, type: "C" },
                  { code: "CPE 311", title: "Computer Engineering Laboratory I", units: 2, type: "C" },
                  { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                  { code: "CPE 302", title: "Computer Architecture and Organization II", units: 3, type: "C" },
                  { code: "CPE 304", title: "Microcontrollers and Embedded Systems", units: 3, type: "C" },
                  { code: "CPE 306", title: "Operating Systems II", units: 3, type: "C" },
                  { code: "CPE 308", title: "Computer Networks I", units: 3, type: "C" },
                  { code: "CPE 310", title: "Software Engineering I", units: 3, type: "C" },
                  { code: "CPE 312", title: "Computer Engineering Laboratory II", units: 2, type: "C" },
                  { code: "CPE 314", title: "Numerical Methods in Engineering", units: 2, type: "C" },
                  { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 400,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "CPE 401", title: "Computer Networks II", units: 3, type: "C" },
                  { code: "CPE 403", title: "Software Engineering II", units: 3, type: "C" },
                  { code: "CPE 405", title: "Digital Signal Processing", units: 3, type: "C" },
                  { code: "CPE 407", title: "VLSI Design", units: 3, type: "C" },
                  { code: "CPE 409", title: "Interfacing and Hardware Design", units: 3, type: "C" },
                  { code: "CPE 411", title: "Web Engineering", units: 3, type: "C" },
                  { code: "CPE 413", title: "Engineering Economics and Finance", units: 2, type: "C" },
                  { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "CPE 402", title: "Computer Security and Cryptography", units: 3, type: "C" },
                  { code: "CPE 404", title: "Real-Time and Embedded Systems", units: 3, type: "C" },
                  { code: "CPE 406", title: "Artificial Intelligence", units: 3, type: "C" },
                  { code: "CPE 408", title: "Mobile and Wireless Computing", units: 3, type: "C" },
                  { code: "CPE 410", title: "Engineering Law and Ethics", units: 2, type: "C" },
                  { code: "CPE 400", title: "SIWES (Industrial Training)", units: 6, type: "C" },
                  { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 500,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "CPE 501", title: "Advanced Computer Architecture", units: 3, type: "C" },
                  { code: "CPE 503", title: "Machine Learning and Pattern Recognition", units: 3, type: "C" },
                  { code: "CPE 505", title: "Cloud Computing and Distributed Systems", units: 3, type: "E" },
                  { code: "CPE 507", title: "Internet of Things (IoT)", units: 3, type: "E" },
                  { code: "CPE 509", title: "Robotics and Automation", units: 3, type: "E" },
                  { code: "CPE 511", title: "Project Management", units: 3, type: "C" },
                  { code: "CPE 599", title: "Final Year Project I", units: 3, type: "C" },
                  { code: "VTE 501", title: "Research Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "CPE 502", title: "Advanced Network Security", units: 3, type: "C" },
                  { code: "CPE 504", title: "Digital Image Processing", units: 3, type: "E" },
                  { code: "CPE 506", title: "FPGA Design and Applications", units: 3, type: "E" },
                  { code: "CPE 508", title: "Parallel and High Performance Computing", units: 3, type: "E" },
                  { code: "CPE 510", title: "Computer Engineering Seminar", units: 2, type: "C" },
                  { code: "CPE 512", title: "Big Data Engineering", units: 3, type: "E" },
                  { code: "CPE 598", title: "Final Year Project II", units: 3, type: "C" },
                  { code: "VTE 503", title: "Seminar in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          }
        ]
      },

      // ======================================================
      // DEPARTMENT 5: CHEMICAL ENGINEERING
      // ======================================================
      {
        id: 105,
        name: "Chemical Engineering",
        code: "CHE",
        duration: 5,
        levels: [
          {
            level: 100,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                  { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                  { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                  { code: "PHY 101", title: "General Physics I (Mechanics, Heat & Properties of Matter)", units: 3, type: "C" },
                  { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                  { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                  { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                  { code: "ENG 101", title: "Introduction to Engineering", units: 2, type: "C" },
                  { code: "ENG 103", title: "Engineering Drawing I", units: 2, type: "C" },
                  { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                  { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                  { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                  { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                  { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                  { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                  { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                  { code: "ENG 102", title: "Workshop Practice I", units: 2, type: "C" },
                  { code: "ENG 104", title: "Engineering Drawing II", units: 2, type: "C" },
                  { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                  { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 200,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                  { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
                  { code: "ENG 201", title: "Engineer in Society", units: 2, type: "C" },
                  { code: "CHE 201", title: "Introduction to Chemical Engineering", units: 3, type: "C" },
                  { code: "CHE 203", title: "Material and Energy Balances I", units: 3, type: "C" },
                  { code: "CHE 205", title: "Chemical Engineering Thermodynamics I", units: 3, type: "C" },
                  { code: "CHM 201", title: "Organic Chemistry I", units: 3, type: "C" },
                  { code: "CHM 203", title: "Physical Chemistry I", units: 3, type: "C" },
                  { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                  { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
                  { code: "ENG 202", title: "Workshop Practice II", units: 2, type: "C" },
                  { code: "CHE 202", title: "Material and Energy Balances II", units: 3, type: "C" },
                  { code: "CHE 204", title: "Chemical Engineering Thermodynamics II", units: 3, type: "C" },
                  { code: "CHE 206", title: "Chemical Engineering Drawing", units: 2, type: "C" },
                  { code: "CHM 202", title: "Organic Chemistry II", units: 3, type: "C" },
                  { code: "CHM 204", title: "Physical Chemistry II", units: 3, type: "C" },
                  { code: "CPT 201", title: "Computer Programming", units: 2, type: "C" },
                  { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 300,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                  { code: "MTH 301", title: "Engineering Mathematics III", units: 3, type: "C" },
                  { code: "CHE 301", title: "Fluid Flow Operations", units: 3, type: "C" },
                  { code: "CHE 303", title: "Heat Transfer Operations", units: 3, type: "C" },
                  { code: "CHE 305", title: "Chemical Reaction Engineering I", units: 3, type: "C" },
                  { code: "CHE 307", title: "Mass Transfer Operations I", units: 3, type: "C" },
                  { code: "CHE 309", title: "Chemical Engineering Laboratory I", units: 2, type: "C" },
                  { code: "CHE 311", title: "Polymer Science and Technology", units: 3, type: "C" },
                  { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                  { code: "CHE 302", title: "Mass Transfer Operations II", units: 3, type: "C" },
                  { code: "CHE 304", title: "Chemical Reaction Engineering II", units: 3, type: "C" },
                  { code: "CHE 306", title: "Process Dynamics and Control I", units: 3, type: "C" },
                  { code: "CHE 308", title: "Chemical Engineering Laboratory II", units: 2, type: "C" },
                  { code: "CHE 310", title: "Mechanical Separation Processes", units: 3, type: "C" },
                  { code: "CHE 312", title: "Industrial Chemistry", units: 3, type: "C" },
                  { code: "CHE 314", title: "Numerical Methods in Chemical Engineering", units: 2, type: "C" },
                  { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 400,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "CHE 401", title: "Process Design and Simulation I", units: 3, type: "C" },
                  { code: "CHE 403", title: "Process Dynamics and Control II", units: 3, type: "C" },
                  { code: "CHE 405", title: "Petroleum Refining Engineering", units: 3, type: "C" },
                  { code: "CHE 407", title: "Biochemical Engineering", units: 3, type: "C" },
                  { code: "CHE 409", title: "Corrosion Engineering", units: 3, type: "C" },
                  { code: "CHE 411", title: "Environmental Engineering for Chemical Engineers", units: 3, type: "C" },
                  { code: "CHE 413", title: "Engineering Economics and Finance", units: 2, type: "C" },
                  { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "CHE 402", title: "Process Design and Simulation II", units: 3, type: "C" },
                  { code: "CHE 404", title: "Plant Design and Economics", units: 3, type: "C" },
                  { code: "CHE 406", title: "Petrochemical Engineering", units: 3, type: "C" },
                  { code: "CHE 408", title: "Safety and Loss Prevention in Industry", units: 3, type: "C" },
                  { code: "CHE 410", title: "Engineering Law and Ethics", units: 2, type: "C" },
                  { code: "CHE 400", title: "SIWES (Industrial Training)", units: 6, type: "C" },
                  { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 500,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "CHE 501", title: "Advanced Chemical Reaction Engineering", units: 3, type: "C" },
                  { code: "CHE 503", title: "Advanced Transport Phenomena", units: 3, type: "C" },
                  { code: "CHE 505", title: "Natural Gas Processing", units: 3, type: "E" },
                  { code: "CHE 507", title: "Food Process Engineering", units: 3, type: "E" },
                  { code: "CHE 509", title: "Optimization of Chemical Processes", units: 3, type: "C" },
                  { code: "CHE 511", title: "Project Management", units: 3, type: "C" },
                  { code: "CHE 599", title: "Final Year Project I", units: 3, type: "C" },
                  { code: "VTE 501", title: "Research Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "CHE 502", title: "Advanced Process Control", units: 3, type: "C" },
                  { code: "CHE 504", title: "Catalysis and Catalytic Processes", units: 3, type: "E" },
                  { code: "CHE 506", title: "Nanotechnology for Chemical Engineers", units: 3, type: "E" },
                  { code: "CHE 508", title: "Pharmaceutical Engineering", units: 3, type: "E" },
                  { code: "CHE 510", title: "Chemical Engineering Seminar", units: 2, type: "C" },
                  { code: "CHE 512", title: "Renewable Energy and Sustainability", units: 3, type: "E" },
                  { code: "CHE 598", title: "Final Year Project II", units: 3, type: "C" },
                  { code: "VTE 503", title: "Seminar in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          }
        ]
      },

      // ======================================================
      // DEPARTMENT 6: AGRICULTURAL AND BIOSYSTEMS ENGINEERING
      // ======================================================
      {
        id: 106,
        name: "Agricultural and Biosystems Engineering",
        code: "ABE",
        duration: 5,
        levels: [
          {
            level: 100,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                  { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                  { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                  { code: "PHY 101", title: "General Physics I (Mechanics, Heat & Properties of Matter)", units: 3, type: "C" },
                  { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                  { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                  { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                  { code: "ENG 101", title: "Introduction to Engineering", units: 2, type: "C" },
                  { code: "ENG 103", title: "Engineering Drawing I", units: 2, type: "C" },
                  { code: "BIO 101", title: "General Biology I", units: 3, type: "C" },
                  { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                  { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                  { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                  { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                  { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                  { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                  { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                  { code: "ENG 102", title: "Workshop Practice I", units: 2, type: "C" },
                  { code: "ENG 104", title: "Engineering Drawing II", units: 2, type: "C" },
                  { code: "BIO 102", title: "General Biology II", units: 3, type: "C" },
                  { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                  { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 200,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                  { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
                  { code: "ENG 201", title: "Engineer in Society", units: 2, type: "C" },
                  { code: "ABE 201", title: "Introduction to Agricultural Engineering", units: 3, type: "C" },
                  { code: "ABE 203", title: "Agricultural Surveying", units: 3, type: "C" },
                  { code: "ABE 205", title: "Workshop Technology and Practice", units: 2, type: "C" },
                  { code: "MEE 201", title: "Engineering Mechanics I (Statics)", units: 3, type: "C" },
                  { code: "EEE 201", title: "Applied Electricity I", units: 2, type: "C" },
                  { code: "SOS 201", title: "Introduction to Soil Science", units: 3, type: "C" },
                  { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                  { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
                  { code: "ENG 202", title: "Workshop Practice II", units: 2, type: "C" },
                  { code: "ABE 202", title: "Engineering Properties of Biological Materials", units: 3, type: "C" },
                  { code: "ABE 204", title: "Strength of Materials for Agricultural Engineers", units: 3, type: "C" },
                  { code: "ABE 206", title: "Agricultural Engineering Drawing", units: 2, type: "C" },
                  { code: "MEE 202", title: "Engineering Mechanics II (Dynamics)", units: 3, type: "C" },
                  { code: "CPS 201", title: "Introduction to Crop Science", units: 3, type: "C" },
                  { code: "CPT 201", title: "Computer Programming", units: 2, type: "C" },
                  { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 300,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                  { code: "MTH 301", title: "Engineering Mathematics III", units: 3, type: "C" },
                  { code: "ABE 301", title: "Soil and Water Conservation Engineering", units: 3, type: "C" },
                  { code: "ABE 303", title: "Farm Power and Machinery I", units: 3, type: "C" },
                  { code: "ABE 305", title: "Fluid Mechanics for Agricultural Engineers", units: 3, type: "C" },
                  { code: "ABE 307", title: "Agricultural Structures I", units: 3, type: "C" },
                  { code: "ABE 309", title: "Agricultural Processing Engineering I", units: 3, type: "C" },
                  { code: "ABE 311", title: "Agricultural Engineering Laboratory I", units: 2, type: "C" },
                  { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                  { code: "ABE 302", title: "Irrigation and Drainage Engineering I", units: 3, type: "C" },
                  { code: "ABE 304", title: "Farm Power and Machinery II", units: 3, type: "C" },
                  { code: "ABE 306", title: "Hydrology for Agricultural Engineers", units: 3, type: "C" },
                  { code: "ABE 308", title: "Agricultural Structures II", units: 3, type: "C" },
                  { code: "ABE 310", title: "Agricultural Processing Engineering II", units: 3, type: "C" },
                  { code: "ABE 312", title: "Agricultural Engineering Laboratory II", units: 2, type: "C" },
                  { code: "ABE 314", title: "Numerical Methods in Agricultural Engineering", units: 2, type: "C" },
                  { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 400,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "ABE 401", title: "Irrigation and Drainage Engineering II", units: 3, type: "C" },
                  { code: "ABE 403", title: "Farm Electrification and Renewable Energy", units: 3, type: "C" },
                  { code: "ABE 405", title: "Agricultural Waste Management", units: 3, type: "C" },
                  { code: "ABE 407", title: "Food Engineering I", units: 3, type: "C" },
                  { code: "ABE 409", title: "Tractor Systems and Design", units: 3, type: "C" },
                  { code: "ABE 411", title: "Agricultural Land Development", units: 3, type: "C" },
                  { code: "ABE 413", title: "Engineering Economics and Finance", units: 2, type: "C" },
                  { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "ABE 402", title: "Groundwater and Well Engineering", units: 3, type: "C" },
                  { code: "ABE 404", title: "Aquaculture Engineering", units: 3, type: "C" },
                  { code: "ABE 406", title: "Food Engineering II", units: 3, type: "C" },
                  { code: "ABE 408", title: "Farm Machinery Design", units: 3, type: "C" },
                  { code: "ABE 410", title: "Engineering Law and Ethics", units: 2, type: "C" },
                  { code: "ABE 400", title: "SIWES (Industrial Training)", units: 6, type: "C" },
                  { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 500,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "ABE 501", title: "Advanced Irrigation Engineering", units: 3, type: "C" },
                  { code: "ABE 503", title: "Advanced Farm Structures", units: 3, type: "C" },
                  { code: "ABE 505", title: "Biosystems Modelling and Simulation", units: 3, type: "E" },
                  { code: "ABE 507", title: "Precision Agriculture", units: 3, type: "E" },
                  { code: "ABE 509", title: "Environmental Impact Assessment", units: 3, type: "C" },
                  { code: "ABE 511", title: "Project Management", units: 3, type: "C" },
                  { code: "ABE 599", title: "Final Year Project I", units: 3, type: "C" },
                  { code: "VTE 501", title: "Research Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "ABE 502", title: "Post-Harvest Engineering", units: 3, type: "C" },
                  { code: "ABE 504", title: "Bioenergy Engineering", units: 3, type: "E" },
                  { code: "ABE 506", title: "Greenhouse and Controlled Environment Engineering", units: 3, type: "E" },
                  { code: "ABE 508", title: "Watershed Management", units: 3, type: "E" },
                  { code: "ABE 510", title: "Agricultural Engineering Seminar", units: 2, type: "C" },
                  { code: "ABE 512", title: "Rural Infrastructure Engineering", units: 3, type: "E" },
                  { code: "ABE 598", title: "Final Year Project II", units: 3, type: "C" },
                  { code: "VTE 503", title: "Seminar in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          }
        ]
      },

      // ======================================================
      // DEPARTMENT 7: BIOMEDICAL ENGINEERING
      // ======================================================
      {
        id: 107,
        name: "Biomedical Engineering",
        code: "BME",
        duration: 5,
        levels: [
          {
            level: 100,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                  { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                  { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                  { code: "PHY 101", title: "General Physics I (Mechanics, Heat & Properties of Matter)", units: 3, type: "C" },
                  { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                  { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                  { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                  { code: "BIO 101", title: "General Biology I", units: 3, type: "C" },
                  { code: "ENG 101", title: "Introduction to Engineering", units: 2, type: "C" },
                  { code: "ENG 103", title: "Engineering Drawing I", units: 2, type: "C" },
                  { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                  { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                  { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                  { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                  { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                  { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                  { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                  { code: "BIO 102", title: "General Biology II", units: 3, type: "C" },
                  { code: "ENG 102", title: "Workshop Practice I", units: 2, type: "C" },
                  { code: "ENG 104", title: "Engineering Drawing II", units: 2, type: "C" },
                  { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                  { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 200,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                  { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
                  { code: "ENG 201", title: "Engineer in Society", units: 2, type: "C" },
                  { code: "BME 201", title: "Introduction to Biomedical Engineering", units: 3, type: "C" },
                  { code: "BME 203", title: "Human Anatomy and Physiology I", units: 3, type: "C" },
                  { code: "BME 205", title: "Biomechanics I", units: 3, type: "C" },
                  { code: "EEE 201", title: "Circuit Theory I", units: 3, type: "C" },
                  { code: "EEE 203", title: "Electronic Devices and Circuits I", units: 3, type: "C" },
                  { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                  { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
                  { code: "ENG 202", title: "Workshop Practice II", units: 2, type: "C" },
                  { code: "BME 202", title: "Human Anatomy and Physiology II", units: 3, type: "C" },
                  { code: "BME 204", title: "Biomechanics II", units: 3, type: "C" },
                  { code: "BME 206", title: "Biochemistry for Engineers", units: 3, type: "C" },
                  { code: "EEE 202", title: "Circuit Theory II", units: 3, type: "C" },
                  { code: "CPT 201", title: "Computer Programming", units: 2, type: "C" },
                  { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 300,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                  { code: "MTH 301", title: "Engineering Mathematics III", units: 3, type: "C" },
                  { code: "BME 301", title: "Biomedical Instrumentation I", units: 3, type: "C" },
                  { code: "BME 303", title: "Biomaterials Engineering", units: 3, type: "C" },
                  { code: "BME 305", title: "Bioelectricity and Biomagnetism", units: 3, type: "C" },
                  { code: "BME 307", title: "Bioinformatics", units: 3, type: "C" },
                  { code: "BME 309", title: "Transport Phenomena in Biomedical Engineering", units: 3, type: "C" },
                  { code: "BME 311", title: "Biomedical Engineering Laboratory I", units: 2, type: "C" },
                  { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                  { code: "BME 302", title: "Biomedical Instrumentation II", units: 3, type: "C" },
                  { code: "BME 304", title: "Biofluid Mechanics", units: 3, type: "C" },
                  { code: "BME 306", title: "Medical Imaging I", units: 3, type: "C" },
                  { code: "BME 308", title: "Biosignal Processing", units: 3, type: "C" },
                  { code: "BME 310", title: "Cell and Tissue Engineering", units: 3, type: "C" },
                  { code: "BME 312", title: "Biomedical Engineering Laboratory II", units: 2, type: "C" },
                  { code: "BME 314", title: "Numerical Methods in Biomedical Engineering", units: 2, type: "C" },
                  { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 400,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "BME 401", title: "Medical Imaging II (Advanced)", units: 3, type: "C" },
                  { code: "BME 403", title: "Biomedical Equipment Design", units: 3, type: "C" },
                  { code: "BME 405", title: "Rehabilitation Engineering", units: 3, type: "C" },
                  { code: "BME 407", title: "Orthopaedic Biomechanics", units: 3, type: "C" },
                  { code: "BME 409", title: "Hospital Engineering and Management", units: 3, type: "C" },
                  { code: "BME 411", title: "Biomedical Control Systems", units: 3, type: "C" },
                  { code: "BME 413", title: "Engineering Economics and Finance", units: 2, type: "C" },
                  { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "BME 402", title: "Prosthetics and Artificial Organs", units: 3, type: "C" },
                  { code: "BME 404", title: "Clinical Engineering", units: 3, type: "C" },
                  { code: "BME 406", title: "Biomedical Signal Analysis", units: 3, type: "C" },
                  { code: "BME 408", title: "Biomedical Equipment Maintenance", units: 3, type: "C" },
                  { code: "BME 410", title: "Engineering Law and Ethics", units: 2, type: "C" },
                  { code: "BME 400", title: "SIWES (Industrial Training)", units: 6, type: "C" },
                  { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 500,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "BME 501", title: "Advanced Biomaterials and Implant Design", units: 3, type: "C" },
                  { code: "BME 503", title: "Medical Robotics", units: 3, type: "E" },
                  { code: "BME 505", title: "Computational Biomedical Engineering", units: 3, type: "E" },
                  { code: "BME 507", title: "Neural Engineering", units: 3, type: "E" },
                  { code: "BME 509", title: "Biomedical Nanotechnology", units: 3, type: "E" },
                  { code: "BME 511", title: "Project Management", units: 3, type: "C" },
                  { code: "BME 599", title: "Final Year Project I", units: 3, type: "C" },
                  { code: "VTE 501", title: "Research Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "BME 502", title: "Advanced Medical Imaging Systems", units: 3, type: "C" },
                  { code: "BME 504", title: "Telemedicine and Health Informatics", units: 3, type: "E" },
                  { code: "BME 506", title: "Pharmaceutical Engineering", units: 3, type: "E" },
                  { code: "BME 508", title: "Cardiovascular Engineering", units: 3, type: "E" },
                  { code: "BME 510", title: "Biomedical Engineering Seminar", units: 2, type: "C" },
                  { code: "BME 512", title: "Tissue and Genetic Engineering", units: 3, type: "E" },
                  { code: "BME 598", title: "Final Year Project II", units: 3, type: "C" },
                  { code: "VTE 503", title: "Seminar in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          }
        ]
      },

      // ======================================================
      // DEPARTMENT 8: MATERIALS AND METALLURGICAL ENGINEERING
      // ======================================================
      {
        id: 108,
        name: "Materials and Metallurgical Engineering",
        code: "MTE",
        duration: 5,
        levels: [
          {
            level: 100,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                  { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                  { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                  { code: "PHY 101", title: "General Physics I (Mechanics, Heat & Properties of Matter)", units: 3, type: "C" },
                  { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                  { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                  { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                  { code: "ENG 101", title: "Introduction to Engineering", units: 2, type: "C" },
                  { code: "ENG 103", title: "Engineering Drawing I", units: 2, type: "C" },
                  { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                  { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                  { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                  { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                  { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                  { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                  { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                  { code: "ENG 102", title: "Workshop Practice I", units: 2, type: "C" },
                  { code: "ENG 104", title: "Engineering Drawing II", units: 2, type: "C" },
                  { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                  { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 200,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                  { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
                  { code: "ENG 201", title: "Engineer in Society", units: 2, type: "C" },
                  { code: "MTE 201", title: "Introduction to Materials Science", units: 3, type: "C" },
                  { code: "MTE 203", title: "Physical Metallurgy I", units: 3, type: "C" },
                  { code: "MTE 205", title: "Engineering Crystallography", units: 3, type: "C" },
                  { code: "MEE 201", title: "Engineering Mechanics I (Statics)", units: 3, type: "C" },
                  { code: "CHM 201", title: "Organic Chemistry I", units: 3, type: "C" },
                  { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                  { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
                  { code: "ENG 202", title: "Workshop Practice II", units: 2, type: "C" },
                  { code: "MTE 202", title: "Physical Metallurgy II", units: 3, type: "C" },
                  { code: "MTE 204", title: "Thermodynamics of Materials", units: 3, type: "C" },
                  { code: "MTE 206", title: "Materials Engineering Drawing", units: 2, type: "C" },
                  { code: "MEE 202", title: "Engineering Mechanics II (Dynamics)", units: 3, type: "C" },
                  { code: "EEE 201", title: "Applied Electricity I", units: 2, type: "C" },
                  { code: "CPT 201", title: "Computer Programming", units: 2, type: "C" },
                  { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 300,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                  { code: "MTH 301", title: "Engineering Mathematics III", units: 3, type: "C" },
                  { code: "MTE 301", title: "Extractive Metallurgy I (Iron and Steel)", units: 3, type: "C" },
                  { code: "MTE 303", title: "Mechanical Metallurgy I", units: 3, type: "C" },
                  { code: "MTE 305", title: "Phase Transformations", units: 3, type: "C" },
                  { code: "MTE 307", title: "Foundry Technology I", units: 3, type: "C" },
                  { code: "MTE 309", title: "Materials Characterization Techniques", units: 3, type: "C" },
                  { code: "MTE 311", title: "Materials Engineering Laboratory I", units: 2, type: "C" },
                  { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                  { code: "MTE 302", title: "Extractive Metallurgy II (Non-Ferrous)", units: 3, type: "C" },
                  { code: "MTE 304", title: "Mechanical Metallurgy II", units: 3, type: "C" },
                  { code: "MTE 306", title: "Corrosion Science and Engineering", units: 3, type: "C" },
                  { code: "MTE 308", title: "Foundry Technology II", units: 3, type: "C" },
                  { code: "MTE 310", title: "Welding and Joining Technology", units: 3, type: "C" },
                  { code: "MTE 312", title: "Materials Engineering Laboratory II", units: 2, type: "C" },
                  { code: "MTE 314", title: "Numerical Methods in Materials Engineering", units: 2, type: "C" },
                  { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 400,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "MTE 401", title: "Ceramic Materials and Processing", units: 3, type: "C" },
                  { code: "MTE 403", title: "Polymer Engineering", units: 3, type: "C" },
                  { code: "MTE 405", title: "Heat Treatment of Metals", units: 3, type: "C" },
                  { code: "MTE 407", title: "Non-Destructive Testing", units: 3, type: "C" },
                  { code: "MTE 409", title: "Mineral Processing", units: 3, type: "C" },
                  { code: "MTE 411", title: "Materials Selection and Design", units: 3, type: "C" },
                  { code: "MTE 413", title: "Engineering Economics and Finance", units: 2, type: "C" },
                  { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "MTE 402", title: "Composite Materials", units: 3, type: "C" },
                  { code: "MTE 404", title: "Powder Metallurgy", units: 3, type: "C" },
                  { code: "MTE 406", title: "Failure Analysis", units: 3, type: "C" },
                  { code: "MTE 408", title: "Electrometallurgy", units: 3, type: "C" },
                  { code: "MTE 410", title: "Engineering Law and Ethics", units: 2, type: "C" },
                  { code: "MTE 400", title: "SIWES (Industrial Training)", units: 6, type: "C" },
                  { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 500,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "MTE 501", title: "Advanced Materials Engineering", units: 3, type: "C" },
                  { code: "MTE 503", title: "Nanomaterials and Nanotechnology", units: 3, type: "E" },
                  { code: "MTE 505", title: "Biomaterials", units: 3, type: "E" },
                  { code: "MTE 507", title: "Electronic and Magnetic Materials", units: 3, type: "E" },
                  { code: "MTE 509", title: "Advanced Corrosion Engineering", units: 3, type: "C" },
                  { code: "MTE 511", title: "Project Management", units: 3, type: "C" },
                  { code: "MTE 599", title: "Final Year Project I", units: 3, type: "C" },
                  { code: "VTE 501", title: "Research Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "MTE 502", title: "Advanced Ceramic Engineering", units: 3, type: "E" },
                  { code: "MTE 504", title: "Surface Engineering and Coatings", units: 3, type: "E" },
                  { code: "MTE 506", title: "Computational Materials Science", units: 3, type: "E" },
                  { code: "MTE 508", title: "Advanced Polymer Engineering", units: 3, type: "E" },
                  { code: "MTE 510", title: "Materials Engineering Seminar", units: 2, type: "C" },
                  { code: "MTE 512", title: "Materials for Energy Applications", units: 3, type: "E" },
                  { code: "MTE 598", title: "Final Year Project II", units: 3, type: "C" },
                  { code: "VTE 503", title: "Seminar in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          }
        ]
      },

      // ======================================================
      // DEPARTMENT 9: FOOD ENGINEERING
      // ======================================================
      {
        id: 109,
        name: "Food Engineering",
        code: "FDE",
        duration: 5,
        levels: [
          {
            level: 100,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                  { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                  { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                  { code: "PHY 101", title: "General Physics I (Mechanics, Heat & Properties of Matter)", units: 3, type: "C" },
                  { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                  { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                  { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                  { code: "BIO 101", title: "General Biology I", units: 3, type: "C" },
                  { code: "ENG 101", title: "Introduction to Engineering", units: 2, type: "C" },
                  { code: "ENG 103", title: "Engineering Drawing I", units: 2, type: "C" },
                  { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                  { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                  { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                  { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                  { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                  { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                  { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                  { code: "BIO 102", title: "General Biology II", units: 3, type: "C" },
                  { code: "ENG 102", title: "Workshop Practice I", units: 2, type: "C" },
                  { code: "ENG 104", title: "Engineering Drawing II", units: 2, type: "C" },
                  { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                  { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 200,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                  { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
                  { code: "ENG 201", title: "Engineer in Society", units: 2, type: "C" },
                  { code: "FDE 201", title: "Introduction to Food Engineering", units: 3, type: "C" },
                  { code: "FDE 203", title: "Food Chemistry", units: 3, type: "C" },
                  { code: "FDE 205", title: "Food Microbiology", units: 3, type: "C" },
                  { code: "MEE 201", title: "Engineering Mechanics I (Statics)", units: 3, type: "C" },
                  { code: "CHM 201", title: "Organic Chemistry I", units: 3, type: "C" },
                  { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                  { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
                  { code: "ENG 202", title: "Workshop Practice II", units: 2, type: "C" },
                  { code: "FDE 202", title: "Food Biochemistry", units: 3, type: "C" },
                  { code: "FDE 204", title: "Engineering Properties of Food Materials", units: 3, type: "C" },
                  { code: "FDE 206", title: "Food Engineering Drawing", units: 2, type: "C" },
                  { code: "MEE 202", title: "Engineering Mechanics II (Dynamics)", units: 3, type: "C" },
                  { code: "EEE 201", title: "Applied Electricity I", units: 2, type: "C" },
                  { code: "CPT 201", title: "Computer Programming", units: 2, type: "C" },
                  { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 300,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                  { code: "MTH 301", title: "Engineering Mathematics III", units: 3, type: "C" },
                  { code: "FDE 301", title: "Food Process Engineering I (Unit Operations)", units: 3, type: "C" },
                  { code: "FDE 303", title: "Food Preservation and Packaging I", units: 3, type: "C" },
                  { code: "FDE 305", title: "Fluid Mechanics for Food Engineers", units: 3, type: "C" },
                  { code: "FDE 307", title: "Heat and Mass Transfer in Food Processing", units: 3, type: "C" },
                  { code: "FDE 309", title: "Thermodynamics for Food Engineers", units: 3, type: "C" },
                  { code: "FDE 311", title: "Food Engineering Laboratory I", units: 2, type: "C" },
                  { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                  { code: "FDE 302", title: "Food Process Engineering II", units: 3, type: "C" },
                  { code: "FDE 304", title: "Food Preservation and Packaging II", units: 3, type: "C" },
                  { code: "FDE 306", title: "Dairy and Beverage Engineering", units: 3, type: "C" },
                  { code: "FDE 308", title: "Cereal and Grain Processing", units: 3, type: "C" },
                  { code: "FDE 310", title: "Food Quality and Safety", units: 3, type: "C" },
                  { code: "FDE 312", title: "Food Engineering Laboratory II", units: 2, type: "C" },
                  { code: "FDE 314", title: "Numerical Methods in Food Engineering", units: 2, type: "C" },
                  { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 400,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "FDE 401", title: "Food Plant Design and Layout", units: 3, type: "C" },
                  { code: "FDE 403", title: "Refrigeration and Cold Storage Engineering", units: 3, type: "C" },
                  { code: "FDE 405", title: "Food Fermentation Technology", units: 3, type: "C" },
                  { code: "FDE 407", title: "Meat and Fish Processing Engineering", units: 3, type: "C" },
                  { code: "FDE 409", title: "Oil and Fat Processing", units: 3, type: "C" },
                  { code: "FDE 411", title: "Food Process Control and Instrumentation", units: 3, type: "C" },
                  { code: "FDE 413", title: "Engineering Economics and Finance", units: 2, type: "C" },
                  { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "FDE 402", title: "Sugar and Confectionery Technology", units: 3, type: "C" },
                  { code: "FDE 404", title: "Food Waste Management", units: 3, type: "C" },
                  { code: "FDE 406", title: "Food Dehydration and Evaporation", units: 3, type: "C" },
                  { code: "FDE 408", title: "Food Extrusion Technology", units: 3, type: "C" },
                  { code: "FDE 410", title: "Engineering Law and Ethics", units: 2, type: "C" },
                  { code: "FDE 400", title: "SIWES (Industrial Training)", units: 6, type: "C" },
                  { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 500,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "FDE 501", title: "Advanced Food Process Engineering", units: 3, type: "C" },
                  { code: "FDE 503", title: "Functional Foods and Nutraceuticals", units: 3, type: "E" },
                  { code: "FDE 505", title: "Novel Food Processing Technologies", units: 3, type: "E" },
                  { code: "FDE 507", title: "Food Biotechnology", units: 3, type: "E" },
                  { code: "FDE 509", title: "Food Nanotechnology", units: 3, type: "E" },
                  { code: "FDE 511", title: "Project Management", units: 3, type: "C" },
                  { code: "FDE 599", title: "Final Year Project I", units: 3, type: "C" },
                  { code: "VTE 501", title: "Research Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "FDE 502", title: "Advanced Food Packaging Technology", units: 3, type: "C" },
                  { code: "FDE 504", title: "Food Supply Chain Engineering", units: 3, type: "E" },
                  { code: "FDE 506", title: "Sensory Evaluation Engineering", units: 3, type: "E" },
                  { code: "FDE 508", title: "HACCP and Food Safety Engineering", units: 3, type: "C" },
                  { code: "FDE 510", title: "Food Engineering Seminar", units: 2, type: "C" },
                  { code: "FDE 512", title: "Computational Food Engineering", units: 3, type: "E" },
                  { code: "FDE 598", title: "Final Year Project II", units: 3, type: "C" },
                  { code: "VTE 503", title: "Seminar in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          }
        ]
      },

      // ======================================================
      // DEPARTMENT 10: WATER RESOURCES AND ENVIRONMENTAL ENGINEERING
      // ======================================================
      {
        id: 110,
        name: "Water Resources and Environmental Engineering",
        code: "WRE",
        duration: 5,
        levels: [
          {
            level: 100,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                  { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                  { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                  { code: "PHY 101", title: "General Physics I (Mechanics, Heat & Properties of Matter)", units: 3, type: "C" },
                  { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                  { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                  { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                  { code: "ENG 101", title: "Introduction to Engineering", units: 2, type: "C" },
                  { code: "ENG 103", title: "Engineering Drawing I", units: 2, type: "C" },
                  { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                  { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                  { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                  { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                  { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                  { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                  { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                  { code: "ENG 102", title: "Workshop Practice I", units: 2, type: "C" },
                  { code: "ENG 104", title: "Engineering Drawing II", units: 2, type: "C" },
                  { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                  { code: "BIO 101", title: "General Biology I", units: 3, type: "C" },
                  { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 200,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                  { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
                  { code: "ENG 201", title: "Engineer in Society", units: 2, type: "C" },
                  { code: "WRE 201", title: "Introduction to Water Resources Engineering", units: 3, type: "C" },
                  { code: "WRE 203", title: "Surveying for Water Resources Engineers", units: 3, type: "C" },
                  { code: "WRE 205", title: "Environmental Science for Engineers", units: 3, type: "C" },
                  { code: "MEE 201", title: "Engineering Mechanics I (Statics)", units: 3, type: "C" },
                  { code: "CVE 201", title: "Strength of Materials I", units: 3, type: "C" },
                  { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                  { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
                  { code: "ENG 202", title: "Workshop Practice II", units: 2, type: "C" },
                  { code: "WRE 202", title: "Introduction to Environmental Engineering", units: 3, type: "C" },
                  { code: "WRE 204", title: "Engineering Geology and Geomorphology", units: 3, type: "C" },
                  { code: "WRE 206", title: "Water Resources Engineering Drawing", units: 2, type: "C" },
                  { code: "MEE 202", title: "Engineering Mechanics II (Dynamics)", units: 3, type: "C" },
                  { code: "CVE 202", title: "Strength of Materials II", units: 3, type: "C" },
                  { code: "CPT 201", title: "Computer Programming", units: 2, type: "C" },
                  { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 300,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                  { code: "MTH 301", title: "Engineering Mathematics III", units: 3, type: "C" },
                  { code: "WRE 301", title: "Fluid Mechanics I", units: 3, type: "C" },
                  { code: "WRE 303", title: "Engineering Hydrology", units: 3, type: "C" },
                  { code: "WRE 305", title: "Water Supply Engineering", units: 3, type: "C" },
                  { code: "WRE 307", title: "Soil Mechanics for Water Resources Engineers", units: 3, type: "C" },
                  { code: "WRE 309", title: "Environmental Chemistry", units: 3, type: "C" },
                  { code: "WRE 311", title: "WRE Laboratory I", units: 2, type: "C" },
                  { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                  { code: "WRE 302", title: "Fluid Mechanics II", units: 3, type: "C" },
                  { code: "WRE 304", title: "Open Channel Hydraulics", units: 3, type: "C" },
                  { code: "WRE 306", title: "Groundwater Hydrology", units: 3, type: "C" },
                  { code: "WRE 308", title: "Environmental Microbiology", units: 3, type: "C" },
                  { code: "WRE 310", title: "Structural Analysis for WRE", units: 3, type: "C" },
                  { code: "WRE 312", title: "WRE Laboratory II", units: 2, type: "C" },
                  { code: "WRE 314", title: "Numerical Methods in WRE", units: 2, type: "C" },
                  { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 400,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "WRE 401", title: "Water Treatment Engineering", units: 3, type: "C" },
                  { code: "WRE 403", title: "Wastewater Treatment Engineering", units: 3, type: "C" },
                  { code: "WRE 405", title: "Irrigation and Drainage Engineering", units: 3, type: "C" },
                  { code: "WRE 407", title: "Water Resources Systems Planning", units: 3, type: "C" },
                  { code: "WRE 409", title: "Dam and Reservoir Engineering", units: 3, type: "C" },
                  { code: "WRE 411", title: "Air Pollution Control Engineering", units: 3, type: "C" },
                  { code: "WRE 413", title: "Engineering Economics and Finance", units: 2, type: "C" },
                  { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "WRE 402", title: "Solid and Hazardous Waste Management", units: 3, type: "C" },
                  { code: "WRE 404", title: "Coastal and Harbour Engineering", units: 3, type: "C" },
                  { code: "WRE 406", title: "Environmental Impact Assessment", units: 3, type: "C" },
                  { code: "WRE 408", title: "River Engineering", units: 3, type: "C" },
                  { code: "WRE 410", title: "Engineering Law and Ethics", units: 2, type: "C" },
                  { code: "WRE 400", title: "SIWES (Industrial Training)", units: 6, type: "C" },
                  { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          },
          {
            level: 500,
            semesters: [
              {
                semester: "First Semester",
                courses: [
                  { code: "WRE 501", title: "Advanced Water Treatment Technologies", units: 3, type: "C" },
                  { code: "WRE 503", title: "Advanced Hydrology and Watershed Management", units: 3, type: "C" },
                  { code: "WRE 505", title: "Environmental Remediation Engineering", units: 3, type: "E" },
                  { code: "WRE 507", title: "Water Resources Modelling", units: 3, type: "E" },
                  { code: "WRE 509", title: "Climate Change and Water Resources", units: 3, type: "E" },
                  { code: "WRE 511", title: "Project Management", units: 3, type: "C" },
                  { code: "WRE 599", title: "Final Year Project I", units: 3, type: "C" },
                  { code: "VTE 501", title: "Research Methods in Vocational and Technical Education", units: 2, type: "C" }
                ]
              },
              {
                semester: "Second Semester",
                courses: [
                  { code: "WRE 502", title: "Advanced Wastewater Treatment", units: 3, type: "C" },
                  { code: "WRE 504", title: "Desalination and Membrane Technology", units: 3, type: "E" },
                  { code: "WRE 506", title: "Environmental Policy and Law", units: 3, type: "E" },
                  { code: "WRE 508", title: "GIS and Remote Sensing for Water Resources", units: 3, type: "E" },
                  { code: "WRE 510", title: "Water Resources Engineering Seminar", units: 2, type: "C" },
                  { code: "WRE 512", title: "Flood Control and Management", units: 3, type: "E" },
                  { code: "WRE 598", title: "Final Year Project II", units: 3, type: "C" },
                  { code: "VTE 503", title: "Seminar in Vocational and Technical Education", units: 2, type: "C" }
                ]
              }
            ]
          }
        ]
      }
    ] // end departments array
  } // end Faculty of Engineering
],// end faculties array

 {
    id: 9,
  name: "Faculty of Environmental Sciences",
  code: "ENV",
  duration: 4,
  departments: [

    // =====================================================================
    // DEPARTMENT 1: ARCHITECTURE (5-Year Programme: 100-500 Level)
    // =====================================================================
    {
      name: "Architecture",
      code: "ARC",
      duration: 5,
      levels: {

        // ----- 100 LEVEL -----
        100: {
          first_semester: [
            // GNS Courses
            { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
            { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
            { code: "GNS 105", title: "History and Philosophy of Science", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 101", title: "Elementary Mathematics I (Algebra and Trigonometry)", units: 2, type: "C" },
            { code: "MTH 103", title: "Elementary Mathematics III (Vectors and Geometry)", units: 2, type: "C" },
            { code: "PHY 101", title: "General Physics I (Mechanics)", units: 2, type: "C" },
            { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
            { code: "CHM 101", title: "General Chemistry I", units: 2, type: "C" },
            { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
            { code: "CPT 101", title: "Introduction to Computer Science I", units: 2, type: "C" },

            // Departmental Courses
            { code: "ARC 101", title: "Introduction to Architecture", units: 2, type: "C" },
            { code: "ARC 103", title: "Basic Design I", units: 3, type: "C" },
            { code: "ARC 105", title: "Freehand Drawing and Sketching I", units: 2, type: "C" },
            { code: "ARC 107", title: "Graphics Communication I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
            { code: "GNS 104", title: "Citizenship Education", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 2, type: "C" },
            { code: "MTH 104", title: "Elementary Mathematics IV (Differential Equations I)", units: 2, type: "C" },
            { code: "PHY 102", title: "General Physics II (Electricity and Magnetism)", units: 2, type: "C" },
            { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
            { code: "CHM 102", title: "General Chemistry II", units: 2, type: "C" },
            { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
            { code: "CPT 102", title: "Introduction to Computer Science II", units: 2, type: "C" },
            { code: "STA 102", title: "Introduction to Statistics", units: 2, type: "C" },

            // Departmental Courses
            { code: "ARC 102", title: "History of Architecture I", units: 2, type: "C" },
            { code: "ARC 104", title: "Basic Design II", units: 3, type: "C" },
            { code: "ARC 106", title: "Freehand Drawing and Sketching II", units: 2, type: "C" },
            { code: "ARC 108", title: "Graphics Communication II", units: 2, type: "C" },
          ],
        },

        // ----- 200 LEVEL -----
        200: {
          first_semester: [
            // GNS Courses
            { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
            { code: "GNS 203", title: "Introduction to Entrepreneurship I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 201", title: "Vocational and Technical Education Practice I", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
            { code: "CPT 201", title: "Computer Applications I", units: 2, type: "C" },

            // Departmental Courses
            { code: "ARC 201", title: "Architectural Design Studio I", units: 4, type: "C" },
            { code: "ARC 203", title: "History of Architecture II (Classical to Renaissance)", units: 2, type: "C" },
            { code: "ARC 205", title: "Building Construction and Materials I", units: 3, type: "C" },
            { code: "ARC 207", title: "Principles of Structures I", units: 2, type: "C" },
            { code: "ARC 209", title: "Introduction to Environmental Science", units: 2, type: "C" },
            { code: "ARC 211", title: "Visual Arts and Aesthetics I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
            { code: "GNS 204", title: "Introduction to Entrepreneurship II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 203", title: "Vocational and Technical Education Practice II", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },

            // Departmental Courses
            { code: "ARC 202", title: "Architectural Design Studio II", units: 4, type: "C" },
            { code: "ARC 204", title: "History of Architecture III (Modern Architecture)", units: 2, type: "C" },
            { code: "ARC 206", title: "Building Construction and Materials II", units: 3, type: "C" },
            { code: "ARC 208", title: "Principles of Structures II", units: 2, type: "C" },
            { code: "ARC 210", title: "Climatology and Sustainable Design", units: 2, type: "C" },
            { code: "ARC 212", title: "Visual Arts and Aesthetics II", units: 2, type: "C" },
            { code: "ARC 214", title: "Introduction to Urban Design", units: 2, type: "C" },
          ],
        },

        // ----- 300 LEVEL -----
        300: {
          first_semester: [
            // GNS Courses
            { code: "GNS 301", title: "Entrepreneurship Development I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 301", title: "Vocational and Technical Education Methodology I", units: 2, type: "C" },

            // Departmental Courses
            { code: "ARC 301", title: "Architectural Design Studio III", units: 5, type: "C" },
            { code: "ARC 303", title: "History of African and Nigerian Architecture", units: 2, type: "C" },
            { code: "ARC 305", title: "Building Construction and Materials III", units: 3, type: "C" },
            { code: "ARC 307", title: "Structural Analysis and Design I", units: 3, type: "C" },
            { code: "ARC 309", title: "Environmental Control Systems I (Lighting and Acoustics)", units: 2, type: "C" },
            { code: "ARC 311", title: "Computer-Aided Design I (CAD)", units: 2, type: "C" },
            { code: "ARC 313", title: "Building Services I (Plumbing and Drainage)", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 302", title: "Entrepreneurship Development II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 303", title: "Vocational and Technical Education Methodology II", units: 2, type: "C" },

            // SIWES
            { code: "ARC 399", title: "Students Industrial Work Experience Scheme (SIWES)", units: 6, type: "C" },

            // Departmental Courses
            { code: "ARC 302", title: "Architectural Design Studio IV", units: 5, type: "C" },
            { code: "ARC 304", title: "Contemporary Architecture and Theory", units: 2, type: "C" },
            { code: "ARC 306", title: "Building Construction and Materials IV", units: 3, type: "C" },
            { code: "ARC 308", title: "Structural Analysis and Design II", units: 3, type: "C" },
            { code: "ARC 310", title: "Environmental Control Systems II (HVAC)", units: 2, type: "C" },
            { code: "ARC 312", title: "Computer-Aided Design II (3D Modeling)", units: 2, type: "C" },
            { code: "ARC 314", title: "Building Services II (Electrical and Mechanical)", units: 2, type: "C" },
          ],
        },

        // ----- 400 LEVEL -----
        400: {
          first_semester: [
            // VTE Courses
            { code: "VTE 401", title: "Vocational and Technical Education Seminar I", units: 2, type: "C" },

            // Departmental Courses
            { code: "ARC 401", title: "Architectural Design Studio V (Comprehensive Design)", units: 6, type: "C" },
            { code: "ARC 403", title: "Theories of Architecture and Urbanism", units: 2, type: "C" },
            { code: "ARC 405", title: "Building Economics and Cost Planning", units: 2, type: "C" },
            { code: "ARC 407", title: "Advanced Structural Systems", units: 3, type: "C" },
            { code: "ARC 409", title: "Research Methods in Architecture", units: 2, type: "C" },
            { code: "ARC 411", title: "Landscape Architecture", units: 2, type: "C" },
            { code: "ARC 413", title: "Professional Practice and Ethics I", units: 2, type: "C" },
          ],
          second_semester: [
            // VTE Courses
            { code: "VTE 403", title: "Vocational and Technical Education Seminar II", units: 2, type: "C" },

            // Departmental Courses
            { code: "ARC 402", title: "Architectural Design Studio VI (Urban Design)", units: 6, type: "C" },
            { code: "ARC 404", title: "Housing and Community Design", units: 2, type: "C" },
            { code: "ARC 406", title: "Construction Project Management", units: 2, type: "C" },
            { code: "ARC 408", title: "Specifications and Building Regulations", units: 2, type: "C" },
            { code: "ARC 410", title: "Energy Efficient Building Design", units: 2, type: "C" },
            { code: "ARC 412", title: "Interior Design", units: 2, type: "C" },
            { code: "ARC 414", title: "Professional Practice and Ethics II", units: 2, type: "C" },
          ],
        },

        // ----- 500 LEVEL (Final Year for Architecture) -----
        500: {
          first_semester: [
            // VTE Courses
            { code: "VTE 501", title: "Vocational and Technical Education Advanced Seminar I", units: 2, type: "C" },

            // Final Year Project / Thesis
            { code: "ARC 599A", title: "Final Year Thesis Project I (Research and Programming)", units: 6, type: "C" },

            // Departmental Core Courses
            { code: "ARC 501", title: "Advanced Architectural Design Studio VII", units: 6, type: "C" },
            { code: "ARC 503", title: "Advanced Building Technology", units: 3, type: "C" },
            { code: "ARC 505", title: "Urban Renewal and Conservation", units: 2, type: "C" },
            { code: "ARC 507", title: "Contract Administration and Management", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "ARC 509", title: "Tropical Architecture", units: 2, type: "E" },
            { code: "ARC 511", title: "Parametric Design and BIM", units: 2, type: "E" },
            { code: "ARC 513", title: "Facility Management", units: 2, type: "E" },
            { code: "ARC 515", title: "Heritage and Conservation Architecture", units: 2, type: "E" },
          ],
          second_semester: [
            // VTE Courses
            { code: "VTE 503", title: "Vocational and Technical Education Advanced Seminar II", units: 2, type: "C" },

            // Final Year Project / Thesis
            { code: "ARC 599B", title: "Final Year Thesis Project II (Design and Presentation)", units: 6, type: "C" },

            // Departmental Core Courses
            { code: "ARC 502", title: "Advanced Architectural Design Studio VIII", units: 6, type: "C" },
            { code: "ARC 504", title: "Environmental Impact Assessment", units: 2, type: "C" },
            { code: "ARC 506", title: "Advanced Professional Practice", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "ARC 508", title: "Sustainable and Green Architecture", units: 2, type: "E" },
            { code: "ARC 510", title: "Disaster Resistant Design", units: 2, type: "E" },
            { code: "ARC 512", title: "Smart Buildings and Technology", units: 2, type: "E" },
            { code: "ARC 514", title: "Emerging Trends in Architecture", units: 2, type: "E" },
          ],
        },
      },
    },

    // =====================================================================
    // DEPARTMENT 2: URBAN AND REGIONAL PLANNING
    // =====================================================================
    {
      name: "Urban and Regional Planning",
      code: "URP",
      duration: 4,
      levels: {

        // ----- 100 LEVEL -----
        100: {
          first_semester: [
            // GNS Courses
            { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
            { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
            { code: "GNS 105", title: "History and Philosophy of Science", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 101", title: "Elementary Mathematics I (Algebra and Trigonometry)", units: 2, type: "C" },
            { code: "PHY 101", title: "General Physics I (Mechanics)", units: 2, type: "C" },
            { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
            { code: "CHM 101", title: "General Chemistry I", units: 2, type: "C" },
            { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
            { code: "STA 101", title: "Introduction to Statistics I", units: 2, type: "C" },
            { code: "CPT 101", title: "Introduction to Computer Science I", units: 2, type: "C" },

            // Departmental Courses
            { code: "URP 101", title: "Introduction to Urban and Regional Planning", units: 2, type: "C" },
            { code: "URP 103", title: "Introduction to Environmental Science", units: 2, type: "C" },
            { code: "URP 105", title: "Graphics and Cartography I", units: 2, type: "C" },
            { code: "ECN 101", title: "Introduction to Economics I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
            { code: "GNS 104", title: "Citizenship Education", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 2, type: "C" },
            { code: "PHY 102", title: "General Physics II (Electricity and Magnetism)", units: 2, type: "C" },
            { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
            { code: "CHM 102", title: "General Chemistry II", units: 2, type: "C" },
            { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
            { code: "STA 102", title: "Introduction to Statistics II", units: 2, type: "C" },
            { code: "CPT 102", title: "Introduction to Computer Science II", units: 2, type: "C" },

            // Departmental Courses
            { code: "URP 102", title: "Introduction to Human Geography", units: 2, type: "C" },
            { code: "URP 104", title: "Introduction to Sociology", units: 2, type: "C" },
            { code: "URP 106", title: "Graphics and Cartography II", units: 2, type: "C" },
            { code: "ECN 102", title: "Introduction to Economics II", units: 2, type: "C" },
          ],
        },

        // ----- 200 LEVEL -----
        200: {
          first_semester: [
            // GNS Courses
            { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
            { code: "GNS 203", title: "Introduction to Entrepreneurship I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 201", title: "Vocational and Technical Education Practice I", units: 2, type: "C" },

            // Service Courses
            { code: "STA 201", title: "Statistics for Environmental Sciences I", units: 2, type: "C" },
            { code: "CPT 201", title: "Computer Applications I", units: 2, type: "C" },

            // Departmental Courses
            { code: "URP 201", title: "Planning Theory I", units: 3, type: "C" },
            { code: "URP 203", title: "Surveying and Levelling I", units: 3, type: "C" },
            { code: "URP 205", title: "Urban Geography", units: 2, type: "C" },
            { code: "URP 207", title: "Site Planning and Design I", units: 3, type: "C" },
            { code: "URP 209", title: "Introduction to Land Law", units: 2, type: "C" },
            { code: "URP 211", title: "Population Studies and Demography", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
            { code: "GNS 204", title: "Introduction to Entrepreneurship II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 203", title: "Vocational and Technical Education Practice II", units: 2, type: "C" },

            // Service Courses
            { code: "STA 202", title: "Statistics for Environmental Sciences II", units: 2, type: "C" },

            // Departmental Courses
            { code: "URP 202", title: "Planning Theory II", units: 3, type: "C" },
            { code: "URP 204", title: "Surveying and Levelling II", units: 3, type: "C" },
            { code: "URP 206", title: "Land Use Planning and Zoning", units: 3, type: "C" },
            { code: "URP 208", title: "Site Planning and Design II", units: 3, type: "C" },
            { code: "URP 210", title: "Urban Economics", units: 2, type: "C" },
            { code: "URP 212", title: "Planning Graphics and Presentation", units: 2, type: "C" },
          ],
        },

        // ----- 300 LEVEL -----
        300: {
          first_semester: [
            // GNS Courses
            { code: "GNS 301", title: "Entrepreneurship Development I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 301", title: "Vocational and Technical Education Methodology I", units: 2, type: "C" },

            // Departmental Courses
            { code: "URP 301", title: "Urban and Regional Planning Studio I", units: 4, type: "C" },
            { code: "URP 303", title: "Transportation Planning I", units: 3, type: "C" },
            { code: "URP 305", title: "Housing and Neighbourhood Planning", units: 3, type: "C" },
            { code: "URP 307", title: "Infrastructure and Utilities Planning", units: 2, type: "C" },
            { code: "URP 309", title: "GIS and Remote Sensing in Planning I", units: 3, type: "C" },
            { code: "URP 311", title: "Planning Law and Administration I", units: 2, type: "C" },
            { code: "URP 313", title: "Research Methods in Planning", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 302", title: "Entrepreneurship Development II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 303", title: "Vocational and Technical Education Methodology II", units: 2, type: "C" },

            // SIWES
            { code: "URP 399", title: "Students Industrial Work Experience Scheme (SIWES)", units: 6, type: "C" },

            // Departmental Courses
            { code: "URP 302", title: "Urban and Regional Planning Studio II", units: 4, type: "C" },
            { code: "URP 304", title: "Transportation Planning II", units: 3, type: "C" },
            { code: "URP 306", title: "Regional Planning and Development", units: 3, type: "C" },
            { code: "URP 308", title: "Rural Planning", units: 2, type: "C" },
            { code: "URP 310", title: "GIS and Remote Sensing in Planning II", units: 3, type: "C" },
            { code: "URP 312", title: "Planning Law and Administration II", units: 2, type: "C" },
          ],
        },

        // ----- 400 LEVEL -----
        400: {
          first_semester: [
            // VTE Courses
            { code: "VTE 401", title: "Vocational and Technical Education Seminar I", units: 2, type: "C" },

            // Final Year Project
            { code: "URP 499A", title: "Final Year Project I (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "URP 401", title: "Advanced Planning Studio I (Master Plan)", units: 5, type: "C" },
            { code: "URP 403", title: "Environmental Planning and Management", units: 3, type: "C" },
            { code: "URP 405", title: "Urban Renewal and Regeneration", units: 2, type: "C" },
            { code: "URP 407", title: "Development Control and Planning Standards", units: 2, type: "C" },
            { code: "URP 409", title: "Professional Practice and Ethics in Planning", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "URP 411", title: "Tourism Planning", units: 2, type: "E" },
            { code: "URP 413", title: "Disaster Management and Planning", units: 2, type: "E" },
            { code: "URP 415", title: "Urban Design and Place-Making", units: 2, type: "E" },
            { code: "URP 417", title: "Smart City Planning", units: 2, type: "E" },
          ],
          second_semester: [
            // VTE Courses
            { code: "VTE 403", title: "Vocational and Technical Education Seminar II", units: 2, type: "C" },

            // Final Year Project
            { code: "URP 499B", title: "Final Year Project II (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "URP 402", title: "Advanced Planning Studio II (Action Area Plan)", units: 5, type: "C" },
            { code: "URP 404", title: "Environmental Impact Assessment", units: 3, type: "C" },
            { code: "URP 406", title: "Planning for Sustainable Development", units: 2, type: "C" },
            { code: "URP 408", title: "Urban Governance and Policy", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "URP 410", title: "Community Participation in Planning", units: 2, type: "E" },
            { code: "URP 412", title: "Climate Change Adaptation Planning", units: 2, type: "E" },
            { code: "URP 414", title: "Industrial Area Planning", units: 2, type: "E" },
            { code: "URP 416", title: "Emerging Issues in Urban Planning", units: 2, type: "E" },
          ],
        },
      },
    },

    // =====================================================================
    // DEPARTMENT 3: ESTATE MANAGEMENT AND VALUATION
    // =====================================================================
    {
      name: "Estate Management and Valuation",
      code: "ESM",
      duration: 4,
      levels: {

        // ----- 100 LEVEL -----
        100: {
          first_semester: [
            // GNS Courses
            { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
            { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
            { code: "GNS 105", title: "History and Philosophy of Science", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 101", title: "Elementary Mathematics I (Algebra and Trigonometry)", units: 2, type: "C" },
            { code: "PHY 101", title: "General Physics I (Mechanics)", units: 2, type: "C" },
            { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
            { code: "CHM 101", title: "General Chemistry I", units: 2, type: "C" },
            { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
            { code: "STA 101", title: "Introduction to Statistics I", units: 2, type: "C" },
            { code: "CPT 101", title: "Introduction to Computer Science I", units: 2, type: "C" },

            // Departmental Courses
            { code: "ESM 101", title: "Introduction to Estate Management", units: 2, type: "C" },
            { code: "ESM 103", title: "Introduction to Environmental Science", units: 2, type: "C" },
            { code: "ESM 105", title: "Introduction to Building Construction", units: 2, type: "C" },
            { code: "ECN 101", title: "Introduction to Economics I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
            { code: "GNS 104", title: "Citizenship Education", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 2, type: "C" },
            { code: "PHY 102", title: "General Physics II (Electricity and Magnetism)", units: 2, type: "C" },
            { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
            { code: "CHM 102", title: "General Chemistry II", units: 2, type: "C" },
            { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
            { code: "STA 102", title: "Introduction to Statistics II", units: 2, type: "C" },
            { code: "CPT 102", title: "Introduction to Computer Science II", units: 2, type: "C" },

            // Departmental Courses
            { code: "ESM 102", title: "Introduction to Land Management", units: 2, type: "C" },
            { code: "ESM 104", title: "Introduction to Surveying", units: 2, type: "C" },
            { code: "ESM 106", title: "Introduction to Property Law", units: 2, type: "C" },
            { code: "ECN 102", title: "Introduction to Economics II", units: 2, type: "C" },
          ],
        },

        // ----- 200 LEVEL -----
        200: {
          first_semester: [
            // GNS Courses
            { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
            { code: "GNS 203", title: "Introduction to Entrepreneurship I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 201", title: "Vocational and Technical Education Practice I", units: 2, type: "C" },

            // Service Courses
            { code: "STA 201", title: "Statistics for Environmental Sciences I", units: 2, type: "C" },
            { code: "CPT 201", title: "Computer Applications I", units: 2, type: "C" },

            // Departmental Courses
            { code: "ESM 201", title: "Principles of Land Economics I", units: 3, type: "C" },
            { code: "ESM 203", title: "Land Law I (Nigerian Land Law)", units: 3, type: "C" },
            { code: "ESM 205", title: "Building Construction and Technology I", units: 3, type: "C" },
            { code: "ESM 207", title: "Introduction to Valuation I", units: 3, type: "C" },
            { code: "ESM 209", title: "Principles of Surveying and Measurement", units: 2, type: "C" },
            { code: "ESM 211", title: "Property Management I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
            { code: "GNS 204", title: "Introduction to Entrepreneurship II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 203", title: "Vocational and Technical Education Practice II", units: 2, type: "C" },

            // Service Courses
            { code: "STA 202", title: "Statistics for Environmental Sciences II", units: 2, type: "C" },

            // Departmental Courses
            { code: "ESM 202", title: "Principles of Land Economics II", units: 3, type: "C" },
            { code: "ESM 204", title: "Land Law II (Law of Contract)", units: 3, type: "C" },
            { code: "ESM 206", title: "Building Construction and Technology II", units: 3, type: "C" },
            { code: "ESM 208", title: "Introduction to Valuation II", units: 3, type: "C" },
            { code: "ESM 210", title: "Property Management II", units: 2, type: "C" },
            { code: "ESM 212", title: "Urban and Regional Planning Concepts", units: 2, type: "C" },
          ],
        },

        // ----- 300 LEVEL -----
        300: {
          first_semester: [
            // GNS Courses
            { code: "GNS 301", title: "Entrepreneurship Development I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 301", title: "Vocational and Technical Education Methodology I", units: 2, type: "C" },

            // Departmental Courses
            { code: "ESM 301", title: "Valuation I (Methods and Techniques)", units: 3, type: "C" },
            { code: "ESM 303", title: "Land Law III (Equity and Trust)", units: 3, type: "C" },
            { code: "ESM 305", title: "Property Development and Finance I", units: 3, type: "C" },
            { code: "ESM 307", title: "Building Maintenance and Repairs", units: 2, type: "C" },
            { code: "ESM 309", title: "Urban Land Use and Planning", units: 2, type: "C" },
            { code: "ESM 311", title: "Real Estate Investment Analysis I", units: 3, type: "C" },
            { code: "ESM 313", title: "Research Methods in Estate Management", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 302", title: "Entrepreneurship Development II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 303", title: "Vocational and Technical Education Methodology II", units: 2, type: "C" },

            // SIWES
            { code: "ESM 399", title: "Students Industrial Work Experience Scheme (SIWES)", units: 6, type: "C" },

            // Departmental Courses
            { code: "ESM 302", title: "Valuation II (Income Approach)", units: 3, type: "C" },
            { code: "ESM 304", title: "Land Law IV (Landlord and Tenant)", units: 3, type: "C" },
            { code: "ESM 306", title: "Property Development and Finance II", units: 3, type: "C" },
            { code: "ESM 308", title: "Facility Management I", units: 2, type: "C" },
            { code: "ESM 310", title: "Real Estate Investment Analysis II", units: 3, type: "C" },
            { code: "ESM 312", title: "Environmental Impact Assessment", units: 2, type: "C" },
          ],
        },

        // ----- 400 LEVEL -----
        400: {
          first_semester: [
            // VTE Courses
            { code: "VTE 401", title: "Vocational and Technical Education Seminar I", units: 2, type: "C" },

            // Final Year Project
            { code: "ESM 499A", title: "Final Year Project I (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "ESM 401", title: "Advanced Valuation (Compulsory Acquisition and Compensation)", units: 3, type: "C" },
            { code: "ESM 403", title: "Advanced Property Development", units: 3, type: "C" },
            { code: "ESM 405", title: "Real Estate Finance and Mortgage", units: 3, type: "C" },
            { code: "ESM 407", title: "Facility Management II", units: 2, type: "C" },
            { code: "ESM 409", title: "Professional Practice and Ethics in Estate Management", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "ESM 411", title: "Real Estate Taxation", units: 2, type: "E" },
            { code: "ESM 413", title: "International Real Estate", units: 2, type: "E" },
            { code: "ESM 415", title: "Housing Policy and Administration", units: 2, type: "E" },
            { code: "ESM 417", title: "GIS Applications in Estate Management", units: 2, type: "E" },
          ],
          second_semester: [
            // VTE Courses
            { code: "VTE 403", title: "Vocational and Technical Education Seminar II", units: 2, type: "C" },

            // Final Year Project
            { code: "ESM 499B", title: "Final Year Project II (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "ESM 402", title: "Advanced Valuation (Plant and Machinery)", units: 3, type: "C" },
            { code: "ESM 404", title: "Urban Land Management and Policy", units: 3, type: "C" },
            { code: "ESM 406", title: "Real Estate Marketing and Agency", units: 2, type: "C" },
            { code: "ESM 408", title: "Property Portfolio Management", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "ESM 410", title: "Real Estate Arbitration and Dispute Resolution", units: 2, type: "E" },
            { code: "ESM 412", title: "Sustainable Real Estate Development", units: 2, type: "E" },
            { code: "ESM 414", title: "Real Estate Technology and PropTech", units: 2, type: "E" },
            { code: "ESM 416", title: "Emerging Issues in Estate Management", units: 2, type: "E" },
          ],
        },
      },
    },
  ],

},

{
  id: 7,
  name: "Faculty of Information and Communication Technology",
  code: "ICT",
  duration: 4,
  departments: [

    // ======================================================
    // DEPARTMENT 1: COMPUTER SCIENCE
    // ======================================================
    {
      id: 701,
      name: "Computer Science",
      code: "CSC",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "CSC 101", title: "Introduction to Computer Science", units: 3, type: "C" },
                { code: "CSC 103", title: "Introduction to Problem Solving and Algorithm", units: 3, type: "C" },
                { code: "CSC 105", title: "Introduction to Computer Programming I (Python)", units: 3, type: "C" },
                { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                { code: "MTH 103", title: "Elementary Mathematics III (Vectors & Geometry)", units: 3, type: "C" },
                { code: "PHY 101", title: "General Physics I (Mechanics)", units: 3, type: "C" },
                { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                { code: "STA 101", title: "Introduction to Statistics I", units: 3, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "CSC 102", title: "Introduction to Computer Hardware", units: 3, type: "C" },
                { code: "CSC 104", title: "Introduction to Computer Programming II (C)", units: 3, type: "C" },
                { code: "CSC 106", title: "Introduction to Digital Logic Design", units: 3, type: "C" },
                { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                { code: "MTH 104", title: "Elementary Mathematics IV (Sets & Logic)", units: 3, type: "C" },
                { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                { code: "STA 102", title: "Introduction to Statistics II", units: 3, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "CSC 201", title: "Computer Programming III (C++)", units: 3, type: "C" },
                { code: "CSC 203", title: "Data Structures and Algorithms I", units: 3, type: "C" },
                { code: "CSC 205", title: "Computer Architecture and Organization I", units: 3, type: "C" },
                { code: "CSC 207", title: "Discrete Mathematics I", units: 3, type: "C" },
                { code: "CSC 209", title: "Operating Systems I", units: 3, type: "C" },
                { code: "CSC 211", title: "Web Development I (HTML, CSS, JavaScript)", units: 3, type: "C" },
                { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
                { code: "STA 201", title: "Probability and Statistics I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "CSC 202", title: "Computer Programming IV (Java)", units: 3, type: "C" },
                { code: "CSC 204", title: "Data Structures and Algorithms II", units: 3, type: "C" },
                { code: "CSC 206", title: "Computer Architecture and Organization II", units: 3, type: "C" },
                { code: "CSC 208", title: "Discrete Mathematics II", units: 3, type: "C" },
                { code: "CSC 210", title: "Operating Systems II", units: 3, type: "C" },
                { code: "CSC 212", title: "Web Development II (PHP, MySQL)", units: 3, type: "C" },
                { code: "CSC 214", title: "Introduction to Database Systems", units: 3, type: "C" },
                { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "CSC 301", title: "Theory of Computing (Automata & Formal Languages)", units: 3, type: "C" },
                { code: "CSC 303", title: "Database Management Systems I", units: 3, type: "C" },
                { code: "CSC 305", title: "Computer Networks I", units: 3, type: "C" },
                { code: "CSC 307", title: "Software Engineering I", units: 3, type: "C" },
                { code: "CSC 309", title: "Systems Analysis and Design", units: 3, type: "C" },
                { code: "CSC 311", title: "Numerical Computing (Methods)", units: 3, type: "C" },
                { code: "CSC 313", title: "Object-Oriented Programming", units: 3, type: "C" },
                { code: "CSC 315", title: "Research Methodology in Computer Science", units: 2, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "CSC 302", title: "Compiler Construction", units: 3, type: "C" },
                { code: "CSC 304", title: "Database Management Systems II", units: 3, type: "C" },
                { code: "CSC 306", title: "Computer Networks II", units: 3, type: "C" },
                { code: "CSC 308", title: "Software Engineering II", units: 3, type: "C" },
                { code: "CSC 310", title: "Human-Computer Interaction", units: 3, type: "C" },
                { code: "CSC 312", title: "Introduction to Artificial Intelligence", units: 3, type: "C" },
                { code: "CSC 314", title: "Computer Graphics", units: 3, type: "C" },
                { code: "CSC 300", title: "SIWES (Industrial Training)", units: 6, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "CSC 401", title: "Advanced Algorithms and Complexity", units: 3, type: "C" },
                { code: "CSC 403", title: "Information Security and Cryptography", units: 3, type: "C" },
                { code: "CSC 405", title: "Machine Learning", units: 3, type: "C" },
                { code: "CSC 407", title: "Mobile Application Development", units: 3, type: "C" },
                { code: "CSC 409", title: "Cloud Computing", units: 3, type: "E" },
                { code: "CSC 411", title: "Data Mining and Data Warehousing", units: 3, type: "E" },
                { code: "CSC 413", title: "Computer Vision", units: 3, type: "E" },
                { code: "CSC 415", title: "Internet of Things (IoT)", units: 3, type: "E" },
                { code: "CSC 499", title: "Final Year Project I", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "CSC 402", title: "Distributed Systems", units: 3, type: "C" },
                { code: "CSC 404", title: "Natural Language Processing", units: 3, type: "C" },
                { code: "CSC 406", title: "Deep Learning and Neural Networks", units: 3, type: "E" },
                { code: "CSC 408", title: "Big Data Analytics", units: 3, type: "E" },
                { code: "CSC 410", title: "Blockchain Technology", units: 3, type: "E" },
                { code: "CSC 412", title: "Parallel and High-Performance Computing", units: 3, type: "E" },
                { code: "CSC 414", title: "Robotics and Autonomous Systems", units: 3, type: "E" },
                { code: "CSC 416", title: "Computer Science Seminar", units: 2, type: "C" },
                { code: "CSC 498", title: "Final Year Project II", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 2: CYBER SECURITY
    // ======================================================
    {
      id: 702,
      name: "Cyber Security",
      code: "CYB",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "CYB 101", title: "Introduction to Cyber Security", units: 3, type: "C" },
                { code: "CYB 103", title: "Fundamentals of Information Technology", units: 3, type: "C" },
                { code: "CSC 101", title: "Introduction to Computer Science", units: 3, type: "C" },
                { code: "CSC 105", title: "Introduction to Computer Programming I (Python)", units: 3, type: "C" },
                { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                { code: "PHY 101", title: "General Physics I (Mechanics)", units: 3, type: "C" },
                { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                { code: "STA 101", title: "Introduction to Statistics I", units: 3, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "CYB 102", title: "Cyber Security Fundamentals", units: 3, type: "C" },
                { code: "CYB 104", title: "Computer Hardware and Networks Basics", units: 3, type: "C" },
                { code: "CSC 104", title: "Introduction to Computer Programming II (C)", units: 3, type: "C" },
                { code: "CSC 106", title: "Introduction to Digital Logic Design", units: 3, type: "C" },
                { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                { code: "STA 102", title: "Introduction to Statistics II", units: 3, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "CYB 201", title: "Network Security Fundamentals", units: 3, type: "C" },
                { code: "CYB 203", title: "Operating Systems Security", units: 3, type: "C" },
                { code: "CYB 205", title: "Introduction to Cryptography", units: 3, type: "C" },
                { code: "CYB 207", title: "Cyber Threats and Vulnerabilities", units: 3, type: "C" },
                { code: "CSC 203", title: "Data Structures and Algorithms I", units: 3, type: "C" },
                { code: "CSC 205", title: "Computer Architecture and Organization I", units: 3, type: "C" },
                { code: "CSC 209", title: "Operating Systems I", units: 3, type: "C" },
                { code: "MTH 207", title: "Discrete Mathematics I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "CYB 202", title: "Secure Programming Practices", units: 3, type: "C" },
                { code: "CYB 204", title: "Web Security", units: 3, type: "C" },
                { code: "CYB 206", title: "Cryptographic Protocols", units: 3, type: "C" },
                { code: "CYB 208", title: "Security Risk Assessment", units: 3, type: "C" },
                { code: "CSC 204", title: "Data Structures and Algorithms II", units: 3, type: "C" },
                { code: "CSC 214", title: "Introduction to Database Systems", units: 3, type: "C" },
                { code: "CSC 210", title: "Operating Systems II", units: 3, type: "C" },
                { code: "MTH 208", title: "Discrete Mathematics II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "CYB 301", title: "Network Defense and Countermeasures", units: 3, type: "C" },
                { code: "CYB 303", title: "Ethical Hacking and Penetration Testing I", units: 3, type: "C" },
                { code: "CYB 305", title: "Digital Forensics I", units: 3, type: "C" },
                { code: "CYB 307", title: "Malware Analysis and Reverse Engineering I", units: 3, type: "C" },
                { code: "CYB 309", title: "Security Information and Event Management (SIEM)", units: 3, type: "C" },
                { code: "CYB 311", title: "Cyber Law and Ethics", units: 3, type: "C" },
                { code: "CSC 305", title: "Computer Networks I", units: 3, type: "C" },
                { code: "CYB 313", title: "Research Methodology in Cyber Security", units: 2, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "CYB 302", title: "Intrusion Detection and Prevention Systems", units: 3, type: "C" },
                { code: "CYB 304", title: "Ethical Hacking and Penetration Testing II", units: 3, type: "C" },
                { code: "CYB 306", title: "Digital Forensics II", units: 3, type: "C" },
                { code: "CYB 308", title: "Malware Analysis and Reverse Engineering II", units: 3, type: "C" },
                { code: "CYB 310", title: "Wireless and Mobile Security", units: 3, type: "C" },
                { code: "CYB 312", title: "Incident Response and Disaster Recovery", units: 3, type: "C" },
                { code: "CSC 306", title: "Computer Networks II", units: 3, type: "C" },
                { code: "CYB 300", title: "SIWES (Industrial Training)", units: 6, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "CYB 401", title: "Advanced Network Security", units: 3, type: "C" },
                { code: "CYB 403", title: "Cloud Security", units: 3, type: "C" },
                { code: "CYB 405", title: "Security Operations Center (SOC) Management", units: 3, type: "C" },
                { code: "CYB 407", title: "Advanced Cryptography", units: 3, type: "C" },
                { code: "CYB 409", title: "IoT Security", units: 3, type: "E" },
                { code: "CYB 411", title: "Blockchain Security", units: 3, type: "E" },
                { code: "CYB 413", title: "Industrial Control Systems (ICS) Security", units: 3, type: "E" },
                { code: "CYB 415", title: "Artificial Intelligence in Cyber Security", units: 3, type: "E" },
                { code: "CYB 499", title: "Final Year Project I", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "CYB 402", title: "Advanced Penetration Testing and Red Teaming", units: 3, type: "C" },
                { code: "CYB 404", title: "Cyber Threat Intelligence", units: 3, type: "C" },
                { code: "CYB 406", title: "Security Governance and Compliance", units: 3, type: "C" },
                { code: "CYB 408", title: "Advanced Digital Forensics", units: 3, type: "E" },
                { code: "CYB 410", title: "Application Security", units: 3, type: "E" },
                { code: "CYB 412", title: "Critical Infrastructure Protection", units: 3, type: "E" },
                { code: "CYB 414", title: "Cyber Security Project Management", units: 3, type: "E" },
                { code: "CYB 416", title: "Cyber Security Seminar", units: 2, type: "C" },
                { code: "CYB 498", title: "Final Year Project II", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 3: MASS COMMUNICATION
    // ======================================================
    {
      id: 703,
      name: "Mass Communication",
      code: "MAC",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "MAC 101", title: "Introduction to Mass Communication I", units: 3, type: "C" },
                { code: "MAC 103", title: "History of Mass Communication", units: 3, type: "C" },
                { code: "MAC 105", title: "Introduction to Journalism I", units: 3, type: "C" },
                { code: "MAC 107", title: "Introduction to Writing for the Media", units: 3, type: "C" },
                { code: "ELS 101", title: "Introduction to Literature I", units: 3, type: "R" },
                { code: "POL 101", title: "Introduction to Political Science I", units: 3, type: "R" },
                { code: "SOC 101", title: "Introduction to Sociology I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "MAC 102", title: "Introduction to Mass Communication II", units: 3, type: "C" },
                { code: "MAC 104", title: "Introduction to Broadcasting", units: 3, type: "C" },
                { code: "MAC 106", title: "Introduction to Journalism II", units: 3, type: "C" },
                { code: "MAC 108", title: "News Writing and Reporting I", units: 3, type: "C" },
                { code: "ELS 102", title: "Introduction to Literature II", units: 3, type: "R" },
                { code: "POL 102", title: "Introduction to Political Science II", units: 3, type: "R" },
                { code: "SOC 102", title: "Introduction to Sociology II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "MAC 201", title: "Mass Communication Theory I", units: 3, type: "C" },
                { code: "MAC 203", title: "Print Journalism I (Newspaper)", units: 3, type: "C" },
                { code: "MAC 205", title: "Radio Production I", units: 3, type: "C" },
                { code: "MAC 207", title: "Television Production I", units: 3, type: "C" },
                { code: "MAC 209", title: "Public Relations I", units: 3, type: "C" },
                { code: "MAC 211", title: "News Writing and Reporting II", units: 3, type: "C" },
                { code: "MAC 213", title: "Photography and Photojournalism I", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Social Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "MAC 202", title: "Mass Communication Theory II", units: 3, type: "C" },
                { code: "MAC 204", title: "Print Journalism II (Magazine)", units: 3, type: "C" },
                { code: "MAC 206", title: "Radio Production II", units: 3, type: "C" },
                { code: "MAC 208", title: "Television Production II", units: 3, type: "C" },
                { code: "MAC 210", title: "Public Relations II", units: 3, type: "C" },
                { code: "MAC 212", title: "Advertising I (Principles)", units: 3, type: "C" },
                { code: "MAC 214", title: "Photography and Photojournalism II", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Social Scientists II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "MAC 301", title: "Broadcast Journalism I", units: 3, type: "C" },
                { code: "MAC 303", title: "Media Law and Ethics I", units: 3, type: "C" },
                { code: "MAC 305", title: "Advertising II (Copywriting)", units: 3, type: "C" },
                { code: "MAC 307", title: "Feature and Editorial Writing", units: 3, type: "C" },
                { code: "MAC 309", title: "Online and Digital Journalism I", units: 3, type: "C" },
                { code: "MAC 311", title: "Development Communication", units: 3, type: "C" },
                { code: "MAC 313", title: "International Communication", units: 3, type: "C" },
                { code: "MAC 315", title: "Research Methods in Mass Communication I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "MAC 302", title: "Broadcast Journalism II", units: 3, type: "C" },
                { code: "MAC 304", title: "Media Law and Ethics II", units: 3, type: "C" },
                { code: "MAC 306", title: "Advertising III (Campaign Planning)", units: 3, type: "C" },
                { code: "MAC 308", title: "Investigative Journalism", units: 3, type: "C" },
                { code: "MAC 310", title: "Online and Digital Journalism II", units: 3, type: "C" },
                { code: "MAC 312", title: "Political Communication", units: 3, type: "C" },
                { code: "MAC 314", title: "Film and Documentary Production I", units: 3, type: "C" },
                { code: "MAC 316", title: "Research Methods in Mass Communication II", units: 2, type: "C" },
                { code: "MAC 300", title: "SIWES (Industrial Training)", units: 6, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "MAC 401", title: "Advanced Television Production", units: 3, type: "C" },
                { code: "MAC 403", title: "Media Management and Entrepreneurship", units: 3, type: "C" },
                { code: "MAC 405", title: "Social Media and New Media", units: 3, type: "C" },
                { code: "MAC 407", title: "Film and Documentary Production II", units: 3, type: "C" },
                { code: "MAC 409", title: "Health Communication", units: 3, type: "E" },
                { code: "MAC 411", title: "Science and Environmental Journalism", units: 3, type: "E" },
                { code: "MAC 413", title: "Sports Journalism", units: 3, type: "E" },
                { code: "MAC 415", title: "Crisis Communication", units: 3, type: "E" },
                { code: "MAC 499", title: "Final Year Project I", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "MAC 402", title: "Advanced Radio Production", units: 3, type: "C" },
                { code: "MAC 404", title: "Public Opinion and Propaganda", units: 3, type: "C" },
                { code: "MAC 406", title: "Data Journalism", units: 3, type: "C" },
                { code: "MAC 408", title: "Integrated Marketing Communication", units: 3, type: "E" },
                { code: "MAC 410", title: "Media Criticism and Analysis", units: 3, type: "E" },
                { code: "MAC 412", title: "Corporate Communication", units: 3, type: "E" },
                { code: "MAC 414", title: "Multimedia Storytelling", units: 3, type: "E" },
                { code: "MAC 416", title: "Mass Communication Seminar", units: 2, type: "C" },
                { code: "MAC 498", title: "Final Year Project II", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 4: LIBRARY AND INFORMATION SCIENCE
    // ======================================================
    {
      id: 704,
      name: "Library and Information Science",
      code: "LIS",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "LIS 101", title: "Introduction to Library and Information Science I", units: 3, type: "C" },
                { code: "LIS 103", title: "History of Libraries and Librarianship", units: 3, type: "C" },
                { code: "LIS 105", title: "Information and Society", units: 2, type: "C" },
                { code: "LIS 107", title: "Introduction to Information Technology", units: 3, type: "C" },
                { code: "CSC 101", title: "Introduction to Computer Science", units: 3, type: "C" },
                { code: "ELS 101", title: "Introduction to Literature I", units: 3, type: "R" },
                { code: "SOC 101", title: "Introduction to Sociology I", units: 3, type: "R" },
                { code: "STA 101", title: "Introduction to Statistics I", units: 3, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "LIS 102", title: "Introduction to Library and Information Science II", units: 3, type: "C" },
                { code: "LIS 104", title: "Types of Libraries and Information Centers", units: 3, type: "C" },
                { code: "LIS 106", title: "Information Sources and Services I", units: 3, type: "C" },
                { code: "LIS 108", title: "Introduction to Knowledge Organization", units: 3, type: "C" },
                { code: "CSC 102", title: "Introduction to Computer Hardware", units: 3, type: "C" },
                { code: "ELS 102", title: "Introduction to Literature II", units: 3, type: "R" },
                { code: "SOC 102", title: "Introduction to Sociology II", units: 3, type: "R" },
                { code: "STA 102", title: "Introduction to Statistics II", units: 3, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "LIS 201", title: "Cataloguing and Classification I (Descriptive)", units: 3, type: "C" },
                { code: "LIS 203", title: "Information Sources and Services II (Reference)", units: 3, type: "C" },
                { code: "LIS 205", title: "Collection Development and Management I", units: 3, type: "C" },
                { code: "LIS 207", title: "Library Automation I", units: 3, type: "C" },
                { code: "LIS 209", title: "Introduction to Archives and Records Management", units: 3, type: "C" },
                { code: "LIS 211", title: "Government Publications and Information", units: 3, type: "C" },
                { code: "CSC 211", title: "Web Development I", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Social Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "LIS 202", title: "Cataloguing and Classification II (DDC & LCC)", units: 3, type: "C" },
                { code: "LIS 204", title: "Bibliography and Bibliographic Control", units: 3, type: "C" },
                { code: "LIS 206", title: "Collection Development and Management II", units: 3, type: "C" },
                { code: "LIS 208", title: "Library Automation II", units: 3, type: "C" },
                { code: "LIS 210", title: "Indexing and Abstracting", units: 3, type: "C" },
                { code: "LIS 212", title: "Children and Young Adult Services", units: 3, type: "C" },
                { code: "CSC 212", title: "Web Development II", units: 3, type: "C" },
                { code: "CSC 214", title: "Introduction to Database Systems", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "LIS 301", title: "Advanced Cataloguing and Classification (MARC & Metadata)", units: 3, type: "C" },
                { code: "LIS 303", title: "Information Retrieval Systems I", units: 3, type: "C" },
                { code: "LIS 305", title: "Library Management and Administration I", units: 3, type: "C" },
                { code: "LIS 307", title: "Digital Libraries I", units: 3, type: "C" },
                { code: "LIS 309", title: "Information Literacy and User Education", units: 3, type: "C" },
                { code: "LIS 311", title: "Serials Management", units: 3, type: "C" },
                { code: "LIS 313", title: "Archives and Records Management I", units: 3, type: "C" },
                { code: "LIS 315", title: "Research Methods in Library and Information Science I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "LIS 302", title: "Subject Analysis and Thesaurus Construction", units: 3, type: "C" },
                { code: "LIS 304", title: "Information Retrieval Systems II", units: 3, type: "C" },
                { code: "LIS 306", title: "Library Management and Administration II", units: 3, type: "C" },
                { code: "LIS 308", title: "Digital Libraries II", units: 3, type: "C" },
                { code: "LIS 310", title: "Information Policy and Legislation", units: 3, type: "C" },
                { code: "LIS 312", title: "Preservation and Conservation of Library Materials", units: 3, type: "C" },
                { code: "LIS 314", title: "Archives and Records Management II", units: 3, type: "C" },
                { code: "LIS 316", title: "Research Methods in Library and Information Science II", units: 2, type: "C" },
                { code: "LIS 300", title: "SIWES (Industrial Training)", units: 6, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "LIS 401", title: "Knowledge Management I", units: 3, type: "C" },
                { code: "LIS 403", title: "Information Systems Analysis and Design", units: 3, type: "C" },
                { code: "LIS 405", title: "Academic Library Services", units: 3, type: "C" },
                { code: "LIS 407", title: "Health Information Services", units: 3, type: "E" },
                { code: "LIS 409", title: "Legal Information Services", units: 3, type: "E" },
                { code: "LIS 411", title: "Business Information Services", units: 3, type: "E" },
                { code: "LIS 413", title: "Open Access and Scholarly Communication", units: 3, type: "E" },
                { code: "LIS 415", title: "Data Curation and Management", units: 3, type: "E" },
                { code: "LIS 499", title: "Final Year Project I", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "LIS 402", title: "Knowledge Management II", units: 3, type: "C" },
                { code: "LIS 404", title: "Information Architecture and User Experience", units: 3, type: "C" },
                { code: "LIS 406", title: "Public Library Services", units: 3, type: "C" },
                { code: "LIS 408", title: "Special Libraries Management", units: 3, type: "E" },
                { code: "LIS 410", title: "Competitive Intelligence", units: 3, type: "E" },
                { code: "LIS 412", title: "Social Media in Libraries", units: 3, type: "E" },
                { code: "LIS 414", title: "Information Entrepreneurship", units: 3, type: "E" },
                { code: "LIS 416", title: "Library and Information Science Seminar", units: 2, type: "C" },
                { code: "LIS 498", title: "Final Year Project II", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 5: INFORMATION TECHNOLOGY
    // ======================================================
    {
      id: 705,
      name: "Information Technology",
      code: "IFT",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "IFT 101", title: "Introduction to Information Technology", units: 3, type: "C" },
                { code: "IFT 103", title: "IT Infrastructure Fundamentals", units: 3, type: "C" },
                { code: "CSC 101", title: "Introduction to Computer Science", units: 3, type: "C" },
                { code: "CSC 105", title: "Introduction to Computer Programming I (Python)", units: 3, type: "C" },
                { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                { code: "PHY 101", title: "General Physics I (Mechanics)", units: 3, type: "C" },
                { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                { code: "STA 101", title: "Introduction to Statistics I", units: 3, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "IFT 102", title: "IT Applications and Tools", units: 3, type: "C" },
                { code: "IFT 104", title: "Introduction to Networking", units: 3, type: "C" },
                { code: "CSC 102", title: "Introduction to Computer Hardware", units: 3, type: "C" },
                { code: "CSC 104", title: "Introduction to Computer Programming II (C)", units: 3, type: "C" },
                { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                { code: "STA 102", title: "Introduction to Statistics II", units: 3, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "IFT 201", title: "Operating Systems Administration I", units: 3, type: "C" },
                { code: "IFT 203", title: "Network Administration I", units: 3, type: "C" },
                { code: "IFT 205", title: "Web Technologies I", units: 3, type: "C" },
                { code: "IFT 207", title: "Database Administration I", units: 3, type: "C" },
                { code: "IFT 209", title: "IT Service Management", units: 3, type: "C" },
                { code: "CSC 203", title: "Data Structures and Algorithms I", units: 3, type: "C" },
                { code: "CSC 205", title: "Computer Architecture and Organization I", units: 3, type: "C" },
                { code: "MTH 207", title: "Discrete Mathematics I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "IFT 202", title: "Operating Systems Administration II", units: 3, type: "C" },
                { code: "IFT 204", title: "Network Administration II", units: 3, type: "C" },
                { code: "IFT 206", title: "Web Technologies II", units: 3, type: "C" },
                { code: "IFT 208", title: "Database Administration II", units: 3, type: "C" },
                { code: "IFT 210", title: "IT Project Fundamentals", units: 3, type: "C" },
                { code: "CSC 204", title: "Data Structures and Algorithms II", units: 3, type: "C" },
                { code: "CSC 214", title: "Introduction to Database Systems", units: 3, type: "C" },
                { code: "IFT 212", title: "Scripting Languages (Bash, PowerShell)", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "IFT 301", title: "Enterprise Networking I (Routing & Switching)", units: 3, type: "C" },
                { code: "IFT 303", title: "IT Security I", units: 3, type: "C" },
                { code: "IFT 305", title: "Cloud Computing Fundamentals", units: 3, type: "C" },
                { code: "IFT 307", title: "Server Administration I (Windows)", units: 3, type: "C" },
                { code: "IFT 309", title: "Virtualization Technologies", units: 3, type: "C" },
                { code: "IFT 311", title: "IT Governance and Compliance", units: 3, type: "C" },
                { code: "CSC 307", title: "Software Engineering I", units: 3, type: "C" },
                { code: "IFT 313", title: "Research Methods in Information Technology", units: 2, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "IFT 302", title: "Enterprise Networking II (WAN Technologies)", units: 3, type: "C" },
                { code: "IFT 304", title: "IT Security II", units: 3, type: "C" },
                { code: "IFT 306", title: "Cloud Services and Deployment", units: 3, type: "C" },
                { code: "IFT 308", title: "Server Administration II (Linux)", units: 3, type: "C" },
                { code: "IFT 310", title: "Mobile Technologies and Applications", units: 3, type: "C" },
                { code: "IFT 312", title: "IT Business Continuity and Disaster Recovery", units: 3, type: "C" },
                { code: "CSC 308", title: "Software Engineering II", units: 3, type: "C" },
                { code: "IFT 300", title: "SIWES (Industrial Training)", units: 6, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "IFT 401", title: "Enterprise Architecture", units: 3, type: "C" },
                { code: "IFT 403", title: "Advanced Cloud Computing (AWS/Azure)", units: 3, type: "C" },
                { code: "IFT 405", title: "DevOps and Continuous Integration", units: 3, type: "C" },
                { code: "IFT 407", title: "IT Project Management", units: 3, type: "C" },
                { code: "IFT 409", title: "Wireless and Mobile Network Administration", units: 3, type: "E" },
                { code: "IFT 411", title: "Data Center Management", units: 3, type: "E" },
                { code: "IFT 413", title: "Network Automation and Programmability", units: 3, type: "E" },
                { code: "IFT 415", title: "Emerging Technologies in IT", units: 3, type: "E" },
                { code: "IFT 499", title: "Final Year Project I", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "IFT 402", title: "Advanced Network Security", units: 3, type: "C" },
                { code: "IFT 404", title: "Infrastructure as Code (Terraform, Ansible)", units: 3, type: "C" },
                { code: "IFT 406", title: "IT Service Management (ITIL)", units: 3, type: "C" },
                { code: "IFT 408", title: "Containerization and Orchestration (Docker, Kubernetes)", units: 3, type: "E" },
                { code: "IFT 410", title: "IT Auditing", units: 3, type: "E" },
                { code: "IFT 412", title: "Green IT and Sustainability", units: 3, type: "E" },
                { code: "IFT 414", title: "IT Entrepreneurship and Consulting", units: 3, type: "E" },
                { code: "IFT 416", title: "Information Technology Seminar", units: 2, type: "C" },
                { code: "IFT 498", title: "Final Year Project II", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 6: SOFTWARE ENGINEERING
    // ======================================================
    {
      id: 706,
      name: "Software Engineering",
      code: "SEN",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "SEN 101", title: "Introduction to Software Engineering", units: 3, type: "C" },
                { code: "SEN 103", title: "Foundations of Programming I", units: 3, type: "C" },
                { code: "CSC 101", title: "Introduction to Computer Science", units: 3, type: "C" },
                { code: "CSC 105", title: "Introduction to Computer Programming I (Python)", units: 3, type: "C" },
                { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                { code: "MTH 103", title: "Elementary Mathematics III (Vectors & Geometry)", units: 3, type: "C" },
                { code: "PHY 101", title: "General Physics I (Mechanics)", units: 3, type: "C" },
                { code: "STA 101", title: "Introduction to Statistics I", units: 3, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "SEN 102", title: "Software Development Life Cycle", units: 3, type: "C" },
                { code: "SEN 104", title: "Foundations of Programming II", units: 3, type: "C" },
                { code: "CSC 102", title: "Introduction to Computer Hardware", units: 3, type: "C" },
                { code: "CSC 104", title: "Introduction to Computer Programming II (C)", units: 3, type: "C" },
                { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                { code: "MTH 104", title: "Elementary Mathematics IV (Sets & Logic)", units: 3, type: "C" },
                { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                { code: "STA 102", title: "Introduction to Statistics II", units: 3, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "SEN 201", title: "Object-Oriented Programming (Java)", units: 3, type: "C" },
                { code: "SEN 203", title: "Requirements Engineering", units: 3, type: "C" },
                { code: "SEN 205", title: "Software Design Principles I", units: 3, type: "C" },
                { code: "SEN 207", title: "Version Control Systems (Git)", units: 2, type: "C" },
                { code: "CSC 203", title: "Data Structures and Algorithms I", units: 3, type: "C" },
                { code: "CSC 209", title: "Operating Systems I", units: 3, type: "C" },
                { code: "CSC 211", title: "Web Development I", units: 3, type: "C" },
                { code: "MTH 207", title: "Discrete Mathematics I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "SEN 202", title: "Object-Oriented Analysis and Design (UML)", units: 3, type: "C" },
                { code: "SEN 204", title: "Software Design Principles II (Design Patterns)", units: 3, type: "C" },
                { code: "SEN 206", title: "Database Design and Development", units: 3, type: "C" },
                { code: "SEN 208", title: "Agile Software Development", units: 3, type: "C" },
                { code: "CSC 204", title: "Data Structures and Algorithms II", units: 3, type: "C" },
                { code: "CSC 210", title: "Operating Systems II", units: 3, type: "C" },
                { code: "CSC 212", title: "Web Development II", units: 3, type: "C" },
                { code: "MTH 208", title: "Discrete Mathematics II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "SEN 301", title: "Software Architecture I", units: 3, type: "C" },
                { code: "SEN 303", title: "Software Testing and Quality Assurance I", units: 3, type: "C" },
                { code: "SEN 305", title: "Software Project Management I", units: 3, type: "C" },
                { code: "SEN 307", title: "Frontend Development (React/Angular)", units: 3, type: "C" },
                { code: "SEN 309", title: "Backend Development (Node.js/Django)", units: 3, type: "C" },
                { code: "SEN 311", title: "Mobile App Development I (Android)", units: 3, type: "C" },
                { code: "CSC 305", title: "Computer Networks I", units: 3, type: "C" },
                { code: "SEN 313", title: "Research Methods in Software Engineering", units: 2, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "SEN 302", title: "Software Architecture II (Microservices)", units: 3, type: "C" },
                { code: "SEN 304", title: "Software Testing and Quality Assurance II", units: 3, type: "C" },
                { code: "SEN 306", title: "Software Project Management II", units: 3, type: "C" },
                { code: "SEN 308", title: "Full-Stack Development", units: 3, type: "C" },
                { code: "SEN 310", title: "API Design and Development", units: 3, type: "C" },
                { code: "SEN 312", title: "Mobile App Development II (iOS/Cross-Platform)", units: 3, type: "C" },
                { code: "CSC 306", title: "Computer Networks II", units: 3, type: "C" },
                { code: "SEN 300", title: "SIWES (Industrial Training)", units: 6, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "SEN 401", title: "Software Engineering for Machine Learning", units: 3, type: "C" },
                { code: "SEN 403", title: "DevOps and CI/CD", units: 3, type: "C" },
                { code: "SEN 405", title: "Cloud-Native Application Development", units: 3, type: "C" },
                { code: "SEN 407", title: "Software Security Engineering", units: 3, type: "C" },
                { code: "SEN 409", title: "Game Development", units: 3, type: "E" },
                { code: "SEN 411", title: "Embedded Systems Programming", units: 3, type: "E" },
                { code: "SEN 413", title: "Software Product Management", units: 3, type: "E" },
                { code: "SEN 415", title: "Open Source Software Development", units: 3, type: "E" },
                { code: "SEN 499", title: "Final Year Project I", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "SEN 402", title: "Software Maintenance and Evolution", units: 3, type: "C" },
                { code: "SEN 404", title: "Software Engineering Ethics and Professionalism", units: 3, type: "C" },
                { code: "SEN 406", title: "Advanced Software Testing (Automation)", units: 3, type: "E" },
                { code: "SEN 408", title: "Site Reliability Engineering", units: 3, type: "E" },
                { code: "SEN 410", title: "Software Entrepreneurship", units: 3, type: "E" },
                { code: "SEN 412", title: "Human-Computer Interaction and UX Design", units: 3, type: "E" },
                { code: "SEN 414", title: "Low-Code/No-Code Development Platforms", units: 3, type: "E" },
                { code: "SEN 416", title: "Software Engineering Seminar", units: 2, type: "C" },
                { code: "SEN 498", title: "Final Year Project II", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    }
  ] // end departments array
}, // end Faculty of ICT

{
  id: 6,
  name: "Faculty of Law",
  code: "LAW",
  duration: 5,
  departments: [

    // ======================================================
    // DEPARTMENT 1: PRIVATE AND PROPERTY LAW
    // ======================================================
    {
      id: 601,
      name: "Private and Property Law",
      code: "PPL",
      duration: 5,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "LAW 101", title: "Introduction to Law I (Nature and Sources of Law)", units: 4, type: "C" },
                { code: "LAW 103", title: "Nigerian Legal System I", units: 3, type: "C" },
                { code: "LAW 105", title: "Legal Methods I", units: 3, type: "C" },
                { code: "POL 101", title: "Introduction to Political Science I", units: 3, type: "R" },
                { code: "ECO 101", title: "Principles of Economics I", units: 3, type: "R" },
                { code: "PHI 101", title: "Introduction to Philosophy I (Logic)", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "LAW 102", title: "Introduction to Law II (Classification of Law)", units: 4, type: "C" },
                { code: "LAW 104", title: "Nigerian Legal System II", units: 3, type: "C" },
                { code: "LAW 106", title: "Legal Methods II (Legal Writing)", units: 3, type: "C" },
                { code: "POL 102", title: "Introduction to Political Science II", units: 3, type: "R" },
                { code: "ECO 102", title: "Principles of Economics II", units: 3, type: "R" },
                { code: "SOC 102", title: "Introduction to Sociology II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "LAW 201", title: "Law of Contract I (Formation & Terms)", units: 4, type: "C" },
                { code: "LAW 203", title: "Law of Torts I (General Principles)", units: 4, type: "C" },
                { code: "LAW 205", title: "Constitutional Law I (History & Structure)", units: 4, type: "C" },
                { code: "LAW 207", title: "Criminal Law I (General Principles)", units: 4, type: "C" },
                { code: "LAW 209", title: "Legal Research and Methodology I", units: 2, type: "C" },
                { code: "LAW 211", title: "Introduction to Customary Law", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "LAW 202", title: "Law of Contract II (Vitiating Factors & Discharge)", units: 4, type: "C" },
                { code: "LAW 204", title: "Law of Torts II (Specific Torts)", units: 4, type: "C" },
                { code: "LAW 206", title: "Constitutional Law II (Fundamental Rights)", units: 4, type: "C" },
                { code: "LAW 208", title: "Criminal Law II (Offences)", units: 4, type: "C" },
                { code: "LAW 210", title: "Legal Research and Methodology II", units: 2, type: "C" },
                { code: "LAW 212", title: "Introduction to Islamic Law (Sharia)", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "LAW 301", title: "Law of Contract III (Remedies & Quasi-Contract)", units: 3, type: "C" },
                { code: "LAW 303", title: "Land Law I (Tenure Systems & Interests)", units: 4, type: "C" },
                { code: "LAW 305", title: "Equity and Trusts I (History & Maxims)", units: 4, type: "C" },
                { code: "LAW 307", title: "Commercial Law I (Agency & Sale of Goods)", units: 4, type: "C" },
                { code: "LAW 309", title: "Family Law I (Marriage & Matrimonial Causes)", units: 3, type: "C" },
                { code: "LAW 311", title: "Law of Evidence I (General Principles)", units: 4, type: "C" },
                { code: "LAW 313", title: "Jurisprudence I (Legal Theory)", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "LAW 302", title: "Law of Torts III (Defences & Remedies)", units: 3, type: "C" },
                { code: "LAW 304", title: "Land Law II (Conveyancing & Registration)", units: 4, type: "C" },
                { code: "LAW 306", title: "Equity and Trusts II (Trusts & Fiduciary Duties)", units: 4, type: "C" },
                { code: "LAW 308", title: "Commercial Law II (Hire Purchase & Insurance)", units: 4, type: "C" },
                { code: "LAW 310", title: "Family Law II (Custody, Adoption & Inheritance)", units: 3, type: "C" },
                { code: "LAW 312", title: "Law of Evidence II (Burden of Proof & Witnesses)", units: 4, type: "C" },
                { code: "LAW 314", title: "Jurisprudence II (Sociological & Analytical)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "LAW 401", title: "Company Law I (Formation & Corporate Personality)", units: 4, type: "C" },
                { code: "LAW 403", title: "Administrative Law I (Powers & Judicial Review)", units: 4, type: "C" },
                { code: "LAW 405", title: "Law of Banking and Negotiable Instruments I", units: 3, type: "C" },
                { code: "LAW 407", title: "Labour Law I (Employment Contracts & Conditions)", units: 3, type: "C" },
                { code: "LAW 409", title: "Intellectual Property Law I (Patents & Trademarks)", units: 3, type: "C" },
                { code: "LAW 411", title: "Private International Law I (Conflict of Laws)", units: 3, type: "C" },
                { code: "LAW 413", title: "Taxation Law I (Personal Income Tax)", units: 3, type: "C" },
                { code: "LAW 415", title: "Moot Court I", units: 2, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "LAW 402", title: "Company Law II (Management & Winding Up)", units: 4, type: "C" },
                { code: "LAW 404", title: "Administrative Law II (Tribunals & Ombudsman)", units: 4, type: "C" },
                { code: "LAW 406", title: "Law of Banking and Negotiable Instruments II", units: 3, type: "C" },
                { code: "LAW 408", title: "Labour Law II (Trade Unions & Industrial Relations)", units: 3, type: "C" },
                { code: "LAW 410", title: "Intellectual Property Law II (Copyright & Trade Secrets)", units: 3, type: "C" },
                { code: "LAW 412", title: "Private International Law II", units: 3, type: "C" },
                { code: "LAW 414", title: "Taxation Law II (Company & Capital Gains Tax)", units: 3, type: "C" },
                { code: "LAW 416", title: "Moot Court II", units: 2, type: "C" },
                { code: "LAW 400", title: "Long Vacation Legal Aid Clinic", units: 4, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 500,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "LAW 501", title: "Civil Procedure I (Pre-Trial & Trial)", units: 4, type: "C" },
                { code: "LAW 503", title: "Criminal Procedure I (Investigation & Arrest)", units: 4, type: "C" },
                { code: "LAW 505", title: "Law of Succession I (Testate)", units: 3, type: "C" },
                { code: "LAW 507", title: "Oil and Gas Law I", units: 3, type: "E" },
                { code: "LAW 509", title: "Environmental Law I", units: 3, type: "E" },
                { code: "LAW 511", title: "Maritime and Admiralty Law I", units: 3, type: "E" },
                { code: "LAW 513", title: "Human Rights Law I", units: 3, type: "E" },
                { code: "LAW 515", title: "Law Clinic I (Practical Training)", units: 4, type: "C" },
                { code: "LAW 599", title: "Research Project I (Long Essay)", units: 3, type: "C" },
                { code: "VTE 501", title: "Research Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "LAW 502", title: "Civil Procedure II (Judgment & Enforcement)", units: 4, type: "C" },
                { code: "LAW 504", title: "Criminal Procedure II (Trial & Sentencing)", units: 4, type: "C" },
                { code: "LAW 506", title: "Law of Succession II (Intestate & Administration)", units: 3, type: "C" },
                { code: "LAW 508", title: "Oil and Gas Law II", units: 3, type: "E" },
                { code: "LAW 510", title: "Environmental Law II", units: 3, type: "E" },
                { code: "LAW 512", title: "Maritime and Admiralty Law II", units: 3, type: "E" },
                { code: "LAW 514", title: "Human Rights Law II", units: 3, type: "E" },
                { code: "LAW 516", title: "Law Clinic II", units: 4, type: "C" },
                { code: "LAW 518", title: "Legal Drafting and Conveyancing", units: 3, type: "C" },
                { code: "LAW 598", title: "Research Project II (Long Essay)", units: 3, type: "C" },
                { code: "VTE 503", title: "Seminar in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 2: PUBLIC AND INTERNATIONAL LAW
    // ======================================================
    {
      id: 602,
      name: "Public and International Law",
      code: "PIL",
      duration: 5,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "LAW 101", title: "Introduction to Law I (Nature and Sources of Law)", units: 4, type: "C" },
                { code: "LAW 103", title: "Nigerian Legal System I", units: 3, type: "C" },
                { code: "LAW 105", title: "Legal Methods I", units: 3, type: "C" },
                { code: "POL 101", title: "Introduction to Political Science I", units: 3, type: "R" },
                { code: "ECO 101", title: "Principles of Economics I", units: 3, type: "R" },
                { code: "PHI 101", title: "Introduction to Philosophy I (Logic)", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "LAW 102", title: "Introduction to Law II (Classification of Law)", units: 4, type: "C" },
                { code: "LAW 104", title: "Nigerian Legal System II", units: 3, type: "C" },
                { code: "LAW 106", title: "Legal Methods II (Legal Writing)", units: 3, type: "C" },
                { code: "POL 102", title: "Introduction to Political Science II", units: 3, type: "R" },
                { code: "ECO 102", title: "Principles of Economics II", units: 3, type: "R" },
                { code: "HIS 102", title: "Introduction to African History II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "LAW 201", title: "Law of Contract I (Formation & Terms)", units: 4, type: "C" },
                { code: "LAW 203", title: "Law of Torts I (General Principles)", units: 4, type: "C" },
                { code: "LAW 205", title: "Constitutional Law I (History & Structure)", units: 4, type: "C" },
                { code: "LAW 207", title: "Criminal Law I (General Principles)", units: 4, type: "C" },
                { code: "LAW 209", title: "Legal Research and Methodology I", units: 2, type: "C" },
                { code: "LAW 221", title: "Public International Law I (Sources & Subjects)", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "LAW 202", title: "Law of Contract II (Vitiating Factors & Discharge)", units: 4, type: "C" },
                { code: "LAW 204", title: "Law of Torts II (Specific Torts)", units: 4, type: "C" },
                { code: "LAW 206", title: "Constitutional Law II (Fundamental Rights)", units: 4, type: "C" },
                { code: "LAW 208", title: "Criminal Law II (Offences)", units: 4, type: "C" },
                { code: "LAW 210", title: "Legal Research and Methodology II", units: 2, type: "C" },
                { code: "LAW 222", title: "Public International Law II (State Responsibility)", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "LAW 301", title: "Law of Contract III (Remedies & Quasi-Contract)", units: 3, type: "C" },
                { code: "LAW 303", title: "Land Law I (Tenure Systems & Interests)", units: 4, type: "C" },
                { code: "LAW 305", title: "Equity and Trusts I (History & Maxims)", units: 4, type: "C" },
                { code: "LAW 321", title: "Public International Law III (Treaties & Diplomacy)", units: 4, type: "C" },
                { code: "LAW 323", title: "International Humanitarian Law", units: 3, type: "C" },
                { code: "LAW 311", title: "Law of Evidence I (General Principles)", units: 4, type: "C" },
                { code: "LAW 313", title: "Jurisprudence I (Legal Theory)", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "LAW 302", title: "Law of Torts III (Defences & Remedies)", units: 3, type: "C" },
                { code: "LAW 304", title: "Land Law II (Conveyancing & Registration)", units: 4, type: "C" },
                { code: "LAW 306", title: "Equity and Trusts II (Trusts & Fiduciary Duties)", units: 4, type: "C" },
                { code: "LAW 322", title: "International Criminal Law", units: 4, type: "C" },
                { code: "LAW 324", title: "International Human Rights Law I", units: 3, type: "C" },
                { code: "LAW 312", title: "Law of Evidence II (Burden of Proof & Witnesses)", units: 4, type: "C" },
                { code: "LAW 314", title: "Jurisprudence II (Sociological & Analytical)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "LAW 401", title: "Company Law I (Formation & Corporate Personality)", units: 4, type: "C" },
                { code: "LAW 403", title: "Administrative Law I (Powers & Judicial Review)", units: 4, type: "C" },
                { code: "LAW 421", title: "International Economic Law I (Trade & WTO)", units: 3, type: "C" },
                { code: "LAW 423", title: "International Human Rights Law II", units: 3, type: "C" },
                { code: "LAW 425", title: "Law of International Organizations", units: 3, type: "C" },
                { code: "LAW 427", title: "International Environmental Law I", units: 3, type: "C" },
                { code: "LAW 415", title: "Moot Court I", units: 2, type: "C" },
                { code: "LAW 429", title: "Refugee and Migration Law", units: 3, type: "E" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "LAW 402", title: "Company Law II (Management & Winding Up)", units: 4, type: "C" },
                { code: "LAW 404", title: "Administrative Law II (Tribunals & Ombudsman)", units: 4, type: "C" },
                { code: "LAW 422", title: "International Economic Law II (Investment)", units: 3, type: "C" },
                { code: "LAW 424", title: "Law of the Sea", units: 3, type: "C" },
                { code: "LAW 426", title: "African Union Law and Regional Integration", units: 3, type: "C" },
                { code: "LAW 428", title: "International Environmental Law II", units: 3, type: "C" },
                { code: "LAW 416", title: "Moot Court II", units: 2, type: "C" },
                { code: "LAW 400", title: "Long Vacation Legal Aid Clinic", units: 4, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 500,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "LAW 501", title: "Civil Procedure I (Pre-Trial & Trial)", units: 4, type: "C" },
                { code: "LAW 503", title: "Criminal Procedure I (Investigation & Arrest)", units: 4, type: "C" },
                { code: "LAW 521", title: "International Dispute Settlement", units: 3, type: "C" },
                { code: "LAW 523", title: "International Terrorism and Security Law", units: 3, type: "E" },
                { code: "LAW 525", title: "Comparative Constitutional Law", units: 3, type: "E" },
                { code: "LAW 527", title: "Cyber Law and Internet Governance", units: 3, type: "E" },
                { code: "LAW 515", title: "Law Clinic I (Practical Training)", units: 4, type: "C" },
                { code: "LAW 599", title: "Research Project I (Long Essay)", units: 3, type: "C" },
                { code: "VTE 501", title: "Research Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "LAW 502", title: "Civil Procedure II (Judgment & Enforcement)", units: 4, type: "C" },
                { code: "LAW 504", title: "Criminal Procedure II (Trial & Sentencing)", units: 4, type: "C" },
                { code: "LAW 522", title: "International Arbitration and ADR", units: 3, type: "C" },
                { code: "LAW 524", title: "Space Law and Air Law", units: 3, type: "E" },
                { code: "LAW 526", title: "International Trade Law (Advanced)", units: 3, type: "E" },
                { code: "LAW 528", title: "Diplomatic and Consular Law", units: 3, type: "E" },
                { code: "LAW 516", title: "Law Clinic II", units: 4, type: "C" },
                { code: "LAW 518", title: "Legal Drafting and Conveyancing", units: 3, type: "C" },
                { code: "LAW 598", title: "Research Project II (Long Essay)", units: 3, type: "C" },
                { code: "VTE 503", title: "Seminar in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 3: JURISPRUDENCE AND LEGAL THEORY
    // ======================================================
    {
      id: 603,
      name: "Jurisprudence and Legal Theory",
      code: "JLT",
      duration: 5,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "LAW 101", title: "Introduction to Law I (Nature and Sources of Law)", units: 4, type: "C" },
                { code: "LAW 103", title: "Nigerian Legal System I", units: 3, type: "C" },
                { code: "LAW 105", title: "Legal Methods I", units: 3, type: "C" },
                { code: "POL 101", title: "Introduction to Political Science I", units: 3, type: "R" },
                { code: "PHI 101", title: "Introduction to Philosophy I (Logic)", units: 3, type: "R" },
                { code: "PHI 103", title: "Introduction to Ethics", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "LAW 102", title: "Introduction to Law II (Classification of Law)", units: 4, type: "C" },
                { code: "LAW 104", title: "Nigerian Legal System II", units: 3, type: "C" },
                { code: "LAW 106", title: "Legal Methods II (Legal Writing)", units: 3, type: "C" },
                { code: "POL 102", title: "Introduction to Political Science II", units: 3, type: "R" },
                { code: "PHI 102", title: "Introduction to Philosophy II", units: 3, type: "R" },
                { code: "SOC 102", title: "Introduction to Sociology II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "LAW 201", title: "Law of Contract I (Formation & Terms)", units: 4, type: "C" },
                { code: "LAW 203", title: "Law of Torts I (General Principles)", units: 4, type: "C" },
                { code: "LAW 205", title: "Constitutional Law I (History & Structure)", units: 4, type: "C" },
                { code: "LAW 207", title: "Criminal Law I (General Principles)", units: 4, type: "C" },
                { code: "LAW 209", title: "Legal Research and Methodology I", units: 2, type: "C" },
                { code: "LAW 231", title: "Legal Philosophy I (Natural Law)", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "LAW 202", title: "Law of Contract II (Vitiating Factors & Discharge)", units: 4, type: "C" },
                { code: "LAW 204", title: "Law of Torts II (Specific Torts)", units: 4, type: "C" },
                { code: "LAW 206", title: "Constitutional Law II (Fundamental Rights)", units: 4, type: "C" },
                { code: "LAW 208", title: "Criminal Law II (Offences)", units: 4, type: "C" },
                { code: "LAW 210", title: "Legal Research and Methodology II", units: 2, type: "C" },
                { code: "LAW 232", title: "Legal Philosophy II (Positivism)", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "LAW 301", title: "Law of Contract III (Remedies & Quasi-Contract)", units: 3, type: "C" },
                { code: "LAW 303", title: "Land Law I (Tenure Systems & Interests)", units: 4, type: "C" },
                { code: "LAW 305", title: "Equity and Trusts I (History & Maxims)", units: 4, type: "C" },
                { code: "LAW 313", title: "Jurisprudence I (Legal Theory)", units: 4, type: "C" },
                { code: "LAW 331", title: "African Legal Philosophy", units: 3, type: "C" },
                { code: "LAW 311", title: "Law of Evidence I (General Principles)", units: 4, type: "C" },
                { code: "LAW 333", title: "Sociology of Law", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "LAW 302", title: "Law of Torts III (Defences & Remedies)", units: 3, type: "C" },
                { code: "LAW 304", title: "Land Law II (Conveyancing & Registration)", units: 4, type: "C" },
                { code: "LAW 306", title: "Equity and Trusts II (Trusts & Fiduciary Duties)", units: 4, type: "C" },
                { code: "LAW 314", title: "Jurisprudence II (Sociological & Analytical)", units: 4, type: "C" },
                { code: "LAW 332", title: "Legal Reasoning and Interpretation", units: 3, type: "C" },
                { code: "LAW 312", title: "Law of Evidence II (Burden of Proof & Witnesses)", units: 4, type: "C" },
                { code: "LAW 334", title: "Law and Economics", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "LAW 401", title: "Company Law I (Formation & Corporate Personality)", units: 4, type: "C" },
                { code: "LAW 403", title: "Administrative Law I (Powers & Judicial Review)", units: 4, type: "C" },
                { code: "LAW 431", title: "Comparative Legal Systems", units: 3, type: "C" },
                { code: "LAW 433", title: "Legal History I (English Legal History)", units: 3, type: "C" },
                { code: "LAW 435", title: "Feminist Legal Theory", units: 3, type: "E" },
                { code: "LAW 437", title: "Critical Legal Studies", units: 3, type: "E" },
                { code: "LAW 415", title: "Moot Court I", units: 2, type: "C" },
                { code: "LAW 439", title: "Law and Morality", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "LAW 402", title: "Company Law II (Management & Winding Up)", units: 4, type: "C" },
                { code: "LAW 404", title: "Administrative Law II (Tribunals & Ombudsman)", units: 4, type: "C" },
                { code: "LAW 432", title: "Comparative Constitutional Law", units: 3, type: "C" },
                { code: "LAW 434", title: "Legal History II (Nigerian Legal History)", units: 3, type: "C" },
                { code: "LAW 436", title: "Law and Social Justice", units: 3, type: "E" },
                { code: "LAW 438", title: "Postmodern Legal Theory", units: 3, type: "E" },
                { code: "LAW 416", title: "Moot Court II", units: 2, type: "C" },
                { code: "LAW 400", title: "Long Vacation Legal Aid Clinic", units: 4, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 500,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "LAW 501", title: "Civil Procedure I (Pre-Trial & Trial)", units: 4, type: "C" },
                { code: "LAW 503", title: "Criminal Procedure I (Investigation & Arrest)", units: 4, type: "C" },
                { code: "LAW 531", title: "Advanced Jurisprudence (Contemporary Issues)", units: 3, type: "C" },
                { code: "LAW 533", title: "Law and Literature", units: 3, type: "E" },
                { code: "LAW 535", title: "Law and Religion", units: 3, type: "E" },
                { code: "LAW 537", title: "Law and Artificial Intelligence", units: 3, type: "E" },
                { code: "LAW 515", title: "Law Clinic I (Practical Training)", units: 4, type: "C" },
                { code: "LAW 599", title: "Research Project I (Long Essay)", units: 3, type: "C" },
                { code: "VTE 501", title: "Research Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "LAW 502", title: "Civil Procedure II (Judgment & Enforcement)", units: 4, type: "C" },
                { code: "LAW 504", title: "Criminal Procedure II (Trial & Sentencing)", units: 4, type: "C" },
                { code: "LAW 532", title: "Philosophy of Human Rights", units: 3, type: "C" },
                { code: "LAW 534", title: "Law and Development", units: 3, type: "E" },
                { code: "LAW 536", title: "Therapeutic Jurisprudence", units: 3, type: "E" },
                { code: "LAW 538", title: "Legal Pluralism", units: 3, type: "E" },
                { code: "LAW 516", title: "Law Clinic II", units: 4, type: "C" },
                { code: "LAW 518", title: "Legal Drafting and Conveyancing", units: 3, type: "C" },
                { code: "LAW 598", title: "Research Project II (Long Essay)", units: 3, type: "C" },
                { code: "VTE 503", title: "Seminar in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 4: COMMERCIAL AND INDUSTRIAL LAW
    // ======================================================
    {
      id: 604,
      name: "Commercial and Industrial Law",
      code: "CIL",
      duration: 5,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "LAW 101", title: "Introduction to Law I (Nature and Sources of Law)", units: 4, type: "C" },
                { code: "LAW 103", title: "Nigerian Legal System I", units: 3, type: "C" },
                { code: "LAW 105", title: "Legal Methods I", units: 3, type: "C" },
                { code: "ECO 101", title: "Principles of Economics I", units: 3, type: "R" },
                { code: "ACC 101", title: "Principles of Accounting I", units: 3, type: "R" },
                { code: "BUS 101", title: "Introduction to Business I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "LAW 102", title: "Introduction to Law II (Classification of Law)", units: 4, type: "C" },
                { code: "LAW 104", title: "Nigerian Legal System II", units: 3, type: "C" },
                { code: "LAW 106", title: "Legal Methods II (Legal Writing)", units: 3, type: "C" },
                { code: "ECO 102", title: "Principles of Economics II", units: 3, type: "R" },
                { code: "ACC 102", title: "Principles of Accounting II", units: 3, type: "R" },
                { code: "BUS 102", title: "Introduction to Business II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "LAW 201", title: "Law of Contract I (Formation & Terms)", units: 4, type: "C" },
                { code: "LAW 203", title: "Law of Torts I (General Principles)", units: 4, type: "C" },
                { code: "LAW 205", title: "Constitutional Law I (History & Structure)", units: 4, type: "C" },
                { code: "LAW 207", title: "Criminal Law I (General Principles)", units: 4, type: "C" },
                { code: "LAW 209", title: "Legal Research and Methodology I", units: 2, type: "C" },
                { code: "LAW 241", title: "Introduction to Commercial Law", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "LAW 202", title: "Law of Contract II (Vitiating Factors & Discharge)", units: 4, type: "C" },
                { code: "LAW 204", title: "Law of Torts II (Specific Torts)", units: 4, type: "C" },
                { code: "LAW 206", title: "Constitutional Law II (Fundamental Rights)", units: 4, type: "C" },
                { code: "LAW 208", title: "Criminal Law II (Offences)", units: 4, type: "C" },
                { code: "LAW 210", title: "Legal Research and Methodology II", units: 2, type: "C" },
                { code: "LAW 242", title: "Commercial Transactions I", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "LAW 301", title: "Law of Contract III (Remedies & Quasi-Contract)", units: 3, type: "C" },
                { code: "LAW 303", title: "Land Law I (Tenure Systems & Interests)", units: 4, type: "C" },
                { code: "LAW 307", title: "Commercial Law I (Agency & Sale of Goods)", units: 4, type: "C" },
                { code: "LAW 341", title: "Law of Carriage (Goods & Passengers)", units: 3, type: "C" },
                { code: "LAW 343", title: "Insurance Law I", units: 3, type: "C" },
                { code: "LAW 311", title: "Law of Evidence I (General Principles)", units: 4, type: "C" },
                { code: "LAW 313", title: "Jurisprudence I (Legal Theory)", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "LAW 302", title: "Law of Torts III (Defences & Remedies)", units: 3, type: "C" },
                { code: "LAW 304", title: "Land Law II (Conveyancing & Registration)", units: 4, type: "C" },
                { code: "LAW 308", title: "Commercial Law II (Hire Purchase & Consumer Protection)", units: 4, type: "C" },
                { code: "LAW 342", title: "Shipping and Maritime Law I", units: 3, type: "C" },
                { code: "LAW 344", title: "Insurance Law II", units: 3, type: "C" },
                { code: "LAW 312", title: "Law of Evidence II (Burden of Proof & Witnesses)", units: 4, type: "C" },
                { code: "LAW 314", title: "Jurisprudence II (Sociological & Analytical)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "LAW 401", title: "Company Law I (Formation & Corporate Personality)", units: 4, type: "C" },
                { code: "LAW 403", title: "Administrative Law I (Powers & Judicial Review)", units: 4, type: "C" },
                { code: "LAW 405", title: "Law of Banking and Negotiable Instruments I", units: 4, type: "C" },
                { code: "LAW 441", title: "Securities and Capital Market Law I", units: 3, type: "C" },
                { code: "LAW 443", title: "Competition and Anti-Trust Law", units: 3, type: "C" },
                { code: "LAW 445", title: "Corporate Governance and Ethics", units: 3, type: "C" },
                { code: "LAW 415", title: "Moot Court I", units: 2, type: "C" },
                { code: "LAW 447", title: "E-Commerce Law", units: 3, type: "E" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "LAW 402", title: "Company Law II (Management & Winding Up)", units: 4, type: "C" },
                { code: "LAW 404", title: "Administrative Law II (Tribunals & Ombudsman)", units: 4, type: "C" },
                { code: "LAW 406", title: "Law of Banking and Negotiable Instruments II", units: 4, type: "C" },
                { code: "LAW 442", title: "Securities and Capital Market Law II", units: 3, type: "C" },
                { code: "LAW 444", title: "Bankruptcy and Insolvency Law", units: 3, type: "C" },
                { code: "LAW 446", title: "Mergers and Acquisitions Law", units: 3, type: "C" },
                { code: "LAW 416", title: "Moot Court II", units: 2, type: "C" },
                { code: "LAW 400", title: "Long Vacation Legal Aid Clinic", units: 4, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 500,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "LAW 501", title: "Civil Procedure I (Pre-Trial & Trial)", units: 4, type: "C" },
                { code: "LAW 503", title: "Criminal Procedure I (Investigation & Arrest)", units: 4, type: "C" },
                { code: "LAW 541", title: "Oil and Gas Law I (Upstream)", units: 3, type: "C" },
                { code: "LAW 543", title: "Telecommunications and Media Law", units: 3, type: "E" },
                { code: "LAW 545", title: "Construction and Engineering Law", units: 3, type: "E" },
                { code: "LAW 547", title: "Franchising and Distribution Law", units: 3, type: "E" },
                { code: "LAW 515", title: "Law Clinic I (Practical Training)", units: 4, type: "C" },
                { code: "LAW 599", title: "Research Project I (Long Essay)", units: 3, type: "C" },
                { code: "VTE 501", title: "Research Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "LAW 502", title: "Civil Procedure II (Judgment & Enforcement)", units: 4, type: "C" },
                { code: "LAW 504", title: "Criminal Procedure II (Trial & Sentencing)", units: 4, type: "C" },
                { code: "LAW 542", title: "Oil and Gas Law II (Downstream & Regulation)", units: 3, type: "C" },
                { code: "LAW 544", title: "Aviation Law", units: 3, type: "E" },
                { code: "LAW 546", title: "Sports and Entertainment Law", units: 3, type: "E" },
                { code: "LAW 548", title: "Fintech and Digital Banking Law", units: 3, type: "E" },
                { code: "LAW 516", title: "Law Clinic II", units: 4, type: "C" },
                { code: "LAW 518", title: "Legal Drafting and Conveyancing", units: 3, type: "C" },
                { code: "LAW 598", title: "Research Project II (Long Essay)", units: 3, type: "C" },
                { code: "VTE 503", title: "Seminar in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 5: COMMON LAW (General Law Programme)
    // ======================================================
    {
      id: 605,
      name: "Common Law",
      code: "CLW",
      duration: 5,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "LAW 101", title: "Introduction to Law I (Nature and Sources of Law)", units: 4, type: "C" },
                { code: "LAW 103", title: "Nigerian Legal System I", units: 3, type: "C" },
                { code: "LAW 105", title: "Legal Methods I", units: 3, type: "C" },
                { code: "POL 101", title: "Introduction to Political Science I", units: 3, type: "R" },
                { code: "ECO 101", title: "Principles of Economics I", units: 3, type: "R" },
                { code: "PHI 101", title: "Introduction to Philosophy I (Logic)", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "LAW 102", title: "Introduction to Law II (Classification of Law)", units: 4, type: "C" },
                { code: "LAW 104", title: "Nigerian Legal System II", units: 3, type: "C" },
                { code: "LAW 106", title: "Legal Methods II (Legal Writing)", units: 3, type: "C" },
                { code: "POL 102", title: "Introduction to Political Science II", units: 3, type: "R" },
                { code: "ECO 102", title: "Principles of Economics II", units: 3, type: "R" },
                { code: "SOC 102", title: "Introduction to Sociology II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "LAW 201", title: "Law of Contract I (Formation & Terms)", units: 4, type: "C" },
                { code: "LAW 203", title: "Law of Torts I (General Principles)", units: 4, type: "C" },
                { code: "LAW 205", title: "Constitutional Law I (History & Structure)", units: 4, type: "C" },
                { code: "LAW 207", title: "Criminal Law I (General Principles)", units: 4, type: "C" },
                { code: "LAW 209", title: "Legal Research and Methodology I", units: 2, type: "C" },
                { code: "LAW 211", title: "Introduction to Customary Law", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "LAW 202", title: "Law of Contract II (Vitiating Factors & Discharge)", units: 4, type: "C" },
                { code: "LAW 204", title: "Law of Torts II (Specific Torts)", units: 4, type: "C" },
                { code: "LAW 206", title: "Constitutional Law II (Fundamental Rights)", units: 4, type: "C" },
                { code: "LAW 208", title: "Criminal Law II (Offences)", units: 4, type: "C" },
                { code: "LAW 210", title: "Legal Research and Methodology II", units: 2, type: "C" },
                { code: "LAW 212", title: "Introduction to Islamic Law (Sharia)", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "LAW 301", title: "Law of Contract III (Remedies & Quasi-Contract)", units: 3, type: "C" },
                { code: "LAW 303", title: "Land Law I (Tenure Systems & Interests)", units: 4, type: "C" },
                { code: "LAW 305", title: "Equity and Trusts I (History & Maxims)", units: 4, type: "C" },
                { code: "LAW 307", title: "Commercial Law I (Agency & Sale of Goods)", units: 4, type: "C" },
                { code: "LAW 309", title: "Family Law I (Marriage & Matrimonial Causes)", units: 3, type: "C" },
                { code: "LAW 311", title: "Law of Evidence I (General Principles)", units: 4, type: "C" },
                { code: "LAW 313", title: "Jurisprudence I (Legal Theory)", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "LAW 302", title: "Law of Torts III (Defences & Remedies)", units: 3, type: "C" },
                { code: "LAW 304", title: "Land Law II (Conveyancing & Registration)", units: 4, type: "C" },
                { code: "LAW 306", title: "Equity and Trusts II (Trusts & Fiduciary Duties)", units: 4, type: "C" },
                { code: "LAW 308", title: "Commercial Law II (Hire Purchase & Insurance)", units: 4, type: "C" },
                { code: "LAW 310", title: "Family Law II (Custody, Adoption & Inheritance)", units: 3, type: "C" },
                { code: "LAW 312", title: "Law of Evidence II (Burden of Proof & Witnesses)", units: 4, type: "C" },
                { code: "LAW 314", title: "Jurisprudence II (Sociological & Analytical)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "LAW 401", title: "Company Law I (Formation & Corporate Personality)", units: 4, type: "C" },
                { code: "LAW 403", title: "Administrative Law I (Powers & Judicial Review)", units: 4, type: "C" },
                { code: "LAW 405", title: "Law of Banking and Negotiable Instruments I", units: 3, type: "C" },
                { code: "LAW 407", title: "Labour Law I (Employment Contracts & Conditions)", units: 3, type: "C" },
                { code: "LAW 409", title: "Intellectual Property Law I (Patents & Trademarks)", units: 3, type: "C" },
                { code: "LAW 411", title: "Private International Law I (Conflict of Laws)", units: 3, type: "C" },
                { code: "LAW 413", title: "Taxation Law I (Personal Income Tax)", units: 3, type: "C" },
                { code: "LAW 415", title: "Moot Court I", units: 2, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "LAW 402", title: "Company Law II (Management & Winding Up)", units: 4, type: "C" },
                { code: "LAW 404", title: "Administrative Law II (Tribunals & Ombudsman)", units: 4, type: "C" },
                { code: "LAW 406", title: "Law of Banking and Negotiable Instruments II", units: 3, type: "C" },
                { code: "LAW 408", title: "Labour Law II (Trade Unions & Industrial Relations)", units: 3, type: "C" },
                { code: "LAW 410", title: "Intellectual Property Law II (Copyright & Trade Secrets)", units: 3, type: "C" },
                { code: "LAW 412", title: "Private International Law II", units: 3, type: "C" },
                { code: "LAW 414", title: "Taxation Law II (Company & Capital Gains Tax)", units: 3, type: "C" },
                { code: "LAW 416", title: "Moot Court II", units: 2, type: "C" },
                { code: "LAW 400", title: "Long Vacation Legal Aid Clinic", units: 4, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 500,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "LAW 501", title: "Civil Procedure I (Pre-Trial & Trial)", units: 4, type: "C" },
                { code: "LAW 503", title: "Criminal Procedure I (Investigation & Arrest)", units: 4, type: "C" },
                { code: "LAW 505", title: "Law of Succession I (Testate)", units: 3, type: "C" },
                { code: "LAW 507", title: "Oil and Gas Law I", units: 3, type: "E" },
                { code: "LAW 509", title: "Environmental Law I", units: 3, type: "E" },
                { code: "LAW 511", title: "Maritime and Admiralty Law I", units: 3, type: "E" },
                { code: "LAW 513", title: "Human Rights Law I", units: 3, type: "E" },
                { code: "LAW 515", title: "Law Clinic I (Practical Training)", units: 4, type: "C" },
                { code: "LAW 599", title: "Research Project I (Long Essay)", units: 3, type: "C" },
                { code: "VTE 501", title: "Research Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "LAW 502", title: "Civil Procedure II (Judgment & Enforcement)", units: 4, type: "C" },
                { code: "LAW 504", title: "Criminal Procedure II (Trial & Sentencing)", units: 4, type: "C" },
                { code: "LAW 506", title: "Law of Succession II (Intestate & Administration)", units: 3, type: "C" },
                { code: "LAW 508", title: "Oil and Gas Law II", units: 3, type: "E" },
                { code: "LAW 510", title: "Environmental Law II", units: 3, type: "E" },
                { code: "LAW 512", title: "Maritime and Admiralty Law II", units: 3, type: "E" },
                { code: "LAW 514", title: "Human Rights Law II", units: 3, type: "E" },
                { code: "LAW 516", title: "Law Clinic II", units: 4, type: "C" },
                { code: "LAW 518", title: "Legal Drafting and Conveyancing", units: 3, type: "C" },
                { code: "LAW 598", title: "Research Project II (Long Essay)", units: 3, type: "C" },
                { code: "VTE 503", title: "Seminar in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    }
  ] // end departments array
},// end Faculty of Law

 {
    id: 10,
  name: "Faculty of Management Sciences",
  code: "FMSS",
  duration: 4,
  departments: [

    // =====================================================================
    // DEPARTMENT 1: BUSINESS ADMINISTRATION
    // =====================================================================
    {
      name: "Business Administration",
      code: "BUS",
      duration: 4,
      levels: {

        // ----- 100 LEVEL -----
        100: {
          first_semester: [
            // GNS Courses
            { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
            { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
            { code: "GNS 105", title: "History and Philosophy of Science", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 101", title: "Elementary Mathematics I", units: 2, type: "C" },
            { code: "STA 101", title: "Introduction to Statistics I", units: 2, type: "C" },
            { code: "CPT 101", title: "Introduction to Computer Science I", units: 2, type: "C" },

            // Departmental Courses
            { code: "BUS 101", title: "Introduction to Business I", units: 2, type: "C" },
            { code: "ACC 101", title: "Introduction to Accounting I", units: 2, type: "C" },
            { code: "ECN 101", title: "Introduction to Economics I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
            { code: "GNS 104", title: "Citizenship Education", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 102", title: "Elementary Mathematics II", units: 2, type: "C" },
            { code: "STA 102", title: "Introduction to Statistics II", units: 2, type: "C" },
            { code: "CPT 102", title: "Introduction to Computer Science II", units: 2, type: "C" },

            // Departmental Courses
            { code: "BUS 102", title: "Introduction to Business II", units: 2, type: "C" },
            { code: "ACC 102", title: "Introduction to Accounting II", units: 2, type: "C" },
            { code: "ECN 102", title: "Introduction to Economics II", units: 2, type: "C" },
            { code: "BFN 102", title: "Introduction to Finance", units: 2, type: "C" },
          ],
        },

        // ----- 200 LEVEL -----
        200: {
          first_semester: [
            // GNS Courses
            { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
            { code: "GNS 203", title: "Introduction to Entrepreneurship I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 201", title: "Vocational and Technical Education Practice I", units: 2, type: "C" },

            // Service Courses
            { code: "STA 201", title: "Statistics for Social Sciences I", units: 2, type: "C" },
            { code: "CPT 201", title: "Computer Applications I", units: 2, type: "C" },

            // Departmental Courses
            { code: "BUS 201", title: "Principles of Management I", units: 3, type: "C" },
            { code: "BUS 203", title: "Business Communication", units: 2, type: "C" },
            { code: "BUS 205", title: "Introduction to Marketing", units: 2, type: "C" },
            { code: "ACC 201", title: "Intermediate Accounting I", units: 3, type: "C" },
            { code: "ECN 201", title: "Microeconomic Theory I", units: 2, type: "C" },
            { code: "BFN 201", title: "Principles of Finance I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
            { code: "GNS 204", title: "Introduction to Entrepreneurship II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 203", title: "Vocational and Technical Education Practice II", units: 2, type: "C" },

            // Service Courses
            { code: "STA 202", title: "Statistics for Social Sciences II", units: 2, type: "C" },

            // Departmental Courses
            { code: "BUS 202", title: "Principles of Management II", units: 3, type: "C" },
            { code: "BUS 204", title: "Business Law", units: 2, type: "C" },
            { code: "BUS 206", title: "Organizational Behaviour I", units: 2, type: "C" },
            { code: "BUS 208", title: "Introduction to Production Management", units: 2, type: "C" },
            { code: "ACC 202", title: "Intermediate Accounting II", units: 3, type: "C" },
            { code: "ECN 202", title: "Macroeconomic Theory I", units: 2, type: "C" },
          ],
        },

        // ----- 300 LEVEL -----
        300: {
          first_semester: [
            // GNS Courses
            { code: "GNS 301", title: "Entrepreneurship Development I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 301", title: "Vocational and Technical Education Methodology I", units: 2, type: "C" },

            // Departmental Courses
            { code: "BUS 301", title: "Human Resource Management I", units: 3, type: "C" },
            { code: "BUS 303", title: "Business Policy and Strategy I", units: 3, type: "C" },
            { code: "BUS 305", title: "Research Methods in Business", units: 3, type: "C" },
            { code: "BUS 307", title: "Operations Research I", units: 2, type: "C" },
            { code: "BUS 309", title: "Management Information Systems", units: 2, type: "C" },
            { code: "BUS 311", title: "Financial Management I", units: 2, type: "C" },
            { code: "BUS 313", title: "Small Business Management", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 302", title: "Entrepreneurship Development II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 303", title: "Vocational and Technical Education Methodology II", units: 2, type: "C" },

            // SIWES
            { code: "BUS 399", title: "Students Industrial Work Experience Scheme (SIWES)", units: 6, type: "C" },

            // Departmental Courses
            { code: "BUS 302", title: "Human Resource Management II", units: 3, type: "C" },
            { code: "BUS 304", title: "Business Policy and Strategy II", units: 3, type: "C" },
            { code: "BUS 306", title: "Organizational Behaviour II", units: 2, type: "C" },
            { code: "BUS 308", title: "Operations Research II", units: 2, type: "C" },
            { code: "BUS 310", title: "International Business Management", units: 2, type: "C" },
          ],
        },

        // ----- 400 LEVEL -----
        400: {
          first_semester: [
            // VTE Courses
            { code: "VTE 401", title: "Vocational and Technical Education Seminar I", units: 2, type: "C" },

            // Final Year Project
            { code: "BUS 499A", title: "Final Year Project I (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "BUS 401", title: "Strategic Management", units: 3, type: "C" },
            { code: "BUS 403", title: "Management Theory and Practice", units: 3, type: "C" },
            { code: "BUS 405", title: "Corporate Planning and Policy", units: 2, type: "C" },
            { code: "BUS 407", title: "Industrial Relations", units: 2, type: "C" },
            { code: "BUS 409", title: "Public Sector Management", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "BUS 411", title: "Risk Management and Insurance", units: 2, type: "E" },
            { code: "BUS 413", title: "Total Quality Management", units: 2, type: "E" },
            { code: "BUS 415", title: "Comparative Management", units: 2, type: "E" },
            { code: "BUS 417", title: "Management Consulting", units: 2, type: "E" },
          ],
          second_semester: [
            // VTE Courses
            { code: "VTE 403", title: "Vocational and Technical Education Seminar II", units: 2, type: "C" },

            // Final Year Project
            { code: "BUS 499B", title: "Final Year Project II (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "BUS 402", title: "Contemporary Issues in Management", units: 3, type: "C" },
            { code: "BUS 404", title: "Business Ethics and Social Responsibility", units: 2, type: "C" },
            { code: "BUS 406", title: "Project Management", units: 2, type: "C" },
            { code: "BUS 408", title: "E-Business Management", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "BUS 410", title: "Conflict Management and Negotiation", units: 2, type: "E" },
            { code: "BUS 412", title: "Supply Chain Management", units: 2, type: "E" },
            { code: "BUS 414", title: "Knowledge Management", units: 2, type: "E" },
            { code: "BUS 416", title: "Leadership and Change Management", units: 2, type: "E" },
          ],
        },
      },
    },

    // =====================================================================
    // DEPARTMENT 2: ACCOUNTING
    // =====================================================================
    {
      name: "Accounting",
      code: "ACC",
      duration: 4,
      levels: {

        // ----- 100 LEVEL -----
        100: {
          first_semester: [
            // GNS Courses
            { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
            { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
            { code: "GNS 105", title: "History and Philosophy of Science", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 101", title: "Elementary Mathematics I", units: 2, type: "C" },
            { code: "STA 101", title: "Introduction to Statistics I", units: 2, type: "C" },
            { code: "CPT 101", title: "Introduction to Computer Science I", units: 2, type: "C" },

            // Departmental Courses
            { code: "ACC 101", title: "Introduction to Accounting I", units: 2, type: "C" },
            { code: "BUS 101", title: "Introduction to Business I", units: 2, type: "C" },
            { code: "ECN 101", title: "Introduction to Economics I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
            { code: "GNS 104", title: "Citizenship Education", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 102", title: "Elementary Mathematics II", units: 2, type: "C" },
            { code: "STA 102", title: "Introduction to Statistics II", units: 2, type: "C" },
            { code: "CPT 102", title: "Introduction to Computer Science II", units: 2, type: "C" },

            // Departmental Courses
            { code: "ACC 102", title: "Introduction to Accounting II", units: 2, type: "C" },
            { code: "BUS 102", title: "Introduction to Business II", units: 2, type: "C" },
            { code: "ECN 102", title: "Introduction to Economics II", units: 2, type: "C" },
            { code: "BFN 102", title: "Introduction to Finance", units: 2, type: "C" },
          ],
        },

        // ----- 200 LEVEL -----
        200: {
          first_semester: [
            // GNS Courses
            { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
            { code: "GNS 203", title: "Introduction to Entrepreneurship I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 201", title: "Vocational and Technical Education Practice I", units: 2, type: "C" },

            // Service Courses
            { code: "STA 201", title: "Statistics for Social Sciences I", units: 2, type: "C" },
            { code: "CPT 201", title: "Computer Applications I", units: 2, type: "C" },

            // Departmental Courses
            { code: "ACC 201", title: "Intermediate Accounting I", units: 3, type: "C" },
            { code: "ACC 203", title: "Cost Accounting I", units: 3, type: "C" },
            { code: "ACC 205", title: "Accounting Theory I", units: 2, type: "C" },
            { code: "BUS 201", title: "Principles of Management I", units: 2, type: "C" },
            { code: "ECN 201", title: "Microeconomic Theory I", units: 2, type: "C" },
            { code: "BFN 201", title: "Principles of Finance I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
            { code: "GNS 204", title: "Introduction to Entrepreneurship II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 203", title: "Vocational and Technical Education Practice II", units: 2, type: "C" },

            // Service Courses
            { code: "STA 202", title: "Statistics for Social Sciences II", units: 2, type: "C" },

            // Departmental Courses
            { code: "ACC 202", title: "Intermediate Accounting II", units: 3, type: "C" },
            { code: "ACC 204", title: "Cost Accounting II", units: 3, type: "C" },
            { code: "ACC 206", title: "Accounting Theory II", units: 2, type: "C" },
            { code: "ACC 208", title: "Business Law I", units: 2, type: "C" },
            { code: "BUS 202", title: "Principles of Management II", units: 2, type: "C" },
            { code: "ECN 202", title: "Macroeconomic Theory I", units: 2, type: "C" },
          ],
        },

        // ----- 300 LEVEL -----
        300: {
          first_semester: [
            // GNS Courses
            { code: "GNS 301", title: "Entrepreneurship Development I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 301", title: "Vocational and Technical Education Methodology I", units: 2, type: "C" },

            // Departmental Courses
            { code: "ACC 301", title: "Advanced Accounting I", units: 3, type: "C" },
            { code: "ACC 303", title: "Management Accounting I", units: 3, type: "C" },
            { code: "ACC 305", title: "Public Sector Accounting I", units: 3, type: "C" },
            { code: "ACC 307", title: "Taxation I", units: 3, type: "C" },
            { code: "ACC 309", title: "Auditing and Investigation I", units: 3, type: "C" },
            { code: "ACC 311", title: "Financial Management I", units: 2, type: "C" },
            { code: "ACC 313", title: "Accounting Information Systems", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 302", title: "Entrepreneurship Development II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 303", title: "Vocational and Technical Education Methodology II", units: 2, type: "C" },

            // SIWES
            { code: "ACC 399", title: "Students Industrial Work Experience Scheme (SIWES)", units: 6, type: "C" },

            // Departmental Courses
            { code: "ACC 302", title: "Advanced Accounting II", units: 3, type: "C" },
            { code: "ACC 304", title: "Management Accounting II", units: 3, type: "C" },
            { code: "ACC 306", title: "Public Sector Accounting II", units: 3, type: "C" },
            { code: "ACC 308", title: "Taxation II", units: 3, type: "C" },
            { code: "ACC 310", title: "Auditing and Investigation II", units: 3, type: "C" },
            { code: "ACC 312", title: "Business Law II", units: 2, type: "C" },
          ],
        },

        // ----- 400 LEVEL -----
        400: {
          first_semester: [
            // VTE Courses
            { code: "VTE 401", title: "Vocational and Technical Education Seminar I", units: 2, type: "C" },

            // Final Year Project
            { code: "ACC 499A", title: "Final Year Project I (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "ACC 401", title: "Advanced Financial Accounting", units: 3, type: "C" },
            { code: "ACC 403", title: "Advanced Audit and Assurance", units: 3, type: "C" },
            { code: "ACC 405", title: "Advanced Taxation", units: 3, type: "C" },
            { code: "ACC 407", title: "Forensic Accounting and Fraud Examination", units: 2, type: "C" },
            { code: "ACC 409", title: "International Accounting", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "ACC 411", title: "Petroleum Accounting", units: 2, type: "E" },
            { code: "ACC 413", title: "Insolvency and Bankruptcy Accounting", units: 2, type: "E" },
            { code: "ACC 415", title: "Not-for-Profit Accounting", units: 2, type: "E" },
            { code: "ACC 417", title: "Environmental and Social Accounting", units: 2, type: "E" },
          ],
          second_semester: [
            // VTE Courses
            { code: "VTE 403", title: "Vocational and Technical Education Seminar II", units: 2, type: "C" },

            // Final Year Project
            { code: "ACC 499B", title: "Final Year Project II (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "ACC 402", title: "Advanced Management Accounting", units: 3, type: "C" },
            { code: "ACC 404", title: "Corporate Reporting and Governance", units: 3, type: "C" },
            { code: "ACC 406", title: "Advanced Public Sector Accounting", units: 2, type: "C" },
            { code: "ACC 408", title: "Accounting Ethics and Professional Practice", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "ACC 410", title: "Computerized Accounting Systems", units: 2, type: "E" },
            { code: "ACC 412", title: "Islamic Accounting and Finance", units: 2, type: "E" },
            { code: "ACC 414", title: "Emerging Issues in Accounting", units: 2, type: "E" },
            { code: "ACC 416", title: "Strategic Financial Management", units: 2, type: "E" },
          ],
        },
      },
    },

    // =====================================================================
    // DEPARTMENT 3: MARKETING
    // =====================================================================
    {
      name: "Marketing",
      code: "MKT",
      duration: 4,
      levels: {

        // ----- 100 LEVEL -----
        100: {
          first_semester: [
            // GNS Courses
            { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
            { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
            { code: "GNS 105", title: "History and Philosophy of Science", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 101", title: "Elementary Mathematics I", units: 2, type: "C" },
            { code: "STA 101", title: "Introduction to Statistics I", units: 2, type: "C" },
            { code: "CPT 101", title: "Introduction to Computer Science I", units: 2, type: "C" },

            // Departmental Courses
            { code: "MKT 101", title: "Introduction to Marketing I", units: 2, type: "C" },
            { code: "BUS 101", title: "Introduction to Business I", units: 2, type: "C" },
            { code: "ACC 101", title: "Introduction to Accounting I", units: 2, type: "C" },
            { code: "ECN 101", title: "Introduction to Economics I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
            { code: "GNS 104", title: "Citizenship Education", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 102", title: "Elementary Mathematics II", units: 2, type: "C" },
            { code: "STA 102", title: "Introduction to Statistics II", units: 2, type: "C" },
            { code: "CPT 102", title: "Introduction to Computer Science II", units: 2, type: "C" },

            // Departmental Courses
            { code: "MKT 102", title: "Introduction to Marketing II", units: 2, type: "C" },
            { code: "BUS 102", title: "Introduction to Business II", units: 2, type: "C" },
            { code: "ACC 102", title: "Introduction to Accounting II", units: 2, type: "C" },
            { code: "ECN 102", title: "Introduction to Economics II", units: 2, type: "C" },
          ],
        },

        // ----- 200 LEVEL -----
        200: {
          first_semester: [
            // GNS Courses
            { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
            { code: "GNS 203", title: "Introduction to Entrepreneurship I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 201", title: "Vocational and Technical Education Practice I", units: 2, type: "C" },

            // Service Courses
            { code: "STA 201", title: "Statistics for Social Sciences I", units: 2, type: "C" },
            { code: "CPT 201", title: "Computer Applications I", units: 2, type: "C" },

            // Departmental Courses
            { code: "MKT 201", title: "Principles of Marketing I", units: 3, type: "C" },
            { code: "MKT 203", title: "Consumer Behaviour I", units: 2, type: "C" },
            { code: "MKT 205", title: "Marketing Communication I", units: 2, type: "C" },
            { code: "BUS 201", title: "Principles of Management I", units: 2, type: "C" },
            { code: "ECN 201", title: "Microeconomic Theory I", units: 2, type: "C" },
            { code: "ACC 201", title: "Intermediate Accounting I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
            { code: "GNS 204", title: "Introduction to Entrepreneurship II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 203", title: "Vocational and Technical Education Practice II", units: 2, type: "C" },

            // Service Courses
            { code: "STA 202", title: "Statistics for Social Sciences II", units: 2, type: "C" },

            // Departmental Courses
            { code: "MKT 202", title: "Principles of Marketing II", units: 3, type: "C" },
            { code: "MKT 204", title: "Consumer Behaviour II", units: 2, type: "C" },
            { code: "MKT 206", title: "Marketing Communication II", units: 2, type: "C" },
            { code: "MKT 208", title: "Sales Management", units: 2, type: "C" },
            { code: "BUS 202", title: "Principles of Management II", units: 2, type: "C" },
            { code: "ECN 202", title: "Macroeconomic Theory I", units: 2, type: "C" },
          ],
        },

        // ----- 300 LEVEL -----
        300: {
          first_semester: [
            // GNS Courses
            { code: "GNS 301", title: "Entrepreneurship Development I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 301", title: "Vocational and Technical Education Methodology I", units: 2, type: "C" },

            // Departmental Courses
            { code: "MKT 301", title: "Marketing Management I", units: 3, type: "C" },
            { code: "MKT 303", title: "Marketing Research I", units: 3, type: "C" },
            { code: "MKT 305", title: "International Marketing I", units: 2, type: "C" },
            { code: "MKT 307", title: "Advertising and Public Relations I", units: 2, type: "C" },
            { code: "MKT 309", title: "Product Planning and Development", units: 2, type: "C" },
            { code: "MKT 311", title: "Distribution and Logistics Management", units: 2, type: "C" },
            { code: "MKT 313", title: "Services Marketing", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 302", title: "Entrepreneurship Development II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 303", title: "Vocational and Technical Education Methodology II", units: 2, type: "C" },

            // SIWES
            { code: "MKT 399", title: "Students Industrial Work Experience Scheme (SIWES)", units: 6, type: "C" },

            // Departmental Courses
            { code: "MKT 302", title: "Marketing Management II", units: 3, type: "C" },
            { code: "MKT 304", title: "Marketing Research II", units: 3, type: "C" },
            { code: "MKT 306", title: "International Marketing II", units: 2, type: "C" },
            { code: "MKT 308", title: "Advertising and Public Relations II", units: 2, type: "C" },
            { code: "MKT 310", title: "Retail and Wholesale Management", units: 2, type: "C" },
            { code: "MKT 312", title: "Industrial Marketing", units: 2, type: "C" },
          ],
        },

        // ----- 400 LEVEL -----
        400: {
          first_semester: [
            // VTE Courses
            { code: "VTE 401", title: "Vocational and Technical Education Seminar I", units: 2, type: "C" },

            // Final Year Project
            { code: "MKT 499A", title: "Final Year Project I (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "MKT 401", title: "Strategic Marketing Management", units: 3, type: "C" },
            { code: "MKT 403", title: "Digital Marketing and E-Commerce", units: 3, type: "C" },
            { code: "MKT 405", title: "Brand Management", units: 2, type: "C" },
            { code: "MKT 407", title: "Marketing of Financial Services", units: 2, type: "C" },
            { code: "MKT 409", title: "Pricing Strategy and Policy", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "MKT 411", title: "Agribusiness Marketing", units: 2, type: "E" },
            { code: "MKT 413", title: "Social Marketing", units: 2, type: "E" },
            { code: "MKT 415", title: "Tourism and Hospitality Marketing", units: 2, type: "E" },
            { code: "MKT 417", title: "Export Marketing", units: 2, type: "E" },
          ],
          second_semester: [
            // VTE Courses
            { code: "VTE 403", title: "Vocational and Technical Education Seminar II", units: 2, type: "C" },

            // Final Year Project
            { code: "MKT 499B", title: "Final Year Project II (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "MKT 402", title: "Contemporary Issues in Marketing", units: 3, type: "C" },
            { code: "MKT 404", title: "Marketing Ethics and Corporate Social Responsibility", units: 2, type: "C" },
            { code: "MKT 406", title: "Relationship Marketing", units: 2, type: "C" },
            { code: "MKT 408", title: "Sales Force Management", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "MKT 410", title: "Marketing Analytics", units: 2, type: "E" },
            { code: "MKT 412", title: "Health Care Marketing", units: 2, type: "E" },
            { code: "MKT 414", title: "Political Marketing", units: 2, type: "E" },
            { code: "MKT 416", title: "Emerging Trends in Marketing", units: 2, type: "E" },
          ],
        },
      },
    },
  ],

},//management

{
  id: 8,
  name: "Faculty of Pure and Applied Sciences",
  code: "FPAS",
  duration: 4,
  departments: [

    // =====================================================================
    // DEPARTMENT 1: BIOCHEMISTRY (4 Years)
    // =====================================================================
    {
      name: "Biochemistry",
      code: "BCH",
      duration: "4 Years",
      levels: {

        // ----- 100 LEVEL -----
        100: {
          first_semester: [
            // GNS Courses
            { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
            { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
            { code: "GNS 105", title: "History and Philosophy of Science", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 101", title: "Elementary Mathematics I (Algebra and Trigonometry)", units: 2, type: "C" },
            { code: "MTH 103", title: "Elementary Mathematics III (Vectors and Geometry)", units: 2, type: "C" },
            { code: "PHY 101", title: "General Physics I (Mechanics)", units: 2, type: "C" },
            { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
            { code: "CHM 101", title: "General Chemistry I (Inorganic Chemistry)", units: 2, type: "C" },
            { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
            { code: "BIO 101", title: "General Biology I (Cell Biology and Genetics)", units: 2, type: "C" },
            { code: "BIO 107", title: "General Biology Laboratory I", units: 1, type: "C" },
            { code: "CPT 101", title: "Introduction to Computer Science I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
            { code: "GNS 104", title: "Citizenship Education", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 2, type: "C" },
            { code: "MTH 104", title: "Elementary Mathematics IV (Differential Equations I)", units: 2, type: "C" },
            { code: "PHY 102", title: "General Physics II (Electricity and Magnetism)", units: 2, type: "C" },
            { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
            { code: "CHM 102", title: "General Chemistry II (Organic Chemistry)", units: 2, type: "C" },
            { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
            { code: "BIO 102", title: "General Biology II (Plant Biology)", units: 2, type: "C" },
            { code: "BIO 108", title: "General Biology Laboratory II", units: 1, type: "C" },
            { code: "CPT 102", title: "Introduction to Computer Science II", units: 2, type: "C" },
            { code: "STA 102", title: "Introduction to Statistics", units: 2, type: "C" },
          ],
        },

        // ----- 200 LEVEL -----
        200: {
          first_semester: [
            // GNS Courses
            { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
            { code: "GNS 203", title: "Introduction to Entrepreneurship I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 201", title: "Vocational and Technical Education Practice I", units: 2, type: "C" },

            // Service Courses
            { code: "CHM 201", title: "Organic Chemistry I", units: 3, type: "C" },
            { code: "CHM 205", title: "Physical Chemistry I (Chemical Thermodynamics)", units: 3, type: "C" },
            { code: "BIO 201", title: "Genetics I", units: 2, type: "C" },
            { code: "STA 201", title: "Statistics for Sciences I", units: 2, type: "C" },
            { code: "CPT 201", title: "Computer Applications I", units: 2, type: "C" },

            // Departmental Courses
            { code: "BCH 201", title: "General Biochemistry I (Amino Acids and Proteins)", units: 3, type: "C" },
            { code: "BCH 203", title: "Chemistry of Carbohydrates and Lipids", units: 3, type: "C" },
            { code: "BCH 205", title: "Introductory Biophysical Chemistry", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
            { code: "GNS 204", title: "Introduction to Entrepreneurship II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 203", title: "Vocational and Technical Education Practice II", units: 2, type: "C" },

            // Service Courses
            { code: "CHM 202", title: "Organic Chemistry II", units: 3, type: "C" },
            { code: "CHM 206", title: "Physical Chemistry II (Chemical Kinetics)", units: 3, type: "C" },
            { code: "BIO 202", title: "Genetics II (Molecular Genetics)", units: 2, type: "C" },
            { code: "STA 202", title: "Statistics for Sciences II", units: 2, type: "C" },

            // Departmental Courses
            { code: "BCH 202", title: "General Biochemistry II (Nucleic Acids)", units: 3, type: "C" },
            { code: "BCH 204", title: "Introduction to Enzymology", units: 3, type: "C" },
            { code: "BCH 206", title: "Biochemistry Laboratory I", units: 2, type: "C" },
            { code: "BCH 208", title: "Biochemical Methods and Techniques", units: 2, type: "C" },
          ],
        },

        // ----- 300 LEVEL -----
        300: {
          first_semester: [
            // GNS Courses
            { code: "GNS 301", title: "Entrepreneurship Development I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 301", title: "Vocational and Technical Education Methodology I", units: 2, type: "C" },

            // Departmental Courses
            { code: "BCH 301", title: "Intermediary Metabolism I (Carbohydrate Metabolism)", units: 3, type: "C" },
            { code: "BCH 303", title: "Lipid Metabolism and Biological Membranes", units: 3, type: "C" },
            { code: "BCH 305", title: "Protein and Amino Acid Metabolism", units: 3, type: "C" },
            { code: "BCH 307", title: "Molecular Biology I (DNA Replication and Transcription)", units: 3, type: "C" },
            { code: "BCH 309", title: "Enzyme Kinetics and Mechanisms", units: 3, type: "C" },
            { code: "BCH 311", title: "Biochemical Genetics", units: 2, type: "C" },
            { code: "BCH 313", title: "Bioenergetics and Biological Oxidation", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 302", title: "Entrepreneurship Development II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 303", title: "Vocational and Technical Education Methodology II", units: 2, type: "C" },

            // SIWES
            { code: "BCH 399", title: "Students Industrial Work Experience Scheme (SIWES)", units: 6, type: "C" },

            // Departmental Courses
            { code: "BCH 302", title: "Intermediary Metabolism II (Integration of Metabolism)", units: 3, type: "C" },
            { code: "BCH 304", title: "Nucleic Acid Metabolism", units: 3, type: "C" },
            { code: "BCH 306", title: "Molecular Biology II (Translation and Gene Expression)", units: 3, type: "C" },
            { code: "BCH 308", title: "Nutritional Biochemistry", units: 2, type: "C" },
            { code: "BCH 310", title: "Immunochemistry", units: 2, type: "C" },
            { code: "BCH 312", title: "Research Methods in Biochemistry", units: 2, type: "C" },
          ],
        },

        // ----- 400 LEVEL -----
        400: {
          first_semester: [
            // VTE Courses
            { code: "VTE 401", title: "Vocational and Technical Education Seminar I", units: 2, type: "C" },

            // Final Year Project
            { code: "BCH 499A", title: "Final Year Project I (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "BCH 401", title: "Advanced Enzymology", units: 3, type: "C" },
            { code: "BCH 403", title: "Clinical Biochemistry I", units: 3, type: "C" },
            { code: "BCH 405", title: "Advanced Molecular Biology (Recombinant DNA Technology)", units: 3, type: "C" },
            { code: "BCH 407", title: "Biochemical Pharmacology", units: 2, type: "C" },
            { code: "BCH 409", title: "Endocrinology and Hormone Biochemistry", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "BCH 411", title: "Industrial Biochemistry", units: 2, type: "E" },
            { code: "BCH 413", title: "Biotechnology and Genetic Engineering", units: 2, type: "E" },
            { code: "BCH 415", title: "Food Biochemistry", units: 2, type: "E" },
            { code: "BCH 417", title: "Forensic Biochemistry", units: 2, type: "E" },
          ],
          second_semester: [
            // VTE Courses
            { code: "VTE 403", title: "Vocational and Technical Education Seminar II", units: 2, type: "C" },

            // Final Year Project
            { code: "BCH 499B", title: "Final Year Project II (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "BCH 402", title: "Clinical Biochemistry II", units: 3, type: "C" },
            { code: "BCH 404", title: "Advanced Protein Chemistry", units: 3, type: "C" },
            { code: "BCH 406", title: "Biochemical Toxicology", units: 2, type: "C" },
            { code: "BCH 408", title: "Plant Biochemistry", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "BCH 410", title: "Environmental Biochemistry", units: 2, type: "E" },
            { code: "BCH 412", title: "Bioinformatics and Computational Biochemistry", units: 2, type: "E" },
            { code: "BCH 414", title: "Neurochemistry", units: 2, type: "E" },
            { code: "BCH 416", title: "Emerging Topics in Biochemistry", units: 2, type: "E" },
          ],
        },
      },
    },

    // =====================================================================
    // DEPARTMENT 2: CHEMISTRY (4 Years)
    // =====================================================================
    {
      name: "Chemistry",
      code: "CHM",
      duration: "4 Years",
      levels: {

        // ----- 100 LEVEL -----
        100: {
          first_semester: [
            // GNS Courses
            { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
            { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
            { code: "GNS 105", title: "History and Philosophy of Science", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 101", title: "Elementary Mathematics I (Algebra and Trigonometry)", units: 2, type: "C" },
            { code: "MTH 103", title: "Elementary Mathematics III (Vectors and Geometry)", units: 2, type: "C" },
            { code: "PHY 101", title: "General Physics I (Mechanics)", units: 2, type: "C" },
            { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
            { code: "BIO 101", title: "General Biology I", units: 2, type: "C" },
            { code: "BIO 107", title: "General Biology Laboratory I", units: 1, type: "C" },
            { code: "STA 101", title: "Introduction to Statistics I", units: 2, type: "C" },
            { code: "CPT 101", title: "Introduction to Computer Science I", units: 2, type: "C" },

            // Departmental Courses
            { code: "CHM 101", title: "General Chemistry I (Inorganic Chemistry)", units: 2, type: "C" },
            { code: "CHM 103", title: "General Chemistry III (Physical Chemistry)", units: 2, type: "C" },
            { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
            { code: "GNS 104", title: "Citizenship Education", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 2, type: "C" },
            { code: "MTH 104", title: "Elementary Mathematics IV (Differential Equations I)", units: 2, type: "C" },
            { code: "PHY 102", title: "General Physics II (Electricity and Magnetism)", units: 2, type: "C" },
            { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
            { code: "BIO 102", title: "General Biology II", units: 2, type: "C" },
            { code: "BIO 108", title: "General Biology Laboratory II", units: 1, type: "C" },
            { code: "STA 102", title: "Introduction to Statistics II", units: 2, type: "C" },
            { code: "CPT 102", title: "Introduction to Computer Science II", units: 2, type: "C" },

            // Departmental Courses
            { code: "CHM 102", title: "General Chemistry II (Organic Chemistry)", units: 2, type: "C" },
            { code: "CHM 104", title: "General Chemistry IV (Analytical Chemistry)", units: 2, type: "C" },
            { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
          ],
        },

        // ----- 200 LEVEL -----
        200: {
          first_semester: [
            // GNS Courses
            { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
            { code: "GNS 203", title: "Introduction to Entrepreneurship I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 201", title: "Vocational and Technical Education Practice I", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
            { code: "PHY 201", title: "General Physics III (Waves and Optics)", units: 2, type: "C" },
            { code: "STA 201", title: "Statistics for Sciences I", units: 2, type: "C" },
            { code: "CPT 201", title: "Computer Applications I", units: 2, type: "C" },

            // Departmental Courses
            { code: "CHM 201", title: "Organic Chemistry I (Aliphatic Compounds)", units: 3, type: "C" },
            { code: "CHM 203", title: "Inorganic Chemistry I (Main Group Chemistry)", units: 3, type: "C" },
            { code: "CHM 205", title: "Physical Chemistry I (Chemical Thermodynamics)", units: 3, type: "C" },
            { code: "CHM 207", title: "Analytical Chemistry I (Qualitative Analysis)", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
            { code: "GNS 204", title: "Introduction to Entrepreneurship II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 203", title: "Vocational and Technical Education Practice II", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
            { code: "STA 202", title: "Statistics for Sciences II", units: 2, type: "C" },

            // Departmental Courses
            { code: "CHM 202", title: "Organic Chemistry II (Aromatic Compounds)", units: 3, type: "C" },
            { code: "CHM 204", title: "Inorganic Chemistry II (Transition Metal Chemistry)", units: 3, type: "C" },
            { code: "CHM 206", title: "Physical Chemistry II (Chemical Kinetics)", units: 3, type: "C" },
            { code: "CHM 208", title: "Analytical Chemistry II (Quantitative Analysis)", units: 2, type: "C" },
            { code: "CHM 210", title: "Chemistry Laboratory I", units: 1, type: "C" },
          ],
        },

        // ----- 300 LEVEL -----
        300: {
          first_semester: [
            // GNS Courses
            { code: "GNS 301", title: "Entrepreneurship Development I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 301", title: "Vocational and Technical Education Methodology I", units: 2, type: "C" },

            // Departmental Courses
            { code: "CHM 301", title: "Organic Chemistry III (Heterocyclic and Natural Products)", units: 3, type: "C" },
            { code: "CHM 303", title: "Inorganic Chemistry III (Coordination Chemistry)", units: 3, type: "C" },
            { code: "CHM 305", title: "Physical Chemistry III (Quantum Chemistry)", units: 3, type: "C" },
            { code: "CHM 307", title: "Analytical Chemistry III (Electroanalytical Methods)", units: 3, type: "C" },
            { code: "CHM 309", title: "Industrial Chemistry I", units: 2, type: "C" },
            { code: "CHM 311", title: "Environmental Chemistry", units: 2, type: "C" },
            { code: "CHM 313", title: "Polymer Chemistry I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 302", title: "Entrepreneurship Development II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 303", title: "Vocational and Technical Education Methodology II", units: 2, type: "C" },

            // SIWES
            { code: "CHM 399", title: "Students Industrial Work Experience Scheme (SIWES)", units: 6, type: "C" },

            // Departmental Courses
            { code: "CHM 302", title: "Organic Chemistry IV (Reaction Mechanisms)", units: 3, type: "C" },
            { code: "CHM 304", title: "Inorganic Chemistry IV (Organometallic Chemistry)", units: 3, type: "C" },
            { code: "CHM 306", title: "Physical Chemistry IV (Electrochemistry)", units: 3, type: "C" },
            { code: "CHM 308", title: "Analytical Chemistry IV (Spectroscopic Methods)", units: 2, type: "C" },
            { code: "CHM 310", title: "Industrial Chemistry II", units: 2, type: "C" },
            { code: "CHM 312", title: "Chemistry Laboratory II", units: 1, type: "C" },
          ],
        },

        // ----- 400 LEVEL -----
        400: {
          first_semester: [
            // VTE Courses
            { code: "VTE 401", title: "Vocational and Technical Education Seminar I", units: 2, type: "C" },

            // Final Year Project
            { code: "CHM 499A", title: "Final Year Project I (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "CHM 401", title: "Advanced Organic Chemistry (Stereochemistry and Synthesis)", units: 3, type: "C" },
            { code: "CHM 403", title: "Advanced Inorganic Chemistry (Bioinorganic Chemistry)", units: 3, type: "C" },
            { code: "CHM 405", title: "Advanced Physical Chemistry (Surface and Colloid Chemistry)", units: 3, type: "C" },
            { code: "CHM 407", title: "Advanced Analytical Chemistry (Chromatography)", units: 2, type: "C" },
            { code: "CHM 409", title: "Biochemistry for Chemists", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "CHM 411", title: "Petroleum Chemistry", units: 2, type: "E" },
            { code: "CHM 413", title: "Polymer Chemistry II", units: 2, type: "E" },
            { code: "CHM 415", title: "Pharmaceutical Chemistry", units: 2, type: "E" },
            { code: "CHM 417", title: "Nuclear and Radiochemistry", units: 2, type: "E" },
          ],
          second_semester: [
            // VTE Courses
            { code: "VTE 403", title: "Vocational and Technical Education Seminar II", units: 2, type: "C" },

            // Final Year Project
            { code: "CHM 499B", title: "Final Year Project II (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "CHM 402", title: "Advanced Organic Synthesis", units: 3, type: "C" },
            { code: "CHM 404", title: "Advanced Coordination Chemistry", units: 3, type: "C" },
            { code: "CHM 406", title: "Chemical Process Technology", units: 2, type: "C" },
            { code: "CHM 408", title: "Green Chemistry and Sustainability", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "CHM 410", title: "Food Chemistry", units: 2, type: "E" },
            { code: "CHM 412", title: "Forensic Chemistry", units: 2, type: "E" },
            { code: "CHM 414", title: "Nanochemistry and Materials Science", units: 2, type: "E" },
            { code: "CHM 416", title: "Emerging Topics in Chemistry", units: 2, type: "E" },
          ],
        },
      },
    },

    // =====================================================================
    // DEPARTMENT 3: GEOLOGY AND MINERAL SCIENCES (4 Years)
    // =====================================================================
    {
      name: "Geology and Mineral Sciences",
      code: "GLY",
      duration: "4 Years",
      levels: {

        // ----- 100 LEVEL -----
        100: {
          first_semester: [
            // GNS Courses
            { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
            { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
            { code: "GNS 105", title: "History and Philosophy of Science", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 101", title: "Elementary Mathematics I (Algebra and Trigonometry)", units: 2, type: "C" },
            { code: "MTH 103", title: "Elementary Mathematics III (Vectors and Geometry)", units: 2, type: "C" },
            { code: "PHY 101", title: "General Physics I (Mechanics)", units: 2, type: "C" },
            { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
            { code: "CHM 101", title: "General Chemistry I (Inorganic Chemistry)", units: 2, type: "C" },
            { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
            { code: "BIO 101", title: "General Biology I", units: 2, type: "C" },
            { code: "BIO 107", title: "General Biology Laboratory I", units: 1, type: "C" },
            { code: "CPT 101", title: "Introduction to Computer Science I", units: 2, type: "C" },

            // Departmental Courses
            { code: "GLY 101", title: "Introduction to Geology I (Physical Geology)", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
            { code: "GNS 104", title: "Citizenship Education", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 2, type: "C" },
            { code: "MTH 104", title: "Elementary Mathematics IV (Differential Equations I)", units: 2, type: "C" },
            { code: "PHY 102", title: "General Physics II (Electricity and Magnetism)", units: 2, type: "C" },
            { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
            { code: "CHM 102", title: "General Chemistry II (Organic Chemistry)", units: 2, type: "C" },
            { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
            { code: "BIO 102", title: "General Biology II", units: 2, type: "C" },
            { code: "BIO 108", title: "General Biology Laboratory II", units: 1, type: "C" },
            { code: "CPT 102", title: "Introduction to Computer Science II", units: 2, type: "C" },
            { code: "STA 102", title: "Introduction to Statistics", units: 2, type: "C" },

            // Departmental Courses
            { code: "GLY 102", title: "Introduction to Geology II (Historical Geology)", units: 2, type: "C" },
          ],
        },

        // ----- 200 LEVEL -----
        200: {
          first_semester: [
            // GNS Courses
            { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
            { code: "GNS 203", title: "Introduction to Entrepreneurship I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 201", title: "Vocational and Technical Education Practice I", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
            { code: "PHY 201", title: "General Physics III", units: 2, type: "C" },
            { code: "CHM 201", title: "Organic Chemistry I", units: 2, type: "C" },
            { code: "STA 201", title: "Statistics for Sciences I", units: 2, type: "C" },
            { code: "CPT 201", title: "Computer Applications I", units: 2, type: "C" },

            // Departmental Courses
            { code: "GLY 201", title: "Crystallography and Mineralogy I", units: 3, type: "C" },
            { code: "GLY 203", title: "Petrology I (Igneous Petrology)", units: 3, type: "C" },
            { code: "GLY 205", title: "Structural Geology I", units: 3, type: "C" },
            { code: "GLY 207", title: "Palaeontology I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
            { code: "GNS 204", title: "Introduction to Entrepreneurship II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 203", title: "Vocational and Technical Education Practice II", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
            { code: "STA 202", title: "Statistics for Sciences II", units: 2, type: "C" },

            // Departmental Courses
            { code: "GLY 202", title: "Crystallography and Mineralogy II", units: 3, type: "C" },
            { code: "GLY 204", title: "Petrology II (Sedimentary Petrology)", units: 3, type: "C" },
            { code: "GLY 206", title: "Structural Geology II", units: 3, type: "C" },
            { code: "GLY 208", title: "Palaeontology II", units: 2, type: "C" },
            { code: "GLY 210", title: "Introduction to Geophysics", units: 2, type: "C" },
            { code: "GLY 212", title: "Field Geology I", units: 2, type: "C" },
          ],
        },

        // ----- 300 LEVEL -----
        300: {
          first_semester: [
            // GNS Courses
            { code: "GNS 301", title: "Entrepreneurship Development I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 301", title: "Vocational and Technical Education Methodology I", units: 2, type: "C" },

            // Departmental Courses
            { code: "GLY 301", title: "Petrology III (Metamorphic Petrology)", units: 3, type: "C" },
            { code: "GLY 303", title: "Stratigraphy and Sedimentology I", units: 3, type: "C" },
            { code: "GLY 305", title: "Economic Geology I (Metallic Mineral Deposits)", units: 3, type: "C" },
            { code: "GLY 307", title: "Geochemistry I", units: 3, type: "C" },
            { code: "GLY 309", title: "Hydrogeology I (Groundwater)", units: 3, type: "C" },
            { code: "GLY 311", title: "Applied Geophysics I", units: 2, type: "C" },
            { code: "GLY 313", title: "Geological Mapping and Field Methods", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 302", title: "Entrepreneurship Development II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 303", title: "Vocational and Technical Education Methodology II", units: 2, type: "C" },

            // SIWES
            { code: "GLY 399", title: "Students Industrial Work Experience Scheme (SIWES)", units: 6, type: "C" },

            // Departmental Courses
            { code: "GLY 302", title: "Stratigraphy and Sedimentology II", units: 3, type: "C" },
            { code: "GLY 304", title: "Economic Geology II (Industrial Minerals)", units: 3, type: "C" },
            { code: "GLY 306", title: "Geochemistry II", units: 3, type: "C" },
            { code: "GLY 308", title: "Hydrogeology II", units: 2, type: "C" },
            { code: "GLY 310", title: "Applied Geophysics II", units: 2, type: "C" },
            { code: "GLY 312", title: "Research Methods in Geology", units: 2, type: "C" },
          ],
        },

        // ----- 400 LEVEL -----
        400: {
          first_semester: [
            // VTE Courses
            { code: "VTE 401", title: "Vocational and Technical Education Seminar I", units: 2, type: "C" },

            // Final Year Project
            { code: "GLY 499A", title: "Final Year Project I (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "GLY 401", title: "Petroleum Geology I", units: 3, type: "C" },
            { code: "GLY 403", title: "Engineering Geology", units: 3, type: "C" },
            { code: "GLY 405", title: "Environmental Geology and Geohazards", units: 3, type: "C" },
            { code: "GLY 407", title: "Advanced Structural Geology and Tectonics", units: 2, type: "C" },
            { code: "GLY 409", title: "Mining Geology and Mineral Exploration", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "GLY 411", title: "Remote Sensing and GIS in Geology", units: 2, type: "E" },
            { code: "GLY 413", title: "Marine Geology", units: 2, type: "E" },
            { code: "GLY 415", title: "Volcanology and Seismology", units: 2, type: "E" },
            { code: "GLY 417", title: "Gemology", units: 2, type: "E" },
          ],
          second_semester: [
            // VTE Courses
            { code: "VTE 403", title: "Vocational and Technical Education Seminar II", units: 2, type: "C" },

            // Final Year Project
            { code: "GLY 499B", title: "Final Year Project II (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "GLY 402", title: "Petroleum Geology II", units: 3, type: "C" },
            { code: "GLY 404", title: "Advanced Hydrogeology", units: 3, type: "C" },
            { code: "GLY 406", title: "Geotechnical Investigation", units: 2, type: "C" },
            { code: "GLY 408", title: "Nigerian Geology and Mineral Resources", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "GLY 410", title: "Isotope Geology", units: 2, type: "E" },
            { code: "GLY 412", title: "Coal and Energy Resources Geology", units: 2, type: "E" },
            { code: "GLY 414", title: "Planetary Geology", units: 2, type: "E" },
            { code: "GLY 416", title: "Emerging Issues in Geological Sciences", units: 2, type: "E" },
          ],
        },
      },
    },

    // =====================================================================
    // DEPARTMENT 4: MICROBIOLOGY (4 Years)
    // =====================================================================
    {
      name: "Microbiology",
      code: "MCB",
      duration: "4 Years",
      levels: {

        // ----- 100 LEVEL -----
        100: {
          first_semester: [
            // GNS Courses
            { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
            { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
            { code: "GNS 105", title: "History and Philosophy of Science", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 101", title: "Elementary Mathematics I (Algebra and Trigonometry)", units: 2, type: "C" },
            { code: "PHY 101", title: "General Physics I (Mechanics)", units: 2, type: "C" },
            { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
            { code: "CHM 101", title: "General Chemistry I (Inorganic Chemistry)", units: 2, type: "C" },
            { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
            { code: "BIO 101", title: "General Biology I (Cell Biology and Genetics)", units: 2, type: "C" },
            { code: "BIO 107", title: "General Biology Laboratory I", units: 1, type: "C" },
            { code: "STA 101", title: "Introduction to Statistics I", units: 2, type: "C" },
            { code: "CPT 101", title: "Introduction to Computer Science I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
            { code: "GNS 104", title: "Citizenship Education", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 2, type: "C" },
            { code: "PHY 102", title: "General Physics II (Electricity and Magnetism)", units: 2, type: "C" },
            { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
            { code: "CHM 102", title: "General Chemistry II (Organic Chemistry)", units: 2, type: "C" },
            { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
            { code: "BIO 102", title: "General Biology II (Plant Biology)", units: 2, type: "C" },
            { code: "BIO 108", title: "General Biology Laboratory II", units: 1, type: "C" },
            { code: "STA 102", title: "Introduction to Statistics II", units: 2, type: "C" },
            { code: "CPT 102", title: "Introduction to Computer Science II", units: 2, type: "C" },
          ],
        },

        // ----- 200 LEVEL -----
        200: {
          first_semester: [
            // GNS Courses
            { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
            { code: "GNS 203", title: "Introduction to Entrepreneurship I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 201", title: "Vocational and Technical Education Practice I", units: 2, type: "C" },

            // Service Courses
            { code: "CHM 201", title: "Organic Chemistry I", units: 2, type: "C" },
            { code: "BCH 201", title: "General Biochemistry I", units: 2, type: "C" },
            { code: "BIO 201", title: "Genetics I", units: 2, type: "C" },
            { code: "STA 201", title: "Statistics for Sciences I", units: 2, type: "C" },
            { code: "CPT 201", title: "Computer Applications I", units: 2, type: "C" },

            // Departmental Courses
            { code: "MCB 201", title: "General Microbiology I", units: 3, type: "C" },
            { code: "MCB 203", title: "Microbial Diversity (Bacteriology)", units: 3, type: "C" },
            { code: "MCB 205", title: "Introduction to Mycology", units: 2, type: "C" },
            { code: "MCB 207", title: "Introduction to Virology", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
            { code: "GNS 204", title: "Introduction to Entrepreneurship II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 203", title: "Vocational and Technical Education Practice II", units: 2, type: "C" },

            // Service Courses
            { code: "CHM 202", title: "Organic Chemistry II", units: 2, type: "C" },
            { code: "BCH 202", title: "General Biochemistry II", units: 2, type: "C" },
            { code: "STA 202", title: "Statistics for Sciences II", units: 2, type: "C" },

            // Departmental Courses
            { code: "MCB 202", title: "General Microbiology II", units: 3, type: "C" },
            { code: "MCB 204", title: "Microbial Physiology and Metabolism", units: 3, type: "C" },
            { code: "MCB 206", title: "Microbial Ecology", units: 2, type: "C" },
            { code: "MCB 208", title: "Microbiology Laboratory Techniques", units: 2, type: "C" },
            { code: "MCB 210", title: "Parasitology", units: 2, type: "C" },
          ],
        },

        // ----- 300 LEVEL -----
        300: {
          first_semester: [
            // GNS Courses
            { code: "GNS 301", title: "Entrepreneurship Development I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 301", title: "Vocational and Technical Education Methodology I", units: 2, type: "C" },

            // Departmental Courses
            { code: "MCB 301", title: "Medical Microbiology I (Bacteriology)", units: 3, type: "C" },
            { code: "MCB 303", title: "Microbial Genetics and Molecular Biology", units: 3, type: "C" },
            { code: "MCB 305", title: "Immunology", units: 3, type: "C" },
            { code: "MCB 307", title: "Food Microbiology I", units: 3, type: "C" },
            { code: "MCB 309", title: "Industrial Microbiology I (Fermentation Technology)", units: 3, type: "C" },
            { code: "MCB 311", title: "Soil Microbiology", units: 2, type: "C" },
            { code: "MCB 313", title: "Research Methods in Microbiology", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 302", title: "Entrepreneurship Development II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 303", title: "Vocational and Technical Education Methodology II", units: 2, type: "C" },

            // SIWES
            { code: "MCB 399", title: "Students Industrial Work Experience Scheme (SIWES)", units: 6, type: "C" },

            // Departmental Courses
            { code: "MCB 302", title: "Medical Microbiology II (Virology and Mycology)", units: 3, type: "C" },
            { code: "MCB 304", title: "Advanced Microbial Physiology", units: 3, type: "C" },
            { code: "MCB 306", title: "Food Microbiology II (Food Preservation)", units: 2, type: "C" },
            { code: "MCB 308", title: "Industrial Microbiology II (Bioprocess Engineering)", units: 2, type: "C" },
            { code: "MCB 310", title: "Environmental Microbiology I", units: 2, type: "C" },
            { code: "MCB 312", title: "Petroleum Microbiology", units: 2, type: "C" },
          ],
        },

        // ----- 400 LEVEL -----
        400: {
          first_semester: [
            // VTE Courses
            { code: "VTE 401", title: "Vocational and Technical Education Seminar I", units: 2, type: "C" },

            // Final Year Project
            { code: "MCB 499A", title: "Final Year Project I (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "MCB 401", title: "Advanced Medical Microbiology", units: 3, type: "C" },
            { code: "MCB 403", title: "Advanced Immunology and Immunotechnology", units: 3, type: "C" },
            { code: "MCB 405", title: "Microbial Biotechnology", units: 3, type: "C" },
            { code: "MCB 407", title: "Advanced Virology", units: 2, type: "C" },
            { code: "MCB 409", title: "Pharmaceutical Microbiology", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "MCB 411", title: "Mycotoxicology", units: 2, type: "E" },
            { code: "MCB 413", title: "Water and Wastewater Microbiology", units: 2, type: "E" },
            { code: "MCB 415", title: "Agricultural Microbiology", units: 2, type: "E" },
            { code: "MCB 417", title: "Bioremediation", units: 2, type: "E" },
          ],
          second_semester: [
            // VTE Courses
            { code: "VTE 403", title: "Vocational and Technical Education Seminar II", units: 2, type: "C" },

            // Final Year Project
            { code: "MCB 499B", title: "Final Year Project II (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "MCB 402", title: "Environmental Microbiology II", units: 3, type: "C" },
            { code: "MCB 404", title: "Advanced Industrial Microbiology", units: 3, type: "C" },
            { code: "MCB 406", title: "Epidemiology and Public Health Microbiology", units: 2, type: "C" },
            { code: "MCB 408", title: "Antimicrobial Agents and Chemotherapy", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "MCB 410", title: "Clinical Microbiology and Diagnostics", units: 2, type: "E" },
            { code: "MCB 412", title: "Microbial Genomics and Proteomics", units: 2, type: "E" },
            { code: "MCB 414", title: "Marine Microbiology", units: 2, type: "E" },
            { code: "MCB 416", title: "Emerging Topics in Microbiology", units: 2, type: "E" },
          ],
        },
      },
    },

    // =====================================================================
    // DEPARTMENT 5: PHYSICS (4 Years)
    // =====================================================================
    {
      name: "Physics",
      code: "PHY",
      duration: "4 Years",
      levels: {

        // ----- 100 LEVEL -----
        100: {
          first_semester: [
            // GNS Courses
            { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
            { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
            { code: "GNS 105", title: "History and Philosophy of Science", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 101", title: "Elementary Mathematics I (Algebra and Trigonometry)", units: 2, type: "C" },
            { code: "MTH 103", title: "Elementary Mathematics III (Vectors and Geometry)", units: 2, type: "C" },
            { code: "CHM 101", title: "General Chemistry I (Inorganic Chemistry)", units: 2, type: "C" },
            { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
            { code: "BIO 101", title: "General Biology I", units: 2, type: "C" },
            { code: "BIO 107", title: "General Biology Laboratory I", units: 1, type: "C" },
            { code: "STA 101", title: "Introduction to Statistics I", units: 2, type: "C" },
            { code: "CPT 101", title: "Introduction to Computer Science I", units: 2, type: "C" },

            // Departmental Courses
            { code: "PHY 101", title: "General Physics I (Mechanics)", units: 2, type: "C" },
            { code: "PHY 103", title: "General Physics III (Heat and Properties of Matter)", units: 2, type: "C" },
            { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
            { code: "GNS 104", title: "Citizenship Education", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 2, type: "C" },
            { code: "MTH 104", title: "Elementary Mathematics IV (Differential Equations I)", units: 2, type: "C" },
            { code: "CHM 102", title: "General Chemistry II (Organic Chemistry)", units: 2, type: "C" },
            { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
            { code: "BIO 102", title: "General Biology II", units: 2, type: "C" },
            { code: "BIO 108", title: "General Biology Laboratory II", units: 1, type: "C" },
            { code: "STA 102", title: "Introduction to Statistics II", units: 2, type: "C" },
            { code: "CPT 102", title: "Introduction to Computer Science II", units: 2, type: "C" },

            // Departmental Courses
            { code: "PHY 102", title: "General Physics II (Electricity and Magnetism)", units: 2, type: "C" },
            { code: "PHY 104", title: "General Physics IV (Waves and Optics)", units: 2, type: "C" },
            { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
          ],
        },

        // ----- 200 LEVEL -----
        200: {
          first_semester: [
            // GNS Courses
            { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
            { code: "GNS 203", title: "Introduction to Entrepreneurship I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 201", title: "Vocational and Technical Education Practice I", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
            { code: "MTH 205", title: "Linear Algebra I", units: 3, type: "C" },
            { code: "CHM 201", title: "Organic Chemistry I", units: 2, type: "C" },
            { code: "STA 201", title: "Statistics for Sciences I", units: 2, type: "C" },
            { code: "CPT 201", title: "Computer Applications I", units: 2, type: "C" },

            // Departmental Courses
            { code: "PHY 201", title: "Classical Mechanics I", units: 3, type: "C" },
            { code: "PHY 203", title: "Thermal Physics I (Thermodynamics)", units: 2, type: "C" },
            { code: "PHY 205", title: "Electromagnetism I", units: 3, type: "C" },
            { code: "PHY 207", title: "Modern Physics I (Special Relativity)", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
            { code: "GNS 204", title: "Introduction to Entrepreneurship II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 203", title: "Vocational and Technical Education Practice II", units: 2, type: "C" },

            // Service Courses
            { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
            { code: "MTH 204", title: "Linear Algebra II", units: 3, type: "C" },
            { code: "STA 202", title: "Statistics for Sciences II", units: 2, type: "C" },

            // Departmental Courses
            { code: "PHY 202", title: "Classical Mechanics II", units: 3, type: "C" },
            { code: "PHY 204", title: "Thermal Physics II (Statistical Physics)", units: 2, type: "C" },
            { code: "PHY 206", title: "Electromagnetism II", units: 3, type: "C" },
            { code: "PHY 208", title: "Modern Physics II (Atomic Physics)", units: 2, type: "C" },
            { code: "PHY 210", title: "Electronics I (Analog Electronics)", units: 2, type: "C" },
            { code: "PHY 212", title: "Physics Laboratory I", units: 1, type: "C" },
          ],
        },

        // ----- 300 LEVEL -----
        300: {
          first_semester: [
            // GNS Courses
            { code: "GNS 301", title: "Entrepreneurship Development I", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 301", title: "Vocational and Technical Education Methodology I", units: 2, type: "C" },

            // Departmental Courses
            { code: "PHY 301", title: "Quantum Mechanics I", units: 3, type: "C" },
            { code: "PHY 303", title: "Electromagnetic Theory I", units: 3, type: "C" },
            { code: "PHY 305", title: "Statistical Mechanics", units: 3, type: "C" },
            { code: "PHY 307", title: "Electronics II (Digital Electronics)", units: 3, type: "C" },
            { code: "PHY 309", title: "Nuclear Physics I", units: 2, type: "C" },
            { code: "PHY 311", title: "Solid State Physics I", units: 2, type: "C" },
            { code: "PHY 313", title: "Mathematical Physics I", units: 2, type: "C" },
          ],
          second_semester: [
            // GNS Courses
            { code: "GNS 302", title: "Entrepreneurship Development II", units: 2, type: "C" },

            // VTE Courses
            { code: "VTE 303", title: "Vocational and Technical Education Methodology II", units: 2, type: "C" },

            // SIWES
            { code: "PHY 399", title: "Students Industrial Work Experience Scheme (SIWES)", units: 6, type: "C" },

            // Departmental Courses
            { code: "PHY 302", title: "Quantum Mechanics II", units: 3, type: "C" },
            { code: "PHY 304", title: "Electromagnetic Theory II", units: 3, type: "C" },
            { code: "PHY 306", title: "Optics and Laser Physics", units: 2, type: "C" },
            { code: "PHY 308", title: "Nuclear Physics II", units: 2, type: "C" },
            { code: "PHY 310", title: "Solid State Physics II", units: 2, type: "C" },
            { code: "PHY 312", title: "Mathematical Physics II", units: 2, type: "C" },
            { code: "PHY 314", title: "Physics Laboratory II", units: 1, type: "C" },
          ],
        },

        // ----- 400 LEVEL -----
        400: {
          first_semester: [
            // VTE Courses
            { code: "VTE 401", title: "Vocational and Technical Education Seminar I", units: 2, type: "C" },

            // Final Year Project
            { code: "PHY 499A", title: "Final Year Project I (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "PHY 401", title: "Advanced Quantum Mechanics", units: 3, type: "C" },
            { code: "PHY 403", title: "Advanced Solid State Physics", units: 3, type: "C" },
            { code: "PHY 405", title: "Particle Physics", units: 2, type: "C" },
            { code: "PHY 407", title: "Advanced Electronics (Microprocessors)", units: 3, type: "C" },
            { code: "PHY 409", title: "Plasma Physics", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "PHY 411", title: "Astrophysics", units: 2, type: "E" },
            { code: "PHY 413", title: "Geophysics", units: 2, type: "E" },
            { code: "PHY 415", title: "Renewable Energy Physics", units: 2, type: "E" },
            { code: "PHY 417", title: "Medical Physics", units: 2, type: "E" },
          ],
          second_semester: [
            // VTE Courses
            { code: "VTE 403", title: "Vocational and Technical Education Seminar II", units: 2, type: "C" },

            // Final Year Project
            { code: "PHY 499B", title: "Final Year Project II (Research Project)", units: 3, type: "C" },

            // Departmental Core Courses
            { code: "PHY 402", title: "Advanced Nuclear Physics", units: 3, type: "C" },
            { code: "PHY 404", title: "General Relativity and Cosmology", units: 3, type: "C" },
            { code: "PHY 406", title: "Computational Physics", units: 2, type: "C" },
            { code: "PHY 408", title: "Environmental Physics", units: 2, type: "C" },

            // Electives (Choose 2)
            { code: "PHY 410", title: "Nanophysics and Nanotechnology", units: 2, type: "E" },
            { code: "PHY 412", title: "Atmospheric Physics", units: 2, type: "E" },
            { code: "PHY 414", title: "Biophysics", units: 2, type: "E" },
            { code: "PHY 416", title: "Emerging Topics in Physics", units: 2, type: "E" },
          ],
        },
      },
    },
  ],

}, //pure and appied


{
  id: 2,
  name: "Faculty of Science",
  code: "SCI",
  duration: 4,
  departments: [

    // ======================================================
    // DEPARTMENT 1: BIOLOGICAL SCIENCES
    // ======================================================
    {
      id: 201,
      name: "Biological Sciences",
      code: "BIO",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                { code: "PHY 101", title: "General Physics I (Mechanics, Heat & Properties of Matter)", units: 3, type: "C" },
                { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                { code: "BIO 101", title: "General Biology I (Cell Biology & Genetics)", units: 3, type: "C" },
                { code: "BIO 107", title: "General Biology Laboratory I", units: 1, type: "C" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                { code: "BIO 102", title: "General Biology II (Ecology & Evolution)", units: 3, type: "C" },
                { code: "BIO 108", title: "General Biology Laboratory II", units: 1, type: "C" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "BIO 201", title: "Genetics I", units: 3, type: "C" },
                { code: "BIO 203", title: "Plant Anatomy and Morphology", units: 3, type: "C" },
                { code: "BIO 205", title: "Vertebrate Zoology", units: 3, type: "C" },
                { code: "BIO 207", title: "Introductory Ecology", units: 3, type: "C" },
                { code: "BIO 209", title: "Biological Techniques and Scientific Methods", units: 2, type: "C" },
                { code: "CHM 201", title: "Organic Chemistry I", units: 3, type: "C" },
                { code: "BCH 201", title: "General Biochemistry I", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "BIO 202", title: "Genetics II", units: 3, type: "C" },
                { code: "BIO 204", title: "Plant Physiology I", units: 3, type: "C" },
                { code: "BIO 206", title: "Invertebrate Zoology", units: 3, type: "C" },
                { code: "BIO 208", title: "Cell Biology", units: 3, type: "C" },
                { code: "BIO 210", title: "Biostatistics", units: 3, type: "C" },
                { code: "MCB 201", title: "General Microbiology I", units: 3, type: "C" },
                { code: "BCH 202", title: "General Biochemistry II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "BIO 301", title: "Molecular Biology", units: 3, type: "C" },
                { code: "BIO 303", title: "Plant Physiology II", units: 3, type: "C" },
                { code: "BIO 305", title: "Animal Physiology I", units: 3, type: "C" },
                { code: "BIO 307", title: "Developmental Biology", units: 3, type: "C" },
                { code: "BIO 309", title: "Systematic Botany (Plant Taxonomy)", units: 3, type: "C" },
                { code: "BIO 311", title: "Population and Community Ecology", units: 3, type: "C" },
                { code: "BIO 313", title: "Parasitology", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "BIO 302", title: "Microbial Genetics", units: 3, type: "C" },
                { code: "BIO 304", title: "Animal Physiology II", units: 3, type: "C" },
                { code: "BIO 306", title: "Comparative Anatomy of Vertebrates", units: 3, type: "C" },
                { code: "BIO 308", title: "Entomology", units: 3, type: "C" },
                { code: "BIO 310", title: "Ecosystem Ecology", units: 3, type: "C" },
                { code: "BIO 312", title: "Mycology and Phycology", units: 3, type: "C" },
                { code: "BIO 314", title: "Histological Techniques", units: 2, type: "C" },
                { code: "BIO 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "BIO 401", title: "Advanced Genetics and Genomics", units: 3, type: "C" },
                { code: "BIO 403", title: "Immunology", units: 3, type: "C" },
                { code: "BIO 405", title: "Biotechnology", units: 3, type: "C" },
                { code: "BIO 407", title: "Conservation Biology", units: 3, type: "C" },
                { code: "BIO 409", title: "Fisheries and Wildlife Biology", units: 3, type: "E" },
                { code: "BIO 411", title: "Applied Entomology", units: 3, type: "E" },
                { code: "BIO 413", title: "Bioinformatics", units: 3, type: "E" },
                { code: "BIO 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "BIO 402", title: "Evolutionary Biology", units: 3, type: "C" },
                { code: "BIO 404", title: "Environmental Pollution and Toxicology", units: 3, type: "C" },
                { code: "BIO 406", title: "Phytochemistry and Pharmacognosy", units: 3, type: "C" },
                { code: "BIO 408", title: "Limnology and Freshwater Biology", units: 3, type: "E" },
                { code: "BIO 410", title: "Virology", units: 3, type: "E" },
                { code: "BIO 412", title: "Plant Pathology", units: 3, type: "E" },
                { code: "BIO 414", title: "Biology Seminar", units: 2, type: "C" },
                { code: "BIO 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 2: CHEMISTRY
    // ======================================================
    {
      id: 202,
      name: "Chemistry",
      code: "CHM",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                { code: "PHY 101", title: "General Physics I (Mechanics, Heat & Properties of Matter)", units: 3, type: "C" },
                { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                { code: "CHM 101", title: "General Chemistry I (Atomic Structure, Bonding & Periodicity)", units: 3, type: "C" },
                { code: "CHM 103", title: "Introductory Organic Chemistry I", units: 2, type: "C" },
                { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                { code: "BIO 101", title: "General Biology I", units: 3, type: "C" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                { code: "CHM 102", title: "General Chemistry II (States of Matter, Solutions & Equilibria)", units: 3, type: "C" },
                { code: "CHM 104", title: "Introductory Organic Chemistry II", units: 2, type: "C" },
                { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                { code: "BIO 102", title: "General Biology II", units: 3, type: "C" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "CHM 201", title: "Organic Chemistry I (Aliphatic Hydrocarbons)", units: 3, type: "C" },
                { code: "CHM 203", title: "Physical Chemistry I (Chemical Thermodynamics)", units: 3, type: "C" },
                { code: "CHM 205", title: "Inorganic Chemistry I (Chemistry of s- and p-Block Elements)", units: 3, type: "C" },
                { code: "CHM 207", title: "Analytical Chemistry I (Qualitative & Quantitative Analysis)", units: 3, type: "C" },
                { code: "CHM 209", title: "Practical Organic Chemistry I", units: 1, type: "C" },
                { code: "CHM 211", title: "Practical Inorganic Chemistry I", units: 1, type: "C" },
                { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "CHM 202", title: "Organic Chemistry II (Aromatic & Carbonyl Compounds)", units: 3, type: "C" },
                { code: "CHM 204", title: "Physical Chemistry II (Chemical Kinetics & Electrochemistry)", units: 3, type: "C" },
                { code: "CHM 206", title: "Inorganic Chemistry II (Chemistry of d-Block Elements)", units: 3, type: "C" },
                { code: "CHM 208", title: "Analytical Chemistry II (Instrumental Methods)", units: 3, type: "C" },
                { code: "CHM 210", title: "Practical Organic Chemistry II", units: 1, type: "C" },
                { code: "CHM 212", title: "Practical Physical Chemistry I", units: 1, type: "C" },
                { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "CHM 301", title: "Organic Chemistry III (Natural Products & Heterocyclics)", units: 3, type: "C" },
                { code: "CHM 303", title: "Physical Chemistry III (Quantum Chemistry)", units: 3, type: "C" },
                { code: "CHM 305", title: "Inorganic Chemistry III (Coordination Chemistry)", units: 3, type: "C" },
                { code: "CHM 307", title: "Analytical Chemistry III (Spectroscopic Methods)", units: 3, type: "C" },
                { code: "CHM 309", title: "Industrial Chemistry I", units: 3, type: "C" },
                { code: "CHM 311", title: "Environmental Chemistry", units: 3, type: "C" },
                { code: "CHM 313", title: "Polymer Chemistry I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "CHM 302", title: "Organic Chemistry IV (Reaction Mechanisms)", units: 3, type: "C" },
                { code: "CHM 304", title: "Physical Chemistry IV (Surface & Colloid Chemistry)", units: 3, type: "C" },
                { code: "CHM 306", title: "Inorganic Chemistry IV (Organometallic Chemistry)", units: 3, type: "C" },
                { code: "CHM 308", title: "Analytical Chemistry IV (Electroanalytical Methods)", units: 3, type: "C" },
                { code: "CHM 310", title: "Industrial Chemistry II", units: 3, type: "C" },
                { code: "CHM 312", title: "Petrochemistry", units: 3, type: "C" },
                { code: "CHM 314", title: "Chemistry Laboratory Techniques", units: 2, type: "C" },
                { code: "CHM 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "CHM 401", title: "Advanced Organic Chemistry (Pericyclic & Photochemistry)", units: 3, type: "C" },
                { code: "CHM 403", title: "Advanced Physical Chemistry (Statistical Thermodynamics)", units: 3, type: "C" },
                { code: "CHM 405", title: "Advanced Inorganic Chemistry (Bioinorganic Chemistry)", units: 3, type: "C" },
                { code: "CHM 407", title: "Advanced Analytical Chemistry (Chromatography)", units: 3, type: "C" },
                { code: "CHM 409", title: "Nuclear and Radiochemistry", units: 3, type: "E" },
                { code: "CHM 411", title: "Medicinal Chemistry", units: 3, type: "E" },
                { code: "CHM 413", title: "Food Chemistry", units: 3, type: "E" },
                { code: "CHM 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "CHM 402", title: "Advanced Organic Synthesis", units: 3, type: "C" },
                { code: "CHM 404", title: "Computational Chemistry", units: 3, type: "E" },
                { code: "CHM 406", title: "Advanced Coordination Chemistry", units: 3, type: "E" },
                { code: "CHM 408", title: "Advanced Instrumental Analysis", units: 3, type: "C" },
                { code: "CHM 410", title: "Polymer Chemistry II (Advanced)", units: 3, type: "E" },
                { code: "CHM 412", title: "Nanochemistry", units: 3, type: "E" },
                { code: "CHM 414", title: "Chemistry Seminar", units: 2, type: "C" },
                { code: "CHM 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 3: PHYSICS
    // ======================================================
    {
      id: 203,
      name: "Physics",
      code: "PHY",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                { code: "PHY 101", title: "General Physics I (Mechanics, Heat & Properties of Matter)", units: 3, type: "C" },
                { code: "PHY 103", title: "General Physics III (Vibrations, Waves & Optics)", units: 3, type: "C" },
                { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                { code: "PHY 104", title: "General Physics IV (Modern Physics)", units: 3, type: "C" },
                { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "PHY 201", title: "Classical Mechanics I", units: 3, type: "C" },
                { code: "PHY 203", title: "Thermal Physics I (Kinetic Theory & Thermodynamics)", units: 3, type: "C" },
                { code: "PHY 205", title: "Electricity and Magnetism I", units: 3, type: "C" },
                { code: "PHY 207", title: "Waves and Optics I", units: 3, type: "C" },
                { code: "PHY 209", title: "Physics Laboratory I (Experimental Physics)", units: 2, type: "C" },
                { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "PHY 202", title: "Classical Mechanics II", units: 3, type: "C" },
                { code: "PHY 204", title: "Thermal Physics II (Statistical Mechanics)", units: 3, type: "C" },
                { code: "PHY 206", title: "Electricity and Magnetism II", units: 3, type: "C" },
                { code: "PHY 208", title: "Waves and Optics II", units: 3, type: "C" },
                { code: "PHY 210", title: "Physics Laboratory II", units: 2, type: "C" },
                { code: "PHY 212", title: "Introduction to Electronics", units: 3, type: "C" },
                { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "PHY 301", title: "Quantum Mechanics I", units: 3, type: "C" },
                { code: "PHY 303", title: "Electrodynamics I (Electromagnetic Theory)", units: 3, type: "C" },
                { code: "PHY 305", title: "Atomic and Molecular Physics", units: 3, type: "C" },
                { code: "PHY 307", title: "Electronics I (Analog Electronics)", units: 3, type: "C" },
                { code: "PHY 309", title: "Mathematical Physics I", units: 3, type: "C" },
                { code: "PHY 311", title: "Solid State Physics I", units: 3, type: "C" },
                { code: "PHY 313", title: "Physics Laboratory III", units: 2, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "PHY 302", title: "Quantum Mechanics II", units: 3, type: "C" },
                { code: "PHY 304", title: "Electrodynamics II", units: 3, type: "C" },
                { code: "PHY 306", title: "Nuclear Physics I", units: 3, type: "C" },
                { code: "PHY 308", title: "Electronics II (Digital Electronics)", units: 3, type: "C" },
                { code: "PHY 310", title: "Mathematical Physics II", units: 3, type: "C" },
                { code: "PHY 312", title: "Solid State Physics II", units: 3, type: "C" },
                { code: "PHY 314", title: "Physics Laboratory IV", units: 2, type: "C" },
                { code: "PHY 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "PHY 401", title: "Advanced Quantum Mechanics", units: 3, type: "C" },
                { code: "PHY 403", title: "Nuclear Physics II", units: 3, type: "C" },
                { code: "PHY 405", title: "Advanced Solid State Physics", units: 3, type: "C" },
                { code: "PHY 407", title: "Geophysics I", units: 3, type: "E" },
                { code: "PHY 409", title: "Astrophysics and Cosmology", units: 3, type: "E" },
                { code: "PHY 411", title: "Computational Physics", units: 3, type: "E" },
                { code: "PHY 413", title: "Medical Physics", units: 3, type: "E" },
                { code: "PHY 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "PHY 402", title: "Advanced Electrodynamics", units: 3, type: "C" },
                { code: "PHY 404", title: "Particle Physics", units: 3, type: "E" },
                { code: "PHY 406", title: "Geophysics II (Seismology & Prospecting)", units: 3, type: "E" },
                { code: "PHY 408", title: "Renewable Energy Physics", units: 3, type: "E" },
                { code: "PHY 410", title: "Plasma Physics", units: 3, type: "E" },
                { code: "PHY 412", title: "Laser and Fibre Optics", units: 3, type: "E" },
                { code: "PHY 414", title: "Physics Seminar", units: 2, type: "C" },
                { code: "PHY 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 4: MATHEMATICS
    // ======================================================
    {
      id: 204,
      name: "Mathematics",
      code: "MTH",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                { code: "MTH 103", title: "Elementary Mathematics III (Vectors & Geometry)", units: 3, type: "C" },
                { code: "PHY 101", title: "General Physics I (Mechanics, Heat & Properties of Matter)", units: 3, type: "C" },
                { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "STA 101", title: "Introduction to Statistics I", units: 3, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                { code: "MTH 104", title: "Elementary Mathematics IV (Sets, Logic & Algebra)", units: 3, type: "C" },
                { code: "PHY 102", title: "General Physics II (Electricity & Magnetism)", units: 3, type: "C" },
                { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "STA 102", title: "Introduction to Statistics II", units: 3, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "MTH 201", title: "Mathematical Methods I (ODE & Series)", units: 3, type: "C" },
                { code: "MTH 203", title: "Sets and Abstract Algebra I (Group Theory)", units: 3, type: "C" },
                { code: "MTH 205", title: "Linear Algebra I (Vector Spaces & Matrices)", units: 3, type: "C" },
                { code: "MTH 207", title: "Real Analysis I (Sequences & Series)", units: 3, type: "C" },
                { code: "MTH 209", title: "Introduction to Numerical Analysis", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Scientists I", units: 3, type: "C" },
                { code: "CPT 201", title: "Computer Programming", units: 2, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "MTH 202", title: "Mathematical Methods II (PDE & Special Functions)", units: 3, type: "C" },
                { code: "MTH 204", title: "Sets and Abstract Algebra II (Ring Theory)", units: 3, type: "C" },
                { code: "MTH 206", title: "Linear Algebra II", units: 3, type: "C" },
                { code: "MTH 208", title: "Real Analysis II (Continuity & Differentiation)", units: 3, type: "C" },
                { code: "MTH 210", title: "Introduction to Mathematical Modelling", units: 3, type: "C" },
                { code: "MTH 212", title: "Coordinate Geometry and Mechanics", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "MTH 301", title: "Abstract Algebra III (Field Theory)", units: 3, type: "C" },
                { code: "MTH 303", title: "Real Analysis III (Riemann Integration)", units: 3, type: "C" },
                { code: "MTH 305", title: "Complex Analysis I", units: 3, type: "C" },
                { code: "MTH 307", title: "Ordinary Differential Equations", units: 3, type: "C" },
                { code: "MTH 309", title: "Numerical Analysis I", units: 3, type: "C" },
                { code: "MTH 311", title: "General Topology I", units: 3, type: "C" },
                { code: "MTH 313", title: "Differential Geometry", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "MTH 302", title: "Abstract Algebra IV (Module Theory)", units: 3, type: "C" },
                { code: "MTH 304", title: "Metric Space Topology", units: 3, type: "C" },
                { code: "MTH 306", title: "Complex Analysis II", units: 3, type: "C" },
                { code: "MTH 308", title: "Partial Differential Equations", units: 3, type: "C" },
                { code: "MTH 310", title: "Numerical Analysis II", units: 3, type: "C" },
                { code: "MTH 312", title: "Operations Research I (Linear Programming)", units: 3, type: "C" },
                { code: "MTH 314", title: "Fluid Mechanics", units: 3, type: "C" },
                { code: "MTH 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "MTH 401", title: "Functional Analysis", units: 3, type: "C" },
                { code: "MTH 403", title: "Measure Theory and Integration", units: 3, type: "C" },
                { code: "MTH 405", title: "Advanced Differential Equations", units: 3, type: "C" },
                { code: "MTH 407", title: "Operations Research II (Non-Linear Programming)", units: 3, type: "E" },
                { code: "MTH 409", title: "Algebraic Topology", units: 3, type: "E" },
                { code: "MTH 411", title: "Mathematical Biology", units: 3, type: "E" },
                { code: "MTH 413", title: "Celestial Mechanics", units: 3, type: "E" },
                { code: "MTH 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "MTH 402", title: "Advanced Abstract Algebra", units: 3, type: "C" },
                { code: "MTH 404", title: "Advanced Complex Analysis", units: 3, type: "E" },
                { code: "MTH 406", title: "Advanced Numerical Analysis", units: 3, type: "E" },
                { code: "MTH 408", title: "Mathematical Physics", units: 3, type: "E" },
                { code: "MTH 410", title: "Optimization Theory", units: 3, type: "E" },
                { code: "MTH 412", title: "Number Theory", units: 3, type: "E" },
                { code: "MTH 414", title: "Mathematics Seminar", units: 2, type: "C" },
                { code: "MTH 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 5: STATISTICS
    // ======================================================
    {
      id: 205,
      name: "Statistics",
      code: "STA",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                { code: "MTH 103", title: "Elementary Mathematics III (Vectors & Geometry)", units: 3, type: "C" },
                { code: "STA 101", title: "Introduction to Statistics I (Descriptive Statistics)", units: 3, type: "C" },
                { code: "PHY 101", title: "General Physics I", units: 3, type: "C" },
                { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "ECO 101", title: "Principles of Economics I", units: 3, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                { code: "MTH 104", title: "Elementary Mathematics IV (Sets, Logic & Algebra)", units: 3, type: "C" },
                { code: "STA 102", title: "Introduction to Statistics II (Probability)", units: 3, type: "C" },
                { code: "PHY 102", title: "General Physics II", units: 3, type: "C" },
                { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "ECO 102", title: "Principles of Economics II", units: 3, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "STA 201", title: "Probability Theory I", units: 3, type: "C" },
                { code: "STA 203", title: "Statistical Inference I (Estimation)", units: 3, type: "C" },
                { code: "STA 205", title: "Sampling Techniques I", units: 3, type: "C" },
                { code: "STA 207", title: "Statistical Computing I", units: 3, type: "C" },
                { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
                { code: "MTH 205", title: "Linear Algebra I", units: 3, type: "C" },
                { code: "CPT 201", title: "Computer Programming", units: 2, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "STA 202", title: "Probability Theory II (Distributions)", units: 3, type: "C" },
                { code: "STA 204", title: "Statistical Inference II (Hypothesis Testing)", units: 3, type: "C" },
                { code: "STA 206", title: "Sampling Techniques II", units: 3, type: "C" },
                { code: "STA 208", title: "Regression Analysis I", units: 3, type: "C" },
                { code: "STA 210", title: "Demography", units: 3, type: "C" },
                { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "STA 301", title: "Probability Theory III (Stochastic Processes)", units: 3, type: "C" },
                { code: "STA 303", title: "Design and Analysis of Experiments I", units: 3, type: "C" },
                { code: "STA 305", title: "Regression Analysis II (Multiple Regression)", units: 3, type: "C" },
                { code: "STA 307", title: "Nonparametric Statistics", units: 3, type: "C" },
                { code: "STA 309", title: "Operations Research I", units: 3, type: "C" },
                { code: "STA 311", title: "Statistical Quality Control", units: 3, type: "C" },
                { code: "STA 313", title: "Actuarial Science I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "STA 302", title: "Multivariate Analysis I", units: 3, type: "C" },
                { code: "STA 304", title: "Design and Analysis of Experiments II", units: 3, type: "C" },
                { code: "STA 306", title: "Time Series Analysis I", units: 3, type: "C" },
                { code: "STA 308", title: "Bayesian Statistics I", units: 3, type: "C" },
                { code: "STA 310", title: "Operations Research II", units: 3, type: "C" },
                { code: "STA 312", title: "Econometrics I", units: 3, type: "C" },
                { code: "STA 314", title: "Statistical Computing II", units: 2, type: "C" },
                { code: "STA 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "STA 401", title: "Advanced Probability Theory", units: 3, type: "C" },
                { code: "STA 403", title: "Multivariate Analysis II", units: 3, type: "C" },
                { code: "STA 405", title: "Time Series Analysis II", units: 3, type: "C" },
                { code: "STA 407", title: "Bayesian Statistics II", units: 3, type: "E" },
                { code: "STA 409", title: "Biostatistics", units: 3, type: "E" },
                { code: "STA 411", title: "Actuarial Science II", units: 3, type: "E" },
                { code: "STA 413", title: "Survival Analysis", units: 3, type: "E" },
                { code: "STA 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "STA 402", title: "Advanced Statistical Inference", units: 3, type: "C" },
                { code: "STA 404", title: "Econometrics II", units: 3, type: "E" },
                { code: "STA 406", title: "Categorical Data Analysis", units: 3, type: "E" },
                { code: "STA 408", title: "Spatial Statistics", units: 3, type: "E" },
                { code: "STA 410", title: "Machine Learning and Data Science", units: 3, type: "E" },
                { code: "STA 412", title: "Decision Theory", units: 3, type: "E" },
                { code: "STA 414", title: "Statistics Seminar", units: 2, type: "C" },
                { code: "STA 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 6: BIOCHEMISTRY
    // ======================================================
    {
      id: 206,
      name: "Biochemistry",
      code: "BCH",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                { code: "PHY 101", title: "General Physics I", units: 3, type: "C" },
                { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                { code: "BIO 101", title: "General Biology I", units: 3, type: "C" },
                { code: "BIO 107", title: "General Biology Laboratory I", units: 1, type: "C" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                { code: "PHY 102", title: "General Physics II", units: 3, type: "C" },
                { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                { code: "BIO 102", title: "General Biology II", units: 3, type: "C" },
                { code: "BIO 108", title: "General Biology Laboratory II", units: 1, type: "C" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "BCH 201", title: "General Biochemistry I (Chemistry of Biomolecules)", units: 3, type: "C" },
                { code: "BCH 203", title: "Chemistry of Amino Acids and Proteins", units: 3, type: "C" },
                { code: "BCH 205", title: "Chemistry of Carbohydrates", units: 3, type: "C" },
                { code: "BCH 207", title: "Biochemistry Laboratory I", units: 2, type: "C" },
                { code: "CHM 201", title: "Organic Chemistry I", units: 3, type: "C" },
                { code: "CHM 203", title: "Physical Chemistry I", units: 3, type: "C" },
                { code: "BIO 201", title: "Genetics I", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "BCH 202", title: "General Biochemistry II (Bioenergetics)", units: 3, type: "C" },
                { code: "BCH 204", title: "Chemistry of Lipids", units: 3, type: "C" },
                { code: "BCH 206", title: "Chemistry of Nucleic Acids", units: 3, type: "C" },
                { code: "BCH 208", title: "Biochemistry Laboratory II", units: 2, type: "C" },
                { code: "CHM 202", title: "Organic Chemistry II", units: 3, type: "C" },
                { code: "CHM 204", title: "Physical Chemistry II", units: 3, type: "C" },
                { code: "MCB 201", title: "General Microbiology I", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "BCH 301", title: "Enzymology", units: 3, type: "C" },
                { code: "BCH 303", title: "Metabolism of Carbohydrates", units: 3, type: "C" },
                { code: "BCH 305", title: "Metabolism of Lipids", units: 3, type: "C" },
                { code: "BCH 307", title: "Metabolism of Amino Acids and Proteins", units: 3, type: "C" },
                { code: "BCH 309", title: "Biophysical Chemistry", units: 3, type: "C" },
                { code: "BCH 311", title: "Molecular Biology I", units: 3, type: "C" },
                { code: "BCH 313", title: "Biochemistry Laboratory III", units: 2, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "BCH 302", title: "Metabolism of Nucleic Acids", units: 3, type: "C" },
                { code: "BCH 304", title: "Membrane Biochemistry", units: 3, type: "C" },
                { code: "BCH 306", title: "Immunochemistry", units: 3, type: "C" },
                { code: "BCH 308", title: "Nutritional Biochemistry", units: 3, type: "C" },
                { code: "BCH 310", title: "Molecular Biology II (Gene Expression)", units: 3, type: "C" },
                { code: "BCH 312", title: "Biochemistry Laboratory IV", units: 2, type: "C" },
                { code: "BCH 314", title: "Biostatistics and Research Methods", units: 2, type: "C" },
                { code: "BCH 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "BCH 401", title: "Advanced Enzymology and Enzyme Technology", units: 3, type: "C" },
                { code: "BCH 403", title: "Clinical Biochemistry I", units: 3, type: "C" },
                { code: "BCH 405", title: "Endocrinology and Hormone Biochemistry", units: 3, type: "C" },
                { code: "BCH 407", title: "Biotechnology and Genetic Engineering", units: 3, type: "C" },
                { code: "BCH 409", title: "Pharmaceutical Biochemistry", units: 3, type: "E" },
                { code: "BCH 411", title: "Toxicology and Xenobiochemistry", units: 3, type: "E" },
                { code: "BCH 413", title: "Industrial Biochemistry", units: 3, type: "E" },
                { code: "BCH 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "BCH 402", title: "Clinical Biochemistry II", units: 3, type: "C" },
                { code: "BCH 404", title: "Plant Biochemistry", units: 3, type: "C" },
                { code: "BCH 406", title: "Neurochemistry", units: 3, type: "E" },
                { code: "BCH 408", title: "Bioinformatics and Computational Biochemistry", units: 3, type: "E" },
                { code: "BCH 410", title: "Food Biochemistry", units: 3, type: "E" },
                { code: "BCH 412", title: "Environmental Biochemistry", units: 3, type: "E" },
                { code: "BCH 414", title: "Biochemistry Seminar", units: 2, type: "C" },
                { code: "BCH 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 7: MICROBIOLOGY
    // ======================================================
    {
      id: 207,
      name: "Microbiology",
      code: "MCB",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                { code: "PHY 101", title: "General Physics I", units: 3, type: "C" },
                { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                { code: "BIO 101", title: "General Biology I", units: 3, type: "C" },
                { code: "BIO 107", title: "General Biology Laboratory I", units: 1, type: "C" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                { code: "PHY 102", title: "General Physics II", units: 3, type: "C" },
                { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                { code: "BIO 102", title: "General Biology II", units: 3, type: "C" },
                { code: "BIO 108", title: "General Biology Laboratory II", units: 1, type: "C" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "MCB 201", title: "General Microbiology I (Introduction to Microbiology)", units: 3, type: "C" },
                { code: "MCB 203", title: "Introductory Mycology", units: 3, type: "C" },
                { code: "MCB 205", title: "Microbial Techniques and Laboratory Methods", units: 3, type: "C" },
                { code: "BCH 201", title: "General Biochemistry I", units: 3, type: "C" },
                { code: "CHM 201", title: "Organic Chemistry I", units: 3, type: "C" },
                { code: "BIO 201", title: "Genetics I", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "MCB 202", title: "General Microbiology II (Microbial Diversity)", units: 3, type: "C" },
                { code: "MCB 204", title: "Introductory Virology", units: 3, type: "C" },
                { code: "MCB 206", title: "Microbial Ecology", units: 3, type: "C" },
                { code: "BCH 202", title: "General Biochemistry II", units: 3, type: "C" },
                { code: "CHM 202", title: "Organic Chemistry II", units: 3, type: "C" },
                { code: "BIO 208", title: "Cell Biology", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "MCB 301", title: "Microbial Physiology and Metabolism", units: 3, type: "C" },
                { code: "MCB 303", title: "Microbial Genetics", units: 3, type: "C" },
                { code: "MCB 305", title: "Soil Microbiology", units: 3, type: "C" },
                { code: "MCB 307", title: "Food Microbiology I", units: 3, type: "C" },
                { code: "MCB 309", title: "Medical Microbiology I (Bacteriology)", units: 3, type: "C" },
                { code: "MCB 311", title: "Industrial Microbiology I (Fermentation Technology)", units: 3, type: "C" },
                { code: "MCB 313", title: "Microbiology Laboratory III", units: 2, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "MCB 302", title: "Immunology", units: 3, type: "C" },
                { code: "MCB 304", title: "Medical Microbiology II (Parasitology & Mycology)", units: 3, type: "C" },
                { code: "MCB 306", title: "Food Microbiology II", units: 3, type: "C" },
                { code: "MCB 308", title: "Industrial Microbiology II", units: 3, type: "C" },
                { code: "MCB 310", title: "Water and Waste Microbiology", units: 3, type: "C" },
                { code: "MCB 312", title: "Microbiology Laboratory IV", units: 2, type: "C" },
                { code: "MCB 314", title: "Biostatistics and Research Methods", units: 2, type: "C" },
                { code: "MCB 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "MCB 401", title: "Advanced Medical Microbiology (Virology & Epidemiology)", units: 3, type: "C" },
                { code: "MCB 403", title: "Pharmaceutical Microbiology", units: 3, type: "C" },
                { code: "MCB 405", title: "Petroleum Microbiology", units: 3, type: "E" },
                { code: "MCB 407", title: "Biotechnology and Genetic Engineering", units: 3, type: "C" },
                { code: "MCB 409", title: "Public Health Microbiology", units: 3, type: "E" },
                { code: "MCB 411", title: "Agricultural Microbiology", units: 3, type: "E" },
                { code: "MCB 413", title: "Advanced Mycology", units: 3, type: "E" },
                { code: "MCB 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "MCB 402", title: "Advanced Industrial Microbiology", units: 3, type: "C" },
                { code: "MCB 404", title: "Environmental Microbiology", units: 3, type: "C" },
                { code: "MCB 406", title: "Clinical Microbiology", units: 3, type: "E" },
                { code: "MCB 408", title: "Bioremediation and Biodegradation", units: 3, type: "E" },
                { code: "MCB 410", title: "Microbial Bioinformatics", units: 3, type: "E" },
                { code: "MCB 412", title: "Microbial Nanotechnology", units: 3, type: "E" },
                { code: "MCB 414", title: "Microbiology Seminar", units: 2, type: "C" },
                { code: "MCB 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 8: GEOLOGY AND MINERAL SCIENCES
    // ======================================================
    {
      id: 208,
      name: "Geology and Mineral Sciences",
      code: "GLG",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                { code: "PHY 101", title: "General Physics I", units: 3, type: "C" },
                { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                { code: "GLG 101", title: "Introduction to Geology I (Physical Geology)", units: 3, type: "C" },
                { code: "BIO 101", title: "General Biology I", units: 3, type: "C" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                { code: "PHY 102", title: "General Physics II", units: 3, type: "C" },
                { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                { code: "GLG 102", title: "Introduction to Geology II (Historical Geology)", units: 3, type: "C" },
                { code: "BIO 102", title: "General Biology II", units: 3, type: "C" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "GLG 201", title: "Crystallography and Mineralogy I", units: 3, type: "C" },
                { code: "GLG 203", title: "Structural Geology I", units: 3, type: "C" },
                { code: "GLG 205", title: "Igneous and Metamorphic Petrology I", units: 3, type: "C" },
                { code: "GLG 207", title: "Geological Mapping and Field Methods I", units: 3, type: "C" },
                { code: "GLG 209", title: "Palaeontology I", units: 3, type: "C" },
                { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "GLG 202", title: "Crystallography and Mineralogy II", units: 3, type: "C" },
                { code: "GLG 204", title: "Structural Geology II", units: 3, type: "C" },
                { code: "GLG 206", title: "Sedimentology and Stratigraphy I", units: 3, type: "C" },
                { code: "GLG 208", title: "Geological Mapping and Field Methods II", units: 3, type: "C" },
                { code: "GLG 210", title: "Palaeontology II", units: 3, type: "C" },
                { code: "GLG 212", title: "Introduction to Geochemistry", units: 3, type: "C" },
                { code: "MTH 202", title: "Mathematical Methods II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "GLG 301", title: "Sedimentology and Stratigraphy II", units: 3, type: "C" },
                { code: "GLG 303", title: "Igneous and Metamorphic Petrology II", units: 3, type: "C" },
                { code: "GLG 305", title: "Applied Geophysics I", units: 3, type: "C" },
                { code: "GLG 307", title: "Hydrogeology I", units: 3, type: "C" },
                { code: "GLG 309", title: "Economic Geology I (Mineral Deposits)", units: 3, type: "C" },
                { code: "GLG 311", title: "Engineering Geology", units: 3, type: "C" },
                { code: "GLG 313", title: "Geology Field Camp", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "GLG 302", title: "Petroleum Geology I", units: 3, type: "C" },
                { code: "GLG 304", title: "Applied Geophysics II", units: 3, type: "C" },
                { code: "GLG 306", title: "Hydrogeology II", units: 3, type: "C" },
                { code: "GLG 308", title: "Economic Geology II (Industrial Minerals)", units: 3, type: "C" },
                { code: "GLG 310", title: "Geochemistry", units: 3, type: "C" },
                { code: "GLG 312", title: "Photogeology and Remote Sensing", units: 3, type: "C" },
                { code: "GLG 314", title: "Geology Laboratory Practical", units: 2, type: "C" },
                { code: "GLG 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GLG 401", title: "Petroleum Geology II", units: 3, type: "C" },
                { code: "GLG 403", title: "Advanced Structural Geology and Tectonics", units: 3, type: "C" },
                { code: "GLG 405", title: "Environmental Geology", units: 3, type: "C" },
                { code: "GLG 407", title: "Mining Geology", units: 3, type: "E" },
                { code: "GLG 409", title: "Sedimentary Basin Analysis", units: 3, type: "E" },
                { code: "GLG 411", title: "Ore Microscopy", units: 3, type: "E" },
                { code: "GLG 413", title: "Marine Geology", units: 3, type: "E" },
                { code: "GLG 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GLG 402", title: "Advanced Petroleum Geology (Well Logging & Exploration)", units: 3, type: "C" },
                { code: "GLG 404", title: "GIS and Geospatial Analysis in Geology", units: 3, type: "C" },
                { code: "GLG 406", title: "Advanced Geophysical Methods", units: 3, type: "E" },
                { code: "GLG 408", title: "Volcanology and Seismology", units: 3, type: "E" },
                { code: "GLG 410", title: "Groundwater Modelling", units: 3, type: "E" },
                { code: "GLG 412", title: "Geotechnical Geology", units: 3, type: "E" },
                { code: "GLG 414", title: "Geology Seminar", units: 2, type: "C" },
                { code: "GLG 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 9: INDUSTRIAL CHEMISTRY
    // ======================================================
    {
      id: 209,
      name: "Industrial Chemistry",
      code: "ICH",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "MTH 101", title: "Elementary Mathematics I (Algebra & Trigonometry)", units: 3, type: "C" },
                { code: "PHY 101", title: "General Physics I", units: 3, type: "C" },
                { code: "PHY 107", title: "General Physics Laboratory I", units: 1, type: "C" },
                { code: "CHM 101", title: "General Chemistry I", units: 3, type: "C" },
                { code: "CHM 103", title: "Introductory Organic Chemistry I", units: 2, type: "C" },
                { code: "CHM 107", title: "General Chemistry Laboratory I", units: 1, type: "C" },
                { code: "BIO 101", title: "General Biology I", units: 3, type: "C" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "MTH 102", title: "Elementary Mathematics II (Calculus)", units: 3, type: "C" },
                { code: "PHY 102", title: "General Physics II", units: 3, type: "C" },
                { code: "PHY 108", title: "General Physics Laboratory II", units: 1, type: "C" },
                { code: "CHM 102", title: "General Chemistry II", units: 3, type: "C" },
                { code: "CHM 104", title: "Introductory Organic Chemistry II", units: 2, type: "C" },
                { code: "CHM 108", title: "General Chemistry Laboratory II", units: 1, type: "C" },
                { code: "BIO 102", title: "General Biology II", units: 3, type: "C" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "ICH 201", title: "Introduction to Industrial Chemistry", units: 3, type: "C" },
                { code: "CHM 201", title: "Organic Chemistry I", units: 3, type: "C" },
                { code: "CHM 203", title: "Physical Chemistry I (Thermodynamics)", units: 3, type: "C" },
                { code: "CHM 205", title: "Inorganic Chemistry I", units: 3, type: "C" },
                { code: "CHM 207", title: "Analytical Chemistry I", units: 3, type: "C" },
                { code: "MTH 201", title: "Mathematical Methods I", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "ICH 202", title: "Unit Operations in Chemical Industry", units: 3, type: "C" },
                { code: "ICH 204", title: "Chemical Process Industries I", units: 3, type: "C" },
                { code: "CHM 202", title: "Organic Chemistry II", units: 3, type: "C" },
                { code: "CHM 204", title: "Physical Chemistry II (Kinetics & Electrochemistry)", units: 3, type: "C" },
                { code: "CHM 206", title: "Inorganic Chemistry II", units: 3, type: "C" },
                { code: "CHM 208", title: "Analytical Chemistry II (Instrumental Methods)", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "ICH 301", title: "Chemical Process Industries II", units: 3, type: "C" },
                { code: "ICH 303", title: "Petroleum Chemistry and Technology", units: 3, type: "C" },
                { code: "ICH 305", title: "Polymer Chemistry and Technology", units: 3, type: "C" },
                { code: "ICH 307", title: "Industrial Analytical Chemistry", units: 3, type: "C" },
                { code: "ICH 309", title: "Chemical Engineering Principles for Industrial Chemists", units: 3, type: "C" },
                { code: "ICH 311", title: "Environmental Chemistry and Pollution Control", units: 3, type: "C" },
                { code: "ICH 313", title: "Industrial Chemistry Laboratory I", units: 2, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "ICH 302", title: "Chemical Process Industries III", units: 3, type: "C" },
                { code: "ICH 304", title: "Petrochemical Technology", units: 3, type: "C" },
                { code: "ICH 306", title: "Food Chemistry and Technology", units: 3, type: "C" },
                { code: "ICH 308", title: "Corrosion Chemistry", units: 3, type: "C" },
                { code: "ICH 310", title: "Instrumental Methods of Analysis", units: 3, type: "C" },
                { code: "ICH 312", title: "Industrial Safety and Quality Control", units: 3, type: "C" },
                { code: "ICH 314", title: "Industrial Chemistry Laboratory II", units: 2, type: "C" },
                { code: "ICH 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "ICH 401", title: "Advanced Polymer Technology", units: 3, type: "C" },
                { code: "ICH 403", title: "Ceramic and Glass Technology", units: 3, type: "C" },
                { code: "ICH 405", title: "Paint and Surface Coating Technology", units: 3, type: "E" },
                { code: "ICH 407", title: "Pharmaceutical Chemistry", units: 3, type: "E" },
                { code: "ICH 409", title: "Agrochemical Technology (Fertilizers & Pesticides)", units: 3, type: "E" },
                { code: "ICH 411", title: "Dyes and Textile Chemistry", units: 3, type: "E" },
                { code: "ICH 413", title: "Industrial Process Economics", units: 3, type: "C" },
                { code: "ICH 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "ICH 402", title: "Advanced Petroleum Chemistry", units: 3, type: "C" },
                { code: "ICH 404", title: "Sugar and Fermentation Technology", units: 3, type: "E" },
                { code: "ICH 406", title: "Cement and Concrete Technology", units: 3, type: "E" },
                { code: "ICH 408", title: "Cosmetics and Soap Technology", units: 3, type: "E" },
                { code: "ICH 410", title: "Pulp and Paper Technology", units: 3, type: "E" },
                { code: "ICH 412", title: "Nanotechnology for Industrial Chemists", units: 3, type: "E" },
                { code: "ICH 414", title: "Industrial Chemistry Seminar", units: 2, type: "C" },
                { code: "ICH 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    }
  ] // end departments array
}, // end Faculty of Science

 {
  id: 4,
  name: "Faculty of Social Sciences",
  code: "SOCSCI",
  duration: 4,
  departments: [

    // ======================================================
    // DEPARTMENT 1: ECONOMICS
    // ======================================================
    {
      id: 401,
      name: "Economics",
      code: "ECO",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "ECO 101", title: "Principles of Economics I (Microeconomics)", units: 3, type: "C" },
                { code: "ECO 103", title: "Introduction to Economic History", units: 2, type: "C" },
                { code: "ECO 105", title: "Mathematics for Economists I", units: 3, type: "C" },
                { code: "POL 101", title: "Introduction to Political Science I", units: 3, type: "R" },
                { code: "SOC 101", title: "Introduction to Sociology I", units: 3, type: "R" },
                { code: "STA 101", title: "Introduction to Statistics I", units: 3, type: "C" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "ECO 102", title: "Principles of Economics II (Macroeconomics)", units: 3, type: "C" },
                { code: "ECO 104", title: "Nigerian Economic History", units: 2, type: "C" },
                { code: "ECO 106", title: "Mathematics for Economists II", units: 3, type: "C" },
                { code: "POL 102", title: "Introduction to Political Science II", units: 3, type: "R" },
                { code: "SOC 102", title: "Introduction to Sociology II", units: 3, type: "R" },
                { code: "STA 102", title: "Introduction to Statistics II", units: 3, type: "C" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "ECO 201", title: "Microeconomic Theory I (Consumer Theory)", units: 3, type: "C" },
                { code: "ECO 203", title: "Macroeconomic Theory I (National Income)", units: 3, type: "C" },
                { code: "ECO 205", title: "History of Economic Thought I", units: 3, type: "C" },
                { code: "ECO 207", title: "Introduction to Econometrics I", units: 3, type: "C" },
                { code: "ECO 209", title: "Elements of Public Finance", units: 3, type: "C" },
                { code: "ECO 211", title: "Agricultural Economics I", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Social Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "ECO 202", title: "Microeconomic Theory II (Production & Cost)", units: 3, type: "C" },
                { code: "ECO 204", title: "Macroeconomic Theory II (Money & Banking)", units: 3, type: "C" },
                { code: "ECO 206", title: "History of Economic Thought II", units: 3, type: "C" },
                { code: "ECO 208", title: "Introduction to Econometrics II", units: 3, type: "C" },
                { code: "ECO 210", title: "Introduction to Development Economics", units: 3, type: "C" },
                { code: "ECO 212", title: "Labour Economics I", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Social Scientists II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "ECO 301", title: "Intermediate Microeconomics (Market Structure)", units: 3, type: "C" },
                { code: "ECO 303", title: "Intermediate Macroeconomics (Monetary Theory)", units: 3, type: "C" },
                { code: "ECO 305", title: "Econometrics I (Regression Analysis)", units: 3, type: "C" },
                { code: "ECO 307", title: "Public Finance I (Taxation)", units: 3, type: "C" },
                { code: "ECO 309", title: "International Economics I (Trade Theory)", units: 3, type: "C" },
                { code: "ECO 311", title: "Development Economics I", units: 3, type: "C" },
                { code: "ECO 313", title: "Monetary Economics I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "ECO 302", title: "Intermediate Microeconomics II (General Equilibrium)", units: 3, type: "C" },
                { code: "ECO 304", title: "Intermediate Macroeconomics II (Fiscal Policy)", units: 3, type: "C" },
                { code: "ECO 306", title: "Econometrics II (Time Series Analysis)", units: 3, type: "C" },
                { code: "ECO 308", title: "Public Finance II (Public Expenditure)", units: 3, type: "C" },
                { code: "ECO 310", title: "International Economics II (Finance & Exchange)", units: 3, type: "C" },
                { code: "ECO 312", title: "Development Economics II", units: 3, type: "C" },
                { code: "ECO 314", title: "Research Methods in Economics", units: 2, type: "C" },
                { code: "ECO 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "ECO 401", title: "Advanced Microeconomic Theory (Welfare Economics)", units: 3, type: "C" },
                { code: "ECO 403", title: "Advanced Macroeconomic Theory", units: 3, type: "C" },
                { code: "ECO 405", title: "Advanced Econometrics", units: 3, type: "C" },
                { code: "ECO 407", title: "Health Economics", units: 3, type: "E" },
                { code: "ECO 409", title: "Environmental and Natural Resource Economics", units: 3, type: "E" },
                { code: "ECO 411", title: "Industrial Economics", units: 3, type: "E" },
                { code: "ECO 413", title: "Mathematical Economics", units: 3, type: "E" },
                { code: "ECO 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "ECO 402", title: "Nigerian Economy (Structure & Policy)", units: 3, type: "C" },
                { code: "ECO 404", title: "Monetary Economics II (Advanced)", units: 3, type: "C" },
                { code: "ECO 406", title: "Project Evaluation and Cost-Benefit Analysis", units: 3, type: "C" },
                { code: "ECO 408", title: "Transport Economics", units: 3, type: "E" },
                { code: "ECO 410", title: "Energy Economics", units: 3, type: "E" },
                { code: "ECO 412", title: "Financial Economics", units: 3, type: "E" },
                { code: "ECO 414", title: "Economics Seminar", units: 2, type: "C" },
                { code: "ECO 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 2: POLITICAL SCIENCE
    // ======================================================
    {
      id: 402,
      name: "Political Science",
      code: "POL",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "POL 101", title: "Introduction to Political Science I (Concepts & Scope)", units: 3, type: "C" },
                { code: "POL 103", title: "Introduction to Nigerian Government and Politics I", units: 3, type: "C" },
                { code: "POL 105", title: "Introduction to International Relations I", units: 3, type: "C" },
                { code: "ECO 101", title: "Principles of Economics I", units: 3, type: "R" },
                { code: "SOC 101", title: "Introduction to Sociology I", units: 3, type: "R" },
                { code: "HIS 101", title: "Introduction to African History I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "POL 102", title: "Introduction to Political Science II (Political Systems)", units: 3, type: "C" },
                { code: "POL 104", title: "Introduction to Nigerian Government and Politics II", units: 3, type: "C" },
                { code: "POL 106", title: "Introduction to International Relations II", units: 3, type: "C" },
                { code: "ECO 102", title: "Principles of Economics II", units: 3, type: "R" },
                { code: "SOC 102", title: "Introduction to Sociology II", units: 3, type: "R" },
                { code: "HIS 102", title: "Introduction to African History II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "POL 201", title: "Political Theory I (Classical Political Thought)", units: 3, type: "C" },
                { code: "POL 203", title: "Nigerian Government and Politics I (Federal System)", units: 3, type: "C" },
                { code: "POL 205", title: "Comparative Government and Politics I", units: 3, type: "C" },
                { code: "POL 207", title: "Public Administration I (Principles & Theory)", units: 3, type: "C" },
                { code: "POL 209", title: "Political Behaviour and Socialization", units: 3, type: "C" },
                { code: "POL 211", title: "Introduction to African Politics I", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Social Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "POL 202", title: "Political Theory II (Modern Political Thought)", units: 3, type: "C" },
                { code: "POL 204", title: "Nigerian Government and Politics II (Constitution)", units: 3, type: "C" },
                { code: "POL 206", title: "Comparative Government and Politics II", units: 3, type: "C" },
                { code: "POL 208", title: "Public Administration II (Bureaucracy)", units: 3, type: "C" },
                { code: "POL 210", title: "Political Parties and Pressure Groups", units: 3, type: "C" },
                { code: "POL 212", title: "Introduction to African Politics II", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Social Scientists II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "POL 301", title: "Political Theory III (Contemporary Political Ideas)", units: 3, type: "C" },
                { code: "POL 303", title: "Nigerian Foreign Policy", units: 3, type: "C" },
                { code: "POL 305", title: "International Politics I (Power & Conflict)", units: 3, type: "C" },
                { code: "POL 307", title: "Local Government and Administration I", units: 3, type: "C" },
                { code: "POL 309", title: "Political Economy I", units: 3, type: "C" },
                { code: "POL 311", title: "Military and Politics in Africa", units: 3, type: "C" },
                { code: "POL 313", title: "Research Methods in Political Science I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "POL 302", title: "International Law and Organization", units: 3, type: "C" },
                { code: "POL 304", title: "Nigerian Defence and Security Policy", units: 3, type: "C" },
                { code: "POL 306", title: "International Politics II (Diplomacy)", units: 3, type: "C" },
                { code: "POL 308", title: "Local Government and Administration II", units: 3, type: "C" },
                { code: "POL 310", title: "Political Economy II", units: 3, type: "C" },
                { code: "POL 312", title: "Elections and Electoral Systems", units: 3, type: "C" },
                { code: "POL 314", title: "Research Methods in Political Science II", units: 2, type: "C" },
                { code: "POL 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "POL 401", title: "Advanced Political Theory (Ideologies)", units: 3, type: "C" },
                { code: "POL 403", title: "Governance and Development in Africa", units: 3, type: "C" },
                { code: "POL 405", title: "International Relations Theory", units: 3, type: "C" },
                { code: "POL 407", title: "Gender and Politics", units: 3, type: "E" },
                { code: "POL 409", title: "Conflict and Peace Studies", units: 3, type: "E" },
                { code: "POL 411", title: "Public Policy Analysis", units: 3, type: "E" },
                { code: "POL 413", title: "Political Communication", units: 3, type: "E" },
                { code: "POL 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "POL 402", title: "Advanced Nigerian Politics (Contemporary Issues)", units: 3, type: "C" },
                { code: "POL 404", title: "Comparative Federalism", units: 3, type: "C" },
                { code: "POL 406", title: "Strategic and Security Studies", units: 3, type: "C" },
                { code: "POL 408", title: "Human Rights and Democratization", units: 3, type: "E" },
                { code: "POL 410", title: "Globalization and World Politics", units: 3, type: "E" },
                { code: "POL 412", title: "Political Leadership in Africa", units: 3, type: "E" },
                { code: "POL 414", title: "Political Science Seminar", units: 2, type: "C" },
                { code: "POL 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 3: SOCIOLOGY
    // ======================================================
    {
      id: 403,
      name: "Sociology",
      code: "SOC",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "SOC 101", title: "Introduction to Sociology I (Nature & Scope)", units: 3, type: "C" },
                { code: "SOC 103", title: "Introduction to Social Psychology I", units: 3, type: "C" },
                { code: "SOC 105", title: "Introduction to Social Anthropology I", units: 3, type: "C" },
                { code: "POL 101", title: "Introduction to Political Science I", units: 3, type: "R" },
                { code: "ECO 101", title: "Principles of Economics I", units: 3, type: "R" },
                { code: "PHI 101", title: "Introduction to Philosophy I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "SOC 102", title: "Introduction to Sociology II (Social Institutions)", units: 3, type: "C" },
                { code: "SOC 104", title: "Introduction to Social Psychology II", units: 3, type: "C" },
                { code: "SOC 106", title: "Introduction to Social Anthropology II", units: 3, type: "C" },
                { code: "POL 102", title: "Introduction to Political Science II", units: 3, type: "R" },
                { code: "ECO 102", title: "Principles of Economics II", units: 3, type: "R" },
                { code: "PHI 102", title: "Introduction to Philosophy II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "SOC 201", title: "Sociological Theory I (Classical Theorists)", units: 3, type: "C" },
                { code: "SOC 203", title: "Social Structure and Change I", units: 3, type: "C" },
                { code: "SOC 205", title: "Population and Society I (Demography)", units: 3, type: "C" },
                { code: "SOC 207", title: "Sociology of the Family", units: 3, type: "C" },
                { code: "SOC 209", title: "Introduction to Social Work I", units: 3, type: "C" },
                { code: "SOC 211", title: "Rural Sociology", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Social Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "SOC 202", title: "Sociological Theory II (Contemporary Theorists)", units: 3, type: "C" },
                { code: "SOC 204", title: "Social Structure and Change II", units: 3, type: "C" },
                { code: "SOC 206", title: "Population and Society II", units: 3, type: "C" },
                { code: "SOC 208", title: "Sociology of Education", units: 3, type: "C" },
                { code: "SOC 210", title: "Introduction to Social Work II", units: 3, type: "C" },
                { code: "SOC 212", title: "Urban Sociology", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Social Scientists II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "SOC 301", title: "Sociology of Development I", units: 3, type: "C" },
                { code: "SOC 303", title: "Sociology of Crime and Deviance I (Criminology)", units: 3, type: "C" },
                { code: "SOC 305", title: "Medical Sociology I (Health & Illness)", units: 3, type: "C" },
                { code: "SOC 307", title: "Industrial Sociology I", units: 3, type: "C" },
                { code: "SOC 309", title: "Sociology of Religion I", units: 3, type: "C" },
                { code: "SOC 311", title: "Social Stratification and Inequality", units: 3, type: "C" },
                { code: "SOC 313", title: "Research Methods in Sociology I (Qualitative)", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "SOC 302", title: "Sociology of Development II", units: 3, type: "C" },
                { code: "SOC 304", title: "Sociology of Crime and Deviance II (Penology)", units: 3, type: "C" },
                { code: "SOC 306", title: "Medical Sociology II (Healthcare Systems)", units: 3, type: "C" },
                { code: "SOC 308", title: "Industrial Sociology II", units: 3, type: "C" },
                { code: "SOC 310", title: "Sociology of Religion II", units: 3, type: "C" },
                { code: "SOC 312", title: "Sociology of Gender", units: 3, type: "C" },
                { code: "SOC 314", title: "Research Methods in Sociology II (Quantitative)", units: 2, type: "C" },
                { code: "SOC 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "SOC 401", title: "Advanced Sociological Theory", units: 3, type: "C" },
                { code: "SOC 403", title: "Political Sociology", units: 3, type: "C" },
                { code: "SOC 405", title: "Sociology of Mass Media", units: 3, type: "C" },
                { code: "SOC 407", title: "Environmental Sociology", units: 3, type: "E" },
                { code: "SOC 409", title: "Sociology of Aging", units: 3, type: "E" },
                { code: "SOC 411", title: "Sociology of Law", units: 3, type: "E" },
                { code: "SOC 413", title: "Ethnic and Race Relations", units: 3, type: "E" },
                { code: "SOC 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "SOC 402", title: "Sociology of Knowledge", units: 3, type: "C" },
                { code: "SOC 404", title: "Social Movements and Collective Behaviour", units: 3, type: "C" },
                { code: "SOC 406", title: "Community Development and Social Planning", units: 3, type: "C" },
                { code: "SOC 408", title: "Sociology of Migration", units: 3, type: "E" },
                { code: "SOC 410", title: "Sociology of Technology and Innovation", units: 3, type: "E" },
                { code: "SOC 412", title: "Sociology of Poverty and Welfare", units: 3, type: "E" },
                { code: "SOC 414", title: "Sociology Seminar", units: 2, type: "C" },
                { code: "SOC 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 4: PSYCHOLOGY
    // ======================================================
    {
      id: 404,
      name: "Psychology",
      code: "PSY",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "PSY 101", title: "Introduction to Psychology I (History & Systems)", units: 3, type: "C" },
                { code: "PSY 103", title: "Introduction to Developmental Psychology I", units: 3, type: "C" },
                { code: "PSY 105", title: "Introduction to Biological Psychology I", units: 3, type: "C" },
                { code: "SOC 101", title: "Introduction to Sociology I", units: 3, type: "R" },
                { code: "BIO 101", title: "General Biology I", units: 3, type: "R" },
                { code: "STA 101", title: "Introduction to Statistics I", units: 3, type: "C" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "PSY 102", title: "Introduction to Psychology II (Methods & Approaches)", units: 3, type: "C" },
                { code: "PSY 104", title: "Introduction to Developmental Psychology II", units: 3, type: "C" },
                { code: "PSY 106", title: "Introduction to Biological Psychology II", units: 3, type: "C" },
                { code: "SOC 102", title: "Introduction to Sociology II", units: 3, type: "R" },
                { code: "BIO 102", title: "General Biology II", units: 3, type: "R" },
                { code: "STA 102", title: "Introduction to Statistics II", units: 3, type: "C" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "PSY 201", title: "Social Psychology I", units: 3, type: "C" },
                { code: "PSY 203", title: "Cognitive Psychology I (Perception & Attention)", units: 3, type: "C" },
                { code: "PSY 205", title: "Learning and Behaviour I", units: 3, type: "C" },
                { code: "PSY 207", title: "Psychology of Personality I", units: 3, type: "C" },
                { code: "PSY 209", title: "Psychological Testing and Assessment I", units: 3, type: "C" },
                { code: "PSY 211", title: "Physiological Psychology", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Social Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "PSY 202", title: "Social Psychology II", units: 3, type: "C" },
                { code: "PSY 204", title: "Cognitive Psychology II (Memory & Language)", units: 3, type: "C" },
                { code: "PSY 206", title: "Learning and Behaviour II (Conditioning)", units: 3, type: "C" },
                { code: "PSY 208", title: "Psychology of Personality II", units: 3, type: "C" },
                { code: "PSY 210", title: "Psychological Testing and Assessment II", units: 3, type: "C" },
                { code: "PSY 212", title: "Psychology of Motivation and Emotion", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Social Scientists II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "PSY 301", title: "Abnormal Psychology I (Psychopathology)", units: 3, type: "C" },
                { code: "PSY 303", title: "Clinical Psychology I", units: 3, type: "C" },
                { code: "PSY 305", title: "Industrial and Organizational Psychology I", units: 3, type: "C" },
                { code: "PSY 307", title: "Educational Psychology I", units: 3, type: "C" },
                { code: "PSY 309", title: "Health Psychology I", units: 3, type: "C" },
                { code: "PSY 311", title: "Counselling Psychology I", units: 3, type: "C" },
                { code: "PSY 313", title: "Research Methods in Psychology I (Design)", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "PSY 302", title: "Abnormal Psychology II (Classification & Diagnosis)", units: 3, type: "C" },
                { code: "PSY 304", title: "Clinical Psychology II (Therapeutic Approaches)", units: 3, type: "C" },
                { code: "PSY 306", title: "Industrial and Organizational Psychology II", units: 3, type: "C" },
                { code: "PSY 308", title: "Educational Psychology II", units: 3, type: "C" },
                { code: "PSY 310", title: "Health Psychology II", units: 3, type: "C" },
                { code: "PSY 312", title: "Counselling Psychology II", units: 3, type: "C" },
                { code: "PSY 314", title: "Research Methods in Psychology II (Analysis)", units: 2, type: "C" },
                { code: "PSY 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "PSY 401", title: "Advanced Clinical Psychology (Psychotherapy)", units: 3, type: "C" },
                { code: "PSY 403", title: "Neuropsychology", units: 3, type: "C" },
                { code: "PSY 405", title: "Community Psychology", units: 3, type: "C" },
                { code: "PSY 407", title: "Forensic Psychology", units: 3, type: "E" },
                { code: "PSY 409", title: "Positive Psychology", units: 3, type: "E" },
                { code: "PSY 411", title: "Child and Adolescent Psychology", units: 3, type: "E" },
                { code: "PSY 413", title: "Cross-Cultural Psychology", units: 3, type: "E" },
                { code: "PSY 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "PSY 402", title: "Advanced Social Psychology", units: 3, type: "C" },
                { code: "PSY 404", title: "Psychology of Conflict and Trauma", units: 3, type: "C" },
                { code: "PSY 406", title: "Environmental Psychology", units: 3, type: "E" },
                { code: "PSY 408", title: "Sport Psychology", units: 3, type: "E" },
                { code: "PSY 410", title: "Psychology of Addiction", units: 3, type: "E" },
                { code: "PSY 412", title: "Gerontological Psychology", units: 3, type: "E" },
                { code: "PSY 414", title: "Psychology Seminar", units: 2, type: "C" },
                { code: "PSY 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 5: GEOGRAPHY AND ENVIRONMENTAL MANAGEMENT
    // ======================================================
    {
      id: 405,
      name: "Geography and Environmental Management",
      code: "GEO",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "GEO 101", title: "Introduction to Physical Geography I (Geomorphology)", units: 3, type: "C" },
                { code: "GEO 103", title: "Introduction to Human Geography I", units: 3, type: "C" },
                { code: "GEO 105", title: "Introduction to Map Reading and Interpretation I", units: 3, type: "C" },
                { code: "GEO 107", title: "Introduction to Climatology", units: 3, type: "C" },
                { code: "MTH 101", title: "Elementary Mathematics I", units: 3, type: "R" },
                { code: "BIO 101", title: "General Biology I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "GEO 102", title: "Introduction to Physical Geography II (Biogeography)", units: 3, type: "C" },
                { code: "GEO 104", title: "Introduction to Human Geography II (Population)", units: 3, type: "C" },
                { code: "GEO 106", title: "Introduction to Map Reading and Interpretation II", units: 3, type: "C" },
                { code: "GEO 108", title: "Introduction to Hydrology", units: 3, type: "C" },
                { code: "MTH 102", title: "Elementary Mathematics II", units: 3, type: "R" },
                { code: "GLG 102", title: "Introduction to Geology", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "GEO 201", title: "Geomorphology I (Fluvial & Aeolian)", units: 3, type: "C" },
                { code: "GEO 203", title: "Climatology and Meteorology I", units: 3, type: "C" },
                { code: "GEO 205", title: "Economic Geography I", units: 3, type: "C" },
                { code: "GEO 207", title: "Cartography I (Map Making & Design)", units: 3, type: "C" },
                { code: "GEO 209", title: "Population Geography", units: 3, type: "C" },
                { code: "GEO 211", title: "Soil Geography", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Social Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "GEO 202", title: "Geomorphology II (Coastal & Glacial)", units: 3, type: "C" },
                { code: "GEO 204", title: "Climatology and Meteorology II", units: 3, type: "C" },
                { code: "GEO 206", title: "Economic Geography II", units: 3, type: "C" },
                { code: "GEO 208", title: "Cartography II (Thematic Mapping)", units: 3, type: "C" },
                { code: "GEO 210", title: "Urban Geography", units: 3, type: "C" },
                { code: "GEO 212", title: "Introduction to Remote Sensing", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Social Scientists II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "GEO 301", title: "Hydrology and Water Resources I", units: 3, type: "C" },
                { code: "GEO 303", title: "Agricultural and Rural Geography", units: 3, type: "C" },
                { code: "GEO 305", title: "Geographic Information Systems (GIS) I", units: 3, type: "C" },
                { code: "GEO 307", title: "Environmental Management I", units: 3, type: "C" },
                { code: "GEO 309", title: "Transport Geography", units: 3, type: "C" },
                { code: "GEO 311", title: "Geography of Nigeria", units: 3, type: "C" },
                { code: "GEO 313", title: "Research Methods in Geography I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "GEO 302", title: "Hydrology and Water Resources II", units: 3, type: "C" },
                { code: "GEO 304", title: "Settlement and Urban Planning", units: 3, type: "C" },
                { code: "GEO 306", title: "Geographic Information Systems (GIS) II", units: 3, type: "C" },
                { code: "GEO 308", title: "Environmental Management II", units: 3, type: "C" },
                { code: "GEO 310", title: "Geography of Africa", units: 3, type: "C" },
                { code: "GEO 312", title: "Political Geography", units: 3, type: "C" },
                { code: "GEO 314", title: "Research Methods in Geography II", units: 2, type: "C" },
                { code: "GEO 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GEO 401", title: "Advanced Remote Sensing and GIS Applications", units: 3, type: "C" },
                { code: "GEO 403", title: "Environmental Impact Assessment", units: 3, type: "C" },
                { code: "GEO 405", title: "Climate Change and Global Warming", units: 3, type: "C" },
                { code: "GEO 407", title: "Medical Geography", units: 3, type: "E" },
                { code: "GEO 409", title: "Industrial and Retail Geography", units: 3, type: "E" },
                { code: "GEO 411", title: "Disaster and Risk Management", units: 3, type: "E" },
                { code: "GEO 413", title: "Tourism and Recreation Geography", units: 3, type: "E" },
                { code: "GEO 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GEO 402", title: "Advanced Geomorphology", units: 3, type: "C" },
                { code: "GEO 404", title: "Geographical Thought and Methodology", units: 3, type: "C" },
                { code: "GEO 406", title: "Land Use Planning and Management", units: 3, type: "C" },
                { code: "GEO 408", title: "Coastal Zone Management", units: 3, type: "E" },
                { code: "GEO 410", title: "Energy Geography", units: 3, type: "E" },
                { code: "GEO 412", title: "Geospatial Analysis and Modelling", units: 3, type: "E" },
                { code: "GEO 414", title: "Geography Seminar", units: 2, type: "C" },
                { code: "GEO 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 6: CRIMINOLOGY AND SECURITY STUDIES
    // ======================================================
    {
      id: 406,
      name: "Criminology and Security Studies",
      code: "CSS",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "CSS 101", title: "Introduction to Criminology I", units: 3, type: "C" },
                { code: "CSS 103", title: "Introduction to Security Studies I", units: 3, type: "C" },
                { code: "CSS 105", title: "Introduction to Criminal Justice System", units: 3, type: "C" },
                { code: "SOC 101", title: "Introduction to Sociology I", units: 3, type: "R" },
                { code: "POL 101", title: "Introduction to Political Science I", units: 3, type: "R" },
                { code: "PSY 101", title: "Introduction to Psychology I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "CSS 102", title: "Introduction to Criminology II", units: 3, type: "C" },
                { code: "CSS 104", title: "Introduction to Security Studies II", units: 3, type: "C" },
                { code: "CSS 106", title: "Introduction to Law and Society", units: 3, type: "C" },
                { code: "SOC 102", title: "Introduction to Sociology II", units: 3, type: "R" },
                { code: "POL 102", title: "Introduction to Political Science II", units: 3, type: "R" },
                { code: "PSY 102", title: "Introduction to Psychology II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "CSS 201", title: "Theories of Crime and Delinquency I", units: 3, type: "C" },
                { code: "CSS 203", title: "National Security and Intelligence I", units: 3, type: "C" },
                { code: "CSS 205", title: "Policing and Law Enforcement I", units: 3, type: "C" },
                { code: "CSS 207", title: "Criminal Law I", units: 3, type: "C" },
                { code: "CSS 209", title: "Victimology", units: 3, type: "C" },
                { code: "CSS 211", title: "Sociology of Crime and Deviance", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Social Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "CSS 202", title: "Theories of Crime and Delinquency II", units: 3, type: "C" },
                { code: "CSS 204", title: "National Security and Intelligence II", units: 3, type: "C" },
                { code: "CSS 206", title: "Policing and Law Enforcement II", units: 3, type: "C" },
                { code: "CSS 208", title: "Criminal Law II", units: 3, type: "C" },
                { code: "CSS 210", title: "Juvenile Delinquency", units: 3, type: "C" },
                { code: "CSS 212", title: "Penology and Correctional Administration", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Social Scientists II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "CSS 301", title: "Organized Crime and Terrorism I", units: 3, type: "C" },
                { code: "CSS 303", title: "Forensic Science and Crime Investigation I", units: 3, type: "C" },
                { code: "CSS 305", title: "White Collar and Corporate Crime", units: 3, type: "C" },
                { code: "CSS 307", title: "Border Security and Immigration", units: 3, type: "C" },
                { code: "CSS 309", title: "Crime Prevention and Control", units: 3, type: "C" },
                { code: "CSS 311", title: "Criminal Psychology", units: 3, type: "C" },
                { code: "CSS 313", title: "Research Methods in Criminology I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "CSS 302", title: "Organized Crime and Terrorism II", units: 3, type: "C" },
                { code: "CSS 304", title: "Forensic Science and Crime Investigation II", units: 3, type: "C" },
                { code: "CSS 306", title: "Cybercrime and Digital Forensics", units: 3, type: "C" },
                { code: "CSS 308", title: "International Security and Peacekeeping", units: 3, type: "C" },
                { code: "CSS 310", title: "Prison Administration and Rehabilitation", units: 3, type: "C" },
                { code: "CSS 312", title: "Private Security Management", units: 3, type: "C" },
                { code: "CSS 314", title: "Research Methods in Criminology II", units: 2, type: "C" },
                { code: "CSS 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "CSS 401", title: "Advanced Criminological Theory", units: 3, type: "C" },
                { code: "CSS 403", title: "Criminal Justice Administration", units: 3, type: "C" },
                { code: "CSS 405", title: "Strategic Security Management", units: 3, type: "C" },
                { code: "CSS 407", title: "Gender, Crime and Justice", units: 3, type: "E" },
                { code: "CSS 409", title: "Drug Abuse and Trafficking", units: 3, type: "E" },
                { code: "CSS 411", title: "Restorative Justice", units: 3, type: "E" },
                { code: "CSS 413", title: "Human Rights and Criminal Justice", units: 3, type: "E" },
                { code: "CSS 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "CSS 402", title: "Comparative Criminal Justice Systems", units: 3, type: "C" },
                { code: "CSS 404", title: "Advanced Forensic Science", units: 3, type: "C" },
                { code: "CSS 406", title: "Critical Security Studies", units: 3, type: "C" },
                { code: "CSS 408", title: "Conflict Resolution and Mediation", units: 3, type: "E" },
                { code: "CSS 410", title: "Environmental Criminology", units: 3, type: "E" },
                { code: "CSS 412", title: "Intelligence Analysis and Management", units: 3, type: "E" },
                { code: "CSS 414", title: "Criminology Seminar", units: 2, type: "C" },
                { code: "CSS 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 7: PUBLIC ADMINISTRATION
    // ======================================================
    {
      id: 407,
      name: "Public Administration",
      code: "PAD",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "PAD 101", title: "Introduction to Public Administration I", units: 3, type: "C" },
                { code: "PAD 103", title: "Introduction to Government and Public Policy", units: 3, type: "C" },
                { code: "POL 101", title: "Introduction to Political Science I", units: 3, type: "R" },
                { code: "ECO 101", title: "Principles of Economics I", units: 3, type: "R" },
                { code: "SOC 101", title: "Introduction to Sociology I", units: 3, type: "R" },
                { code: "STA 101", title: "Introduction to Statistics I", units: 3, type: "C" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "PAD 102", title: "Introduction to Public Administration II", units: 3, type: "C" },
                { code: "PAD 104", title: "Introduction to Administrative Law", units: 3, type: "C" },
                { code: "POL 102", title: "Introduction to Political Science II", units: 3, type: "R" },
                { code: "ECO 102", title: "Principles of Economics II", units: 3, type: "R" },
                { code: "SOC 102", title: "Introduction to Sociology II", units: 3, type: "R" },
                { code: "STA 102", title: "Introduction to Statistics II", units: 3, type: "C" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "PAD 201", title: "Theory of Public Administration I (Classical Theory)", units: 3, type: "C" },
                { code: "PAD 203", title: "Nigerian Administrative System I", units: 3, type: "C" },
                { code: "PAD 205", title: "Public Sector Accounting and Finance I", units: 3, type: "C" },
                { code: "PAD 207", title: "Personnel Administration I (Human Resource)", units: 3, type: "C" },
                { code: "PAD 209", title: "Comparative Public Administration I", units: 3, type: "C" },
                { code: "PAD 211", title: "Administrative Law I", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Social Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "PAD 202", title: "Theory of Public Administration II (Modern Theory)", units: 3, type: "C" },
                { code: "PAD 204", title: "Nigerian Administrative System II", units: 3, type: "C" },
                { code: "PAD 206", title: "Public Sector Accounting and Finance II", units: 3, type: "C" },
                { code: "PAD 208", title: "Personnel Administration II", units: 3, type: "C" },
                { code: "PAD 210", title: "Comparative Public Administration II", units: 3, type: "C" },
                { code: "PAD 212", title: "Administrative Law II", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Social Scientists II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "PAD 301", title: "Public Policy Analysis I", units: 3, type: "C" },
                { code: "PAD 303", title: "Public Enterprises and Parastatals I", units: 3, type: "C" },
                { code: "PAD 305", title: "Development Administration I", units: 3, type: "C" },
                { code: "PAD 307", title: "Local Government Administration I", units: 3, type: "C" },
                { code: "PAD 309", title: "Public Budgeting and Financial Management I", units: 3, type: "C" },
                { code: "PAD 311", title: "Organizational Behaviour", units: 3, type: "C" },
                { code: "PAD 313", title: "Research Methods in Public Administration I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "PAD 302", title: "Public Policy Analysis II", units: 3, type: "C" },
                { code: "PAD 304", title: "Public Enterprises and Parastatals II", units: 3, type: "C" },
                { code: "PAD 306", title: "Development Administration II", units: 3, type: "C" },
                { code: "PAD 308", title: "Local Government Administration II", units: 3, type: "C" },
                { code: "PAD 310", title: "Public Budgeting and Financial Management II", units: 3, type: "C" },
                { code: "PAD 312", title: "Ethics in Public Administration", units: 3, type: "C" },
                { code: "PAD 314", title: "Research Methods in Public Administration II", units: 2, type: "C" },
                { code: "PAD 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "PAD 401", title: "Advanced Public Administration Theory", units: 3, type: "C" },
                { code: "PAD 403", title: "Public Sector Reform and Governance", units: 3, type: "C" },
                { code: "PAD 405", title: "International Administration", units: 3, type: "C" },
                { code: "PAD 407", title: "E-Government and Digital Administration", units: 3, type: "E" },
                { code: "PAD 409", title: "Health Administration", units: 3, type: "E" },
                { code: "PAD 411", title: "Environmental Administration and Policy", units: 3, type: "E" },
                { code: "PAD 413", title: "Intergovernmental Relations", units: 3, type: "E" },
                { code: "PAD 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "PAD 402", title: "Administrative Leadership and Decision Making", units: 3, type: "C" },
                { code: "PAD 404", title: "Public Administration in Nigeria (Contemporary Issues)", units: 3, type: "C" },
                { code: "PAD 406", title: "Project Planning and Management", units: 3, type: "C" },
                { code: "PAD 408", title: "Non-Governmental Organizations (NGO) Management", units: 3, type: "E" },
                { code: "PAD 410", title: "Disaster and Emergency Management", units: 3, type: "E" },
                { code: "PAD 412", title: "Corruption and Accountability", units: 3, type: "E" },
                { code: "PAD 414", title: "Public Administration Seminar", units: 2, type: "C" },
                { code: "PAD 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 8: SOCIAL WORK
    // ======================================================
    {
      id: 408,
      name: "Social Work",
      code: "SWK",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "SWK 101", title: "Introduction to Social Work I (History & Philosophy)", units: 3, type: "C" },
                { code: "SWK 103", title: "Introduction to Social Welfare I", units: 3, type: "C" },
                { code: "SWK 105", title: "Introduction to Human Behaviour I", units: 3, type: "C" },
                { code: "SOC 101", title: "Introduction to Sociology I", units: 3, type: "R" },
                { code: "PSY 101", title: "Introduction to Psychology I", units: 3, type: "R" },
                { code: "ECO 101", title: "Principles of Economics I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "SWK 102", title: "Introduction to Social Work II (Values & Ethics)", units: 3, type: "C" },
                { code: "SWK 104", title: "Introduction to Social Welfare II", units: 3, type: "C" },
                { code: "SWK 106", title: "Introduction to Human Behaviour II", units: 3, type: "C" },
                { code: "SOC 102", title: "Introduction to Sociology II", units: 3, type: "R" },
                { code: "PSY 102", title: "Introduction to Psychology II", units: 3, type: "R" },
                { code: "ECO 102", title: "Principles of Economics II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "SWK 201", title: "Social Work Methods I (Casework)", units: 3, type: "C" },
                { code: "SWK 203", title: "Social Work with Families and Children I", units: 3, type: "C" },
                { code: "SWK 205", title: "Community Organization and Development I", units: 3, type: "C" },
                { code: "SWK 207", title: "Social Policy and Planning I", units: 3, type: "C" },
                { code: "SWK 209", title: "Social Work with Groups I", units: 3, type: "C" },
                { code: "SWK 211", title: "Human Growth and Development I", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Social Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "SWK 202", title: "Social Work Methods II (Group Work)", units: 3, type: "C" },
                { code: "SWK 204", title: "Social Work with Families and Children II", units: 3, type: "C" },
                { code: "SWK 206", title: "Community Organization and Development II", units: 3, type: "C" },
                { code: "SWK 208", title: "Social Policy and Planning II", units: 3, type: "C" },
                { code: "SWK 210", title: "Social Work with Groups II", units: 3, type: "C" },
                { code: "SWK 212", title: "Human Growth and Development II", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Social Scientists II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "SWK 301", title: "Medical and Psychiatric Social Work I", units: 3, type: "C" },
                { code: "SWK 303", title: "Social Work Administration I", units: 3, type: "C" },
                { code: "SWK 305", title: "Social Work with the Elderly", units: 3, type: "C" },
                { code: "SWK 307", title: "Social Work with Persons with Disabilities", units: 3, type: "C" },
                { code: "SWK 309", title: "Social Work in Schools", units: 3, type: "C" },
                { code: "SWK 311", title: "Probation and Correctional Social Work", units: 3, type: "C" },
                { code: "SWK 313", title: "Research Methods in Social Work I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "SWK 302", title: "Medical and Psychiatric Social Work II", units: 3, type: "C" },
                { code: "SWK 304", title: "Social Work Administration II", units: 3, type: "C" },
                { code: "SWK 306", title: "Child Protection and Welfare", units: 3, type: "C" },
                { code: "SWK 308", title: "Substance Abuse and Social Work", units: 3, type: "C" },
                { code: "SWK 310", title: "Industrial Social Work", units: 3, type: "C" },
                { code: "SWK 312", title: "Social Work Field Practicum I", units: 3, type: "C" },
                { code: "SWK 314", title: "Research Methods in Social Work II", units: 2, type: "C" },
                { code: "SWK 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "SWK 401", title: "Advanced Social Work Practice (Clinical)", units: 3, type: "C" },
                { code: "SWK 403", title: "Social Work and Human Rights", units: 3, type: "C" },
                { code: "SWK 405", title: "International Social Work", units: 3, type: "C" },
                { code: "SWK 407", title: "Social Work in Mental Health", units: 3, type: "E" },
                { code: "SWK 409", title: "Social Work with Refugees and Displaced Persons", units: 3, type: "E" },
                { code: "SWK 411", title: "Gender and Social Work", units: 3, type: "E" },
                { code: "SWK 413", title: "Social Work Field Practicum II", units: 3, type: "C" },
                { code: "SWK 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "SWK 402", title: "Advanced Social Policy Analysis", units: 3, type: "C" },
                { code: "SWK 404", title: "Social Work and HIV/AIDS", units: 3, type: "C" },
                { code: "SWK 406", title: "Disaster Social Work", units: 3, type: "E" },
                { code: "SWK 408", title: "Social Work and Poverty Alleviation", units: 3, type: "E" },
                { code: "SWK 410", title: "Social Gerontology", units: 3, type: "E" },
                { code: "SWK 412", title: "Social Work Supervision and Evaluation", units: 3, type: "E" },
                { code: "SWK 414", title: "Social Work Seminar", units: 2, type: "C" },
                { code: "SWK 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 9: DEMOGRAPHY AND SOCIAL STATISTICS
    // ======================================================
    {
      id: 409,
      name: "Demography and Social Statistics",
      code: "DSS",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "DSS 101", title: "Introduction to Demography I", units: 3, type: "C" },
                { code: "DSS 103", title: "Introduction to Social Statistics I", units: 3, type: "C" },
                { code: "MTH 101", title: "Elementary Mathematics I", units: 3, type: "C" },
                { code: "STA 101", title: "Introduction to Statistics I", units: 3, type: "C" },
                { code: "ECO 101", title: "Principles of Economics I", units: 3, type: "R" },
                { code: "SOC 101", title: "Introduction to Sociology I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "DSS 102", title: "Introduction to Demography II", units: 3, type: "C" },
                { code: "DSS 104", title: "Introduction to Social Statistics II", units: 3, type: "C" },
                { code: "MTH 102", title: "Elementary Mathematics II", units: 3, type: "C" },
                { code: "STA 102", title: "Introduction to Statistics II", units: 3, type: "C" },
                { code: "ECO 102", title: "Principles of Economics II", units: 3, type: "R" },
                { code: "SOC 102", title: "Introduction to Sociology II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "DSS 201", title: "Demographic Methods I (Fertility Analysis)", units: 3, type: "C" },
                { code: "DSS 203", title: "Social Statistics Methods I (Regression)", units: 3, type: "C" },
                { code: "DSS 205", title: "Population and Development I", units: 3, type: "C" },
                { code: "DSS 207", title: "Data Collection and Survey Methods I", units: 3, type: "C" },
                { code: "DSS 209", title: "Introduction to Biostatistics", units: 3, type: "C" },
                { code: "STA 201", title: "Probability Theory I", units: 3, type: "C" },
                { code: "GEO 209", title: "Population Geography", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "DSS 202", title: "Demographic Methods II (Mortality Analysis)", units: 3, type: "C" },
                { code: "DSS 204", title: "Social Statistics Methods II (Multivariate)", units: 3, type: "C" },
                { code: "DSS 206", title: "Population and Development II", units: 3, type: "C" },
                { code: "DSS 208", title: "Data Collection and Survey Methods II", units: 3, type: "C" },
                { code: "DSS 210", title: "Statistical Computing I (SPSS & STATA)", units: 3, type: "C" },
                { code: "STA 202", title: "Probability Theory II", units: 3, type: "C" },
                { code: "ECO 210", title: "Introduction to Development Economics", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "DSS 301", title: "Migration and Urbanization", units: 3, type: "C" },
                { code: "DSS 303", title: "Population Estimation and Projection", units: 3, type: "C" },
                { code: "DSS 305", title: "Health Demography and Epidemiology", units: 3, type: "C" },
                { code: "DSS 307", title: "Demographic Data Sources and Evaluation", units: 3, type: "C" },
                { code: "DSS 309", title: "Social Research Methodology I", units: 3, type: "C" },
                { code: "DSS 311", title: "Mathematical Demography", units: 3, type: "C" },
                { code: "DSS 313", title: "Population Theories and Policies", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "DSS 302", title: "Family Demography", units: 3, type: "C" },
                { code: "DSS 304", title: "Life Table Construction and Analysis", units: 3, type: "C" },
                { code: "DSS 306", title: "Reproductive Health and Family Planning", units: 3, type: "C" },
                { code: "DSS 308", title: "Statistical Computing II (R & SAS)", units: 3, type: "C" },
                { code: "DSS 310", title: "Social Research Methodology II", units: 3, type: "C" },
                { code: "DSS 312", title: "Sampling Theory and Practice", units: 3, type: "C" },
                { code: "DSS 314", title: "Research Practicum", units: 2, type: "C" },
                { code: "DSS 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "DSS 401", title: "Advanced Demographic Techniques", units: 3, type: "C" },
                { code: "DSS 403", title: "Population and Environment", units: 3, type: "C" },
                { code: "DSS 405", title: "Gender and Population", units: 3, type: "C" },
                { code: "DSS 407", title: "Advanced Social Statistics (Survival Analysis)", units: 3, type: "E" },
                { code: "DSS 409", title: "Demographic Transition and Aging", units: 3, type: "E" },
                { code: "DSS 411", title: "GIS and Spatial Demography", units: 3, type: "E" },
                { code: "DSS 413", title: "Population Economics", units: 3, type: "E" },
                { code: "DSS 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "DSS 402", title: "Advanced Population Projection Modelling", units: 3, type: "C" },
                { code: "DSS 404", title: "Comparative Population Studies", units: 3, type: "C" },
                { code: "DSS 406", title: "Population and Social Security", units: 3, type: "E" },
                { code: "DSS 408", title: "Data Science for Social Research", units: 3, type: "E" },
                { code: "DSS 410", title: "Monitoring and Evaluation", units: 3, type: "E" },
                { code: "DSS 412", title: "Global Health and Population", units: 3, type: "E" },
                { code: "DSS 414", title: "Demography Seminar", units: 2, type: "C" },
                { code: "DSS 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    },

    // ======================================================
    // DEPARTMENT 10: INTERNATIONAL RELATIONS
    // ======================================================
    {
      id: 410,
      name: "International Relations",
      code: "INR",
      duration: 4,
      levels: [
        {
          level: 100,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 101", title: "Use of English I", units: 2, type: "C" },
                { code: "GNS 103", title: "Nigerian Peoples and Culture", units: 2, type: "C" },
                { code: "INR 101", title: "Introduction to International Relations I", units: 3, type: "C" },
                { code: "INR 103", title: "Introduction to World Politics I", units: 3, type: "C" },
                { code: "INR 105", title: "Introduction to Diplomacy", units: 3, type: "C" },
                { code: "POL 101", title: "Introduction to Political Science I", units: 3, type: "R" },
                { code: "ECO 101", title: "Principles of Economics I", units: 3, type: "R" },
                { code: "HIS 101", title: "Introduction to African History I", units: 3, type: "R" },
                { code: "CPT 101", title: "Introduction to Computer Science", units: 2, type: "C" },
                { code: "VTE 101", title: "Introduction to Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 102", title: "Use of English II", units: 2, type: "C" },
                { code: "GNS 104", title: "History and Philosophy of Science", units: 2, type: "C" },
                { code: "INR 102", title: "Introduction to International Relations II", units: 3, type: "C" },
                { code: "INR 104", title: "Introduction to World Politics II", units: 3, type: "C" },
                { code: "INR 106", title: "Introduction to International Law", units: 3, type: "C" },
                { code: "POL 102", title: "Introduction to Political Science II", units: 3, type: "R" },
                { code: "ECO 102", title: "Principles of Economics II", units: 3, type: "R" },
                { code: "HIS 102", title: "Introduction to African History II", units: 3, type: "R" },
                { code: "CPT 102", title: "Introduction to Problem Solving", units: 2, type: "C" },
                { code: "VTE 103", title: "Foundations of Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 200,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 201", title: "Philosophy and Logic", units: 2, type: "C" },
                { code: "INR 201", title: "International Relations Theory I (Realism & Liberalism)", units: 3, type: "C" },
                { code: "INR 203", title: "International Organizations I (UN System)", units: 3, type: "C" },
                { code: "INR 205", title: "International Law I", units: 3, type: "C" },
                { code: "INR 207", title: "International Political Economy I", units: 3, type: "C" },
                { code: "INR 209", title: "Foreign Policy Analysis I", units: 3, type: "C" },
                { code: "INR 211", title: "African International Relations I", units: 3, type: "C" },
                { code: "STA 201", title: "Statistics for Social Scientists I", units: 3, type: "C" },
                { code: "VTE 201", title: "Philosophy of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 202", title: "Peace and Conflict Resolution", units: 2, type: "C" },
                { code: "INR 202", title: "International Relations Theory II (Constructivism & Critical)", units: 3, type: "C" },
                { code: "INR 204", title: "International Organizations II (Regional Bodies)", units: 3, type: "C" },
                { code: "INR 206", title: "International Law II (Humanitarian Law)", units: 3, type: "C" },
                { code: "INR 208", title: "International Political Economy II", units: 3, type: "C" },
                { code: "INR 210", title: "Foreign Policy Analysis II", units: 3, type: "C" },
                { code: "INR 212", title: "African International Relations II", units: 3, type: "C" },
                { code: "STA 202", title: "Statistics for Social Scientists II", units: 3, type: "C" },
                { code: "VTE 203", title: "Methods in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 300,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "GNS 301", title: "Entrepreneurship Studies I", units: 2, type: "C" },
                { code: "INR 301", title: "Nigerian Foreign Policy I", units: 3, type: "C" },
                { code: "INR 303", title: "International Security Studies I", units: 3, type: "C" },
                { code: "INR 305", title: "Diplomacy and Diplomatic Practice I", units: 3, type: "C" },
                { code: "INR 307", title: "International Trade and Finance I", units: 3, type: "C" },
                { code: "INR 309", title: "Conflict and Peace Studies I", units: 3, type: "C" },
                { code: "INR 311", title: "Politics of the Middle East", units: 3, type: "C" },
                { code: "INR 313", title: "Research Methods in International Relations I", units: 3, type: "C" },
                { code: "VTE 301", title: "Vocational Guidance and Counselling", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "GNS 302", title: "Entrepreneurship Studies II", units: 2, type: "C" },
                { code: "INR 302", title: "Nigerian Foreign Policy II", units: 3, type: "C" },
                { code: "INR 304", title: "International Security Studies II", units: 3, type: "C" },
                { code: "INR 306", title: "Diplomacy and Diplomatic Practice II", units: 3, type: "C" },
                { code: "INR 308", title: "International Trade and Finance II", units: 3, type: "C" },
                { code: "INR 310", title: "Conflict and Peace Studies II", units: 3, type: "C" },
                { code: "INR 312", title: "Politics of Asia Pacific", units: 3, type: "C" },
                { code: "INR 314", title: "Research Methods in International Relations II", units: 2, type: "C" },
                { code: "INR 300", title: "SIWES (Industrial Training)", units: 3, type: "C" },
                { code: "VTE 303", title: "Curriculum Development in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        },
        {
          level: 400,
          semesters: [
            {
              semester: "First Semester",
              courses: [
                { code: "INR 401", title: "Advanced International Relations Theory", units: 3, type: "C" },
                { code: "INR 403", title: "Globalization and World Order", units: 3, type: "C" },
                { code: "INR 405", title: "International Human Rights Law", units: 3, type: "C" },
                { code: "INR 407", title: "International Environmental Politics", units: 3, type: "E" },
                { code: "INR 409", title: "Terrorism and Counter-Terrorism", units: 3, type: "E" },
                { code: "INR 411", title: "International Migration and Refugees", units: 3, type: "E" },
                { code: "INR 413", title: "Intelligence and National Security", units: 3, type: "E" },
                { code: "INR 499", title: "Final Year Project I (Research Project)", units: 3, type: "C" },
                { code: "VTE 401", title: "Management of Vocational and Technical Education", units: 2, type: "C" }
              ]
            },
            {
              semester: "Second Semester",
              courses: [
                { code: "INR 402", title: "International Development Cooperation", units: 3, type: "C" },
                { code: "INR 404", title: "Regional Integration and Cooperation", units: 3, type: "C" },
                { code: "INR 406", title: "Peacekeeping and Peace Building", units: 3, type: "C" },
                { code: "INR 408", title: "Gender in International Relations", units: 3, type: "E" },
                { code: "INR 410", title: "Cyber Diplomacy and Digital International Relations", units: 3, type: "E" },
                { code: "INR 412", title: "Energy Politics and Resource Governance", units: 3, type: "E" },
                { code: "INR 414", title: "International Relations Seminar", units: 2, type: "C" },
                { code: "INR 498", title: "Final Year Project II (Research Project)", units: 3, type: "C" },
                { code: "VTE 403", title: "Entrepreneurship in Vocational and Technical Education", units: 2, type: "C" }
              ]
            }
          ]
        }
      ]
    }
  
  ] // end departments array
} // end Faculty of Social Sciences


]



// Faculty Service - helper functions
const FacultyService = {
  getFaculties: function() {
    return Object.keys(facultyData);
  },

  getDepartments: function(faculty) {
    return facultyData[faculty] ? Object.keys(facultyData[faculty]) : [];
  },

  getLevels: function(faculty, department) {
    return facultyData[faculty]?.[department]
      ? Object.keys(facultyData[faculty][department])
      : [];
  },

  getCourses: function(faculty, department, level) {
    return facultyData[faculty]?.[department]?.[level] || [];
  },

  getTotalFaculties: function() {
    return Object.keys(facultyData).length;
  },

  getTotalDepartments: function() {
    let count = 0;
    Object.values(facultyData).forEach(fac => {
      count += Object.keys(fac).length;
    });
    return count;
  },

  getTotalCourses: function() {
    let count = 0;
    Object.values(facultyData).forEach(fac => {
      Object.values(fac).forEach(dept => {
        Object.values(dept).forEach(courses => {
          count += courses.length;
        });
      });
    });
    return count;
  }
};

// // ============================================================
// // FACULTY SERVICE — All Helpers + Auto-Render
// // ============================================================

// const FacultyService = (() => {

//   // ---- FACULTY HELPERS ----

//   function getFaculties() {
//     return facultyData.map(f => f.name);
//   }

//   function getAllFaculties() {
//     return facultyData;
//   }

//   function getFacultyById(facultyId) {
//     return facultyData.find(f => f.id === facultyId) || null;
//   }

//   function getFacultyByCode(code) {
//     return facultyData.find(f => f.code === code.toUpperCase()) || null;
//   }

//   function getFacultyByName(name) {
//     return facultyData.find(f => f.name.toLowerCase() === name.toLowerCase()) || null;
//   }

//   function getAllFacultyNames() {
//     return facultyData.map(f => f.name);
//   }

//   function getAllFacultyCodes() {
//     return facultyData.map(f => f.code);
//   }

//   function getFacultyCount() {
//     return facultyData.length;
//   }

//   // ---- DEPARTMENT HELPERS ----

//   function getAllDepartments() {
//     return facultyData.flatMap(f => f.departments);
//   }

//   function getDepartments(facultyId) {
//     const faculty = getFacultyById(facultyId);
//     return faculty ? faculty.departments.map(d => d.name) : [];
//   }

//   function getDepartmentsByFacultyId(facultyId) {
//     const faculty = getFacultyById(facultyId);
//     return faculty ? faculty.departments : [];
//   }

//   function getDepartmentsByFacultyCode(facultyCode) {
//     const faculty = getFacultyByCode(facultyCode);
//     return faculty ? faculty.departments : [];
//   }

//   function getDepartmentById(departmentId) {
//     for (const faculty of facultyData) {
//       const dept = faculty.departments.find(d => d.id === departmentId);
//       if (dept) return dept;
//     }
//     return null;
//   }

//   function getDepartmentByCode(deptCode) {
//     for (const faculty of facultyData) {
//       const dept = faculty.departments.find(d => d.code === deptCode.toUpperCase());
//       if (dept) return dept;
//     }
//     return null;
//   }

//   function getDepartmentByName(name) {
//     for (const faculty of facultyData) {
//       const dept = faculty.departments.find(d => d.name.toLowerCase() === name.toLowerCase());
//       if (dept) return dept;
//     }
//     return null;
//   }

//   function getAllDepartmentNames(facultyId) {
//     const departments = facultyId ? getDepartmentsByFacultyId(facultyId) : getAllDepartments();
//     return departments.map(d => d.name);
//   }

//   function getAllDepartmentCodes(facultyId) {
//     const departments = facultyId ? getDepartmentsByFacultyId(facultyId) : getAllDepartments();
//     return departments.map(d => d.code);
//   }

//   function getFacultyByDepartmentId(departmentId) {
//     return facultyData.find(f => f.departments.some(d => d.id === departmentId)) || null;
//   }

//   function getFacultyByDepartmentCode(deptCode) {
//     return facultyData.find(f => f.departments.some(d => d.code === deptCode.toUpperCase())) || null;
//   }

//   function getDepartmentCount(facultyId) {
//     const faculty = getFacultyById(facultyId);
//     return faculty ? faculty.departments.length : 0;
//   }

//   function getTotalDepartmentCount() {
//     return getAllDepartments().length;
//   }

//   // ---- LEVEL HELPERS ----

//   function getLevelsByDepartmentId(departmentId) {
//     const dept = getDepartmentById(departmentId);
//     return dept ? dept.levels : [];
//   }

//   function getLevelsByDepartmentCode(deptCode) {
//     const dept = getDepartmentByCode(deptCode);
//     return dept ? dept.levels : [];
//   }

//   function getLevel(departmentId, level) {
//     const levels = getLevelsByDepartmentId(departmentId);
//     return levels.find(l => l.level === level) || null;
//   }

//   function getLevelByDeptCode(deptCode, level) {
//     const levels = getLevelsByDepartmentCode(deptCode);
//     return levels.find(l => l.level === level) || null;
//   }

//   function getAvailableLevels(departmentId) {
//     return getLevelsByDepartmentId(departmentId).map(l => l.level);
//   }

//   function getAvailableLevelsByDeptCode(deptCode) {
//     return getLevelsByDepartmentCode(deptCode).map(l => l.level);
//   }

//   function getLevelCount(departmentId) {
//     const dept = getDepartmentById(departmentId);
//     return dept ? dept.levels.length : 0;
//   }

//   // ---- SEMESTER HELPERS ----

//   function getSemesters(departmentId, level) {
//     const lvl = getLevel(departmentId, level);
//     return lvl ? lvl.semesters : [];
//   }

//   function getSemestersByDeptCode(deptCode, level) {
//     const lvl = getLevelByDeptCode(deptCode, level);
//     return lvl ? lvl.semesters : [];
//   }

//   function getSemester(departmentId, level, semesterName) {
//     const semesters = getSemesters(departmentId, level);
//     return semesters.find(s => s.semester.toLowerCase() === semesterName.toLowerCase()) || null;
//   }

//   function getSemesterByDeptCode(deptCode, level, semesterName) {
//     const semesters = getSemestersByDeptCode(deptCode, level);
//     return semesters.find(s => s.semester.toLowerCase() === semesterName.toLowerCase()) || null;
//   }

//   function getSemesterNames(departmentId, level) {
//     return getSemesters(departmentId, level).map(s => s.semester);
//   }

//   // ---- COURSE HELPERS ----

//   function getCourses(departmentId, level, semesterName) {
//     const sem = getSemester(departmentId, level, semesterName);
//     return sem ? sem.courses : [];
//   }

//   function getCoursesByDeptCode(deptCode, level, semesterName) {
//     const sem = getSemesterByDeptCode(deptCode, level, semesterName);
//     return sem ? sem.courses : [];
//   }

//   function getCourse(departmentId, level, semesterName, courseCode) {
//     const courses = getCourses(departmentId, level, semesterName);
//     return courses.find(c => c.code.toLowerCase() === courseCode.toLowerCase()) || null;
//   }

//   function getAllCoursesForLevel(departmentId, level) {
//     return getSemesters(departmentId, level).flatMap(s => s.courses);
//   }

//   function getAllCoursesForLevelByDeptCode(deptCode, level) {
//     return getSemestersByDeptCode(deptCode, level).flatMap(s => s.courses);
//   }

//   function getAllCoursesInDepartment(departmentId) {
//     return getLevelsByDepartmentId(departmentId).flatMap(lvl =>
//       lvl.semesters.flatMap(sem => sem.courses)
//     );
//   }

//   function getAllCoursesInDepartmentByCode(deptCode) {
//     return getLevelsByDepartmentCode(deptCode).flatMap(lvl =>
//       lvl.semesters.flatMap(sem => sem.courses)
//     );
//   }

//   function getAllCourses() {
//     return facultyData.flatMap(f =>
//       f.departments.flatMap(d =>
//         d.levels.flatMap(lvl =>
//           lvl.semesters.flatMap(sem => sem.courses)
//         )
//       )
//     );
//   }

//   function findCourseByCode(courseCode) {
//     const results = [];
//     for (const faculty of facultyData) {
//       for (const dept of faculty.departments) {
//         for (const lvl of dept.levels) {
//           for (const sem of lvl.semesters) {
//             const course = sem.courses.find(c => c.code.toLowerCase() === courseCode.toLowerCase());
//             if (course) {
//               results.push({
//                 faculty: faculty.name,
//                 facultyCode: faculty.code,
//                 department: dept.name,
//                 departmentCode: dept.code,
//                 level: lvl.level,
//                 semester: sem.semester,
//                 ...course
//               });
//             }
//           }
//         }
//       }
//     }
//     return results;
//   }

//   function searchCourse(keyword) {
//     const lc = keyword.toLowerCase();
//     const results = [];
//     for (const faculty of facultyData) {
//       for (const dept of faculty.departments) {
//         for (const lvl of dept.levels) {
//           for (const sem of lvl.semesters) {
//             for (const course of sem.courses) {
//               if (course.code.toLowerCase().includes(lc) || course.title.toLowerCase().includes(lc)) {
//                 results.push({
//                   faculty: faculty.name,
//                   facultyCode: faculty.code,
//                   department: dept.name,
//                   departmentCode: dept.code,
//                   level: lvl.level,
//                   semester: sem.semester,
//                   ...course
//                 });
//               }
//             }
//           }
//         }
//       }
//     }
//     return results;
//   }

//   function searchCoursesByTitle(keyword) {
//     const lc = keyword.toLowerCase();
//     const results = [];
//     for (const faculty of facultyData) {
//       for (const dept of faculty.departments) {
//         for (const lvl of dept.levels) {
//           for (const sem of lvl.semesters) {
//             for (const course of sem.courses) {
//               if (course.title.toLowerCase().includes(lc)) {
//                 results.push({
//                   faculty: faculty.name,
//                   facultyCode: faculty.code,
//                   department: dept.name,
//                   departmentCode: dept.code,
//                   level: lvl.level,
//                   semester: sem.semester,
//                   ...course
//                 });
//               }
//             }
//           }
//         }
//       }
//     }
//     return results;
//   }

//   function getCompulsoryCourses(departmentId, level, semesterName) {
//     return getCourses(departmentId, level, semesterName).filter(c => c.type === "C");
//   }

//   function getElectiveCourses(departmentId, level, semesterName) {
//     return getCourses(departmentId, level, semesterName).filter(c => c.type === "E");
//   }

//   function getCoursesByType(departmentId, level, semesterName, type) {
//     return getCourses(departmentId, level, semesterName).filter(c => c.type.toUpperCase() === type.toUpperCase());
//   }

//   function getCourseCount(departmentId, level, semesterName) {
//     return getCourses(departmentId, level, semesterName).length;
//   }

//   function getCourseCountForLevel(departmentId, level) {
//     return getAllCoursesForLevel(departmentId, level).length;
//   }

//   function courseExistsInDepartment(departmentId, courseCode) {
//     return getAllCoursesInDepartment(departmentId).some(c => c.code.toLowerCase() === courseCode.toLowerCase());
//   }

//   function whereCourseAppears(courseCode) {
//     return findCourseByCode(courseCode);
//   }

//   // ---- PREFIX-BASED COURSE HELPERS (GNS, VTE, etc.) ----

//   function _getCoursesByPrefix(prefix) {
//     const lc = prefix.toLowerCase();
//     const results = [];
//     for (const faculty of facultyData) {
//       for (const dept of faculty.departments) {
//         for (const lvl of dept.levels) {
//           for (const sem of lvl.semesters) {
//             for (const course of sem.courses) {
//               if (course.code.toLowerCase().startsWith(lc)) {
//                 results.push({
//                   faculty: faculty.name,
//                   facultyCode: faculty.code,
//                   department: dept.name,
//                   departmentCode: dept.code,
//                   level: lvl.level,
//                   semester: sem.semester,
//                   ...course
//                 });
//               }
//             }
//           }
//         }
//       }
//     }
//     return results;
//   }

//   function getAllGNSCourses() {
//     return _getCoursesByPrefix("GNS");
//   }

//   function getAllVTECourses() {
//     return _getCoursesByPrefix("VTE");
//   }

//   function getCoursesByPrefix(prefix) {
//     return _getCoursesByPrefix(prefix);
//   }

//   function getUniqueGNSCourses() {
//     const all = getAllGNSCourses();
//     const seen = new Set();
//     return all.filter(c => {
//       if (seen.has(c.code)) return false;
//       seen.add(c.code);
//       return true;
//     });
//   }

//   function getUniqueVTECourses() {
//     const all = getAllVTECourses();
//     const seen = new Set();
//     return all.filter(c => {
//       if (seen.has(c.code)) return false;
//       seen.add(c.code);
//       return true;
//     });
//   }

//   // ---- UNIT / CREDIT HELPERS ----

//   function getTotalUnits(departmentId, level, semesterName) {
//     return getCourses(departmentId, level, semesterName).reduce((sum, c) => sum + c.units, 0);
//   }

//   function getTotalUnitsByDeptCode(deptCode, level, semesterName) {
//     return getCoursesByDeptCode(deptCode, level, semesterName).reduce((sum, c) => sum + c.units, 0);
//   }

//   function getTotalUnitsForLevel(departmentId, level) {
//     return getAllCoursesForLevel(departmentId, level).reduce((sum, c) => sum + c.units, 0);
//   }

//   function getTotalUnitsForDepartment(departmentId) {
//     return getAllCoursesInDepartment(departmentId).reduce((sum, c) => sum + c.units, 0);
//   }

//   // ---- SUMMARY / OVERVIEW HELPERS ----

//   function getDepartmentSummary(departmentId) {
//     const dept = getDepartmentById(departmentId);
//     if (!dept) return null;
//     const faculty = getFacultyByDepartmentId(departmentId);

//     return {
//       faculty: faculty ? faculty.name : "Unknown",
//       facultyCode: faculty ? faculty.code : "Unknown",
//       department: dept.name,
//       departmentCode: dept.code,
//       duration: dept.duration,
//       levels: dept.levels.map(lvl => ({
//         level: lvl.level,
//         semesters: lvl.semesters.map(sem => ({
//           semester: sem.semester,
//           courseCount: sem.courses.length,
//           totalUnits: sem.courses.reduce((s, c) => s + c.units, 0),
//           courses: sem.courses
//         })),
//         totalCourses: lvl.semesters.reduce((s, sem) => s + sem.courses.length, 0),
//         totalUnits: lvl.semesters.reduce((s, sem) => s + sem.courses.reduce((u, c) => u + c.units, 0), 0)
//       })),
//       totalCourses: dept.levels.reduce((s, lvl) => s + lvl.semesters.reduce((ss, sem) => ss + sem.courses.length, 0), 0),
//       totalUnits: dept.levels.reduce((s, lvl) => s + lvl.semesters.reduce((ss, sem) => ss + sem.courses.reduce((u, c) => u + c.units, 0), 0), 0)
//     };
//   }

//   function getFacultySummary(facultyId) {
//     const faculty = getFacultyById(facultyId);
//     if (!faculty) return null;

//     return {
//       name: faculty.name,
//       code: faculty.code,
//       duration: faculty.duration,
//       departmentCount: faculty.departments.length,
//       departments: faculty.departments.map(dept => getDepartmentSummary(dept.id))
//     };
//   }

//   function getFullSummary() {
//     return facultyData.map(f => getFacultySummary(f.id));
//   }

//   function getAllUniqueCoursesCodes() {
//     return [...new Set(getAllCourses().map(c => c.code))];
//   }

//   function getAllUniqueCourseTitles() {
//     return [...new Set(getAllCourses().map(c => c.title))];
//   }

//   // ---- EXPORT FLAT ----

//   function exportFlat() {
//     const rows = [];
//     for (const faculty of facultyData) {
//       for (const dept of faculty.departments) {
//         for (const lvl of dept.levels) {
//           for (const sem of lvl.semesters) {
//             for (const course of sem.courses) {
//               rows.push({
//                 facultyName: faculty.name,
//                 facultyCode: faculty.code,
//                 departmentName: dept.name,
//                 departmentCode: dept.code,
//                 duration: dept.duration,
//                 level: lvl.level,
//                 semester: sem.semester,
//                 courseCode: course.code,
//                 courseTitle: course.title,
//                 courseUnits: course.units,
//                 courseType: course.type
//               });
//             }
//           }
//         }
//       }
//     }
//     return rows;
//   }

//   function exportFlatCSV() {
//     const rows = exportFlat();
//     if (rows.length === 0) return "";
//     const headers = Object.keys(rows[0]);
//     const lines = [headers.join(",")];
//     for (const row of rows) {
//       lines.push(headers.map(h => {
//         const val = String(row[h]);
//         return val.includes(",") ? '"' + val + '"' : val;
//       }).join(","));
//     }
//     return lines.join("\n");
//   }

//   // ============================================================
//   // AUTO-RENDER ENGINE
//   // ============================================================

//   function _esc(str) {
//     const d = document.createElement("div");
//     d.textContent = str;
//     return d.innerHTML;
//   }

//   function _buildStyles() {
//     return `
//       <style>
//         .fc-wrap{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:#1a1a2e;max-width:1100px;margin:0 auto}
//         .fc-wrap *{box-sizing:border-box}
//         .fc-header{background:linear-gradient(135deg,#0f3460,#16213e);color:#fff;padding:24px 28px;border-radius:12px 12px 0 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
//         .fc-header h2{margin:0;font-size:1.5rem;font-weight:700}
//         .fc-stats{display:flex;gap:18px;flex-wrap:wrap}
//         .fc-stat{background:rgba(255,255,255,.12);padding:6px 14px;border-radius:20px;font-size:.82rem;font-weight:500}
//         .fc-search-bar{padding:16px 20px;background:#f0f4ff;border-left:3px solid #0f3460}
//         .fc-search-bar input{width:100%;padding:10px 16px;border:2px solid #d1d9e6;border-radius:8px;font-size:.95rem;outline:none;transition:border .2s}
//         .fc-search-bar input:focus{border-color:#0f3460}
//         .fc-body{border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;overflow:hidden}
//         .fc-faculty{border-bottom:1px solid #e2e8f0}
//         .fc-faculty:last-child{border-bottom:none}
//         .fc-fac-btn{width:100%;text-align:left;background:#fafbff;border:none;padding:16px 20px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-size:1.05rem;font-weight:600;color:#0f3460;transition:background .15s}
//         .fc-fac-btn:hover{background:#eef2ff}
//         .fc-fac-btn .fc-arrow{transition:transform .25s;font-size:.8rem}
//         .fc-fac-btn.open .fc-arrow{transform:rotate(90deg)}
//         .fc-fac-body{display:none;padding:0 0 0 12px}
//         .fc-fac-body.open{display:block}
//         .fc-dept{margin:4px 8px 4px 0;border-left:3px solid #6366f1}
//         .fc-dept-btn{width:100%;text-align:left;background:transparent;border:none;padding:12px 16px;cursor:pointer;font-size:.95rem;font-weight:600;color:#334155;display:flex;justify-content:space-between;align-items:center;transition:background .15s}
//         .fc-dept-btn:hover{background:#f1f5f9}
//         .fc-dept-btn .fc-arrow{transition:transform .25s;font-size:.7rem}
//         .fc-dept-btn.open .fc-arrow{transform:rotate(90deg)}
//         .fc-dept-body{display:none;padding:0 0 8px 16px}
//         .fc-dept-body.open{display:block}
//         .fc-level-title{font-weight:700;font-size:.88rem;color:#0f3460;padding:10px 0 4px 4px;border-bottom:1px solid #e2e8f0;margin:8px 0 0}
//         .fc-sem-title{font-weight:600;font-size:.82rem;color:#6366f1;padding:6px 0 4px 8px;margin-top:4px}
//         .fc-table{width:100%;border-collapse:collapse;margin:0 0 8px 0;font-size:.82rem}
//         .fc-table th{background:#eef2ff;text-align:left;padding:7px 10px;font-weight:600;color:#334155;border-bottom:2px solid #cbd5e1}
//         .fc-table td{padding:6px 10px;border-bottom:1px solid #f1f5f9}
//         .fc-table tr:hover td{background:#f8fafc}
//         .fc-badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:.72rem;font-weight:700;color:#fff}
//         .fc-badge-c{background:#22c55e}
//         .fc-badge-e{background:#f59e0b}
//         .fc-badge-r{background:#3b82f6}
//         .fc-badge-other{background:#94a3b8}
//         .fc-sem-units{font-size:.78rem;color:#64748b;padding:2px 0 6px 10px;font-style:italic}
//         .fc-no-result{padding:20px;text-align:center;color:#94a3b8;font-size:.95rem}
//         .fc-search-results{padding:12px 20px}
//         .fc-sr-item{padding:8px 12px;border:1px solid #e2e8f0;border-radius:8px;margin-bottom:8px;background:#fafbff}
//         .fc-sr-item strong{color:#0f3460}
//         .fc-sr-meta{font-size:.78rem;color:#64748b;margin-top:2px}
//       </style>
//     `;
//   }

//   function _badgeClass(type) {
//     const t = (type || "").toUpperCase();
//     if (t === "C") return "fc-badge fc-badge-c";
//     if (t === "E") return "fc-badge fc-badge-e";
//     if (t === "R") return "fc-badge fc-badge-r";
//     return "fc-badge fc-badge-other";
//   }

//   function _badgeLabel(type) {
//     const t = (type || "").toUpperCase();
//     if (t === "C") return "Compulsory";
//     if (t === "E") return "Elective";
//     if (t === "R") return "Required";
//     return t;
//   }

//   function _buildCourseTable(courses) {
//     if (!courses || courses.length === 0) return '<p class="fc-no-result">No courses</p>';
//     let html = '<table class="fc-table"><thead><tr><th>S/N</th><th>Code</th><th>Title</th><th>Units</th><th>Type</th></tr></thead><tbody>';
//     courses.forEach((c, i) => {
//       html += `<tr>
//         <td>${i + 1}</td>
//         <td><strong>${_esc(c.code)}</strong></td>
//         <td>${_esc(c.title)}</td>
//         <td>${c.units}</td>
//         <td><span class="${_badgeClass(c.type)}">${_badgeLabel(c.type)}</span></td>
//       </tr>`;
//     });
//     html += '</tbody></table>';
//     return html;
//   }

//   function _renderMain(container) {
//     const totalFac = facultyData.length;
//     const totalDept = getAllDepartments().length;
//     const totalCourses = getAllCourses().length;

//     let html = _buildStyles();

//     html += '<div class="fc-wrap">';

//     // Header
//     html += `<div class="fc-header">
//       <h2>📚 Faculty &amp; Course Directory</h2>
//       <div class="fc-stats">
//         <span class="fc-stat">${totalFac} Faculties</span>
//         <span class="fc-stat">${totalDept} Departments</span>
//         <span class="fc-stat">${totalCourses} Courses</span>
//       </div>
//     </div>`;

//     // Search
//     html += `<div class="fc-search-bar">
//       <input type="text" id="fc-search-input" placeholder="🔍  Search courses by code or title…" />
//     </div>`;

//     // Search results container (hidden by default)
//     html += '<div id="fc-search-results" class="fc-search-results" style="display:none"></div>';

//     // Body (accordion)
//     html += '<div class="fc-body" id="fc-accordion-body">';

//     facultyData.forEach((fac, fi) => {
//       const deptCount = fac.departments.length;
//       html += `<div class="fc-faculty">
//         <button class="fc-fac-btn" data-fc-toggle="fac-${fi}">
//           <span>${_esc(fac.name)} <span style="font-weight:400;font-size:.82rem;color:#64748b">(${_esc(fac.code)}) — ${deptCount} dept${deptCount !== 1 ? 's' : ''}</span></span>
//           <span class="fc-arrow">▶</span>
//         </button>
//         <div class="fc-fac-body" id="fac-${fi}">`;

//       fac.departments.forEach((dept, di) => {
//         const deptKey = `dept-${fi}-${di}`;
//         html += `<div class="fc-dept">
//           <button class="fc-dept-btn" data-fc-toggle="${deptKey}">
//             <span>${_esc(dept.name)} <span style="font-weight:400;font-size:.78rem;color:#94a3b8">(${_esc(dept.code)}) — ${dept.duration || "N/A"}</span></span>
//             <span class="fc-arrow">▶</span>
//           </button>
//           <div class="fc-dept-body" id="${deptKey}">`;

//         if (dept.levels && dept.levels.length > 0) {
//           dept.levels.forEach(lvl => {
//             html += `<div class="fc-level-title">Level ${lvl.level}</div>`;
//             if (lvl.semesters && lvl.semesters.length > 0) {
//               lvl.semesters.forEach(sem => {
//                 const semUnits = sem.courses.reduce((s, c) => s + c.units, 0);
//                 html += `<div class="fc-sem-title">${_esc(sem.semester)} — ${sem.courses.length} course${sem.courses.length !== 1 ? 's' : ''}</div>`;
//                 html += _buildCourseTable(sem.courses);
//                 html += `<div class="fc-sem-units">Total units: <strong>${semUnits}</strong></div>`;
//               });
//             }
//           });
//         } else {
//           html += '<p class="fc-no-result">No levels available</p>';
//         }

//         html += '</div></div>'; // close dept-body + dept
//       });

//       html += '</div></div>'; // close fac-body + faculty
//     });

//     html += '</div>'; // fc-body
//     html += '</div>'; // fc-wrap

//     container.innerHTML = html;

//     // ---- Wire up accordion toggles ----
//     container.querySelectorAll("[data-fc-toggle]").forEach(btn => {
//       btn.addEventListener("click", () => {
//         const targetId = btn.getAttribute("data-fc-toggle");
//         const target = document.getElementById(targetId);
//         if (!target) return;
//         const isOpen = target.classList.contains("open");
//         target.classList.toggle("open", !isOpen);
//         btn.classList.toggle("open", !isOpen);
//       });
//     });

//     // ---- Wire up search ----
//     const searchInput = document.getElementById("fc-search-input");
//     const searchResults = document.getElementById("fc-search-results");
//     const accordionBody = document.getElementById("fc-accordion-body");

//     if (searchInput) {
//       let debounce = null;
//       searchInput.addEventListener("input", () => {
//         clearTimeout(debounce);
//         debounce = setTimeout(() => {
//           const q = searchInput.value.trim();
//           if (q.length < 2) {
//             searchResults.style.display = "none";
//             accordionBody.style.display = "";
//             return;
//           }
//           const results = searchCourse(q);
//           if (results.length === 0) {
//             searchResults.innerHTML = '<p class="fc-no-result">No courses match your search.</p>';
//           } else {
//             let rhtml = `<p style="font-size:.85rem;color:#64748b;margin:0 0 8px">${results.length} result${results.length !== 1 ? 's' : ''} found</p>`;
//             results.forEach(r => {
//               rhtml += `<div class="fc-sr-item">
//                 <strong>${_esc(r.code)}</strong> — ${_esc(r.title)} <span class="${_badgeClass(r.type)}">${_badgeLabel(r.type)}</span> &nbsp; <strong>${r.units} unit${r.units !== 1 ? 's' : ''}</strong>
//                 <div class="fc-sr-meta">${_esc(r.faculty)} → ${_esc(r.department)} → Level ${r.level} → ${_esc(r.semester)}</div>
//               </div>`;
//             });
//             searchResults.innerHTML = rhtml;
//           }
//           searchResults.style.display = "";
//           accordionBody.style.display = "none";
//         }, 250);
//       });
//     }
//   }

//   // ============================================================
//   // AUTO-INIT ON DOM READY
//   // ============================================================

//   function _autoInit() {
//     const container = document.getElementById("faculty-container");
//     if (container) {
//       _renderMain(container);
//     }
//   }

//   if (document.readyState === "loading") {
//     document.addEventListener("DOMContentLoaded", _autoInit);
//   } else {
//     _autoInit();
//   }

//   // ============================================================
//   // PUBLIC API
//   // ============================================================

//   return {
//     // Faculty
//     getFaculties,
//     getAllFaculties,
//     getFacultyById,
//     getFacultyByCode,
//     getFacultyByName,
//     getAllFacultyNames,
//     getAllFacultyCodes,
//     getFacultyCount,

//     // Department
//     getAllDepartments,
//     getDepartments,
//     getDepartmentsByFacultyId,
//     getDepartmentsByFacultyCode,
//     getDepartmentById,
//     getDepartmentByCode,
//     getDepartmentByName,
//     getAllDepartmentNames,
//     getAllDepartmentCodes,
//     getFacultyByDepartmentId,
//     getFacultyByDepartmentCode,
//     getDepartmentCount,
//     getTotalDepartmentCount,

//     // Level
//     getLevelsByDepartmentId,
//     getLevelsByDepartmentCode,
//     getLevel,
//     getLevelByDeptCode,
//     getAvailableLevels,
//     getAvailableLevelsByDeptCode,
//     getLevelCount,

//     // Semester
//     getSemesters,
//     getSemestersByDeptCode,
//     getSemester,
//     getSemesterByDeptCode,
//     getSemesterNames,

//     // Course
//     getCourses,
//     getCoursesByDeptCode,
//     getCourse,
//     getAllCoursesForLevel,
//     getAllCoursesForLevelByDeptCode,
//     getAllCoursesInDepartment,
//     getAllCoursesInDepartmentByCode,
//     getAllCourses,
//     findCourseByCode,
//     searchCourse,
//     searchCoursesByTitle,
//     getCompulsoryCourses,
//     getElectiveCourses,
//     getCoursesByType,
//     getCourseCount,
//     getCourseCountForLevel,
//     courseExistsInDepartment,
//     whereCourseAppears,

//     // Prefix-based
//     getAllGNSCourses,
//     getAllVTECourses,
//     getCoursesByPrefix,
//     getUniqueGNSCourses,
//     getUniqueVTECourses,

//     // Units
//     getTotalUnits,
//     getTotalUnitsByDeptCode,
//     getTotalUnitsForLevel,
//     getTotalUnitsForDepartment,

//     // Summary
//     getDepartmentSummary,
//     getFacultySummary,
//     getFullSummary,
//     getAllUniqueCoursesCodes,
//     getAllUniqueCourseTitles,

//     // Export
//     exportFlat,
//     exportFlatCSV,

//     // Manual re-render
//     render: _renderMain
//   };

// })();

// // Expose globally so any script can use FacultyService.xxx()
// window.FacultyService = FacultyService;