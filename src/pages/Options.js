import React, { useContext } from 'react';
import Layout from './Layout';
import { ThemeContext } from './../context/ThemeContext';
import './Options.css';
import { useTranslation } from 'react-i18next';

const Options = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <div className='options'>
        <h1>{t('options.title')}</h1>
        <h2>{t('options.themes')}</h2>
        <p>
          <label htmlFor='themes'>{t('options.themes')} : </label>
          <select
            id='themes'
            value={state.currentTheme.name}
            onChange={(event) => dispatch({ type: event.target.value })}
          >
            <option key='clear' value='clear'>
              {t('options.clear')}
            </option>
            <option key='dark' value='dark'>
              {t('options.dark')}
            </option>
          </select>
        </p>
        <h2>{t('options.languages')}</h2>
        <button onClick={() => i18n.changeLanguage('fr')}>
          {t('options.french')}
        </button>
        <button onClick={() => i18n.changeLanguage('en')}>
          {t('options.english')}
        </button>
      </div>
    </Layout>
  );
};

export default Options;
