import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import myCard from "./Card";
import CardData from "./CardData";
import img1 from "./media/images/Alula.jpg";
import img2 from "./media/images/AlfeelRook.jpg";
import img3 from "./media/images/balloons.jpg";
import img4 from "./media/images/HabitsHotle.jpg";
import img5 from "./media/images/mirrorHall.jpg";
import img6 from "./media/images/resize.jpeg";
import img7 from "./media/images/riyadh.jpeg";
import img8 from "./media/images/hanifa.jpeg";
import img9 from "./media/images/masmuck.webp";
import img10 from "./media/images/bujeary.jpeg";
import img11 from "./media/images/poulyfard.jpeg";

function Details(prop) {
  let Cards = CardData.map((cards) => {
    return <myCard cards={cards} />;
  });
  return (
    <div>
      <div id="1" class="cardDetail">
        <Card style={{ width: "30rem" }}>
          <Card.Img className="m-5" variant="top" src={img6} />
          <Card.Body>
            <Card.Title>مدينة العلا</Card.Title>
            <Card.Text>
              العلا إحدى مدن المملكة العربية السعودية، تقع شمال غرب المملكة،
              وتتبع إدارياً لإمارة منطقة المدينة المنورة، وتبعد عن مركز الإمارة
              تقريباً 300 كيلو متر شمالاً، وعاصمة لمحافظة العلا. يصل عمر
              الاستيطان البشري فيها إلى نحو 4000 عام، وهي أحد أهم الوجهات
              السياحية في السعودية.
            </Card.Text>
          </Card.Body>
        </Card>
        <h2 className="m-5">الأمان السياحية</h2>

        <CardGroup className="m-5">
          <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>صخرة الفيل</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>صخرة الفيل</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>المناطيد</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img5} />
            <Card.Body>
              <Card.Title>قاعة المرايا</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
        {/* <div className="container_two">{Cards}</div> */}
      </div>

      <div id="2" class="cardDetail">
        <Card style={{ width: "30rem" }}>
          <Card.Img className="m-5" variant="top" src={img7} />
          <Card.Body>
            <Card.Title>مدينة الرياض</Card.Title>
            <Card.Text>
              الرياض هي عاصمة المملكة العربية السعودية، وأكبر مدنها وثالث أكبر
              عاصمة عربية من حيث عدد السكان. تقع الرياض وسط شبه الجزيرة العربية
              في هضبة نجد، على ارتفاع 600 متر فوق مستوى سطح البحر. وهي مقر إمارة
              منطقة الرياض حسب التقسيم الإداري للمناطق السعودية. يسكن مدينة
              الرياض نحو 10.5 مليون نسمة وفق إحصائيات عام 2021.
            </Card.Text>
          </Card.Body>
        </Card>
        <h2 className="m-5">الأمان السياحية</h2>

        <CardGroup className="m-5">
          <Card>
            <Card.Img variant="top" src={img8} />
            <Card.Body>
              <Card.Title>وادي حنيفة</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img9} />
            <Card.Body>
              <Card.Title>قصر المصمك</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img10} />
            <Card.Body>
              <Card.Title>حي البجيري التراثي</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img11} />
            <Card.Body>
              <Card.Title>بوليفارد الرياض</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      <div id="3" class="cardDetail">
        <Card style={{ width: "30rem" }}>
          <Card.Img className="m-5" variant="top" src={img6} />
          <Card.Body>
            <Card.Title>مدينة المدينة المنورة</Card.Title>
            <Card.Text>
              المدينة المنورة هي أول عاصمة في تاريخ الإسلام، وثاني أقدس الأماكن
              لدى المسلمين بعد مكة المكرمة، ما يجعلها إحدى الوجهات الرئيسية
              لملايين المسلمين من مختلف أنحاء العالم. تتمركز المدينة حول المسجد
              النبوي، الذي شيده الرسول الكريم بنفسه، وأيضًا المكان الذي دفن فيه.
            </Card.Text>
          </Card.Body>
        </Card>
        <h2 className="m-5">الأمان السياحية</h2>

        <CardGroup className="m-5">
          <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>صخرة الفيل</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>صخرة الفيل</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>المناطيد</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img5} />
            <Card.Body>
              <Card.Title>قاعة المرايا</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      <div id="4" class="cardDetail">
        <Card style={{ width: "30rem" }}>
          <Card.Img className="m-5" variant="top" src={img6} />
          <Card.Body>
            <Card.Title>مدينة أبها</Card.Title>
            <Card.Text>
              مدينة أبها هي المقر الإداري وعاصمة منطقة عسير جنوب غرب المملكة
              العربية السعودية وأهم مدنها. تقع على جبال الحجاز ويجاورها من الشرق
              والشمال الشرقي محافظة خميس مشيط، ومن الشمال الغربي محافظة النماص،
              ومن جهة الغرب والجنوب الغربي محافظة محايل عسير ومحافظة رجال ألمع.
              تعتبر مدينة أبها من أهم المصائف والمدن السياحية في المملكة العربية
              السعودية، بسبب اعتدال مناخها وارتفاعها الكبير عن سطح البحر فإنها
              تسمى أيضاً عروس الجبل كما تسمى سيدة الضباب وكذلك أبها البهية بسبب
              الجمال الطبيعي الذي تتميز به.
            </Card.Text>
          </Card.Body>
        </Card>
        <h2 className="m-5">الأمان السياحية</h2>

        <CardGroup className="m-5">
          <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>صخرة الفيل</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>صخرة الفيل</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>المناطيد</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img5} />
            <Card.Body>
              <Card.Title>قاعة المرايا</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      <div id="5" class="cardDetail">
        <Card style={{ width: "30rem" }}>
          <Card.Img className="m-5" variant="top" src={img6} />
          <Card.Body>
            <Card.Title>المنطقة الشرقية</Card.Title>
            <Card.Text>
              تعد المنطقة الشرقية أكبر مناطق المملكة جغرافيًّا، وهي عبارة عن سهل
              صحراوي يمتد من شاطئ الخليج العربي حتى صحراء الدهناء، أما طولها
              فإنه يمتد مسافة 1200 كيلو متر تقريباً فمن الحدود الكويتية في
              الشمال إلى صحراء الربع الخالي والتي تعد أكبر صحراء رملية متواصلة
              في العالم حيث تحتل هذه الصحراء الجزء الجنوبي من البلاد وتحتل
              المنطقة الشرقية مساحة قدرها 77850 كم والتي تمثل 26% من مساحة
              المملكة.
            </Card.Text>
          </Card.Body>
        </Card>
        <h2 className="m-5">الأمان السياحية</h2>

        <CardGroup className="m-5">
          <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>صخرة الفيل</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>صخرة الفيل</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>المناطيد</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img5} />
            <Card.Body>
              <Card.Title>قاعة المرايا</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Details;
