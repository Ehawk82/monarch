var init = () => {
	var heading = createEle("header"),
	    main = createEle("section"),
	    footer = createEle("footer");
	//
	heading.innerHTML = "THE MONARCH";
	heading.className = "w3-white w3-padding-16 w3-center w3-card-4";

	main.innerHTML = "Main Section";
	main.className = "w3-white w3-section w3-card-4 w3-center";

	footer.innerHTML = "Ehawk LLC &copy; 2021 - ATWA";
	footer.className = "w3-white w3-footer w3-padding-16 w3-bottom w3-center w3-card-4";

	body.append(heading,main,footer);
};

window.onload = () => {
	init();
};
