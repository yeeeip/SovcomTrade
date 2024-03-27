package org.nuzhd.currencyapplication.service;

import org.nuzhd.currencyapplication.dto.CurrencyOperationCreateDTO;
import org.nuzhd.currencyapplication.model.CurrencyOperation;
import org.nuzhd.currencyapplication.security.user.AppUser;

public interface CurrencyOperationService {

    CurrencyOperation requestOperation(CurrencyOperationCreateDTO createDTO, AppUser appUser);

}
