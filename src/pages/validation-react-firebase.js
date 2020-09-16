import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ValidationFirebase from './../components/validationReactFirebase/ValidationFirebase';
import ValidationJsBasic from './../components/validationReactFirebase/ValidationJsBasic';
import ValidationJsAdvanced from './../components/validationReactFirebase/ValidationJsAdvanced';
import InputValidationGeneral from '../components/validationReactFirebase/InputValidationGeneral';
import ValidationReactFirebaseInputList from './../components/validationReactFirebase/ValidationReactFirebaseList';
import InputValidationKey from './../components/validationReactFirebase/InputValidationKey';
import { ContentFirebase } from '../context/ContentFirebaseContext';

const ValidationReactFirebase = () => {
  const {
    items,
    setItems,
    variable,
    setVariable,
    myKey,
    setMyKey,
    type,
    setType,
    rangeType,
    setRangeType,
    range,
    setRange,
    range2,
    setRange2,
    isRequired,
    setIsRequired,
    ownerSelector,
    setOwnerSelector,
    onlyOwnerGetAccess,
    setOnlyOwnerGetAccess,
    onlyOwnerGetAccessActions,
    setOnlyOwnerGetAccessActions,
    actions,
    setActions,
    collectionName,
    setCollectionName,
    hasRateLimit,
    setHasRateLimit,
    rateLimit,
    setRateLimit,
    hasAllKeys,
    setHasAllKeys,
    createdDateSelector,
    setCreatedDateSelector,
    rateLimitActions,
    setRateLimitActions,
  } = useContext(ContentFirebase);

  const handleAddItems = () => {
    const isKeyAlreadyExisting = items.some((e) => e.myKey === myKey);

    if (!isKeyAlreadyExisting) {
      if (myKey !== '') {
        if (type !== '') {
          setItems((prev) => [
            ...prev,
            {
              myKey,
              type,
              rangeType,
              range,
              range2,
              isRequired,
            },
          ]);
          clearInput();
        } else alert('Please add a Type.');
      } else alert('Please add a Key');
    } else alert('This key already exists');
  };

  const handleDelete = (item) => {
    setItems((prev) => prev.filter((e) => e.myKey !== item.myKey));
  };

  const clearInput = () => {
    setMyKey('');
    setType('');
    setRangeType('');
    setRange('');
    setRange2('');
    setIsRequired(false);
  };

  const handleActionsChange = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;

    setActions((prev) => {
      return prev.map((action) => {
        if (action.title !== name) {
          return action;
        }
        return { title: name, checked };
      });
    });
  };

  const handleRateLimitActionsChange = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;

    setRateLimitActions((prev) => {
      return prev.map((action) => {
        if (action.title !== name) {
          return action;
        }
        return { title: name, checked };
      });
    });
  };

  const handleOnlyOwnerGetAccessActionsChange = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;

    setOnlyOwnerGetAccessActions((prev) => {
      return prev.map((action) => {
        if (action.title !== name) {
          return action;
        }
        return { title: name, checked };
      });
    });
  };

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
          <InputValidationGeneral
            ownerSelector={ownerSelector}
            setOwnerSelector={setOwnerSelector}
            onlyOwnerGetAccess={onlyOwnerGetAccess}
            setOnlyOwnerGetAccess={setOnlyOwnerGetAccess}
            onlyOwnerGetAccessActions={onlyOwnerGetAccessActions}
            handleOnlyOwnerGetAccessActionsChange={
              handleOnlyOwnerGetAccessActionsChange
            }
            handleActionsChange={handleActionsChange}
            actions={actions}
            collectionName={collectionName}
            setCollectionName={setCollectionName}
            hasRateLimit={hasRateLimit}
            setHasRateLimit={setHasRateLimit}
            rateLimit={rateLimit}
            setRateLimit={setRateLimit}
            hasAllKeys={hasAllKeys}
            setHasAllKeys={setHasAllKeys}
            createdDateSelector={createdDateSelector}
            setCreatedDateSelector={setCreatedDateSelector}
            rateLimitActions={rateLimitActions}
            handleRateLimitActionsChange={handleRateLimitActionsChange}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <InputValidationKey
            variable={variable}
            setVariable={setVariable}
            myKey={myKey}
            setMyKey={setMyKey}
            type={type}
            setType={setType}
            rangeType={rangeType}
            setRangeType={setRangeType}
            range={range}
            setRange={setRange}
            range2={range2}
            setRange2={setRange2}
            isRequired={isRequired}
            setIsRequired={setIsRequired}
            handleAddItems={handleAddItems}
            clearInput={clearInput}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ValidationReactFirebaseInputList
            items={items}
            handleDelete={handleDelete}
          />
        </Grid>

        <Grid item xs={12}>
          <ValidationFirebase
            items={items}
            variable={variable}
            ownerSelector={ownerSelector}
            onlyOwnerGetAccess={onlyOwnerGetAccess}
            onlyOwnerGetAccessActions={onlyOwnerGetAccessActions}
            actions={actions}
            collectionName={collectionName}
            hasRateLimit={hasRateLimit}
            rateLimit={rateLimit}
            rateLimitActions={rateLimitActions}
            hasAllKeys={hasAllKeys}
            createdDateSelector={createdDateSelector}
          />
        </Grid>
        <Grid item xs={12}>
          <ValidationJsBasic items={items} variable={variable} />
        </Grid>
        <Grid item xs={12}>
          <ValidationJsAdvanced items={items} variable={variable} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ValidationReactFirebase;
