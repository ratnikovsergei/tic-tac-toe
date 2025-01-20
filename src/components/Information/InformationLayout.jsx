import './Information.css';

export const InformationLayout = ({ infoText }) => {
  return (
    <div className="information">
      <h2>{infoText}</h2>
    </div>
  );
};
