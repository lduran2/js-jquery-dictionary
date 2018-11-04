/*
 * ./ver-js/display-definitions.css
 * Places the definitions into a display area with the terms acting as
 * tabs
 * for: <https://github.com/lduran2/js-jquery-dictionary>
 * date: 2018-11-04 T13:27
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

	for (let k = 0, len = terms.length; (k < len); ++k) {
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
	 *   el :Element = whose classes to modify
	 *   newClass :string = the new class to add
	 */
	function addClass(el, newClass) {
		changeClass(el, function (classes, newClass) {
			/* add new class if it is not already in the class list */
			if (classes.indexOf(newClass) < 0) {
				classes.push(newClass);
			} /* end if (classes.indexOf(newClass) < 0) */
		}, newClass);
	} /* end void #addClass(Element, string) */

	/**************************************************************//**
	 * Removes the given class from the specified element.
	 * @param
	 *   el :Element = whose class to modify
	 *   newClass :string = the old class to remove
	 */
	function removeClass(el, oldClass) {
		changeClass(el, function (classes, oldClass) {
			/* remove all instances of the old class */
			for (let k; ((k = classes.indexOf(oldClass)) >= 0); ) {
				classes.splice(k, 1);
			} /* next k */
		}, oldClass);
	} /* end void #removeClass(Element, string) */

	/**************************************************************//**
	 * Applies the given function to the class list of the given
	 * element using the given difference
	 * @param
	 *   el :Element = whose class to modify
	 *   func :function<Element, string>
	 *     = to apply to the class list and given difference
	 *   diff :string = the difference to apply
	 */
	function changeClass(el, func, diff) {
		/* split class list as space separated */
		const elClasses = el.className.split(/\s+/);
		/* change the class list with the difference */
		func(elClasses, diff);
		/* join the class list */
		el.className = elClasses.join(' ');
	} /* end void
	       #changeClass(Element, function<Element, string>, string) */

});
