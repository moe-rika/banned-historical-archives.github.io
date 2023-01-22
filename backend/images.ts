import { ImageTagType } from '../types';
import { Image } from './entities';

const images: (Image & {
  id?: string;
})[] = [
  {"name":"《简明世界史（近代部分）》插图一","description":"克伦威尔","source":"《简明世界史（近代部分）》","show_in_gallery":true,"tags":[],"id":"047608ad-5320-45a7-9105-5eb07181e1c7","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/04/047608ad-5320-45a7-9105-5eb07181e1c7.png"},
  {"name":"《简明世界史（近代部分）》插图二","description":"利尔本在法庭上","source":"《简明世界史（近代部分）》","show_in_gallery":true,"tags":[],"id":"870bf54d-70f0-41b8-8e58-cebf816e43cc","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/87/870bf54d-70f0-41b8-8e58-cebf816e43cc.png"},
  {"name":"《简明世界史（近代部分）》插图三","description":"瓦特发明的第一台蒸汽机","source":"《简明世界史（近代部分）》","show_in_gallery":true,"tags":[],"id":"5e42b82c-1b42-47d4-bbfa-f0726ca25eff","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/5e/5e42b82c-1b42-47d4-bbfa-f0726ca25eff.png"},
  {"name":"《简明世界史（近代部分）》插图四","description":"十九世纪初英国的煤气工厂","source":"《简明世界史（近代部分）》","show_in_gallery":true,"tags":[],"id":"92d121b5-217c-45ee-8055-11eb0ecae439","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/92/92d121b5-217c-45ee-8055-11eb0ecae439.png"},
  {"name":"《简明世界史（近代部分）》插图五","description":"女工下矿井","source":"《简明世界史（近代部分）》","show_in_gallery":true,"tags":[],"id":"13360cec-9769-4e89-bd60-d2583c8b7d97","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/13/13360cec-9769-4e89-bd60-d2583c8b7d97.png"},
  {"name":"《简明世界史（近代部分）》插图六","description":"童工在矿坑里劳动","source":"《简明世界史（近代部分）》","show_in_gallery":true,"tags":[],"id":"a1501469-5a58-4582-ab20-1026ea017a5b","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/a1/a1501469-5a58-4582-ab20-1026ea017a5b.png"},
  {"name":"《简明世界史（近代部分）》插图七","description":"民兵——“一分钟人”纪念像","source":"《简明世界史（近代部分）》","show_in_gallery":true,"tags":[],"id":"6667e1b4-7b89-4b13-a8a6-052391322180","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/66/6667e1b4-7b89-4b13-a8a6-052391322180.png"},
  {"name":"《简明世界史（近代部分）》插图八","description":"列克星屯的战斗","source":"《简明世界史（近代部分）》","show_in_gallery":true,"tags":[],"id":"d319899f-acfa-4439-8f5a-a8336586b4de","url":"https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/d3/d319899f-acfa-4439-8f5a-a8336586b4de.png"},
  {
    name: '《共产党宣言（人民出版社1963年版）》插图一',
    description: '“共产党宣言”第一版的扉页',
    source: '共产党宣言（人民出版社1963年版）',
    show_in_gallery: true,
    tags: [],
    id: '9a5997dd-7991-460b-b6a9-f9d3921d9d7e',
    url: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/9a/9a5997dd-7991-460b-b6a9-f9d3921d9d7e.png',
  },
  {
    name: '《共产党宣言（人民出版社1963年版）》插图二',
    description:
      '“共产党宣言”原稿的一页（马克思的手稿，头两行是燕妮·马克思的手迹）',
    source: '共产党宣言（人民出版社1963年版）',
    show_in_gallery: true,
    tags: [],
    id: '08dc2ec6-bbd9-474e-8c6f-5e174a374cce',
    url: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/08/08dc2ec6-bbd9-474e-8c6f-5e174a374cce.png',
  },
  {
    name: '印度共产党（毛主义）谱系图',
    description: '红色文献翻译 制',
    source: '',
    show_in_gallery: true,
    tags: [{ type: 'character', name: '印度共产党（毛主义）' }],
    id: '6d15bb22-73cb-4489-b504-15b240bbed4c',
    url: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/6d/6d15bb22-73cb-4489-b504-15b240bbed4c.jpg',
  },
  {
    name: '英国共产主义派别源流图',
    description: '红色文献翻译 制',
    source: '',
    show_in_gallery: true,
    tags: [{ type: 'character', name: '英国共产主义运动' }],
    id: 'c06d5698-e21f-44c6-9f59-b51cb6697a24',
    url: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/c0/c06d5698-e21f-44c6-9f59-b51cb6697a24.jpg',
  },
  {
    name: '群众路线的三种理解',
    description: '红色文献翻译 制',
    source: '《群众运动和美国革命运动》，斯考特·H',
    show_in_gallery: true,
    tags: [{ type: 'subject', name: '群众路线' }],
    id: 'fd3829dd-14e6-4380-b3b7-01a7d216990a',
    url: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/fd/fd3829dd-14e6-4380-b3b7-01a7d216990a.jpg',
  },
  {
    name: '世界人民战争万岁！',
    description: '红色文献翻译 制',
    source: '',
    show_in_gallery: true,
    tags: [{ type: 'subject', name: '人民战争' }],
    id: 'a1fff102-0db9-4f67-bd92-52c4a9747361',
    url: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/a1/a1fff102-0db9-4f67-bd92-52c4a9747361.jpg',
  },
  {
    name: '全国无产阶级文革大革命形势略图',
    source: '',
    description: '',
    show_in_gallery: true,
    tags: [],
    year: 1967,
    month: 10,
    day: 17,
    id: '4fc695e6-8b56-4e1d-879d-83f489d82593',
    url: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/4f/4fc695e6-8b56-4e1d-879d-83f489d82593.jpg',
  },
  {
    name: '《上海工人革命造反总司令部斗争纪要》插图一',
    description: '我们的伟大领袖毛主席',
    source: '《上海工人革命造反总司令部斗争纪要》',
    show_in_gallery: true,
    tags: [{ type: 'character', name: '毛泽东' }],
    id: 'e76ea17e-f53a-418c-be68-5a725aad779d',
    url: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/e7/e76ea17e-f53a-418c-be68-5a725aad779d.png',
  },
  {
    name: '《上海工人革命造反总司令部斗争纪要》插图二',
    description: '上海工人革命造反总司令部成立宣言原件',
    source: '《上海工人革命造反总司令部斗争纪要》',
    show_in_gallery: true,
    tags: [{ type: 'subject', name: '工总司' }],
    id: 'a8db5d46-6004-45d5-b22d-dd5a63072008',
    url: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/a8/a8db5d46-6004-45d5-b22d-dd5a63072008.png',
  },
  {
    name: '《上海工人革命造反总司令部斗争纪要》插图三',
    description: '1966年11月，毛主席派张春桥同志代表中央文革小组来到安亭',
    source: '《上海工人革命造反总司令部斗争纪要》',
    show_in_gallery: true,
    tags: [
      { type: 'subject', name: '安亭事件' },
      { type: 'character', name: '张春桥' },
      { type: 'character', name: '工总司' },
    ],
    id: '0d8b3e97-c159-4d91-83f4-c199fa6e228a',
    url: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/0d/0d8b3e97-c159-4d91-83f4-c199fa6e228a.png',
  },
  {
    name: '《上海工人革命造反总司令部斗争纪要》插图四',
    description: '张春桥同志在苏州为工总司队员题词',
    source: '《上海工人革命造反总司令部斗争纪要》',
    show_in_gallery: true,
    tags: [
      { type: 'character', name: '张春桥' },
      { type: 'character', name: '工总司' },
    ],
    id: '6aa98e24-e62e-4e44-a7d1-6a92070c016b',
    url: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/6a/6aa98e24-e62e-4e44-a7d1-6a92070c016b.png',
  },
  {
    name: '《上海工人革命造反总司令部斗争纪要》插图五',
    description: '批刻工总司图章和制作袖章的签条原件',
    source: '《上海工人革命造反总司令部斗争纪要》',
    show_in_gallery: true,
    tags: [
      { type: 'character', name: '张春桥' },
      { type: 'character', name: '工总司' },
    ],
    id: '4d4d4af5-e085-49ed-9b6c-66dfd14b81be',
    url: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/4d/4d4d4af5-e085-49ed-9b6c-66dfd14b81be.png',
  },
  {
    name: '《上海工人革命造反总司令部斗争纪要》插图六',
    description: '告上海全市人民书原稿',
    source: '《上海工人革命造反总司令部斗争纪要》',
    show_in_gallery: true,
    tags: [{ type: 'subject', name: '一月风暴' }],
    id: '036575e8-eb6e-4d72-9098-1283f349f448',
    url: 'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives7/main/03/036575e8-eb6e-4d72-9098-1283f349f448.png',
  },
];

export default images;
