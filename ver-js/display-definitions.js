/*
 * ./ver-js/display-definitions.css
 * Places the definitions into a display area with the terms acting as
 * tabs.
 * for: <https://github.com/lduran2/js-jquery-dictionary>
 * date: 2018-11-04 T13:25
 * by: Leomar Durán <https://github.com/lduran2>
 */

/* Add the event after the document's loaded */
window.addEventListener('load', function (e) {
	/* the first dictionary list */
	const dictionary = document.getElementsByTagName('dl')[0];
	/* add the class 'display-definitions' to prepare for the script */
	addClass(dictionary, 'display-definitions');

	/* all terms in the first dictionary */
	const terms = dictionary.getElementsByTagName('dt');
	/* term previously opened */
	let previousTerm = terms[0];

	for (let k = 0, len = terms.length; k < len; ++k) {
		terms[k].addEventListener('click', function (e) {
			/* close the previous class */
			removeClass(previousTerm, 'selected');
			addClass(e.currentTarget, 'selected');
			/* update the previousTerm */
			previousTerm = e.currentTarget;
		}/* end void #openDefintion(Event) */);
	} /* next k */

	/**************************************************************//**
	 * Adds the given new class to the specified element.
	 * @param
	 *   el :Element = element whose classes to modify
	 *   newClass :string = new class to add
	 */
	function addClass(el, newClass) {
		el.className = [el.className, newClass].join(' ');
	} /* end void #addClass(Element, string) */

	/**************************************************************//**
	 * Removes the given class from the specified element.
	 * @param
	 *   el :Element = element whose class to modify
	 *   newClass :string = old class to remove
	 */
	function removeClass(el, oldClass) {
		const elClasses = el.className.split(/\s+/);
		elClasses.splice(elClasses.indexOf(oldClass), 1);
		el.className = elClasses.join(' ');
	} /* end void #removeClass(Element, string) */
});
