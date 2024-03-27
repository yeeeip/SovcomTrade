package org.nuzhd.currencyapplication.repo;

import org.nuzhd.currencyapplication.model.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BankAccountRepository extends JpaRepository<BankAccount, Long> {

    List<BankAccount> findAllByOwnerId(Long ownerId);

}
