var galleryPage = 0;
var ulGallery;

var eventsPage = 0;
var ulEvent;

function loadPage(pages, page) {
    pages.toggle();
    pages.eq(page).show();
}

// Gallery pagination
function galleryNextPage() {
    if(galleryPage + 1 < ulGallery.length) {
        galleryPage++;
        loadPage(ulGallery, galleryPage);
    }

    verifyGalleryButton();
}

function galleryPreviousPage() {
    if(galleryPage > 0) {
        galleryPage--;
        loadPage(ulGallery, galleryPage);
    }

    verifyGalleryButton();
}

function verifyGalleryButton() {
    if(ulGallery.length == 0) {
    	
        $('.galleryNext').prop('disabled', true).css('display', 'none');
        
        $('.galleryPrevious').prop('disabled', true).css('display', 'none');
    
    } else {
        
    	if(galleryPage == ulGallery.length - 1)
            $('.galleryNext').prop('disabled', true).css('display', 'none');
        
        else
            $('.galleryNext').prop('disabled', false).css('display', 'inline-block');

        if(galleryPage < 1)
            $('.galleryPrevious').prop('disabled', true).css('display', 'none');
        
        else
            $('.galleryPrevious').prop('disabled', false).css('display', 'inline-block');
    }
}

// Events pagination
function eventsNextPage() {
    if(eventsPage + 1 < ulEvent.length) {
        eventsPage++;
        loadPage(ulEvent, eventsPage);
    }

    verifyEventsButton();
}

function eventsPreviousPage() {
    if(eventsPage > 0) {
        eventsPage--;
        loadPage(ulEvent, eventsPage);
    }

    verifyEventsButton();
}

function verifyEventsButton() {
    if(ulEvent.length == 0) {
        $('.eventsNext').prop('disabled', true).css('display', 'none');
        $('.eventsPrevious').prop('disabled', true).css('display', 'none');
    } else {
        if(eventsPage == ulEvent.length - 1) {
            $('.eventsNext').prop('disabled', true).css('display', 'none');
        } else {
            $('.eventsNext').prop('disabled', false).css('display', 'inline-block');
        }

        if(eventsPage == 0) {
            $('.eventsPrevious').prop('disabled', true).css('display', 'none');
        } else {
            $('.eventsPrevious').prop('disabled', false).css('display', 'inline-block');
        }
    }
}

jQuery().ready(function($) {
    // Start gallery in page 1
    ulGallery = $('.gallery ul');
    loadPage(ulGallery, 0);
    verifyGalleryButton();

    // Start events in page 1
    ulEvent = $('.events ul');
    loadPage(ulEvent, 0);
    verifyEventsButton();
});