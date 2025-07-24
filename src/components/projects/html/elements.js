export const elements = [
    {
        name: "html",
        description:"this is a container for all other elements within an HTML document (except the <!DOCTYPE> tag)"
    },
    {
        name: "head",
        description: "this is a container for all the docuemnts meta data"
    },
    {
        name: "title",
        description: "defines the title of the site, resides in the head element"
    },
    {
        name: "body",
        description: "contains the document's content displayed in the browser"
    },
    {
        name: "!DOCTYPE _html_",
        description: "very start of the document, before html element. specifies working with HTML5 document"
    },
    {
        name: "meta",
        description: "used to define additional information about a web page, sits in head tag"
    },
    {
        name: "link",
        description: "used to link document to external resources, sits within head"
    },
    {
        name: "style",
        description: "used to define style types for the document"
    },
    {
        name: "script",
        description: "used to write code snippets, or to link to an external script, traditionally sat at end of document when linking to external script file, these days more likely to be seen in head with async attribute"
    },
    {
        name: "base",
        description: "specifies the base url for all relative url's in a document"
    },
    {
        name: "!--...--",
        description: "used for comments, ahve no impact on document"
    },
    {
        name: "header",
        description: "specifies the web page header"
    },
    {
        name: "footer",
        description: "specifies the web page footer"
    },
    {
        name: "main",
        description: "specifies the main content of the web page (not in the header or footer)"
    },
    {
        name: "article",
        description: "specifies an article's section, usually standalone content"
    },
    {
        name: "section",
        description: "used to create seperate sections"
    },
    {
        name: "aside",
        description: "aside notes, items placed in a sidebar"
    },
    {
        name: "time",
        description: "used for formatting date and time"
    },
    {
        name: "figure",
        description: "used for figures inserted into a document, such a charts"
    },
    {
        name: "figcaption",
        description: "description of a figure"
    },
    {
        name: "nav",
        description: "used to nest (usually) internal navigation links"
    },
    {
        name: "meter",
        description: "used to measure data within a range"
    },
    {
        name: "progress",
        description: "used for a progress bar"
    },
    {
        name: "dialog",
        description: "used to create a dialog box"
    },
    {
        name: "audio",
        description: "used to embed an audio file into the page"
    },
    {
        name: "video",
        description: "used to embed a video file into the page"
    },
    {
        name: "map",
        description: "creates an image map"
    },
    {
        name: "area",
        description: "defines a 'clickable' area within an image map"
    },
    {
        name: "h1",
        description: "heading 1, largest heading"
    },
    {
        name: "h2",
        description: "heading 2, largest heading"
    },
    {
        name: "h3",
        description: "heading 3, largest heading"
    },
    {
        name: "h4",
        description: "heading 4, largest heading"
    },
    {
        name: "h5",
        description: "heading 5, largest heading"
    },
    {
        name: "h6",
        description: "heading 6, largest heading"
    },
    {
        name: "p",
        description: "used to create a paragraph"
    },
    {
        name: "div",
        description: "used to divide and style separate sections of document"
    },
    {
        name: "span",
        description: "used for styling inline sections of a document, e.g. within a paragraph"
    },
    {
        name: "br",
        description: "used to create line breaks"
    },
    {
        name: "hr",
        description: "used to create a horizontal dividing line in document"
    },
    {
        name: "img",
        description: "used to insert images into a document"
    },
    {
        name: "i",
        description: "displays text in italics"
    },
    {
        name: "b",
        description: "displays text in bold"
    },
    {
        name: "strong",
        description: "displays text in bold and used for important emphasis"
    },
    {
        name: "em",
        description: "emphasis tag that displays text in italics"
    },
    {
        name: "sub",
        description: "defines subscript text"
    },
    {
        name: "sup",
        description: "defines super script text"
    },
    {
        name: "small",
        description: "reduces size of text"
    },
    {
        name: "del",
        description: "defines deleted text by striking line through it"
    },
    {
        name: "ins",
        description: "defines instered text, usually underlined"
    },
    {
        name: "blockquote",
        description: "used to enclose a section of text quoted from another source"
    },
    {
        name: "q",
        description: "used for shorter inline quotes"
    },
    {
        name: "cite",
        description: "used for citing the author of a quote"
    },
    {
        name: "address",
        description: "used for showing author's contact information"
    },
    {
        name: "abbr",
        description: "denotes and abbreviation"
    },
    {
        name: "code",
        description: "displays code snippets"
    },
    {
        name: "mark",
        description: "highlights text"
    },
    {
        name: "a",
        description: "used to link toexternal pages"
    },
    {
        name: "ul",
        description: "used to create an unordered list"
    },
    {
        name: "ol",
        description: "used to create an ordered list"
    },
    {
        name: "li",
        description: "used to create a list item within an ordered or unordered list"
    },
    {
        name: "form",
        description: "used to create a form in html"
    },
    {
        name: "input",
        description: "specifiesw and input field"
    },
    {
        name: "textarea",
        description: "used to get user text input covering multiple lines"
    },
    {
        name: "select",
        description: "creates a list of options a user can chose from"
    },
    {
        name: "option",
        description: "creates an option within a select element"
    },
    {
        name: "label",
        description: "creates a label for form elements, specifically input, textarea and select"
    },
    {
        name: "button",
        description: "creates a button, not only for use within forms"
    },
    {
        name: "table",
        description: "defines an html table"
    },
    {
        name: "thead",
        description: "used to group header content in a table"
    },
    {
        name: "tbody",
        description: "specifies the body or content of the table"
    },
    {
        name: "tfoot",
        description: "specifies footer in formation in a table"
    },
    {
        name: "tr",
        description: "denotes a row within a table"
    },
    {
        name: "td",
        description: "denotes a table cell"
    },
    {
        name: "th",
        description: "denotes the table column/row heading"
    }
    
    
]