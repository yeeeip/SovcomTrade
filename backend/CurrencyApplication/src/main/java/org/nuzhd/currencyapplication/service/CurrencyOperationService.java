package org.nuzhd.currencyapplication.service;

import org.nuzhd.currencyapplication.dto.CurrencyOperationCreateDTO;
import org.nuzhd.currencyapplication.dto.CurrencyOperationResponseDTO;
import org.nuzhd.currencyapplication.model.CurrencyOperation;
import org.nuzhd.currencyapplication.security.user.AppUser;

import java.util.List;

public interface CurrencyOperationService {

    CurrencyOperation requestOperation(CurrencyOperationCreateDTO createDTO, AppUser appUser);

    List<CurrencyOperationResponseDTO> findAllByUser(AppUser user);
}
