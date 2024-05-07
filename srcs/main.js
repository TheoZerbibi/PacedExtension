document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		if (isUp()) {
			iConsole.log(`Document is ready`);
			iConsole.log(`Initializing of the Paced Extension for ${getLogin()}`);
			initPacedBox();
			getPaced();
		} else {
			// Actually i can't get the AccessToken for fetch the PacedSystem API in IntraV2.
			iConsole.log(`Paced Extension need IntraV3 to work properly.`);
		}
	}
}

