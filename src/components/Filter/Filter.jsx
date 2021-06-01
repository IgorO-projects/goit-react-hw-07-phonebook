import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Filter.module.css';
import { filteredContact } from '../../redux/actions/phonebook-actions';
import { getFilter } from '../../redux/actions/phonebook-selectors';

const Filter = ({ filter, onChangeFilter }) => {
    return (
        <form>
          <label>
            <input
            className={styles.input}
            type="text"
            name="filter"
            value={filter}
            onChange={onChangeFilter}
            placeholder="Find person"
            />
          </label>
        </form>
    )
}

Filter.propTypes = { 
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  filter: getFilter(state),
})

const mapDispatchToProps = dispatch => ({
  onChangeFilter: event => dispatch(filteredContact(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
