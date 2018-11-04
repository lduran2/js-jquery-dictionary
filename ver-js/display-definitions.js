/*
 * ./ver-js/display-definitions.css
 * Places the definitions into a display area with the terms acting as
 * tabs.
 * for: <https://github.com/lduran2/js-jquery-dictionary>
 * date: 2018-11-04 T12:57
 * by: Leomar Durán <https://github.com/lduran2>
 */
/* Add the event after the document's loaded */
window.addEventListener('load', function (e) {
	/* the first dictionary list */
	const dictionary = document.getElementsByTagName('dl')[0];
	/* add the class 'display-definitions' to prepare for the script */
	addClass(dictionary, 'display-definitions');

	/**************************************************************//**
	 * Adds the given new class to the specified element.
	 * @param
	 *   el :Element = element whose classes to modify
	 *   newClass :string = new class to add
	 */
	function addClass(el, newClass) {
		el.className = newClass;
	} /* end void #addClass(Element, string) */
});
