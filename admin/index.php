<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="jquery-3.5.1.min.js"></script>
    <title>WATANABE Corperation. 私たちが歩みを止めることはありません。</title>
</head>
<body>
    <div class="login-form">
        <form actoin="validate.php" id="form">
            <div><label id="name_label">あなたの名前を入力してください。</label></div>
            <div><input type="text" id="name" onfocus="namefocus()" onblur="nameblur()"></div>
            <div><label id="password_label">パスワードを入力してください。</label></div>
            <div><input type="password" id="password" onfocus="passwordfocus()" onblur="passwordblur()"></div>
            <div class="button"><button type="submit">OK</button></div>
        </form>
        
    </div>
    <script>
        function namefocus(){
            document.getElementById("name_label").style.color="#2548b6";
        }
        function passwordfocus(){
            document.getElementById("password_label").style.color="#2548b6";
        }
        function nameblur() {
            if (!document.getElementById("name").value) {
                document.getElementById("name_label").style.color="red";
            }
        }
        function passwordblur() {
            if (!document.getElementById("password").value) {
                document.getElementById("password_label").style.color="red";
            }
        }
        $("#form").submit(function(e){
            e.preventDefault();
            var name = document.getElementById("name").value;
            var password = document.getElementById("password").value;
            if (!name) {
                document.getElementById("name_label").style.color="red";
            }
            if (!password) {
                document.getElementById("password_label").style.color="red";
            }
            if (name && password) {
                $.post({
                    url:"validate.php",
                    data: {name:name, password:password},
                    success: function(response) {
                        alert("ok");
                    }                
                })
            }
        });
    </script>
</body>
</html>