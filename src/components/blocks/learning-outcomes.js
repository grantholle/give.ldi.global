import React from "react"
import Purpose from "../../images/learning-outcomes/purpose.svg"
import Curiosity from "../../images/learning-outcomes/curiosity.svg"
import Discernment from "../../images/learning-outcomes/discernment.svg"
import Connection from "../../images/learning-outcomes/connection.svg"
import Compassion from "../../images/learning-outcomes/compassion.svg"
import Courage from "../../images/learning-outcomes/courage.svg"
import Humility from "../../images/learning-outcomes/humility.svg"
import Service from "../../images/learning-outcomes/service.svg"
import Persistence from "../../images/learning-outcomes/persistence.svg"

const outcomes = {
  purpose: {
    svg: Purpose,
    header: `Purpose`,
    content: `<ul><li>I treat myself and every person with intrinsic value and purpose.</li>
      <li>I strategically use the gifts and talents that I have to accomplish bigger purposes.</li>
      <li>I look for deeper meaning and explanations and I am not content with appearances or easy answers</li>
    </ul>`
  },
  curiosity: {
    svg: Curiosity,
    header: `Curiosity`,
    content: `<ul><li>I investigate and explore by asking questions and critically thinking about the answers.</li>
      <li>I am eager for authentic knowledge, wisdom, and understanding.</li>
      <li>I refuse to let others do my thinking for me or cheat myself out of learning opportunities.</li>
    </ul>`
  },
  discernment: {
    svg: Discernment,
    header: `Discernment`,
    content: `<ul><li>I can see and understand people, things, or situations clearly.</li>
      <li>I use knowledge to make wise choices and judgments, speak the truth, and live with integrity.</li>
    </ul>`
  },
  connection: {
    svg: Connection,
    header: `Connection`,
    content: `<ul><li>I value people, and so I invest in communication, language learning, and understanding the cultures in which I live.</li>
      <li>I collaborate effectively and respectfully with people from any culture.</li>
      <li>I build and maintain healthy relationships with others in my lives.</li>
    </ul>`
  },
  compassion: {
    svg: Compassion,
    header: `Compassion`,
    content: `<ul><li>I show empathy for others and look for ways to make a difference.</li>
      <li>I listen carefully and think deeply to determine the best response or action.</li>
      <li>I know how to speak perceptively about what I believe.</li>
    </ul>`
  },
  courage: {
    svg: Courage,
    header: `Courage`,
    content: `<ul><li>I take risks and boldly do what is best.</li>
      <li>I am willing to ask questions and make mistakes.</li>
      <li>I persist in thinking, inquiring, and discussing even in the presence of threat or fear.</li>
    </ul>`
  },
  humility: {
    svg: Humility,
    header: `Humility`,
    content: `<ul><li>I have an accurate picture of my abilities, thinking neither too highly or too lowly of myself.</li>
      <li>I acknowledge my limitations and my need for help, as well as accept criticism and demonstrate a teachable spirit.</li>
      <li>I demonstrate good sportsmanship.</li>
    </ul>`
  },
  service: {
    svg: Service,
    header: `Service`,
    content: `<ul><li>I make available my gifts, talents, time, energy, and enthusiasm to serve the needs of those around me.</li>
      <li>I show love towards the world around me by being a responsible caretaker of our resources.</li>
    </ul>`
  },
  persistence: {
    svg: Persistence,
    header: `Persistence`,
    content: `<ul><li>I strive for excellence and practice diligence to get things right; I don’t give up.</li>
      <li>I respectfully communicate until I am understood and question until I understand.</li>
      <li>I approach challenges with tenacity, creativity and thinking.</li>
    </ul>`
  },
}

export default ({ data }) => {
  const displayOutcomes = () => Object.keys(outcomes).map(key => {
    const outcome = outcomes[key]
    const Svg = outcome.svg

    return (
      <div key={key} className="w-full sm:w-1/2 lg:w-1/3 mb-8">
        <div className="px-4 h-full">
          <div className="outcome">
            <div className="flex flex-col justify-between">
              <div className="outcome-icon">
                <Svg />
              </div>

              <div className="outcome-title">
                {outcome.header}
              </div>
            </div>

            <div className="outcome-content">
              <div
                className=""
                dangerouslySetInnerHTML={{
                  __html: outcome.content
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="bg-gray-400">
      <div
        className="w-full mx-auto px-8"
        style={{
          maxWidth: `1280px`
        }}
      >
        <h2 className="text-center">iSC Learning Outcomes</h2>
        <p className="text-xl text-center">In practice, every student learns, loves and leads with...</p>
        <div className="flex flex-wrap items-stretch justify-center -mx-4">
          {displayOutcomes()}
        </div>
      </div>
    </div>
  )
}