// wikicite in JavaScript

// main configuration variables
var zotero_group = "ccnlab";
var zotero_group_id = "340666";

// set this to true in order to clear the cache on whatever pages you next visit
// if some key is incorrectly set then you need to do this manually!
// todo: need some kind of better solution!
var wikicite_clear_cache = false;

// Zotero api:
// https://www.zotero.org/support/dev/web_api/v3/basics

// note: it is ONLY possible to ADD to existing html elements at this stage in the game
// due to the late post-rendering step we're at I guess..
// so this already has to be an <a link element, and we can only ADD to it -- can't
// change anything that already exists!
// linkel.after('<a href="' + link + '">Test</a>');

function get_zotero_cite_full_noparen(zotcite, zotlink, linkel) {
    linkel.append(zotcite);
}

function get_zotero_cite_yrcite(zotcite, zotlink, linkel) {
    if(zotcite.length > 6) {
	zotcite = zotcite.substr(zotcite.length-4, 4);
    }
    linkel.append(zotcite);
}

function get_zotero_cite_noyrcite(zotcite, zotlink, linkel) {
    if(zotcite.length > 6) {
	zotcite = zotcite.substr(0, zotcite.length-6);
    }
    linkel.append(zotcite);
}

function get_zotero_cite_incite(zotcite, zotlink, linkel) {
    if(zotcite.length > 6) {
	var year = zotcite.substr(zotcite.length-4, 4);
	zotcite = zotcite.substr(0, zotcite.length-6) + " (" + year + ")";
    }
    linkel.append(zotcite);
}

function get_zotero_cite_data(zotkey, linkel, link_fmt_fun) {
    var storage_key = "zotcite_" + zotkey;
    var zotdata = localStorage.getItem(storage_key);
    if(undefined != zotdata) {
	if(wikicite_clear_cache) {
	    localStorage.removeItem(storage_key);
	}
	var data_ary = zotdata.split("#");
	linkel.href = data_ary[1];	// always..
	link_fmt_fun(data_ary[0], data_ary[1], linkel);
	return;
    }
    
    var zotcite = "https://api.zotero.org/groups/" + zotero_group_id + "/items/" + zotkey + "?format=json&include=citation&style=apa";

    $.get( zotcite, function( data ) {
    })
	.done(function(data) {
	    var cite = $(data.citation).text();
	    cite = cite.replace("(","");
	    cite = cite.replace(")","");
	    var link = data.links.alternate.href;
	    var savedat = cite + "#" + link;
	    localStorage.setItem(storage_key, savedat);
	    linkel.href = link;	// always..
	    link_fmt_fun(cite, link, linkel);
	})
	.fail(function() {
	    linkel.append("zotero error could not load: " + zotcite);
	});
}
	    
function get_zotero_bib(zotbib, linkel) {
    linkel.append(zotbib);
}

function get_zotero_bib_end(zotbib, linkel) {
    var ref = zotbib;
    ref = ref.trim();
    linkel.append("      " + ref + "\n");
}

function get_zotero_bib_data(zotkey, linkel, link_fmt_fun) {
    var storage_key = "zotbib_" + zotkey;
    var zotdata = localStorage.getItem(storage_key);
    if(undefined != zotdata) {
	if(wikicite_clear_cache) {
	    localStorage.removeItem(storage_key);
	}
	link_fmt_fun(zotdata, linkel);
	return;
    }
    
    var zotcite = "https://api.zotero.org/groups/" + zotero_group_id + "/items/" + zotkey + "?format=bib&style=apa";

    // linkel.append("attempting to load: " + zotcite);
    $.get( zotcite, function( data ) {
    })
	.done(function(data) {
	    var bib = $(data).text();
	    localStorage.setItem(storage_key, bib);
	    link_fmt_fun(bib, linkel);
	})
	.fail(function() {
	    linkel.append("zotero bib error could not load: " + zotcite);
	});
}

function get_zotero_code_from_cite(citekey, linkel, zotero_get_fun, link_fmt_fun) {
    var storage_key = "wikicite_" + citekey;
    var zotkey = localStorage.getItem(storage_key);
    if(undefined != zotkey) {
	if(wikicite_clear_cache) {
	    localStorage.removeItem(storage_key);
	}
	zotero_get_fun(zotkey, linkel, link_fmt_fun);
	return;
    }
    
    var wikicite = "https://grey.colorado.edu/wikicite/wikicite_api.php?wiki_id=" + citekey;
    $.getJSON( wikicite, function( data ) {
    })
	.done(function(data) {
	    var zotkey = data.zotero_id;
	    if(undefined == zotkey) {
		linkel.append(citekey + " not found");
	    }
	    else {
		localStorage.setItem(storage_key, zotkey);
		zotero_get_fun(zotkey, linkel, link_fmt_fun);
	    }
	})
	.fail(function() {
	    linkel.append(citekey);
	});
}

$(document).ready(function() {

    $(function() { $('table').addClass('table table-bordered'); })
    
    var cited_refs = [];
    var citekey;
    
    $('a[class="wikicite"]').each(function() {
	citekey = $(this).data("citekey");
	cited_refs.push(citekey);
	get_zotero_code_from_cite
	(citekey, this, get_zotero_cite_data, get_zotero_cite_full_noparen);
    });
    $('a[class="wikiincite"]').each(function() {
	citekey = $(this).data("citekey");
	cited_refs.push(citekey);
	get_zotero_code_from_cite
	(citekey, this, get_zotero_cite_data, get_zotero_cite_incite);
    });
    $('a[class="wikiyrcite"]').each(function() {
	citekey = $(this).data("citekey");
	cited_refs.push(citekey);
	get_zotero_code_from_cite
	(citekey, this, get_zotero_cite_data, get_zotero_cite_yrcite);
    });
    $('a[class="wikinoyrcite"]').each(function() {
	citekey = $(this).data("citekey");
	cited_refs.push(citekey);
	get_zotero_code_from_cite
	(citekey, this, get_zotero_cite_data, get_zotero_cite_noyrcite);
    });
    $('span[class="wikibib"]').each(function() {
	citekey = $(this).data("citekey");
	cited_refs.push(citekey);
	get_zotero_code_from_cite
	(citekey, this, get_zotero_bib_data, get_zotero_bib);
    });
    $('div[class="citedreferences"]').each(function() {
	// this.append("<ul>\n");
	cited_refs.sort();
	var nrefs = cited_refs.length;
	var prevkey = "";
	var i;
	for(i=0; i<nrefs; i++) {
	    citekey = cited_refs[i];
	    if(citekey != prevkey) {
		prevkey = citekey;
		get_zotero_code_from_cite
		(citekey, this, get_zotero_bib_data, get_zotero_bib_end);
	    }
	}
	// this.append("</ul>\n");
    });
});

