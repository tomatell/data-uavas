(function(angular) {

	angular.module('x-registries')
	.config(['$translateProvider', function($translateProvider) {
		$translateProvider.translations('sk', {
			
		"schema.towns.town":"Mesto",

		"schema.people.listFields.registrationID":"Registračné číslo",
		"schema.people.listFields.surName":"Priezvisko",
		"schema.people.listFields.name":"Meno",
		"schema.people.listFields.birthDate":"Dátum narodenia",
		"schema.people.listFields.city":"Mesto",

		"schema.people.profile.yes":"Áno",
		"schema.people.profile.no":"Nie",
		"schema.people.title":"Osoba",
		"schema.people.personalProfile":"Môj profil",
		"schema.people.baseData": "Základné údaje",
		"schema.people.identifier": "Identifikačné číslo",
		"schema.people.registrationID": "Registračné číslo",
		"schema.people.name": "Meno",
		"schema.people.surName": "Priezvisko",
		"schema.people.state.of.person":"Stav osoby",
		"schema.people.bornName": "Rodné priezvisko",
		"schema.people.title.before":"Titul pred",
		"schema.people.title.after":"Titul za",
		"schema.people.birthDate":"Dátum narodenia",
		"schema.people.gender":"Pohlavie",
		"schema.people.nationality":"Štátna príslušnosť",
		"schema.people.photo":"Fotografia",
		"schema.people.photoInfo":"Fotografie",
		"schema.people.email":"E-mail",
		"schema.people.mobileNumber":"Mobil",
		"schema.people.phoneNumber":"Telefón",
		"schema.people.country":"Štát",
		"schema.people.zipCode":"PSČ",
		"schema.people.city":"Obec",
		"schema.people.houseNumber":"Číslo domu",
		"schema.people.street":"Ulica",
		"schema.people.contactInfo":"Kontaktné údaje",
		"schema.people.bankInfo":"Fakturačné údaje",
		"schema.people.bankAccount":"Číslo účtu",
		"schema.people.bankCode":"Kód banky",
		"schema.people.iban":"IBAN",
		"schema.people.swift":"SWIFT",
		"schema.people.otherInfo":"Ostatné údaje",
		"schema.people.idCardNumber":"Číslo OP",
		"schema.people.passportNumber":"Číslo pasu",
		"schema.people.isPhotoPublic":"Je fotka verejná",
		"schema.people.note":"Poznámka",
		"schema.people.language":"Jazykové znalosti",

		"schema.people.hasLicense":"Osvedčenie pilota UAV",
		"schema.people.firstLicense":"Prvý dátum osvedčenia",
		"schema.people.licenseStartDate":"Platnosť od",
		"schema.people.licenseEndDate":"Platnosť do",
		"schema.people.category":"Kategória",
		"schema.people.devices":"UAV v užívaní",
		"schema.people.hasInsurance":"Poistenie",
		"schema.people.insuranceCompany":"Poisťovňa",
		"schema.people.listOfOrganizations":"Zoznam organizácií",
		"schema.people.company":"Organizácie",

		"schema.people.idInfo":"Registračný preukaz",
		"schema.people.currnetId":"Aktuálne číslo preukazu člena",
		"schema.people.dateOfExpiration":"Dátum platnosti preukazu",
		"schema.people.dateOfApplicationForId":"Dátum začiatku platnosti preukazu",

		"schema.mailTemplate.title":"Mailová šablóna",
		"schema.mailTemplate.basedata.title":"Základné údaje",
		"schema.mailTemplate.basedata.name":"Názov vzoru",
		"schema.mailTemplate.basedata.subject":"Predmet vzoru",
		"schema.mailTemplate.basedata.text":"Text vzoru",
		"schema.mailTemplate.basedata.html":"HTML vzor",
		"schema.mailTemplate.listFields.title":"Názov vzoru",

		"schema.org.hasLicense":"Povolenie pre letecké práce",
		"schema.org.firstLicense":"Dátum získania prvého povolenia",
		"schema.org.licenseStartDate":"Platnosť od",
		"schema.org.licenseEndDate":"Platnosť do",

		"schema.org.title":"Organizácia",
		"schema.org.assoc.dateOfRegistration":"Dátum registrácie",
		"schema.org.company.stateOfOrganization":"Stav organizácie",
		"schema.org.logoInfo":"Logo",
		"schema.org.logo":"Logo",
		"schema.org.baseData":"Základné údaje",
		"schema.org.name":"Názov organizácie",
		"schema.org.identifier":"Identifikátor",
		"schema.org.contactInfo":"Kontaktné údaje",
		"schema.org.street":"Ulica",
		"schema.org.houseNumber":"Číslo domu",
		"schema.org.city":"Obec",
		"schema.org.zipCode":"PSČ",
		"schema.org.country":"Štát",
		"schema.org.phoneNumber":"Telefón",
		"schema.org.mobileNumber":"Mobil",
		"schema.org.email":"E-mail",
		"schema.org.fax":"FAX",
		"schema.org.webPage":"Webová stránka",
		"schema.org.bankInfo":"Fakturačné údaje",
		"schema.org.merchantName":"Obchodný názov spoločnosti",
		"schema.org.stateOfOrganization":"Stav organizácie",
		"schema.org.ico":"IČO",
		"schema.org.dic":"DIČ",
		"schema.org.icDPH":" Číslo IČ DPH",
		"schema.org.country.icDPH":" Kód štátu pre IČ DPH",
		"schema.org.bankAccount":"Číslo účtu",
		"schema.org.bankCode":"Kód banky",
		"schema.org.bank":"Názov banky",
		"schema.org.iban":"IBAN",
		"schema.org.swift":"SWIFT",
		"schema.org.otherInfo":"Ostatné informácie",
		"schema.org.note":"Poznámka",
		"schema.org.view":"Organizácia",

		"schema.contactInfo.statutoryAuthority": "Štatutárny orgán",
		"schema.contactInfo.headAirOperations": "VPZ za leteckú prevádzku",
		"schema.contactInfo.headAirOTraffic": "VPZ za letovú prevádzku",
		"schema.contactInfo.headMaintenanceSystem": "VPZ za systém údržby",
		"schema.contactInfo.headTraining": "VPZ za výcvik letového personálu",
		"schema.contactInfo.pilots": "Piloti",

		"schema.statistics.view":"Štatistiky",
		"schema.statistics.baseData":"Základné",
		"schema.statistics.member.count":"Počet členov",
		"schema.statistics.women.count":"Počet žien",

		"schema.group.baseData":"Základné údaje",
		"schema.group.baseData.id":"Identifikátor",
		"schema.group.baseData.name":"Názov skupiny",
		"schema.group.baseData.parent":"Rodič",
		"schema.groupmaster.new":"Nová skupina",

		"schema.security.listFields.name":"Názov profilu",
		"schema.security.baseData.name":"Názov profilu",
		"schema.security.baseData":"Základné údaje",
		"schema.securityMaster.title":"Bezpečnostný profil"
	});
	
	$translateProvider.translations('cz', {

		"schema.towns.town":"Město",

		"schema.people.listFields.registrationID":"Registrační číslo",
		"schema.people.listFields.surName":"Příjmení",
		"schema.people.listFields.name":"Jméno",
		"schema.people.listFields.birthDate":"Datum narození",
		"schema.people.listFields.city":"Město",

		"schema.people.profile.yes":"Ano",
		"schema.people.profile.no":"Ne",
		"schema.people.title":"Osoba",
		"schema.people.personalProfile":"Můj profil",
		"schema.people.baseData": "Základní informace",
		"schema.people.identifier": "Identifikační číslo",
		"schema.people.registrationID": "Registrační číslo",
		"schema.people.name": "Jméno",
		"schema.people.surName": "Příjmení",
		"schema.people.state.of.person":"Stav osoby",
		"schema.people.bornName": "Rodné příjmení",
		"schema.people.title.before":"Titul před",
		"schema.people.title.after":"Titul za",
		"schema.people.birthDate":"Datum narození",
		"schema.people.gender":"Pohlaví",
		"schema.people.nationality":"Státní příslušnost",
		"schema.people.photo":"Fotografie",
		"schema.people.photoInfo":"Fotografie",
		"schema.people.email":"E-mail",
		"schema.people.mobileNumber":"Mobil",
		"schema.people.phoneNumber":"Telefon",
		"schema.people.country":"Stát",
		"schema.people.zipCode":"PSČ",
		"schema.people.city":"Obec",
		"schema.people.houseNumber":"Číslo domu",
		"schema.people.street":"Ulice",
		"schema.people.contactInfo":"Kontaktní údaje",
		"schema.people.bankInfo":"Fakturační údaje",
		"schema.people.bankAccount":"Číslo účtu",
		"schema.people.bankCode":"Kód banky",
		"schema.people.iban":"IBAN",
		"schema.people.swift":"SWIFT",
		"schema.people.otherInfo":"Ostatní údaje",
		"schema.people.idCardNumber":"Číslo OP",
		"schema.people.passportNumber":"Číslo pasu",
		"schema.people.isPhotoPublic":"Je fotka veřejná",
		"schema.people.note":"Poznámka",
		"schema.people.language":"Jazykové znalosti",

		"schema.people.hasLicense":"Osvědčení pilota UAV",
		"schema.people.firstLicense":"První datum osvědčení",
		"schema.people.licenseStartDate":"Platnost od",
		"schema.people.licenseEndDate":"Platnost do",
		"schema.people.category":"Kategorie",
		"schema.people.devices":"UAV v užívání",
		"schema.people.hasInsurance":"Pojištění",
		"schema.people.insuranceCompany":"Pojišťovna",
		"schema.people.listOfOrganizations":"Seznam organizací",
		"schema.people.company":"Organizace",

		"schema.people.idInfo":"Registrační průkaz",
		"schema.people.currnetId":"Aktuální číslo průkazu člena",
		"schema.people.dateOfExpiration":"Datum platnosti průkazu",
		"schema.people.dateOfApplicationForId":"Datum začátku platnosti průkazu",

		"schema.mailTemplate.title":"Mailová šablona",
		"schema.mailTemplate.basedata.title":"Základní údaje",
		"schema.mailTemplate.basedata.name":"Název vzoru",
		"schema.mailTemplate.basedata.subject":"Předmět vzoru",
		"schema.mailTemplate.basedata.text":"Text vzoru",
		"schema.mailTemplate.basedata.html":"HTML vzor",
		"schema.mailTemplate.listFields.title":"Název vzoru",

		"schema.org.hasLicense":"Povolení pro letecké práce",
		"schema.org.firstLicense":"Datum získání prvního povolení",
		"schema.org.licenseStartDate":"Platnost od",
		"schema.org.licenseEndDate":"Platnost do",
		
		"schema.org.title":"Organizace",
		"schema.org.assoc.dateOfRegistration":"Datum registrace",
		"schema.org.company.stateOfOrganization":"Stav organizace",
		"schema.org.logoInfo":"Loga",
		"schema.org.logo":"Logo",
		"schema.org.baseData":"Základní údaje",
		"schema.org.name":"Registrovaný název organizace",
		"schema.org.identifier":"Identifikátor",
		"schema.org.contactInfo":"Kontaktní údaje",
		"schema.org.street":"Ulice",
		"schema.org.houseNumber":"Číslo domu",
		"schema.org.city":"Obec",
		"schema.org.zipCode":"PSČ",
		"schema.org.country":"Stát",
		"schema.org.phoneNumber":"Telefon",
		"schema.org.mobileNumber":"Mobil",
		"schema.org.email":"E-mail",
		"schema.org.fax":"FAX",
		"schema.org.webPage":"Webová stránka",
		"schema.org.bankInfo":"Fakturační údaje",
		"schema.org.merchantName":"Obchodní název společnosti",
		"schema.org.stateOfOrganization":"Stav organizace",
		"schema.org.ico":"IČO",
		"schema.org.dic":"DIČ",
		"schema.org.icDPH":" Číslo IČ DPH",
		"schema.org.country.icDPH":"Kód státu pro IČ DPH",
		"schema.org.bankAccount":"Číslo účtu",
		"schema.org.bankCode":"Kód banky",
		"schema.org.bank":"Název banky",
		"schema.org.iban":"IBAN",
		"schema.org.swift":"SWIFT",
		"schema.org.otherInfo":"Ostatní informace",
		"schema.org.note":"Poznámka",
		"schema.org.view":"Organizace",

		"schema.contactInfo.statutoryAuthority": "Statutární orgán",
		"schema.contactInfo.headAirOperations": "VPZ za letecký provoz",
		"schema.contactInfo.headAirOTraffic": "VPZ za letový provoz",
		"schema.contactInfo.headMaintenanceSystem": "VPZ za systém údržby",
		"schema.contactInfo.headTraining": "VPZ za výcvik letového personálu",
		"schema.contactInfo.pilots": "Piloti",

		"schema.statistics.view":"Statistiky",
		"schema.statistics.baseData":"Základní",
		"schema.statistics.member.count":"Počet členů",
		"schema.statistics.women.count":"Počet žen",

		"schema.group.baseData":"Základní údaje",	
		"schema.group.baseData.id":"Identifikátor",
		"schema.group.baseData.name":"Název skupiny",
		"schema.group.baseData.parent":"Rodič",
		"schema.groupmaster.new":"Nová skupina",

		"schema.security.listFields.name":"Název profilu",
		"schema.security.baseData.name":"Název profilu",
		"schema.security.baseData":"Základní údaje",
		"schema.securityMaster.title":"Bezpečnostní profil"
	});
	$translateProvider.translations('en', {

		"schema.towns.town":"City",

		"schema.people.listFields.registrationID":"Registration ID",
		"schema.people.listFields.surName":"Surname",
		"schema.people.listFields.name":"Name",
		"schema.people.listFields.birthDate":"Birth date",
		"schema.people.listFields.city":"City",

		"schema.people.profile.yes":"Yes",
		"schema.people.profile.no":"No",
		"schema.people.title":"Person",
		"schema.people.personalProfile":"My profile",
		"schema.people.baseData":"Basic information",
		"schema.people.identifier": "Identifier",
		"schema.people.registrationID":"Registration number",
		"schema.people.name":"Name",
		"schema.people.surName":"Surname",
		"schema.people.state.of.person":"State of person",
		"schema.people.bornName":"Birth name",
		"schema.people.title.before":"Title before",
		"schema.people.title.after":"Title after",
		"schema.people.birthDate":"Birth date",
		"schema.people.gender":"Gender",
		"schema.people.nationality":"Nationality",
		"schema.people.photo":"Photo",
		"schema.people.photoInfo":"Photos",
		"schema.people.email":"E-mail",
		"schema.people.mobileNumber":"Mobile number",
		"schema.people.phoneNumber":"Phone number",
		"schema.people.country":"Country",
		"schema.people.zipCode":"ZIP code",
		"schema.people.city":"City",
		"schema.people.houseNumber":"House number",
		"schema.people.street":"Street",
		"schema.people.contactInfo":"Contact Information",
		"schema.people.bankInfo":"Bank details",
		"schema.people.bankAccount":"Bank account",
		"schema.people.bankCode":"Bank code",
		"schema.people.bankInfo.iban":"IBAN",
		"schema.people.bankInfo.swift":"SWIFT",
		"schema.people.otherInfo":"Other information",
		"schema.people.idCardNumber":"ID card number",
		"schema.people.passportNumber":"Passport number",
		"schema.people.isPhotoPublic":"Is photo public",
		"schema.people.note":"Note",
		"schema.people.language":"Language skills",

		"schema.people.hasLicense":"UAV pilot certificate",
		"schema.people.firstLicense":"First license date",
		"schema.people.licenseStartDate":"License start date",
		"schema.people.licenseEndDate":"License end date",
		"schema.people.category":"Category",
		"schema.people.devices":"UAV in uses",
		"schema.people.hasInsurance":"Insurance",
		"schema.people.insuranceCompany":"Insurance company",
		"schema.people.listOfOrganizations":"List of organizations",
		"schema.people.company":"Organizace",

		"schema.people.idInfo":"Registration certificate",
		"schema.people.currnetId":"Member's current card ID",
		"schema.people.dateOfExpiration":"Date of expiration",
		"schema.people.dateOfApplicationForId":"Date of application for ID",

		"schema.mailTemplate.title":"Mail template",
		"schema.mailTemplate.basedata.title":"Basic information",
		"schema.mailTemplate.basedata.name":"Template name",
		"schema.mailTemplate.basedata.subject":"Template subject",
		"schema.mailTemplate.basedata.text":"Template text",
		"schema.mailTemplate.basedata.html":"HTML template",
		"schema.mailTemplate.listFields.title":"Template name",

		"schema.org.hasLicense":"License for aviation work",
		"schema.org.firstLicense":"Date of first license",
		"schema.org.licenseStartDate":"License start date",
		"schema.org.licenseEndDate":"License end date",

		"schema.org.title":"Organization",
		"schema.org.assoc.dateOfRegistration":"Date of registration",
		"schema.org.company.stateOfOrganization":"State of organization",
		"schema.org.logoInfo":"Logo",
		"schema.org.logo":"Logo",
		"schema.org.baseData":"Basic information",
		"schema.org.name":"Registered organization name",
		"schema.org.identifier":"Indentifier",
		"schema.org.contactInfo":"Contact info",
		"schema.org.street":"Street",
		"schema.org.houseNumber":"House number",
		"schema.org.city":"City",
		"schema.org.zipCode":"ZIP code",
		"schema.org.country":"Nationality",
		"schema.org.phoneNumber":"Phone number",
		"schema.org.mobileNumber":"Mobile number",
		"schema.org.email":"E-mail",
		"schema.org.fax":"FAX",
		"schema.org.webPage":"Web page",
		"schema.org.bankInfo":"Bank info",
		"schema.org.merchantName":"Business company name",
		"schema.org.stateOfOrganization":"State of organization",
		"schema.org.ico":"IČO",
		"schema.org.dic":"DIČ",
		"schema.org.icDPH":"IČ DPH",
		"schema.org.country.icDPH":"Country code for IČ DPH",
		"schema.org.bankAccount":"Account number",
		"schema.org.bankCode":"Bank code",
		"schema.org.bank":"Bank name",
		"schema.org.iban":"IBAN",
		"schema.org.swift":"SWIFT",
		"schema.org.otherInfo":"Other information",
		"schema.org.note":"Note",
		"schema.org.view":"Organization",

		"schema.contactInfo.statutoryAuthority": "Statutory authority",
		"schema.contactInfo.headAirOperations": "VPZ of air operations",
		"schema.contactInfo.headAirOTraffic": "VPZ of air traffic",
		"schema.contactInfo.headMaintenanceSystem": "VPZ of maintenance systems",
		"schema.contactInfo.headTraining": "VPZ of flight personnel training",
		"schema.contactInfo.pilots": "Pilots",		

		"schema.statistics.view":"Statistics",
		"schema.statistics.baseData":"Basic",
		"schema.statistics.member.count":"Member count",
		"schema.statistics.women.count":"Women count",

		"schema.group.baseData":"Basic information",
		"schema.group.baseData.id":"Indentifier",
		"schema.group.baseData.name":"Group name",
		"schema.group.baseData.parent":"Parent",
		"schema.groupmaster.new":"New group",

		"schema.security.listFields.name":"Profile name",
		"schema.security.baseData.name":"Profile name",
		"schema.security.baseData":"Basic information",
		"schema.securityMaster.title":"Security profile"
	});
}]);
}(angular));
