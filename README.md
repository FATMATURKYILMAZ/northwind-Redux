 # NorthWind Mağazası React Projesi
Bu proje, ürün listesini farklı kategorilerde görüntüleyen bir React uygulamasıdır. Kullanıcılar, ürün detaylarını görüntüleyebilir, ürünleri sepete ekleyebilir ve sepetteki ürünleri yönetebilir. Tasarım, basit bir e-ticaret arayüzünden esinlenmiştir ve kolay gezinme ile sezgisel kullanıcı arayüzü öğeleri sunar.


![Ürün Listesi Görünümü](images\1.png)

![Ürün Listesi Görünümü](images\3.png)

![Sepet Önizlemesi](images\4.png)

![Sepet Sayfası](images\5.png)

## Özellikler
### Kategori Gezinme:
 Yan panelde kategorileri seçerek ürünleri filtreleme.

### Ürün Detayları:
 Fiyat, miktar ve stok durumu gibi ürün bilgilerini görüntüleme.
Sepet Yönetimi: Ürünleri sepete ekleme, sepetteki ürünleri görüntüleme, miktar ayarlama ve ürünleri kaldırma.
## Kullanılan Teknolojiler
### React: 
Kullanıcı arayüzünü oluşturmak için.
### React Hooks:
 Durum yönetimi ve yaşam döngüsü işlemleri için.
### CSS:
 Kullanıcı arayüzü stillendirmesi için.
Başlarken
Bu projeyi yerel ortamda kurmak için aşağıdaki adımları izleyin.

Gereksinimler
Node.js: Node.js’in kurulu olduğundan emin olun. nodejs.org adresinden indirebilirsiniz.
## Kurulum
Bu depoyu klonlayın:

bash
Kodu kopyala
git clone https://github.com/FATMATURKYILMAZ/northwind-Redux.git

cd northwind-store-react

Gerekli bağımlılıkları yükleyin:
## api alt yapısının hazırlanması
api json dosyası üzerinden verilerimizi kullanırız
api ye bağlanınca bizim http://localhost:3001'inci portuna atar tarayıcı bizi.
bash
Kodu kopyala

npm install

Geliştirme sunucusunu başlatın:

bash
Kodu kopyala
npm start
Tarayıcıda http://localhost:3000 adresini açarak uygulamayı görüntüleyin.

## Kod Yapısı
Bileşen Yapısı
### App.js: 
Uygulamanın ana bileşeni, yönlendirme ve yerleşim düzenini yönetir.
### CategoryList.js: 
Kategori listesini render eder ve kategori seçimini yönetir.
### ProductList.js: 
Seçilen kategorideki ürünleri görüntüler ve ürünleri sepete eklemeyi sağlar.
Cart.js: Sepete eklenen ürünlerin listesini gösterir ve miktar ayarlamalarını sağlar.
## Kod Örnekleri

Sepete Ürün Ekleme
javascript
Kodu 
const handleAddToCart = (product) => {
    setCart((prevCart) => {
        const itemExists = prevCart.find(item => item.id === product.id);
        if (itemExists) {
            return prevCart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        }
        return [...prevCart, { ...product, quantity: 1 }];
    });
};
Sepetten Ürün Kaldırma
javascript
Kodu kopyala
const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
};
Katkıda Bulunma
Bu projeye katkıda bulunmak isterseniz, depoyu fork'layıp değişikliklerinizi içeren bir pull request oluşturabilirsiniz.

Lisans
Bu proje MIT Lisansı ile lisanslanmıştır.





### Analyzing the Bundle Size


