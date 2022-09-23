import {
  ContentPart,
  ContentType,
  ParserOption,
  ParserResult,
} from '../../types';

export async function parse(
  imgPath: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const title = '张春桥同志与华东局革命造反派座谈纪要';
  const parts: ContentPart[] =[{
    text: title,
    type: ContentType.title,
  }];
  const res: ParserResult[] = [
    {
      title,
      parts: [
        ...parts,
        ...`
上一次来上海主要是抓上海市革命委员会的工作，这次去北京向毛主席和党中央汇报工作。周总理问起华东局现在搞得怎么样了，我回答是因前一时期工作很忙，名义插手管，这次受周总理委托我管一管，所以今天来找你们谈谈。周总理说：华东局书记处的权不能夺，书记处是党中央的派出机构，要夺也只能夺华东局机关内的权。就是要夺华东局权，也只能待六省一市全部建立革命委员会之后和华东局机关一起报请党中央指示后考虑？现在各省夺权没有通过华东局，上海夺权也没有通过华东局。总理要我管江苏、浙江，现在有些省的当权派被打到了，李雪峰等还没有打倒。中央“三结合”也刚刚开始，许多部门瘫痪了。目前煤矿煤的生产有些下降，山西阳泉煤矿权还没有夺下了，全国经济形势一、二月可能有些下降，但权夺过来之后就会好转，农业还得跟上，问题不大，农民闫听了中央指示后生产热情空前高涨。小三线建设，和上海协作等问题要抓起来。
机关的运动短了一些。目前要（1）搞好机关文化大革命，（2）抓革命，促生产，（3）三结合夺权，对干部要阶级分析，要相信大多数，有些干部政治面貌是人是鬼已是很清楚了。
这时潘国平要走了，张对潘说，耿金章抓起来你知道不知道，潘说不知道，我认为不要抓来抓去，要照顾工人热情。
六省一市的组织不要搞了，叫他们回去，各省都打倒不对，他们（指省委书记）在民主革命时期都有很大功劳，现在犯了错误要允许他们改正。潘复生一开始就站到造反派一边来。贵州情况也是如此，中央曾经排过对立面名单（指站到造反派一边来的干部）但非常困难，彭真、薄一波在山西已有三十多年的老根，山西省的权现在夺下来了，但那时的白色恐怖很厉害。
现在提出打倒一切，怀疑一切是无政府主义的口号，这是对外讲的，实际上这是反动的口号，是反毛泽东思想的口号。打倒一切，怀疑一切是陶铸提出的，在运动一开始我们没有反对它。这是由于在运动开始时起了一定积极作用。在当初姚文元同志曾写过文章，但毛主席说不要发表了，我们也反对当初湖北展开的全面批判这一口号，但是运动发展到现在矛盾基本暴露了，如果再提出打倒一切，怀疑一切的口号就离开毛主席的路线更远了。
毛主席说你们对刘少奇怎么办，是不是要抓起来？我看以后我还要和他们一起工作的。彭、罗、陆、杨在中央工作扩大会议上唱的调子越来越高了，毛主席建议不要开了，毛主席说我怎么能和他们四人（反党分子）一起开会呢？毛主席对犯路线错误的干部一直是“惩前毖后、治病救人”的，要团结——批评——团结。如历史上的陈独秀、张国焘、瞿秋白、王明等都是这样。王明在七大、八大都选上中央委员了，以后九大不会选了，因为王明逃到苏联去做特务活动了。刘少奇看来九大中央还要选他当中央委员。
红旗十三、十四、十五期社论是一级一级加油的，要相信广大群众，过去很多人都怕，当毛主席上天安门时许多人怕群众，过去斗地主时有人怕了，说做得过火了。毛主席说现在不要挂牌子、戴高帽子，挂牌子、戴高帽子是我在湖南农民运动中提出的，当时是斗封建主义剥削者地主这是完全应该的，但到解放区斗地主时也很少用了，现在斗一些当权派，在民主革命时期他们都有功劳的，这是和过去斗地主是有区别的。以后不要挂牌子了，要照中央军委八条规定办事。
我们说事物是有正面和反面的，当红卫兵一出现时毛主席和党中央对他们无微不至的爱护和关心，但后来发现红卫兵中一部分人打人，为了这事中央文革小组调查了这事，开始发现打的都是一些坏人，都是地富反坏右，打过这就算了，但后来发现坏人好人都打了，这就不对了，中央不得不出来制止打人了。
现在外面说有些省委书记失踪了，这是不对的。叶飞、江华、谭启龙都到北京去了，都是毛主席邀请他们去的，他们到北京去后一方面要检查自己的错误，一方面要学习学习。他们这些人在民主革命时期都有大功劳的。
机关内各部委要实行“三结合”，要成立文化革命小组或文化革命委员会、农委、财委。计经委有业务工作要做好，内刊、理论班不要急于杀出去。以后理论工作还是需要的。要和工农群众相结合，这是好事，知识分子的弱点就是怕和工农相结合。对当权派斗争要大、中、小会相结合，大会是造声势，中、小会是解决问题。
山东省、福建省夺权斗争快了，江苏、浙江还有些问题，我插手管一下。
华东地区的反动路线主要是魏文伯、陈丕显、曹荻秋三人负责，其他人都是执行者。去年十一中全会上，毛主席写了一张“炮打司令部”的大字报，批判了刘邓路线，这时魏文伯也写了一张刘少奇的大字报，说刘的检查极不深刻，还不如解放军的一个连指导员。会后我和魏谈话，你的大字报怎么能这样写，指导员是无产阶级革命战士，刘少奇是代表一种资产阶级思潮的，是在我党的代理人。魏文伯看来很糊涂，但不是一般的糊涂，去年十月初批判彭真大会，批判彭真的“二月提纲”是毛主席批准的。在到北京去之前我征求魏的意见，魏提出了两条（1）要狠狠批判彭真的“二月提纲”，（2）刘邓的人事关系很复杂，你要小心。在十一中全会上主席曾对各省委书记批评了一下，魏根据个人的印象，自己写了一些省委材料，结果主席看了之后批评他，省委书记不需要人人过关。
魏文伯和韩哲一要有区别，我接触韩二次，在安亭事件中曹荻秋是反对的，但韩是同情我的，他主动到苏州去解决问题，我在中央看过韩的材料，至今没有发现过什么。喊和荡一波的关系可能是很复杂的，荡是经委主任，韩是付主任，荡的一批人主要和刘少奇有密切关系，他们都是北方局的。但韩不一样。做经济工作的一天到晚就是记账，全国搞经济工作的人很少。余秋里就是如此。
贴我大字报不要讲别人反革命，但要看问题的实质，上海前一时期红革会是代表一种思潮的，他们要炮轰中央文革，这就走向事物的反面了。
平时刘、邓见到我们时表面上很客气，但心里是恨死我们了，如他们再上台，我们就要人头落地。
对陈丕显我们是做了一番工作的，在北京开会时，我们曾对陈说你要振作起来，站到红卫兵和毛主席一边来，江青同志和我曾愿意做陈丕显的参谋，但陈根本没有听进去。
陈伯达同志说反动路线问题按内部矛盾处理，对资本主义道路当权派要给予出路，批斗从严，处理从宽。
毛选第五、六卷在去年十二月毛主席已经批准了，五、六卷的出版是由上海负责，照理在二月份是要搞五卷的，毛主席也同意搞出一篇给他看一篇，前一时期由于我工作很忙没有抓。同志们要节约闹革命，特别要节约纸张，如果再浪费，下半年连报纸也有困难了。
最近你们看到没有，本来提到三反分子（反党、反社会主义、反毛泽东思想），现在只提到二反了，这样问题就狭多了。本来提的走资本主义道路当权派和坚持资产阶级反动路线的顽固分子，现在后一条不提了，只提一小撮走资本主义道路当权派。
农村是搞迟了两个月，照理在秋收后应及时搞的，但没有抓紧，脱了两个月，在这疫情陶铸搞了一个文件。
对于各地联络站，中央已有文件了，对于以前的联络站，做了一些好事，也做了一些坏事，如北航红旗和清华井冈山，希望撤回去，就地闹革命。
对于保皇派，这个名字在上海能听到，在北京是不提了，用保守派比较好，对于保守派在运动初期中民愤很大的骨干分子，特别做了钉梢，抄黑名单，保黑材料，保黑党委的人，应该给予批评、批判，但不要打击面太广，要牢牢记住毛主席的相信大多数原则，保守派中大多数是受蒙蔽的，骨干分子是极少数。
对于犯严重错误的干部应该怎样对待？张春桥同志说，红旗社论第四期中有一段是毛主席加的：“只要不说反党反社会主义分子而又坚持不改的和累教不改的，就要允许他们改过，鼓励他们将功赎罪。”有人提出可能还有走资本主义道路当权派在这次运动中滑过去，我认为不要紧，也不要怕，许多年来，刘邓滑过去了许多次，但这一次终于暴露出来了，这是一次总暴发。
————————————————————————————————————————————————————————————————————————————————————————————————————————
你们很关心毛主席最近在做些什么工作，毛主席最近在考虑批和改的工作。去年十二月毛主席和我们谈了，在批时要批判刘少奇的《论共产党员的修养》和邓小平多年来的讲话。对他们要进行全国性的大批判。
`
          .split('\n')
          .map(i => i.trim())
          .filter((i) => i)
          .map((i) => ({
            text: i,
            type: ContentType.paragraph,
          })),
      ],
      authors: ['张春桥'],
      dates: [
        {
          year: 1967,
          month: 2,
          day: 25,
        },
      ],
      is_range_date: false,
      comments: [],
      comment_pivots: [],
      description: `
（内部文件注意保存）
赤卫军上海市大专院校革命委员会
一九六七年三月四日
赤卫军复旦大学革命委员会翻印
      `,
      page_start: parser_opt.page_limits[0][0],
      page_end: parser_opt.page_limits[0][1],
    },
  ];
  return res;
}