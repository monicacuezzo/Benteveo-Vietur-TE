  $(document).ready(function(){
 
    var icono_menu = document.getElementById("ico-menu");

    icono_menu.addEventListener("click", function () {
        if (document.getElementById("menu").style.display=="none" || document.getElementById("menu").style.display=="") {
          document.getElementById("menu").style.display = "flex";
        } else {
          document.getElementById("menu").style.display = "none";
        }
    })

    // $("#nav a").on('click', function(){
    //   document.getElementById("menu").style.display = "none";
    // });

    $("input[type=file]").change(function(){
         $('#productsFiles').modal('show');
    });

  



    // subir archivo-progress-bar

    var reader;
    var progress = document.querySelector('.percent');
  
    function abortRead() {
      reader.abort();
    }
  
    function errorHandler(evt) {
      switch(evt.target.error.code) {
        case evt.target.error.NOT_FOUND_ERR:
          alert('File Not Found!');
          break;
        case evt.target.error.NOT_READABLE_ERR:
          alert('File is not readable');
          break;
        case evt.target.error.ABORT_ERR:
          break; // noop
        default:
          alert('An error occurred reading this file.');
      };
    }
  
    function updateProgress(evt) {
      // evt is an ProgressEvent.
      if (evt.lengthComputable) {
        var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
        // Increase the progress bar length.
        if (percentLoaded < 100) {
          progress.style.width = percentLoaded + '%';
          progress.textContent = percentLoaded + '%';
        }
      }
    }
  
    function handleFileSelect(evt) {
      // Reset progress indicator on new file selection.
      progress.style.width = '0%';
      progress.textContent = '0%';

      reader = new FileReader();
      reader.onerror = errorHandler;
      reader.onprogress = updateProgress;
      reader.onabort = function(e) {
        alert('File read cancelled');
      };
      reader.onloadstart = function(e) {
        document.getElementById('progress_bar').className = 'loading';
      };
      reader.onload = function(e) {
        // Ensure that the progress bar displays 100% at the end.
        progress.style.width = '100%';
        progress.textContent = '100%';
        setTimeout( function () {
          setTimeout("document.getElementById('progress_bar').className='';", 2000);
          $('#productsFiles').modal('hide');
        }, 4000);
      }
  
      // Read in the image file as a binary string.
      reader.readAsBinaryString(evt.target.files[0]);
    }

    document.getElementById('input-file').addEventListener('change', handleFileSelect, false);
	
    document.getElementById('input-file0').addEventListener('change', handleFileSelect, false);

    document.getElementById('input-file2').addEventListener('change', handleFileSelect, false);

    document.getElementById('input-file3').addEventListener('change', handleFileSelect, false);


})