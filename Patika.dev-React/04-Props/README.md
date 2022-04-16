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

# isRequired

Prop Types yazarken zorunlu alanları belirtmek için kullanılabilir.

    name: PropTypes.string.isRequired

# oneOfType

Bir property 'de birden fazla veri tipini gönderebilmek için oneOfType kullanılır.

        age: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])

Zorunlu tutmak için 

        age: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired

# Shape

* Obje olarak gönderdiğimiz property 'lerde kullanılır.

Prop:

        address= {{
          title: "Ataşehir/İstanbul",
          zip: 34755
        }}

Shape:

        address: PropTypes.shape({
            title: PropTypes.string,
            zip: PropTypes.number
        })

# Default Props 

Herhangi bir tanım yapılmamış prop 'a varsayılan (default) bir değer vermek için kullanılır.

    User.defaultProps = {
        isLoggedIn: false
    }