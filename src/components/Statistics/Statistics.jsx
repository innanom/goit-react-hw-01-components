import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomColor';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>Upload stats</h2>}

            <ul className={css.stat_list}>
                {stats.map(({ id, label, percentage }) =>
                    <li className={css.item}
                        key={id}
                        style={{ backgroundColor: getRandomHexColor() }}>
                        
                        <span className={css.label}>{label}x</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>)}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}

