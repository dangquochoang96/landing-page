/* jshint undef: true, unused: true */
/* global define: false */
define([
	'products/categories/may-ion-kiem',
	'products/categories/tien-loc-ion-kiem',
	// 'products/categories/shirts',
	// 'products/categories/shoes',
	// 'products/categories/shorts',
	// 'products/categories/t-shirts'
], function(){
	"use strict";

	var list = [];
	for(var i = 0; i<arguments.length; i++){
		list.push(arguments[i]);
	}

	return list;
});