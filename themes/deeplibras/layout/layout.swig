<!DOCTYPE html>
<html lang="{{ page.lang }}">
  {{ partial("_partial/head") }}
  <body>
      <div id="container">
        {{ partial("_partial/header") }}
          <div class="content-wrapper">
            {{ body }}
          </div>
        {{ partial("_partial/footer") }}  
        {{ partial("_partial/scripts") }}  
      </div>
      <script>
        moment.locale(page.lang)
      </script>
  </body>
</html>
