/* jshint undef: true, unused: true */
/* global define: false */
define([
	'products/categories/all-product',
	'products/categories/may-ion-kiem',
	'products/categories/tien-loc-ion-kiem',
], function(){
	"use strict";

	var list = [];
	for(var i = 0; i<arguments.length; i++){
		list.push(arguments[i]);
	}

	return list;
});