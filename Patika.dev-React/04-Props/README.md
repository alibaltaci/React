# Props Nedir? Nasıl Kullanılır?

    --> hello-react2 --> components --> user.js --> user()

* Props (Parametre) olarak sayısal ve boolean değerler gönderilecekse {} içine yazılarak gönderilmelidir.

`isLoggedIn={true}`
        
`isLoggedIn={42}`

# Döngülerde KEY Propu

* Döngüler içerisinde rwturn ettiğimiz ifadelerin performans kaybı yaşamadan listelenmesi için bir KEY Prop 'u verebiliriz.

* KEY Prop: Benzersiz bir ifade. (ex: index)

# Prop Types

Prop Types: Component 'lere gönderdiğimiz Property 'lerin tiplerini belirleyebileceğimiz bir araç.

    user.js --> import PropTypes from "prop-types";

Hangi property 'de hangi veri tipinin alındığını ifade etmek için kullanılır. (Başkaları kullanacağı için)
