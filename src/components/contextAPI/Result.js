import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import State from './State';
import Reducer from './Reducer';
import Context from './Context';
import { capitalize, makeConstantText } from './../../functions/textTransform';
import Paper02Copy from './../Paper02Copy';

const Result = ({ namePlural, nameSingular, uniqueSelector, actions }) => {
  const actionNameSingular = makeConstantText(nameSingular);
  const actionNamePlural = makeConstantText(namePlural);
  const capitalizedNamePlural = capitalize(namePlural);
  const capitalizedNameSingular = capitalize(nameSingular);

  const updatedItem = `updated${capitalizedNameSingular}`;
  const newItem = `new${capitalizedNameSingular}`;

  return (
    <Fragment>
      <Grid item xs={12}>
        <Paper02Copy title={`${capitalizedNamePlural}State.js`}>
          <State
            namePlural={namePlural}
            uniqueSelector={uniqueSelector}
            actions={actions}
            actionNameSingular={actionNameSingular}
            actionNamePlural={actionNamePlural}
            capitalizedNamePlural={capitalizedNamePlural}
            capitalizedNameSingular={capitalizedNameSingular}
            updatedItem={updatedItem}
            newItem={newItem}
          />
        </Paper02Copy>
      </Grid>
      <Grid item xs={12}>
        <Paper02Copy title={`${namePlural}Reducer.js`}>
          <Reducer
            namePlural={namePlural}
            uniqueSelector={uniqueSelector}
            actions={actions}
            actionNameSingular={actionNameSingular}
            actionNamePlural={actionNamePlural}
          />
        </Paper02Copy>
      </Grid>
      <Grid item xs={12}>
        <Paper02Copy title={`${namePlural}Context.js`}>
          <Context namePlural={namePlural} />
        </Paper02Copy>
      </Grid>
    </Fragment>
  );
};

export default Result;
