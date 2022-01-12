import Button from '../components/Button';
import './Activity.css';

const Activity = ({ activity, getData, isLoading }) => {
  const returnPercentageAccessibility = accessibility => Math.round((1 - accessibility) * 100);
  const accessibility = returnPercentageAccessibility(activity.accessibility);

  if (isLoading) {
    return (
      <main className="main-content--activity-page">
        <div className="loading-card"> <h1>Loading activity, please wait</h1></div>
      </main>
    );
  }

  return (
    <main className="main-content--activity-page">
      <h1 className="header__activity">Activity Generator</h1>
        {activity.error ? <div className="error-card"> <h1>Sorry, Couldn't get your activity. Please try again</h1></div>
          : <section className="activity-card">
            <article className="activity-card__header">
            <h2 className="activity-card__heading">{activity.activity}</h2>
                <p className="card__info__type">
                  Type: {activity.type}
                </p>
            </article>
              <article className="activity-card__info">
                 <div className="card__info">
                   <p className="card__info--circle">
                    {accessibility}%
                   </p>
                   <p className="card__info__text"> Possibility to do</p>
                 </div>
              <div className="card__info">
                {activity.price === 0 && <p className="card__info--circle">
                Free</p> }
               {activity.price > 0 && activity.price <= 0.33 && <p className="card__info--circle">
                $</p> }
                {activity.price >= 0.34 && activity.price <= 0.66 && <p className="card__info--circle">
                $</p> }
                {activity.price >= 0.64 && <p className="card__info--circle">
                $$$</p> }
               <p className="card__info__text"> Price range (free-$$$)</p>
              </div>
              <div className="card__info">
                <p className="card__info--circle">
                  {activity.participants}
                </p>
                <p className="card__info__text"> Participants</p>
              </div>
            </article>
          </section>}
      <section className="input-container">
       <Button getData={getData}/>
      </section>
    </main>
  );
};

export default Activity;
