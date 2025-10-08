import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const ViewAllBtn = ({ text = "View All" }) => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;900&display=swap');

      .var-font-group {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        cursor: pointer;
        weidth: auto;
        margin: 0px 10px;
        text-align: center;
      }

      .var-font {
        font-family: 'Inter', sans-serif;
        font-variation-settings: 'wght' 500;
        transition: font-variation-settings 0.6s ease-out;
        display: inline-block;
        width: 100%;
      }

      .var-font-group:hover .var-font,
      .var-font-group:focus .var-font {
        font-variation-settings: 'wght' 900;
      }

      .icon-orange {
        font-size: 1.5rem;
        padding: 0 1rem;
        transform: translateY(-0.2rem);
      }

    `}</style>

    <span className="var-font-group">
      <FaAngleDoubleLeft style={{ color: "orange", fontSize: "30px" }} />
      <span className="var-font">{text}</span>
      <FaAngleDoubleRight style={{ color: "orange", fontSize: "30px" }} />
    </span>
  </>
);

export default ViewAllBtn;
