/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/burger-menu.svg */ "./src/assets/icons/burger-menu.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/logo.png */ "./src/assets/images/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/basket.svg */ "./src/assets/icons/basket.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/catalog-header.png */ "./src/assets/images/catalog-header.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Document</title>\r\n</head>\r\n<body>\r\n    <header class=\"header\">\r\n        <div class=\"container\">\r\n            <div class=\"header__flex\">\r\n                <nav class=\"navigation\">\r\n                    <a href=\"#\" data-catalog class=\"navigation__links\">Каталог</a>\r\n                    <a href=\"#\" class=\"navigation__links\">Знижки</a>\r\n                    <a href=\"#\" class=\"navigation__links\">Блог</a>\r\n                    <a href=\"#\" class=\"navigation__links\">Про нас</a>\r\n                 </nav>\r\n                 <button class=\"header__burger\">\r\n                    <img class=\"header__burger-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"burger-menu\" >\r\n                 </button>\r\n                 <a href=\"/\" class=\"logo\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"logo\" class=\"logo__item\">\r\n                 </a>\r\n                 <div class=\"header-manipulation\">\r\n                    <select class=\"header-manipulation__select header-manipulation__select--lang\">\r\n                        <option value=\"UA\">UA</option>\r\n                        <option value=\"ENG\">ENG</option>\r\n                        <option value=\"DE\">DE</option>\r\n                    </select>\r\n                    <select class=\"header-manipulation__select header-manipulation__select--money\">\r\n                        <option value=\"GRN\">ГРН</option>\r\n                        <option value=\"USD\">USD</option>\r\n                        <option value=\"EUR\">EUR</option>\r\n                    </select>\r\n                   \r\n                    <a href=\"tel:+380978889292\" class=\"header-manipulation__number \">+38 097 888 92 92</a>\r\n                    <a href=\"#\" class=\"header-manipulation__basket\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"basket\">\r\n                    </a>\r\n                 </div>\r\n                <div class=\"header-catalog\">\r\n                    <div class=\"header-catalog__left\">\r\n                        <ul class=\"header-catalog-window-list\">\r\n                            <li><a href=\"/\" class=\"header-catalog-window-list__item\" data-category=\"woman\">жінкам</a></li>\r\n                            <li><a href=\"/\" class=\"header-catalog-window-list__item\" data-category=\"man\">чоловікам</a></li>\r\n                            <li><a href=\"/\" class=\"header-catalog-window-list__item\" data-category=\"child\">дітям</a></li>\r\n                            <li><a href=\"/\" class=\"header-catalog-window-list__item\" data-category=\"accessories\">аксесуари</a></li>\r\n                            <li><a href=\"/\" class=\"header-catalog-window-list__item\" data-category=\"house\">дім</a></li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"header-catalog__right\">\r\n                        <ul class=\"header-catalog-window-sublist\">\r\n                        </ul>\r\n                    </div>\r\n                    <img class=\"header-catalog__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"catalog-header\">\r\n                </div>\r\n                <div class=\"mobile-menu\">\r\n                    <nav class=\"navigation navigation--mobile\">\r\n                        <a href=\"#\" class=\"navigation__links navigation__links--mobile\">Каталог</a>\r\n                        <a href=\"#\" class=\"navigation__links navigation__links--mobile\">Знижки</a>\r\n                        <a href=\"#\" class=\"navigation__links navigation__links--mobile\">Блог</a>\r\n                        <a href=\"#\" class=\"navigation__links navigation__links--mobile\">Про нас</a>\r\n                     </nav>\r\n                     <div class=\"mobile-menu__choose-flex\">\r\n                        <form>\r\n                            <input type=\"radio\" id=\"ua\" name=\"choose-language\" value=\"UA\" checked>\r\n                            <label class=\"mobile-menu__choose-value\" for=\"ua\">UA</label>\r\n                            <input type=\"radio\" id=\"eng\" name=\"choose-language\" value=\"ENG\">\r\n                            <label class=\"mobile-menu__choose-value\" for=\"eng\">ENG</label>\r\n                            <input type=\"radio\" id=\"deu\" name=\"choose-language\" value=\"DE\">\r\n                            <label class=\"mobile-menu__choose-value\" for=\"deu\">DE</label>\r\n                         </form>\r\n                         <div class=\"mobile-menu__line\"></div>\r\n                         <form>\r\n                            <input type=\"radio\" id=\"grn\" name=\"choose-currency\" value=\"GRN\" checked>\r\n                            <label class=\"mobile-menu__choose-value\" for=\"grn\">ГРН</label>\r\n                            <input type=\"radio\" id=\"usd\" name=\"choose-currency\" value=\"USD\">\r\n                            <label class=\"mobile-menu__choose-value\" for=\"usd\">USD</label>\r\n                            <input type=\"radio\" id=\"eur\" name=\"choose-currency\" value=\"EUR\">\r\n                            <label class=\"mobile-menu__choose-value\" for=\"eur\">EUR</label>\r\n                         </form>\r\n                     </div>\r\n                </div>\r\n            </div>\r\n    </header>\r\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur doloribus molestias repellat repudiandae similique, minus ab inventore ea quasi odio expedita eos natus non nihil eaque ad culpa qui.\r\n    Repellendus natus laboriosam omnis ducimus tempora odit suscipit laborum adipisci qui aut neque quaerat harum, nam ipsum cupiditate ab! At cupiditate magnam ea nulla ut ab? Velit, fugit. Sunt, vel?\r\n    At, expedita. Magni voluptatibus, accusantium ducimus quo distinctio excepturi eum nam harum soluta non sit maxime. Deserunt suscipit non, autem animi voluptas repellendus nostrum voluptatum. Tempore in itaque distinctio omnis.\r\n    Fugit eligendi maxime dolores earum sequi! Enim dolorem numquam deleniti totam mollitia, eum, magnam voluptates quisquam optio nemo tempora voluptatibus nulla nesciunt placeat recusandae ab adipisci corporis dolore voluptate! Laboriosam.\r\n    Pariatur et aspernatur nihil vitae. Nobis repudiandae voluptatum perferendis aspernatur quia voluptatibus eaque. Ipsum quis non, totam, dolorum ipsa ut beatae blanditiis at consequatur cupiditate nam laudantium quo nostrum consequuntur?\r\n    Ex ipsum eveniet placeat nesciunt tenetur? Illo animi nulla quos a corporis rem error saepe, sunt, fugit beatae aliquam ut laboriosam totam explicabo non iure veritatis at laudantium doloremque. Distinctio?\r\n    Delectus, maxime? Ipsa iusto deleniti distinctio error! Vero, hic repellat. Quos ipsam, facere facilis velit repellat hic expedita enim, consequuntur voluptatum tempore vel mollitia cupiditate molestiae veritatis provident, non sint.\r\n    Accusantium reiciendis suscipit voluptates delectus ab sint tempora, sapiente sit maxime quibusdam quis temporibus recusandae quo beatae perferendis voluptas architecto, quidem inventore rem facere magnam ad provident deleniti qui. Voluptatibus.\r\n    Illum sunt repellendus nostrum eum culpa. Aspernatur iure amet veritatis vero, ab enim suscipit, ea soluta harum libero reprehenderit totam reiciendis fugit aut in et error consequatur fuga optio aliquid!\r\n    Doloremque modi, iusto reiciendis, deleniti iste aperiam non voluptates distinctio debitis laboriosam rem perferendis enim esse. Recusandae eos deleniti a consectetur sequi facere ut, qui, eaque ipsum sint reiciendis eligendi!\r\n    In assumenda magnam perspiciatis, corrupti libero beatae provident voluptatem, natus saepe at architecto voluptates dignissimos asperiores impedit? Culpa possimus a vero totam accusamus. Id quasi nobis, incidunt eius cum blanditiis!\r\n    Eaque quam perspiciatis praesentium optio vero in natus dolore ipsam soluta modi incidunt voluptate tempora illum et porro molestiae sit dolorem quas, est atque mollitia repudiandae! Quos aspernatur ex est?\r\n    Tempora illum exercitationem in itaque hic ipsum, eius possimus debitis similique, impedit qui doloremque illo quia? Quod aliquid, sed sequi maxime libero optio beatae ut? Sequi nemo ut officia sed.\r\n    Rerum quidem, voluptate non corrupti optio aliquam sapiente saepe doloribus error eveniet inventore nam deserunt, est quod ullam tempore asperiores blanditiis repellendus iusto perspiciatis doloremque? Expedita, dolorem. Tempora, corrupti iste?\r\n    Alias exercitationem quaerat dolor eligendi hic praesentium iste excepturi, earum aut laborum expedita perferendis facilis suscipit magnam amet saepe rerum velit ducimus nobis blanditiis nulla provident voluptates, culpa eveniet! Ab.\r\n    Nobis itaque maxime libero qui vel natus. Dicta ex omnis, architecto similique ducimus nihil, dolorum vero magnam incidunt id odio esse pariatur aliquid quod totam ut dignissimos molestias asperiores illum.\r\n    Commodi corrupti inventore fuga quasi expedita iure ut temporibus qui. Eveniet consequuntur illo et impedit eligendi voluptates odio consectetur, molestias at? Consectetur ut ratione esse laudantium voluptatem necessitatibus veniam possimus.\r\n    Necessitatibus fugiat officia, esse deserunt ipsum sequi dignissimos harum aliquid quidem distinctio ipsam iste nesciunt explicabo sunt aliquam officiis quam nisi dolore quasi voluptate ut natus? Iste fugiat esse reprehenderit!\r\n    Aperiam sunt nihil facilis eius vero magnam explicabo repudiandae adipisci fugit repellat itaque eligendi beatae odio id, non voluptates cumque esse iste quos suscipit amet obcaecati harum eaque? Dignissimos, praesentium.\r\n    Dolorum voluptates praesentium sapiente aut illo, eum beatae maiores dolores, nihil tempora error! Ab facilis tempora porro iste qui expedita. Quidem unde suscipit, ullam voluptatibus illo dolor expedita nobis itaque!\r\n    Cupiditate explicabo dolorum, odio animi dolore esse. Expedita reiciendis libero laboriosam, deserunt sit velit impedit veniam rem molestiae dolorum? Modi quia vero, adipisci nobis doloremque sunt reprehenderit tempora odit facere.\r\n    Hic dolorem quos natus dolores minus facilis. Iusto sed necessitatibus nam aperiam officiis cumque placeat sit nisi velit, deleniti quis modi eligendi dolor ipsum earum architecto! Architecto provident quam recusandae?\r\n    Temporibus tenetur magni esse non fugiat delectus veniam deserunt voluptates enim ad. Molestias obcaecati tempora corporis inventore ipsum? Voluptatem modi rerum enim excepturi? Illo veniam eveniet voluptatum pariatur, magnam tempore!\r\n    Exercitationem in cupiditate numquam dolorem! Voluptas fugit assumenda molestiae quas a voluptatum aspernatur architecto saepe labore, quidem nostrum, nam, mollitia exercitationem illum impedit. Tempora assumenda ex delectus aliquid. Placeat, facere.\r\n    Minima dolorum natus quaerat earum fuga quos fugit vero impedit consectetur quam molestias recusandae reprehenderit aliquid possimus ad nisi explicabo laborum, tempore voluptas! Aliquam accusamus sit veniam repellat, iure minus!\r\n    Minus ratione vero totam magnam modi nobis dolore dolor nulla itaque, qui perferendis quis tenetur corrupti fugit. Quae exercitationem ut assumenda maiores animi. Cum aut quam mollitia laboriosam voluptates at.\r\n    Magnam temporibus similique voluptatum sequi deleniti libero unde dolores ut eos ipsam, nam sunt voluptates enim vel repellat minima nemo velit minus quibusdam neque nulla animi consequatur culpa itaque? Dolorum.\r\n    Voluptatum, cum sapiente molestias beatae maiores accusantium nobis rem, voluptas totam porro recusandae ipsum id autem adipisci illum. Totam rem dolorem dicta tempore fugiat ut perspiciatis eos. Cumque, amet ratione!\r\n    Fuga sed deleniti consectetur totam facilis? Cupiditate deleniti tempore assumenda voluptate repellendus fugit corporis, natus culpa officiis deserunt est explicabo magni eius minus rem ipsum nobis temporibus similique quaerat dolorum?\r\n    Exercitationem laborum dignissimos tempora quod fugiat consequuntur natus impedit ratione repudiandae harum laboriosam, odit eos aperiam aut distinctio ab labore. Magni aspernatur repellendus est debitis consectetur alias eius quam voluptate.\r\n    Voluptatem labore debitis explicabo facere rerum voluptate modi eos recusandae aspernatur tenetur, culpa quam nisi, error reiciendis blanditiis natus, veritatis dolores repellendus sapiente corrupti. Autem quas illo repellat alias fugit.\r\n    Magnam consectetur hic reiciendis maxime in excepturi? Unde alias maiores quos, saepe suscipit error accusamus explicabo. Pariatur provident exercitationem ratione nobis, nihil aperiam eveniet commodi. Eveniet, sunt ullam? Culpa, assumenda?\r\n    Dolorum, cupiditate qui. Assumenda, est! Sequi minus accusantium magni molestiae molestias nam ut fuga obcaecati, at omnis qui debitis quo atque optio nesciunt similique porro quae ad aliquid voluptate neque?\r\n    At accusamus veniam alias consectetur, illo repudiandae incidunt hic, ipsa dolore nemo ducimus dolorem amet in molestiae nam impedit quisquam quod nobis voluptatem sunt cupiditate laboriosam! Ullam itaque ratione minima.\r\n    Quas praesentium vel nisi eaque culpa dignissimos, excepturi nam vitae nemo explicabo repudiandae earum ad neque quibusdam, repellendus in blanditiis omnis rem. Et laudantium illum nisi dolore dolorum fugit molestias!\r\n    Sed magni, tempora repellendus aliquam voluptates, dolorum doloribus accusamus possimus eius numquam repellat sint! Blanditiis autem perspiciatis quod hic et tenetur saepe dolor ratione omnis voluptatibus nesciunt dignissimos, nihil sunt!\r\n    Ut modi deleniti quibusdam soluta iure provident, obcaecati officia in dolore consequatur? Odio corrupti omnis, ullam repudiandae eligendi distinctio minus vero perferendis eveniet numquam eos sint at labore commodi! Voluptatum!\r\n    Quo enim sed modi quae quod voluptates odio qui eveniet esse harum! Dolore molestias odio cupiditate distinctio deleniti magnam expedita est rerum reprehenderit. Sed facere nemo accusantium, repudiandae pariatur in?\r\n    Eaque dolor fuga doloribus quas nemo illum quia voluptatem, porro, nihil reiciendis nesciunt numquam optio illo eius alias laboriosam magni dolore commodi quisquam atque est laborum autem. Tempora, odit fugit.\r\n    Qui vitae facilis accusantium, natus maxime odit distinctio explicabo quos iusto tempore placeat minus et. Eos accusantium, possimus porro et odit nemo perferendis quo. Totam unde at provident odio fugit.\r\n    Nisi aliquid ullam in quos cum sunt, ipsa dolore consectetur aperiam ducimus tenetur ut dolorum eligendi debitis suscipit autem perspiciatis eos ratione pariatur aut eveniet voluptatum architecto. Incidunt, doloribus autem?\r\n    Nam fuga repellendus magnam et ducimus? Inventore rerum quas perspiciatis necessitatibus, nam labore molestias, asperiores impedit nihil accusamus eveniet quibusdam! Voluptatum odio obcaecati non reprehenderit, temporibus accusantium eveniet omnis vitae?\r\n    Sequi, atque! Veniam dolor aperiam, voluptate, quisquam pariatur hic doloremque dolorem reiciendis voluptas quo quibusdam voluptatibus facere illum! Facilis adipisci enim nisi velit ut nihil, illo soluta in temporibus dolorem!\r\n    Sint harum rerum, officiis eum neque voluptatum id explicabo. Sunt enim sequi, harum eveniet veritatis similique earum reiciendis deserunt beatae maiores ratione incidunt mollitia inventore, tempora et? Omnis, eaque animi.\r\n    Beatae saepe necessitatibus cupiditate quas, minima aliquid sequi aperiam, dignissimos ipsum deleniti officiis quasi tempora vero eos dolore dolor voluptates natus numquam optio autem excepturi! Accusamus doloribus ex architecto ea.\r\n    Aliquid vero quam magnam at! Molestiae, ad non? Laborum numquam dolorum eos voluptatem expedita porro officiis consequatur ex sunt quasi autem, magni perspiciatis sed maiores consequuntur et voluptate praesentium ipsam.\r\n    Error nemo illo, iusto, cupiditate eum accusantium sit facilis numquam non sapiente est saepe eaque facere quia dolorem corporis eius ducimus, impedit quae quaerat eligendi alias! Ipsum necessitatibus eos eligendi.\r\n    Facere voluptates alias amet perspiciatis veritatis dolore aliquid sed et sapiente odio, unde mollitia animi harum, dolorem praesentium impedit minima tempore obcaecati architecto aspernatur. Itaque inventore non possimus quibusdam alias!\r\n    Saepe at dolores dolorum, error odit nesciunt fugit libero animi fugiat dolore assumenda blanditiis eaque neque distinctio sunt facilis omnis rerum. Est recusandae cupiditate voluptas! Suscipit reprehenderit molestiae excepturi iste.\r\n    Accusantium eaque mollitia impedit nisi earum hic sit quaerat repellendus quidem possimus facere inventore, sint voluptatibus suscipit dolore delectus provident ipsa corporis dolor architecto voluptatem voluptas! Error accusamus reiciendis possimus.\r\n    Corporis tempore deserunt maiores? Earum quo sint sit tempore? Quae ullam aut doloribus voluptatum dolores totam facilis distinctio dicta dolore nihil, alias ea quibusdam praesentium cupiditate? Incidunt perferendis id necessitatibus.\r\n    Labore perspiciatis aliquam eum, quas facere tenetur rem voluptates, vitae veritatis aperiam necessitatibus repudiandae distinctio deserunt fuga ad vel maiores. Adipisci commodi nulla, aspernatur eos hic expedita fugit ipsa amet!\r\n    Blanditiis incidunt libero ea porro eos maxime aperiam illo sint, ducimus numquam totam. Deleniti, quos, nesciunt itaque cupiditate reprehenderit ab tempore excepturi molestias quis velit in? Delectus veritatis non ullam?\r\n    Vel unde adipisci, odio ipsum doloremque quas corrupti sit minus incidunt, velit reiciendis voluptas itaque hic aut inventore error. Vero eius velit iste, nemo quam nisi hic maxime reiciendis voluptates?\r\n    Doloremque voluptatem, expedita, accusantium, pariatur dolorum cum ab alias maiores aliquam animi magni voluptates laudantium saepe incidunt nisi amet corrupti aliquid delectus officia placeat fugiat! Voluptas voluptatum eveniet blanditiis nulla.\r\n    Eum, iste autem dolorem laudantium assumenda dolorum nulla quisquam reprehenderit aliquam a neque quidem ad maxime numquam consequatur! Earum accusamus quos porro nobis ducimus in itaque officia autem nesciunt laboriosam!\r\n    Vitae numquam aperiam non minima unde magni nostrum doloremque amet. Porro pariatur eos voluptatum. Quis unde hic illum cum laudantium itaque iusto quam dignissimos nihil, omnis deleniti id quidem harum.\r\n    Velit, cupiditate? Explicabo, accusantium. Nisi blanditiis consequuntur sed maxime perferendis repudiandae debitis quas quibusdam eius corporis expedita deleniti at unde, repellat accusamus nulla commodi aliquid, velit alias illo quos similique.\r\n    Ullam, neque dolores explicabo, odio dolor quo beatae veniam molestias praesentium numquam nesciunt libero incidunt! Autem animi, nesciunt consequuntur cum repellendus facilis officia neque, necessitatibus maiores tempora nisi ipsum architecto.\r\n    Eveniet vitae vel, dolorem quod voluptatum voluptatibus distinctio. Quod eum atque nulla asperiores facere? At aliquam porro ipsam. At ab eos architecto provident. Ullam ipsam, magnam nesciunt quia cupiditate odio?\r\n    Incidunt eveniet maxime nihil vitae nostrum quibusdam eaque ipsa laborum recusandae cumque, pariatur iusto. Omnis, ex rem? Ad voluptates alias maiores iste tenetur accusantium doloremque pariatur, quam magni expedita numquam?\r\n    Aspernatur laborum quas id atque animi. Iure odit aliquid quo debitis, provident id illum earum deleniti, facilis sed eveniet cum veniam autem ratione asperiores facere labore. Quos optio quaerat sunt.\r\n    Illo iure odit a provident itaque architecto? Soluta ducimus, deserunt eaque delectus asperiores fuga nisi quos officia cum dolores debitis facilis blanditiis voluptatem quo rerum quod aspernatur laboriosam animi illo.\r\n    Quibusdam sapiente, placeat consequuntur molestias quia repudiandae ex, at culpa adipisci molestiae veniam debitis hic cupiditate id labore ullam totam a fugiat neque eligendi maxime non laborum ratione reiciendis? Facilis.\r\n    Porro ducimus officia laudantium ipsa animi velit delectus sit cumque. Totam odit laborum, ipsum libero sunt error nemo suscipit ad officia maiores consequatur aut? Expedita officiis minima iste beatae ducimus!\r\n    Labore aliquid facilis exercitationem! Atque incidunt hic aliquam rerum dicta asperiores ad illo numquam facere odit pariatur consequatur odio reiciendis mollitia dignissimos, ullam, nulla, natus ut fugiat soluta voluptas dolorem.\r\n    Dolores nisi iusto doloribus sed amet saepe id sapiente, quia repellat autem cumque ex repellendus quos unde ad non. Fugiat nostrum quisquam esse atque suscipit ut modi labore sapiente eligendi!\r\n    Excepturi est consectetur, alias officiis illum maxime. Doloremque libero voluptatibus quasi temporibus cumque a, quis perferendis at, vitae atque incidunt impedit, modi quod consequatur excepturi sed ratione velit vero! Hic.\r\n    Sequi quos quia harum aliquam non soluta maxime nulla nobis voluptatum corporis recusandae, repudiandae ut, accusantium architecto laborum? Sunt esse, repellendus numquam atque sint aliquam repellat quaerat tenetur? Sapiente, maiores?\r\n    Veniam, tempora! Ipsum a nihil deleniti fugiat, ex eius ipsa quis assumenda magnam. Perspiciatis recusandae a, mollitia harum officia placeat. Alias et velit eius labore natus dolorem perspiciatis, blanditiis sit!\r\n    Est laudantium consequatur autem voluptas aliquam quibusdam reiciendis aperiam beatae excepturi, minus sequi facilis rerum quidem! Veniam, vero! Sed cum voluptatum quo, accusantium sequi eum voluptatibus harum nisi accusamus porro.\r\n    Quaerat placeat facere, quod ab optio libero ullam sit asperiores culpa voluptate repudiandae voluptas atque neque iusto veniam. Voluptate expedita sit dolorem accusamus aperiam? Laudantium dolore saepe vero alias aliquid.\r\n    Recusandae ab quisquam blanditiis optio consequuntur iure fugit harum! Nesciunt amet vel obcaecati eveniet laudantium harum quam impedit. Voluptate minima odio fugiat, eum quos officiis eaque excepturi perferendis veritatis libero.\r\n    Mollitia tenetur, beatae dolore, quisquam magni at aperiam aspernatur exercitationem deserunt in voluptatibus, nesciunt quaerat modi dolorum explicabo eaque nulla vitae illum est vel doloribus repellendus temporibus. Nesciunt, aperiam repellat.\r\n    Deserunt laudantium fugiat quo vel, assumenda blanditiis nam est officiis ut distinctio, unde inventore beatae commodi. Aperiam id doloribus expedita voluptatum nihil ad ducimus harum earum, quam sunt velit sequi?\r\n    Consequuntur nisi iure blanditiis, eum tempore porro delectus quod, quia esse quasi sint? Totam maxime deserunt, debitis tenetur numquam eaque ipsam consequatur impedit expedita repudiandae soluta aut nam? Dolores, inventore!\r\n    Suscipit enim sunt, eaque earum eius obcaecati delectus sequi? Porro cumque nostrum at veritatis? Quidem expedita eos unde animi consequuntur, est asperiores. Deleniti ea ipsum reprehenderit non perspiciatis excepturi omnis!\r\n    Nihil quis expedita ipsa in odio mollitia vitae beatae iure dolorem quas hic possimus ut, consequatur sed impedit optio debitis quidem corrupti quisquam consequuntur ipsam dolore eum. Quo, incidunt ducimus!\r\n    Laudantium ex itaque culpa suscipit tenetur, facere quos doloribus possimus similique impedit fugiat, magnam quasi accusantium sapiente nostrum enim! Expedita veritatis placeat temporibus sequi corporis nisi omnis? Fugiat, ipsam rerum.\r\n    Beatae libero sapiente iusto reiciendis accusamus repellendus aliquam, maiores debitis ad facilis error dolores porro molestias ab a? Facilis fugiat quia ad perspiciatis qui eaque, est quae nostrum deleniti. Nam?\r\n    Cum incidunt iste accusantium, et dolor, suscipit earum ullam quod maiores quo fugit, error explicabo temporibus velit. Omnis consectetur quam, nisi itaque fugiat perferendis, temporibus eum quas quaerat voluptas eveniet.\r\n    Voluptatum aliquid officia nulla sed molestias consectetur placeat hic voluptate fuga, laboriosam quae dignissimos porro sint cumque libero repudiandae optio asperiores eligendi voluptas doloremque eius vel facere repellendus maxime? Placeat!\r\n    Voluptatem repudiandae praesentium harum vero nam libero reprehenderit incidunt sed excepturi ipsam adipisci suscipit tempora aperiam eligendi in iusto consequuntur corporis, quis totam tempore et, perferendis ex. Atque, ab dolorem.\r\n    Tempora voluptas, ipsa cupiditate dolore saepe corporis qui commodi soluta. Eligendi atque dolorum obcaecati saepe itaque ipsam maxime ad culpa ea dolorem neque, qui quisquam beatae nam voluptate cumque. Molestiae.\r\n    Id odio corporis, aut sequi consequatur debitis reiciendis eum. Fugiat quo ipsam quis nesciunt quae tenetur, excepturi ad vel unde eos obcaecati minima amet omnis perspiciatis praesentium esse, ab voluptates.\r\n    Illo sint tempore quam est placeat sit veritatis eos modi? Fugit sequi dolorum consequatur similique nemo illo quibusdam cupiditate laudantium soluta omnis, molestiae voluptatem recusandae repudiandae minus minima rerum quas!\r\n    Aliquid, laboriosam nam. Praesentium architecto earum libero eaque possimus. Nulla sint officiis, libero cum nobis voluptas minima dolore incidunt porro. Odio, voluptates velit quis excepturi illum iure eos amet culpa.\r\n    Harum, dicta illo veniam laudantium voluptas dolores qui, necessitatibus illum doloremque esse adipisci? Quam doloribus aspernatur impedit ad eum, necessitatibus nihil, officia nam tempora magni repellendus, et ea sed esse.\r\n    Incidunt voluptatem nobis et alias! Minima quos culpa, temporibus, quis asperiores aliquid, eum animi quod non aliquam accusamus! Quisquam optio magnam earum omnis ducimus deserunt totam quasi consectetur, in neque?\r\n    Porro natus similique nisi expedita eum! Consequuntur tempore iure illum minus. Obcaecati, ut assumenda perspiciatis odio distinctio libero, culpa sit totam harum officiis rem iusto provident saepe officia ipsam animi.\r\n    Nisi, vero ad eaque explicabo distinctio, minus quas suscipit architecto quo sed ex asperiores error aliquid, rem perspiciatis velit labore repudiandae? Pariatur recusandae corporis perspiciatis sit consequuntur non, veritatis tenetur.\r\n    Quis debitis accusamus soluta, beatae repellat obcaecati aliquid accusantium quia, voluptatem illum non corrupti provident numquam nihil omnis iste doloribus. Expedita nobis rerum nulla porro earum, fuga est quibusdam quae.\r\n    Accusantium aspernatur necessitatibus minus voluptatem quis a, aliquid omnis dicta, consequuntur praesentium earum excepturi obcaecati rem iure repellendus exercitationem mollitia. Quas nobis, non cum natus aliquam laborum tenetur alias quod.\r\n    Iusto repellat eum eius placeat nihil aspernatur expedita, accusantium mollitia fuga quas modi iste minus, ipsa harum hic perferendis adipisci qui officiis unde tempora voluptatibus impedit! Veniam placeat hic eveniet.\r\n    Fugit, nesciunt. Recusandae ex beatae delectus blanditiis itaque dolor, adipisci architecto maiores omnis porro, aperiam quia modi nobis, quam eos. Quo unde, eveniet odio eligendi corporis cumque dolorem sequi dicta!\r\n    Vero suscipit nesciunt, nulla praesentium esse delectus ullam quia ea sunt amet ipsum vitae dolor perspiciatis voluptatem molestiae tempore maxime, molestias quidem rerum eius sed velit blanditiis mollitia itaque. Animi.\r\n    Autem nostrum earum accusantium! Saepe voluptates odit ratione rem veniam officiis at delectus distinctio eum minus? Inventore tenetur omnis iste autem nobis tempore molestias qui laboriosam officiis fugit, voluptatem beatae!\r\n    Vero nostrum eius assumenda pariatur? Earum, distinctio. Dolor laudantium earum dolorum, impedit harum neque aliquam sunt tempora possimus illum, accusamus delectus quidem cupiditate optio unde nam exercitationem, rerum est non.\r\n    Enim laborum quae, at saepe beatae mollitia, nam voluptas quam quas veritatis molestiae nostrum porro, pariatur omnis nulla dicta provident doloribus totam expedita. Neque iste in placeat, voluptatum consequuntur veniam!\r\n    Eveniet molestiae necessitatibus debitis nostrum? Nostrum optio accusantium quidem ab sed dicta rem. Beatae, autem! Officia excepturi soluta asperiores. Pariatur quas architecto dolorum! Obcaecati officiis, dolore optio neque corrupti nulla!\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  }

  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ts/mobile-menu.ts":
/*!*******************************!*\
  !*** ./src/ts/mobile-menu.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const cross_svg_1 = __importDefault(__webpack_require__(/*! ../assets/icons/cross.svg */ "./src/assets/icons/cross.svg"));
const burger_menu_svg_1 = __importDefault(__webpack_require__(/*! ../assets/icons/burger-menu.svg */ "./src/assets/icons/burger-menu.svg"));
const burgerIcon = document.querySelector('.header__burger');
const imgBurgerIcon = document.querySelector('.header__burger-img');
const mobileMenu = document.querySelector('.mobile-menu');
let isMenuOpen = false;
const arrPathImgIcon = [
    burger_menu_svg_1.default,
    cross_svg_1.default
];
function changeBurgerIcon() {
    burgerIcon === null || burgerIcon === void 0 ? void 0 : burgerIcon.classList.add('header__burger--open');
    setTimeout(() => {
        if (imgBurgerIcon) {
            imgBurgerIcon.src = arrPathImgIcon[isMenuOpen ? 0 : 1];
            isMenuOpen = !isMenuOpen;
            burgerIcon === null || burgerIcon === void 0 ? void 0 : burgerIcon.classList.remove('header__burger--open');
            document.body.classList.toggle('modal-window-open');
        }
    }, 400);
}
function openMobileMenu() {
    mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.classList.toggle('mobile-menu--open');
}
function closeMobileMenu() {
    document.body.addEventListener('click', (e) => {
        let target = e.target;
        if (!target.className.includes('header__burger') &&
            !target.className.includes('mobile-menu') &&
            target.tagName !== ('INPUT' || 0)) {
            if (mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.classList.contains('mobile-menu--open')) {
                mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.classList.remove('mobile-menu--open');
                changeBurgerIcon();
            }
        }
    });
}
burgerIcon === null || burgerIcon === void 0 ? void 0 : burgerIcon.addEventListener('click', () => {
    openMobileMenu();
    changeBurgerIcon();
});
closeMobileMenu();


/***/ }),

/***/ "./src/ts/show-catalog.ts":
/*!********************************!*\
  !*** ./src/ts/show-catalog.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.catalogLink = void 0;
exports.catalogLink = document.querySelector('[data-catalog]');
const catalogBlock = document.querySelector('.header-catalog');
exports.catalogLink === null || exports.catalogLink === void 0 ? void 0 : exports.catalogLink.addEventListener('mouseover', () => {
    catalogBlock === null || catalogBlock === void 0 ? void 0 : catalogBlock.classList.add('header-catalog--active');
    exports.catalogLink === null || exports.catalogLink === void 0 ? void 0 : exports.catalogLink.classList.add('navigation__links--active');
    catalogBlock === null || catalogBlock === void 0 ? void 0 : catalogBlock.addEventListener('mouseleave', () => {
        catalogBlock === null || catalogBlock === void 0 ? void 0 : catalogBlock.classList.remove('header-catalog--active');
        exports.catalogLink === null || exports.catalogLink === void 0 ? void 0 : exports.catalogLink.classList.remove('navigation__links--active');
    });
});


/***/ }),

/***/ "./src/ts/wtiteSubcategory.ts":
/*!************************************!*\
  !*** ./src/ts/wtiteSubcategory.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const mainCategory = document.querySelectorAll('.header-catalog-window-list__item');
const subategoryBlock = document.querySelector('.header-catalog-window-sublist');
const subCategories = {
    woman: ['Вишиті сукні', 'Жіночі вишиванки', 'Світшоти та светри', 'Футболки', 'Брюки та комбінезони', 'Пальта та куртки', 'Спідниці'],
    man: ['Футболки', 'Шорти', 'Брюки', 'Светери'],
    child: ['шапочки', 'футболки', 'взуття', 'колготи'],
    house: ['столи', 'шафи', 'дзеркала', 'електрика', 'ковдри'],
    accessories: ['годинники', 'плакати'],
};
//function for search necessary key in object and then  create current subcategories list
function searchKeyInObject(obj, necessaryKey, subategoryBlock) {
    for (let objectKey in obj) {
        if (necessaryKey === objectKey) {
            let arrSubcategories = obj[objectKey];
            subategoryBlock.innerHTML = '';
            for (let i = 0; i < arrSubcategories.length; i++) {
                const createdSubcategories = document.createElement('li');
                createdSubcategories.classList.add('header-catalog-window-sublist__item');
                createdSubcategories.textContent = arrSubcategories[i];
                subategoryBlock.appendChild(createdSubcategories);
            }
        }
    }
}
// already main function for create current subcategories list
function writeCategories() {
    mainCategory.forEach(categoryItem => {
        categoryItem.addEventListener('mouseenter', (e) => {
            if (e.target instanceof HTMLElement && e.target.dataset.category) {
                let currentDataCategory = e.target.dataset.category;
                if (subategoryBlock) {
                    searchKeyInObject(subCategories, currentDataCategory, subategoryBlock);
                }
            }
        });
    });
}
writeCategories();


/***/ }),

/***/ "./src/assets/icons/basket.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/basket.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/basket.svg";

/***/ }),

/***/ "./src/assets/icons/burger-menu.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/burger-menu.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/burger-menu.svg";

/***/ }),

/***/ "./src/assets/icons/cross.svg":
/*!************************************!*\
  !*** ./src/assets/icons/cross.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/cross.svg";

/***/ }),

/***/ "./src/assets/images/catalog-header.png":
/*!**********************************************!*\
  !*** ./src/assets/images/catalog-header.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/catalog-header.png";

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/logo.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./index.html */ "./src/index.html");
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
__webpack_require__(/*! ./ts/show-catalog */ "./src/ts/show-catalog.ts");
__webpack_require__(/*! ./ts/wtiteSubcategory */ "./src/ts/wtiteSubcategory.ts");
__webpack_require__(/*! ./ts/mobile-menu */ "./src/ts/mobile-menu.ts");

})();

/******/ })()
;
//# sourceMappingURL=main42be6bb711fe69098e7a.js.map