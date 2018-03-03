
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:KrzysiekPiasecki" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="KrzysiekPiasecki.html">KrzysiekPiasecki</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:KrzysiekPiasecki_Dotpay" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="KrzysiekPiasecki/Dotpay.html">Dotpay</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:KrzysiekPiasecki_Dotpay_Validation" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="KrzysiekPiasecki/Dotpay/Validation.html">Validation</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:KrzysiekPiasecki_Dotpay_Validation_ApiVersionConstraint" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="KrzysiekPiasecki/Dotpay/Validation/ApiVersionConstraint.html">ApiVersionConstraint</a>                    </div>                </li>                            <li data-name="class:KrzysiekPiasecki_Dotpay_Validation_ApiVersionValidator" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="KrzysiekPiasecki/Dotpay/Validation/ApiVersionValidator.html">ApiVersionValidator</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:KrzysiekPiasecki_Dotpay_Credentials" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Dotpay/Credentials.html">Credentials</a>                    </div>                </li>                            <li data-name="class:KrzysiekPiasecki_Dotpay_RequestBag" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Dotpay/RequestBag.html">RequestBag</a>                    </div>                </li>                            <li data-name="class:KrzysiekPiasecki_Dotpay_ResponseBag" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Dotpay/ResponseBag.html">ResponseBag</a>                    </div>                </li>                            <li data-name="class:KrzysiekPiasecki_Dotpay_ResponseSignature" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="KrzysiekPiasecki/Dotpay/ResponseSignature.html">ResponseSignature</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "KrzysiekPiasecki.html", "name": "KrzysiekPiasecki", "doc": "Namespace KrzysiekPiasecki"},{"type": "Namespace", "link": "KrzysiekPiasecki/Dotpay.html", "name": "KrzysiekPiasecki\\Dotpay", "doc": "Namespace KrzysiekPiasecki\\Dotpay"},{"type": "Namespace", "link": "KrzysiekPiasecki/Dotpay/Validation.html", "name": "KrzysiekPiasecki\\Dotpay\\Validation", "doc": "Namespace KrzysiekPiasecki\\Dotpay\\Validation"},
            
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Dotpay", "fromLink": "KrzysiekPiasecki/Dotpay.html", "link": "KrzysiekPiasecki/Dotpay/Credentials.html", "name": "KrzysiekPiasecki\\Dotpay\\Credentials", "doc": "&quot;Credentials.&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Dotpay\\Credentials", "fromLink": "KrzysiekPiasecki/Dotpay/Credentials.html", "link": "KrzysiekPiasecki/Dotpay/Credentials.html#method___construct", "name": "KrzysiekPiasecki\\Dotpay\\Credentials::__construct", "doc": "&quot;Credentials.&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Dotpay\\Credentials", "fromLink": "KrzysiekPiasecki/Dotpay/Credentials.html", "link": "KrzysiekPiasecki/Dotpay/Credentials.html#method_id", "name": "KrzysiekPiasecki\\Dotpay\\Credentials::id", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Dotpay\\Credentials", "fromLink": "KrzysiekPiasecki/Dotpay/Credentials.html", "link": "KrzysiekPiasecki/Dotpay/Credentials.html#method_pin", "name": "KrzysiekPiasecki\\Dotpay\\Credentials::pin", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Dotpay", "fromLink": "KrzysiekPiasecki/Dotpay.html", "link": "KrzysiekPiasecki/Dotpay/RequestBag.html", "name": "KrzysiekPiasecki\\Dotpay\\RequestBag", "doc": "&quot;Data structure to represent the request sent to Dotpay.&quot;"},
                    
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Dotpay", "fromLink": "KrzysiekPiasecki/Dotpay.html", "link": "KrzysiekPiasecki/Dotpay/ResponseBag.html", "name": "KrzysiekPiasecki\\Dotpay\\ResponseBag", "doc": "&quot;Data structure to represent the response sent by Dotpay.&quot;"},
                    
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Dotpay", "fromLink": "KrzysiekPiasecki/Dotpay.html", "link": "KrzysiekPiasecki/Dotpay/ResponseSignature.html", "name": "KrzysiekPiasecki\\Dotpay\\ResponseSignature", "doc": "&quot;Represents signature of Dotpay response.&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Dotpay\\ResponseSignature", "fromLink": "KrzysiekPiasecki/Dotpay/ResponseSignature.html", "link": "KrzysiekPiasecki/Dotpay/ResponseSignature.html#method___construct", "name": "KrzysiekPiasecki\\Dotpay\\ResponseSignature::__construct", "doc": "&quot;ResponseSignature.&quot;"},
                    {"type": "Method", "fromName": "KrzysiekPiasecki\\Dotpay\\ResponseSignature", "fromLink": "KrzysiekPiasecki/Dotpay/ResponseSignature.html", "link": "KrzysiekPiasecki/Dotpay/ResponseSignature.html#method_signature", "name": "KrzysiekPiasecki\\Dotpay\\ResponseSignature::signature", "doc": "&quot;Returns a Dotpay response signature.&quot;"},
            
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Dotpay\\Validation", "fromLink": "KrzysiekPiasecki/Dotpay/Validation.html", "link": "KrzysiekPiasecki/Dotpay/Validation/ApiVersionConstraint.html", "name": "KrzysiekPiasecki\\Dotpay\\Validation\\ApiVersionConstraint", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Dotpay\\Validation\\ApiVersionConstraint", "fromLink": "KrzysiekPiasecki/Dotpay/Validation/ApiVersionConstraint.html", "link": "KrzysiekPiasecki/Dotpay/Validation/ApiVersionConstraint.html#method_validatedBy", "name": "KrzysiekPiasecki\\Dotpay\\Validation\\ApiVersionConstraint::validatedBy", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "KrzysiekPiasecki\\Dotpay\\Validation", "fromLink": "KrzysiekPiasecki/Dotpay/Validation.html", "link": "KrzysiekPiasecki/Dotpay/Validation/ApiVersionValidator.html", "name": "KrzysiekPiasecki\\Dotpay\\Validation\\ApiVersionValidator", "doc": "&quot;Validator against {see ApiVersionConstraint}.&quot;"},
                                                        {"type": "Method", "fromName": "KrzysiekPiasecki\\Dotpay\\Validation\\ApiVersionValidator", "fromLink": "KrzysiekPiasecki/Dotpay/Validation/ApiVersionValidator.html", "link": "KrzysiekPiasecki/Dotpay/Validation/ApiVersionValidator.html#method_validate", "name": "KrzysiekPiasecki\\Dotpay\\Validation\\ApiVersionValidator::validate", "doc": "&quot;Validate against {see ApiVersionConstraint}.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});

